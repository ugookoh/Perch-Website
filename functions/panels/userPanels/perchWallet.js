import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors, storeCard, deleteCard, buyKilometers, } from '../../functions';
import styles from '../panel_layout.module.css';
import firebase from 'firebase';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import {
    CardElement,
    Elements,
    useElements,
    useStripe
} from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_RjADdW2vGwFAgOOk7ws1juNB002JV727O8');

export default class PerchWallet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buyKilometers: false,
            addCard: false,
            userDetails: this.props.userDetails,
            quantity: 0,
            cards: [],
            selected: null,

            index: 0,

            name: '',
            cardNumber: '',
            expiryDate: '',
            ccv: '',
            errorMessage: '',

            loading: false,

            rate: 0,
            kms: '',
            cost: 0,

            paymentLoading: false,

        };
    };
    componentDidMount() {
        const { userID } = this.state.userDetails;
        firebase.database().ref(`perchKilometers/${userID}/quantity`).on('value', snapshot => {
            if (!!snapshot)
                this.setState({ quantity: snapshot.val() });
        });
        firebase.database().ref(`costPerPerchKM`).on('value', snapshot => {
            this.setState({ rate: snapshot.val() });
        });
        this.loadCards();
    };
    loadCards = () => {
        const { userID } = this.state.userDetails;
        firebase.database().ref(`cards/${userID}`).once('value', snapshot => {
            if (!!snapshot) {
                let arrayOfLast4 = [], i = 0;
                for (let key in snapshot.val()) {
                    if (key != 'selected')
                        arrayOfLast4[i] = {
                            last4: snapshot.val()[key].card.last4,
                            brand: snapshot.val()[key].card.brand,
                            cardId: snapshot.val()[key].card.cardId,
                        };
                    else if (key == 'selected')
                        this.setState({ selected: snapshot.val()[key] })
                    i++;
                }
                this.setState({ cards: arrayOfLast4 });
            };
        });
    };
    setSelected = (value) => {
        const { userID } = this.state.userDetails;
        firebase.database().ref(`cards/${userID}`).update({
            selected: value
        }).then(() => {
            this.setState({ selected: value })
        }).catch(error => { this.setState({ errorMessage: error.message }) })
    }
    removeCard = (index) => {
        let { cards } = this.state;
        cards.splice(index, 1);
        this.setState({ cards: cards })
    };
    render() {
        let cards = [];
        for (let i = 0; i < this.state.cards.length; i++)
            cards.push(
                <PaymentCard
                    userID={this.state.userDetails.userID}
                    key={this.state.cards[i].last4}
                    card={this.state.cards[i]}
                    index={i}
                    removeCard={this.removeCard}
                    setSelected={this.setSelected}
                    selectedCard={this.state.selected}
                    selected={this.state.selected === this.state.cards[i].last4}
                    type={this.state.buyKilometers ? 'pickPayment' : 'listOfCards'} />
            );
        return (
            <Elements stripe={stripePromise}>
                <div className={styles.cont}>
                    {this.state.buyKilometers ?//buy kilometers
                        (
                            this.state.paymentLoading ?
                                <>
                                    <ProcessPayment
                                        goBack={() => {
                                            this.setState({
                                                buyKilometers: false,
                                                addCard: false,
                                                kms: '',
                                                errorMessage: '',
                                                paymentLoading: false,
                                            })
                                        }}
                                        toSend={{
                                            cardId: this.state.cards[this.state.index].cardId,
                                            customerID: this.state.userDetails.stripeCustomerID,
                                            quantity: Number(this.state.kms),
                                            userID: this.state.userDetails.userID,
                                            timestamp: new Date().getTime(),
                                            isAutomatic: true,
                                        }}
                                    />
                                </> :
                                <>
                                    <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                                        <p className={styles.title} style={{ color: colors.BLACK }}>Enter the amount of kilometers you would like to purchase</p>
                                        <input
                                            type="text"
                                            placeholder="Enter amount of kilometers"
                                            value={this.state.kms}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                if (value.length <= 3) {
                                                    const cost = Number(value) * this.state.rate;
                                                    this.setState({ kms: value, cost: cost });
                                                }
                                            }}
                                            className={styles.inputPaymentPanel} />
                                        <div className={styles.enterKilometerDiv} style={{ marginTop: '20px' }}>
                                            <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', color: colors.GREY }} className={styles.text}>Cost per kilometer</p>
                                            <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', }} className={styles.text}>{`$ ${this.state.rate?.toFixed(2)}`}</p>
                                        </div>
                                        {/* <div className={styles.enterKilometerDiv}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', color: colors.GREY }} className={styles.text}>Total cost of kilometers</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', }} className={styles.text}>{`$ ${this.state.cost?.toFixed(2)}`}</p>
                                </div>
                                 <div className={styles.enterKilometerDiv}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', color: colors.GREY }} className={styles.text}>Taxes</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', }} className={styles.text}>{`$ 1.99`}</p>
                                </div> */}
                                        <div className={styles.sharedLine} style={{ marginTop: '20px', width: '90%' }}></div>
                                        <div className={styles.enterKilometerDiv}>
                                            <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Bold', fontSize: '120%' }} className={styles.text}>Total</p>
                                            <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Bold', color: colors.GREEN, fontSize: '120%' }} className={styles.text}>{`$ ${this.state.cost?.toFixed(2)}`}</p>
                                        </div>

                                    </div>

                                    <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', }}>
                                        <p className={styles.title} style={{ color: colors.BLACK }}>
                                            Payment Methods
                                        </p>
                                        <p className={styles.text} style={{ color: colors.GREY, marginBottom: '20px' }}>
                                            List of available payment methods. New payment methods can also be added.
                                        </p>

                                        <div className={styles.paymentCont}>
                                            <div className={styles.paymentItem}>
                                                {cards}
                                                {/* <div className={styles.paymentRow} id={styles.addCardPayment}>
                                                    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                                                        <img src="/PayPalLogo.svg" alt="Perch Payment" className={styles.visaIcon} style={{ marginRight: '15px', marginLeft: '0px' }} />
                                                        <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>PayPal</p>
                                                    </div>
                                                    <AiOutlineRight color={colors.BLACK} />
                                                </div>
                                                <div className={styles.sharedLine} style={{ marginTop: '0px', width: '100%' }}></div> */}
                                                <div className={styles.paymentRow} id={styles.addCardPayment} onClick={() => { this.setState({ addCard: true, buyKilometers: false, errorMessage: '' }) }}>
                                                    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                                                        <img src="/addPaymentCardIcon.svg" alt="Perch Payment" className={styles.visaIcon} style={{ marginRight: '15px' }} />
                                                        <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>Add Debit / Credit Card</p>
                                                    </div>
                                                    <AiOutlineRight color={colors.BLACK} />
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.errorMessage && <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>}
                                    </div>

                                    <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                                        <div className={styles.button2} style={{ backgroundColor: colors.RED }} id={styles.buttonBottom}
                                            onClick={() => { this.setState({ buyKilometers: false, addCard: false, errorMessage: '' }) }}>
                                            <p className={styles.buttonText1}>Cancel</p>
                                        </div>
                                        <div
                                            onClick={() => {
                                                if (this.state.kms < 20)
                                                    this.setState({ errorMessage: 'You can get a minimum of 20 kilometers' })
                                                else if (this.state.kms > 100)
                                                    this.setState({ errorMessage: 'You can get a maximum of 100 kilometers' })
                                                else if (this.state.selected) {
                                                    for (let i = 0; i < this.state.cards.length; i++)
                                                        if (this.state.selected === this.state.cards[i].last4)
                                                            this.setState({ index: i, paymentLoading: true })
                                                    // buyKilometers.call(this, {
                                                    //     cardId: this.state.cards[i].cardId,
                                                    //     customerID: this.state.userDetails.stripeCustomerID,
                                                    //     quantity: Number(this.state.kms),
                                                    //     userID: this.state.userDetails.userID,
                                                    //     timestamp: new Date().getTime(),
                                                    // })
                                                }
                                                else
                                                    this.setState({ errorMessage: 'Please select or add a payment method' })
                                            }}
                                            className={styles.button2}
                                            style={{ backgroundColor: colors.GREEN }}
                                            id={styles.buttonBottom}>
                                            <p className={styles.buttonText1}>Buy Kilometers</p>
                                        </div>
                                    </div>
                                </>) :
                        this.state.addCard ?//add card
                            <>
                                <AddCardForm
                                    userID={this.state.userDetails.userID}
                                    cancel={() => {
                                        this.loadCards();
                                        this.setState({ errorMessage: '', addCard: false, buyKilometers: false, })
                                    }}
                                />
                            </>
                            ://main page
                            <>
                                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                                    <p className={styles.title} style={{ color: colors.BLACK }}>Kilometers</p>
                                    <p className={styles.text} style={{ color: colors.GREY }}>
                                        You can make kilometer purchases from this panel. Also remember that sharing your code with friends who book their first ride automatically gives you free kilometers.
                                    </p>
                                    <img src="/walletImage.svg" alt="Purchase Perch Kilometers" className={styles.walletImage} />
                                    <p className={styles.title} style={{ width: 'initial', marginTop: '20px' }}>{`${this.state.quantity.toFixed(1)} kilometers`}</p>
                                    <div className={styles.button1} style={{}} onClick={() => { this.setState({ buyKilometers: true, addCard: false, errorMessage: '' }) }}>
                                        <p className={styles.buttonText1}>Buy kilometers</p>
                                    </div>
                                </div>

                                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', marginBottom: '150px' }}>
                                    <p className={styles.title} style={{ color: colors.BLACK }}>
                                        Payment Methods
                                    </p>
                                    <p className={styles.text} style={{ color: colors.GREY, marginBottom: '20px' }}>
                                        List of available payment methods. New payment methods can also be added.
                                    </p>

                                    <div className={styles.paymentCont}>
                                        <div className={styles.paymentItem}>
                                            {cards}
                                            <div className={styles.paymentRow} id={styles.addCardPayment} onClick={() => { this.setState({ addCard: true, buyKilometers: false, errorMessage: '' }) }}>
                                                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                                                    <img src="/addPaymentCardIcon.svg" alt="Perch Payment" className={styles.visaIcon} style={{ marginRight: '15px' }} />
                                                    <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>Add Debit / Credit Card</p>
                                                </div>
                                                <AiOutlineRight color={colors.BLACK} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                    }
                </div >
            </Elements>
        )

    }
};
class PaymentCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            deleteCard: false,
            loading: false,
        }
    }
    render() {
        const { selected, setSelected, card, userID, removeCard, index, selectedCard } = this.props;
        const { last4, brand } = card;
        if (this.props.type == 'listOfCards')
            return (
                <>
                    <div className={styles.paymentRow} id={styles.paymentRow_}>
                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                            <img
                                src={brand == 'Visa' ? "/visaIcon.svg" : brand == 'Mastercard' ? '/mastercardIcon.svg' : '/addPaymentCardIcon.svg'} alt="Perch Payment"
                                className={brand == 'Visa' ? styles.visaIcon : brand == 'Mastercard' ? styles.masterCardIcon : styles.genericCard} />
                            <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>XXXX XXXX XXXX {last4}</p>
                        </div>
                        <div id={styles.paymentRowButton}>
                            {
                                this.state.deleteCard ?
                                    <>
                                        <div className={styles.button2} style={{ backgroundColor: colors.RED, width: '80%' }}
                                            onClick={() => {
                                                deleteCard.call(this, userID, last4, selectedCard);
                                                removeCard(index);
                                            }}
                                        >
                                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>Delete this card?</p>
                                        </div>
                                        <AiOutlineClose className={styles.closeDeletePayment} onClick={() => { this.setState({ deleteCard: false }) }} />
                                    </> :
                                    <>
                                        <div
                                            className={selected ? styles.buttonSelected : styles.button2}
                                            style={{ backgroundColor: colors.GREEN }}
                                            onClick={() => {
                                                setSelected(last4)
                                            }}>
                                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>{selected ? 'Selected' : 'Select card'}</p>
                                        </div>
                                        <div className={styles.button2} style={{ backgroundColor: colors.RED }} onClick={() => { this.setState({ deleteCard: true }) }}>
                                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>Delete Card</p>
                                        </div>
                                    </>}
                        </div>
                    </div>
                    <div className={styles.sharedLine} style={{ marginTop: '20px', width: '100%' }}></div>
                </>
            );
        else if (this.props.type == 'pickPayment')
            return (//TO MAKE A SELECTED ONE, THE PARENT COMPONENT SHOULD HAVE A SELECTED ITEM ID AND WE COMPARE ID HERE TO SHOW IF IT IS CONFIRMED OR NOT
                <>
                    <div className={styles.paymentRow} id={styles.addCardPayment_} >
                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                            <img
                                src={brand == 'Visa' ? "/visaIcon.svg" : brand == 'Mastercard' ? '/mastercardIcon.svg' : '/addPaymentCardIcon.svg'} alt="Perch Payment"
                                className={brand == 'Visa' ? styles.visaIcon : brand == 'Mastercard' ? styles.masterCardIcon : styles.genericCard} />
                            <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>•••• {last4}</p>
                        </div>
                        <div className={styles.pickPaymentSelected}
                            id={selected ? styles.selectedID : styles.selectID}
                            style={{ backgroundColor: colors.GREEN, }}
                            onClick={() => {
                                setSelected(last4)
                            }}>
                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>{selected ? 'Selected' : 'Select'}</p>
                        </div>
                    </div>
                    <div className={styles.sharedLine} style={{ marginTop: '0px', width: '100%' }}></div>
                </>
            );
    }
};
const AddCardForm = ({ cancel, userID }) => {
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const createTokenWithCard = async () => {
        setLoading(true);
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        };

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
        // Use your card Element with other Stripe.js APIs
        const { error, token } = await stripe.createToken(cardElement);

        if (error) {
            setErrorMessage(error.message);
            setLoading(false);
        } else {
            storeCard.call(this, userID, token, setLoading, setErrorMessage, cancel);
        }
    };
    return (
        <>
            <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                <p className={styles.title} style={{ color: colors.BLACK }}>Add card</p>
                <input type="text"
                    placeholder="Name on Card"
                    className={styles.inputPaymentPanel}
                    id={styles.inputPaymentPanel_ADD}
                    style={{ marginTop: '10px' }}
                    value={name}
                    onChange={(e) => {
                        const value = e.target.value;
                        setName(value);
                    }}
                />
                <div className={styles.inputPaymentPanel}>
                    <CardElement
                        options={{
                            hidePostalCode: true,
                            style: {
                                base: {
                                    color: '#303238',
                                    fontSize: '16px',
                                    fontFamily: '"Gill Sans", sans-serif',
                                    fontSmoothing: 'antialiased',
                                    '::placeholder': {
                                        color: '#757575',
                                    },
                                },
                                invalid: {
                                    color: '#e5424d',
                                    ':focus': {
                                        color: '#303238',
                                    },
                                },
                            }
                        }}
                    />
                </div>

                {errorMessage && <p className={styles.em} style={{ textAlign: 'initial' }}>{errorMessage}</p>}
            </div>
            <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                <div className={styles.button2} style={{ backgroundColor: colors.RED }} id={styles.buttonBottom}
                    onClick={cancel}>
                    <p className={styles.buttonText1}>Cancel</p>
                </div>
                <div
                    className={styles.button2}
                    style={{ backgroundColor: colors.GREEN }}
                    id={styles.buttonBottom}
                    onClick={() => {
                        if (name.length <= 3)
                            setErrorMessage('Please enter the full name on the card');
                        else
                            createTokenWithCard();
                    }}>
                    {loading ?
                        <Loader
                            type="TailSpin"
                            color={colors.WHITE}
                            height={'20px'}
                            width={'20px'}
                        /> :
                        <p className={styles.buttonText1}>Add Card</p>}
                </div>
            </div>
        </>
    )
}
const ProcessPayment = ({ goBack, toSend }) => {
    const [paymentError, setPaymentError] = useState(false);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [paymentErrorMessage, setPaymentErrorMessage] = useState('');
    const stripe = useStripe();
    //const elements = useElements();

    const startPayment = async () => {
        if (!stripe) return;

        axios.post(`https://us-central1-perch-01.cloudfunctions.net/buyPerchKilometers`, { ...toSend, status: 'initial' })
            .then(result => {
                const { status, client_secret, id } = result.data;
                toSend.paymentIntentId = id;
                toSend.status = 'confirm_payment';

                if (status == 'succeeded') {
                    setPaymentCompleted(true)
                }
                else if (status == 'requires_action') {
                    stripe.confirmCardPayment(client_secret)
                        .then(data => {
                            if (data.paymentIntent.status == 'succeeded') {
                                axios.post(`https://us-central1-perch-01.cloudfunctions.net/buyPerchKilometers`, { ...toSend, nativePayType: 'Debit/Credit Card from website', paymentIntentId: id, status: 'payment_completed_on_client' })
                                    .then(() => {
                                        setPaymentCompleted(true);
                                    })
                                    .catch(error => {
                                        setPaymentError(true);
                                        setPaymentErrorMessage(error.message);
                                    })
                            }
                        }).catch(error => {
                            setPaymentError(true);
                            setPaymentErrorMessage(error.message);
                        })
                }
            })
            .catch(error => {
                setPaymentError(true);
                setPaymentErrorMessage(error.message);
            });

    };
    useEffect(() => {
        startPayment();
    }, []);
    return (
        <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
            {!paymentCompleted && !paymentError && <Loader
                type="TailSpin"
                color={colors.GREEN}
                height={'100px'}
                width={'100px'}
                style={{ marginTop: 25 }}
            />}
            <p className={styles.title}
                style={{ color: colors.GREY, width: 'initial', marginTop: 20, marginBottom: 30, paddingRight: 15, paddingLeft: 15, textAlign: 'center' }}>
                {paymentCompleted ?
                    `Your payment has been processed. Thank you.` :
                    paymentError ?
                        `Your payment failed. Please contact your bank or try again later` :
                        `Your payment is currently processing. Please wait.`}
            </p>
            {(paymentCompleted || paymentError) && < div
                className={styles.button1}
                style={{ marginTop: 0 }}
                onClick={goBack}>
                <p className={styles.buttonText1}>Go back</p>
            </div>}
        </div >
    )
};