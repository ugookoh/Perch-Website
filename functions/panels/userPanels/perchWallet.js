import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../../functions';
import styles from '../panel_layout.module.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_RjADdW2vGwFAgOOk7ws1juNB002JV727O8');


export default class PerchWallet extends React.Component {
    constructor() {
        super();

        this.state = {
            buyKilometers: false,
            addCard: false,
        };
    };
    componentDidMount() {
    };
    render() {
        let cards = [];
        for (let i = 0; i < 2; i++)
            cards.push(
                <PaymentCard type={this.state.buyKilometers ? 'pickPayment' : 'listOfCards'} />
            );
        return (
            <div className={styles.cont}>
                {
                    this.state.buyKilometers ?//buy kilometers
                        <>
                            <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                                <p className={styles.title} style={{ color: colors.BLACK }}>Enter the amount of kilometers you would like to purchase</p>
                                <input type="text" placeholder="Enter amount of kilometers" className={styles.inputPaymentPanel} />
                                <div className={styles.enterKilometerDiv} style={{ marginTop: '20px' }}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', color: colors.GREY }} className={styles.text}>Cost per kilometer</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', }} className={styles.text}>{`$ 12.99`}</p>
                                </div>
                                <div className={styles.enterKilometerDiv}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', color: colors.GREY }} className={styles.text}>Total cost of kilometers</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', }} className={styles.text}>{`$ 12.99`}</p>
                                </div>
                                <div className={styles.enterKilometerDiv}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', color: colors.GREY }} className={styles.text}>Taxes</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', }} className={styles.text}>{`$ 1.99`}</p>
                                </div>
                                <div className={styles.sharedLine} style={{ marginTop: '20px', width: '90%' }}></div>
                                <div className={styles.enterKilometerDiv}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Bold', fontSize: '120%' }} className={styles.text}>Total</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Bold', color: colors.GREEN, fontSize: '120%' }} className={styles.text}>{`$ 12.99`}</p>
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
                                        <div className={styles.paymentRow} id={styles.addCardPayment}>
                                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                                                <img src="/PayPalLogo.svg" alt="Perch Payment" className={styles.visaIcon} style={{ marginRight: '15px', marginLeft: '0px' }} />
                                                <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>PayPal</p>
                                            </div>
                                            <AiOutlineRight color={colors.BLACK} />
                                        </div>
                                        <div className={styles.sharedLine} style={{ marginTop: '0px', width: '100%' }}></div>
                                        <div className={styles.paymentRow} id={styles.addCardPayment} onClick={() => { this.setState({ addCard: true, buyKilometers: false }) }}>
                                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                                                <img src="/addPaymentCardIcon.svg" alt="Perch Payment" className={styles.visaIcon} style={{ marginRight: '15px' }} />
                                                <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>Add Debit / Credit Card</p>
                                            </div>
                                            <AiOutlineRight color={colors.BLACK} />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                                <div className={styles.button2} style={{ backgroundColor: colors.RED }} id={styles.buttonBottom} onClick={() => { this.setState({ buyKilometers: false, addCard: false }) }}>
                                    <p className={styles.buttonText1}>Cancel</p>
                                </div>
                                <div className={styles.button2} style={{ backgroundColor: colors.GREEN }} id={styles.buttonBottom}>
                                    <p className={styles.buttonText1}>Buy Kilometers</p>
                                </div>
                            </div>
                        </> :
                        this.state.addCard ?//add card
                            <>
                                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                                    <p className={styles.title} style={{ color: colors.BLACK }}>Add card</p>
                                    <input type="text" placeholder="Name on Card" className={styles.inputPaymentPanel} id={styles.inputPaymentPanel_ADD} style={{ marginTop: '10px' }} />
                                    <input type="text" placeholder="Card Number" className={styles.inputPaymentPanel} id={styles.inputPaymentPanel_ADD} style={{ marginTop: '10px' }} />
                                    <div className={styles.enterKilometerDiv} style={{ marginTop: '10px', marginBottom: '10px' }}>
                                        <input type="text" placeholder={"Expiry Date (MM/YYYY)"} className={styles.inputPaymentPanel} style={{ width: '70%', margin: '0px' }} id={styles.inputPaymentPanel_ADD} />
                                        <input type="text" placeholder="CVV" className={styles.inputPaymentPanel} style={{ width: '28%', margin: '0px' }} id={styles.inputPaymentPanel_ADD} />
                                    </div>
                                </div>
                                <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                                    <div className={styles.button2} style={{ backgroundColor: colors.RED }} id={styles.buttonBottom} onClick={() => { this.setState({ buyKilometers: false, addCard: false }) }}>
                                        <p className={styles.buttonText1}>Cancel</p>
                                    </div>
                                    <div className={styles.button2} style={{ backgroundColor: colors.GREEN }} id={styles.buttonBottom}>
                                        <p className={styles.buttonText1}>Add Card</p>
                                    </div>
                                </div>

                            </> ://main page
                            <>
                                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                                    <p className={styles.title} style={{ color: colors.BLACK }}>Kilometers</p>
                                    <p className={styles.text} style={{ color: colors.GREY }}>
                                        You can make kilometer purchases from this panel. Also remeber that sharing your code with friends who book their first ride automatically gives you free kilometers.
                                    </p>
                                    <img src="/walletImage.svg" alt="Purchase Perch Kilometers" className={styles.walletImage} />
                                    <p className={styles.title} style={{ width: 'initial', marginTop: '20px' }}>{`${28.8} kilometers`}</p>
                                    <div className={styles.button1} style={{}} onClick={() => { this.setState({ buyKilometers: true, addCard: false }) }}>
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
                                            <div className={styles.paymentRow} id={styles.addCardPayment} onClick={() => { this.setState({ addCard: true, buyKilometers: false }) }}>
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
        )

    }
};

class PaymentCard extends React.Component {
    constructor() {
        super();

        this.state = {
            deleteCard: false,
        }
    }
    render() {
        if (this.props.type == 'listOfCards')
            return (

                <>
                    <div className={styles.paymentRow} id={styles.paymentRow_}>
                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                            <img src="/visaIcon.svg" alt="Perch Payment" className={styles.visaIcon} />
                            <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>XXXX XXXX XXXX 3456</p>
                        </div>
                        <div id={styles.paymentRowButton}>
                            {
                                this.state.deleteCard ?
                                    <>
                                        <div className={styles.button2} style={{ backgroundColor: colors.RED, width: '80%' }}>
                                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>Delete this card?</p>
                                        </div>
                                        <AiOutlineClose className={styles.closeDeletePayment} onClick={() => { this.setState({ deleteCard: false }) }} />
                                    </> :
                                    <>
                                        <div className={styles.button2} style={{}}>
                                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>Edit Card</p>
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
                    <div className={styles.paymentRow} id={styles.addCardPayment} >
                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                            <img src="/visaIcon.svg" alt="Perch Payment" className={styles.visaIcon} />
                            <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>•••• 3456</p>
                        </div>
                        <div className={styles.pickPaymentSelected} style={{ backgroundColor: colors.GREEN, opacity: 0.6 }} onClick={() => { this.setState({ deleteCard: true }) }}>
                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>Selected</p>
                        </div>
                    </div>
                    <div className={styles.sharedLine} style={{ marginTop: '0px', width: '100%' }}></div>
                </>
            );
    }
};