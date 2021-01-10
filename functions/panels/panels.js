import Head from 'next/head';
import styles from './panel_layout.module.css';
import React from 'react';
import Router from 'next/router';
import { MdContentCopy } from 'react-icons/md';
import { BiStopCircle, } from 'react-icons/bi';
import { BsClockHistory, BsCloudUpload, BsDot } from 'react-icons/bs';
import { AiOutlineRight, AiOutlineClose, AiFillStar, AiOutlineCamera, AiOutlineCheck } from 'react-icons/ai';
import { RiShieldCheckFill } from 'react-icons/ri';
import { VscCalendar } from 'react-icons/vsc';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CgAdd } from 'react-icons/cg';
import { GiClick } from 'react-icons/gi';
import Loader from 'react-loader-spinner';
import DatePicker from "react-datepicker";
import firebase from 'firebase';
import { sendFeedback, dateformat, changePassword, deleteAccount, polylineLenght, makeid, sendVerification } from '../functions'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-datepicker/dist/react-datepicker.css";
import EmailEditor from 'react-email-editor';

const [GREEN, WHITE, GREY, BLACK, RED, BLUE_TEXT, BLUE, PURPLE, YELLOW] = ['#4EB848', '#FFFFFF', '#959AAC', '#000000', '#FF0000', '#284ED6', '#1970A7', '#A031AF', '#F0E23D'];
const M = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export class UserDashBoard extends React.Component {
    constructor() {
        super();

        this.state = {
            sharedLinks: true,
        };
    };
    componentDidMount() {
    };
    render() {
        let sharedLinks = [];
        for (let i = 0; i < 5; i++) {
            sharedLinks.push(
                <div className={styles.sharedLinksCont}>
                    <div className={styles.sharedLinks}>
                        <div className={styles.dp1}>
                            <img src="/doggyProfilePicture.svg" className={styles.doggyProfilePicture} />
                        </div>
                        <p className={styles.text1} style={{ color: BLACK }}>Edmond</p>
                        <p className={styles.addedKm}>+ 5km</p>
                    </div>
                    {i !== 5 - 1 ?
                        <div className={styles.sharedLine}></div>
                        : <></>}
                </div>
            );
        }
        return (
            <div className={styles.cont}>
                <div className={styles.container} id={styles.ud1}>
                    <div className={styles.ud1}>
                        <p className={styles.title} style={{ color: WHITE }}>Promos</p>
                        <p className={styles.text} style={{ color: WHITE }}>
                            Want free rides? Share your invite code with friends and family, and when they book their first ride, you get free kilometers!
                    </p>
                        <div className={styles.iC_Cont}>
                            <p className={styles.text} style={{ color: WHITE, fontFamily: 'Gilroy-Semibold', margin: '0px', marginRight: '15px', width: 'initial' }}>
                                Invite Code
                            </p>
                            <div className={styles.copyBox}>
                                <p className={styles.text} id={styles.iC_link} >{'https://www.perch.com/john123'}</p>
                                <MdContentCopy className={styles.copy} color={WHITE} />
                            </div>
                        </div>
                    </div>
                    <img src="/giftBox.svg" alt="Perch Carpool" className={styles.giftBox} />
                </div>

                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: BLACK }}>Platform links</p>
                    <p className={styles.text} style={{ color: GREY }}>
                        At the moment, getting rides with Perch is only available on the mobile app for iOS and android devices.
                    </p>
                    <div style={{ display: 'flex', width: '90%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <div className={styles.downloadCont}>
                            <img src="/downloadAppStore.svg" alt="Download Perch on App store" className={styles.downloadApp} />
                            <img src="/downloadGooglePlay.svg" alt="Download Perch on App store" className={styles.downloadApp} />
                        </div>
                    </div>
                </div>

                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', marginBottom: '150px' }}>
                    <p className={styles.title} style={{ color: BLACK }}>
                        Riders who signed up with your share link
                    </p>
                    <p className={styles.text} style={{ color: GREY }}>
                        {
                            this.state.sharedLinks ?
                                'Here are a list of the users who used your invite links along with the kilometers you got credited.' :
                                'When you share your code with friends and they use it to book their first ride, you would see their name here along with the kilometers you got from sharing it. Right now, no one has used your code to book a ride.'
                        }
                    </p>

                    {this.state.sharedLinks ? sharedLinks : <></>}

                </div>
            </div>
        )

    }
};
export class TripHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: false,
            date: new Date().getTime(),
            userDetails: this.props.userDetails,
        };
    };

    componentDidMount() {
        this.loadResult();
    }

    loadResult = () => {
        if (this.state.userDetails) {
            this.setState({ result: null }, () => {
                firebase.database().ref(`userHistory/${this.state.userDetails.userID}/carpool/${new Date(this.state.date).getFullYear()}/${M[new Date(this.state.date).getMonth()]}`).once('value', snapshot => {
                    this.setState({ result: snapshot.val() ? snapshot.val() : 'NORESULTS' });
                }).catch(error => { console.log(error.message) });
            });
        }
    };
    sorter(a, b) {
        function numbergetter(time) {
            let slash1 = 0, slash2 = 0, slash3 = 0;
            for (let k = 0; k < time.length; k++) {
                if (time.charAt(k) == '-')
                    slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;
            };

            const DAY = Number(time.substring(0, slash1)) * 86400;
            const HOUR = Number(time.substring(slash1 + 1, slash2)) * 3600;
            const MINS = Number(time.substring(slash2 + 1, slash3)) * 60;
            const SECS = Number(time.substring(slash3 + 1, time.length));

            return (DAY + HOUR + MINS + SECS)
        };

        let a_time = numbergetter(a)
        let b_time = numbergetter(b)

        if (a_time > b_time)
            return -1;
        else
            return 1
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let trips = [];

        if (this.state.result && this.state.result != 'NORESULTS') {
            const keys = Object.keys(this.state.result).sort(this.sorter);
            for (let i = 0; i < keys.length; i++) {
                trips.push(
                    <Trip
                        key={keys[i]}
                        date={timeAndDate(keys[i], M[new Date(this.state.date).getMonth()], new Date(this.state.date).getFullYear())}
                        data={this.state.result[keys[i]]}
                        lastItem={i == keys.length - 1}
                        type='Rider'
                    />
                );
            }
        }
        return (
            <>
                <div className={styles.cont} style={{ height: '100%', paddingTop: '10px', position: 'relative' }}>

                    <div className={styles.tripPanelDesc} >
                        <div className={styles.tripPanelCalenderCont} style={{ marginRight: '10px' }}>
                            <VscCalendar color={GREEN} size={'24px'} style={{ marginRight: '4px', marginBottom: '3px' }} />
                            <DatePicker
                                className={styles.calendarDate}
                                placeholderText={`${M[new Date(this.state.date).getMonth()].toUpperCase()} ${new Date(this.state.date).getFullYear()}`}
                                onChange={date => { this.setState({ date: date }, () => { this.loadResult() }); }}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                            />
                        </div>
                        <p className={styles.contactUsLasttext} id={styles.tripPanelAlignMiddle} style={{ width: 'initial', fontSize: '80%', margin: '0px' }}>
                            To see the details of a trip please use the mobile app
                        </p>
                    </div>
                    {this.state.result ?
                        this.state.result == 'NORESULTS' ?
                            <div className={styles.tripPanelLoading} id={styles.tripPanelLoading_}>
                                <img src="/noResultsWoman.svg" className={styles.noResultsWoman} alt="No Results" />
                                <p className={styles.contactUsLasttext} style={{ width: 'initial', fontSize: '90%', margin: '0px' }} id={styles.tripPanelLoadingText}>
                                    Surprisingly, you haven't booked any rides during this time.
                                </p>
                            </div> :
                            trips :
                        <div className={styles.tripPanelLoading}>
                            <Loader
                                type="TailSpin"
                                color={GREEN}
                                height={'100px'}
                                width={'100px'}
                            />
                        </div>}
                </div>
            </>
        );
    }
};
export class PerchWallet extends React.Component {
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
                            <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                                <p className={styles.title} style={{ color: BLACK }}>Enter the amount of kilometers you would like to purchase</p>
                                <input type="text" placeholder="Enter amount of kilometers" className={styles.inputPaymentPanel} />
                                <div className={styles.enterKilometerDiv} style={{ marginTop: '20px' }}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', color: GREY }} className={styles.text}>Cost per kilometer</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', }} className={styles.text}>{`$ 12.99`}</p>
                                </div>
                                <div className={styles.enterKilometerDiv}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', color: GREY }} className={styles.text}>Total cost of kilometers</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', }} className={styles.text}>{`$ 12.99`}</p>
                                </div>
                                <div className={styles.enterKilometerDiv}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', color: GREY }} className={styles.text}>Taxes</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Medium', }} className={styles.text}>{`$ 1.99`}</p>
                                </div>
                                <div className={styles.sharedLine} style={{ marginTop: '20px', width: '90%' }}></div>
                                <div className={styles.enterKilometerDiv}>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Bold', fontSize: '120%' }} className={styles.text}>Total</p>
                                    <p style={{ width: 'initial', margin: '0px', fontFamily: 'Gilroy-Bold', color: GREEN, fontSize: '120%' }} className={styles.text}>{`$ 12.99`}</p>
                                </div>

                            </div>

                            <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', }}>
                                <p className={styles.title} style={{ color: BLACK }}>
                                    Payment Methods
                                </p>
                                <p className={styles.text} style={{ color: GREY, marginBottom: '20px' }}>
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
                                            <AiOutlineRight color={BLACK} />
                                        </div>
                                        <div className={styles.sharedLine} style={{ marginTop: '0px', width: '100%' }}></div>
                                        <div className={styles.paymentRow} id={styles.addCardPayment} onClick={() => { this.setState({ addCard: true, buyKilometers: false }) }}>
                                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                                                <img src="/addPaymentCardIcon.svg" alt="Perch Payment" className={styles.visaIcon} style={{ marginRight: '15px' }} />
                                                <p className={styles.paymentCardNumber} id={styles.paymentCardNumber_}>Add Debit / Credit Card</p>
                                            </div>
                                            <AiOutlineRight color={BLACK} />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                                <div className={styles.button2} style={{ backgroundColor: RED }} id={styles.buttonBottom} onClick={() => { this.setState({ buyKilometers: false, addCard: false }) }}>
                                    <p className={styles.buttonText1}>Cancel</p>
                                </div>
                                <div className={styles.button2} style={{ backgroundColor: GREEN }} id={styles.buttonBottom}>
                                    <p className={styles.buttonText1}>Buy Kilometers</p>
                                </div>
                            </div>
                        </> :
                        this.state.addCard ?//add card
                            <>
                                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                                    <p className={styles.title} style={{ color: BLACK }}>Add card</p>
                                    <input type="text" placeholder="Name on Card" className={styles.inputPaymentPanel} id={styles.inputPaymentPanel_ADD} style={{ marginTop: '10px' }} />
                                    <input type="text" placeholder="Card Number" className={styles.inputPaymentPanel} id={styles.inputPaymentPanel_ADD} style={{ marginTop: '10px' }} />
                                    <div className={styles.enterKilometerDiv} style={{ marginTop: '10px', marginBottom: '10px' }}>
                                        <input type="text" placeholder={"Expiry Date (MM/YYYY)"} className={styles.inputPaymentPanel} style={{ width: '70%', margin: '0px' }} id={styles.inputPaymentPanel_ADD} />
                                        <input type="text" placeholder="CVV" className={styles.inputPaymentPanel} style={{ width: '28%', margin: '0px' }} id={styles.inputPaymentPanel_ADD} />
                                    </div>
                                </div>
                                <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                                    <div className={styles.button2} style={{ backgroundColor: RED }} id={styles.buttonBottom} onClick={() => { this.setState({ buyKilometers: false, addCard: false }) }}>
                                        <p className={styles.buttonText1}>Cancel</p>
                                    </div>
                                    <div className={styles.button2} style={{ backgroundColor: GREEN }} id={styles.buttonBottom}>
                                        <p className={styles.buttonText1}>Add Card</p>
                                    </div>
                                </div>

                            </> ://main page
                            <>
                                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                                    <p className={styles.title} style={{ color: BLACK }}>Kilometers</p>
                                    <p className={styles.text} style={{ color: GREY }}>
                                        You can make kilometer purchases from this panel. Also remeber that sharing your code with friends who book their first ride automatically gives you free kilometers.
                                    </p>
                                    <img src="/walletImage.svg" alt="Purchase Perch Kilometers" className={styles.walletImage} />
                                    <p className={styles.title} style={{ width: 'initial', marginTop: '20px' }}>{`${28.8} kilometers`}</p>
                                    <div className={styles.button1} style={{}} onClick={() => { this.setState({ buyKilometers: true, addCard: false }) }}>
                                        <p className={styles.buttonText1}>Buy kilometers</p>
                                    </div>
                                </div>

                                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', marginBottom: '150px' }}>
                                    <p className={styles.title} style={{ color: BLACK }}>
                                        Payment Methods
                                    </p>
                                    <p className={styles.text} style={{ color: GREY, marginBottom: '20px' }}>
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
                                                <AiOutlineRight color={BLACK} />
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
export class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: 'unselected',
            message: '',
            loading: false,
            showMessage: false,
            userDetails: this.props.userDetails,
            result: null,
            messageObj: null,
            errorMessage: '',
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {
            const ref = this.state.userDetails.driverID ? `driverFeedback/${this.state.userDetails.driverID}` : `userFeedback/${this.state.userDetails.userID}`;
            firebase.database().ref(ref).once('value', snapshot => {
                this.setState({ result: snapshot.val() ? snapshot.val() : null });
            }).catch(error => { console.log(error.message) });
        }
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        if (this.state.result) {
            const keys = Object.keys(this.state.result).sort((a, b) => b - a);
            for (let k = 0; k < keys.length; k++)
                results.push(
                    <>
                        <div className={styles.previousMessageSum} onClick={() => { this.setState({ messageObj: this.state.result[keys[k]], showMessage: true }) }}>
                            <p style={{ fontSize: '95%' }}>{this.state.result[keys[k]].subject}</p>

                            <div className={styles.previousMessageDate}>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>{dateformat(this.state.result[keys[k]].date)}</p>
                                <BsDot size={'55px'} color={this.state.result[keys[k]].status == 'PROCESSED' ? this.state.userDetails.driverID ? BLUE : GREEN : RED} />
                            </div>
                        </div>
                        {
                            k == keys.length - 1 ?
                                <></> :
                                <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                        }
                    </>
                )
        }


        return (
            <div className={styles.cont}>
                {this.state.showMessage ?
                    <>
                        <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                            <p className={styles.title} style={{ color: BLACK, marginBottom: '30px' }}>{this.state.messageObj.subject}</p>

                            <div className={styles.previousMessageC} style={{ alignItems: 'flex-end' }}>
                                <div className={styles.previousMessageCol} style={{ backgroundColor: this.state.userDetails.driverID ? BLUE : GREEN }}>
                                    <p style={{ fontSize: '95%', color: WHITE, lineHeight: '150%', paddingRight: '10px', paddingLeft: '10px' }}>
                                        {this.state.messageObj.body}
                                    </p>
                                </div>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>{dateformat(this.state.messageObj.date)}</p>
                            </div>
                            {this.state.messageObj.status == 'PROCESSED' ?
                                <div className={styles.previousMessageC} style={{ alignItems: 'flex-start' }}>
                                    <div className={styles.previousMessageCol} style={{ backgroundColor: 'rgba(145, 134, 134, 0.5)' }}>
                                        <p style={{ fontSize: '95%', color: BLACK, lineHeight: '150%', paddingRight: '10px', paddingLeft: '10px' }}>
                                            {this.state.messageObj.response}
                                        </p>
                                    </div>
                                    <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>{dateformat(this.state.messageObj.responseDate)}</p>
                                </div> : <></>}
                        </div>

                        <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '100px' }}>
                            <a className={styles.button1} id={styles.sendMessageContactUS} style={this.props.type == 'Driver' ? { backgroundColor: BLUE } : {}}
                                onClick={() => {
                                    this.setState({ showMessage: false })
                                }}>
                                {this.state.loading ?
                                    <Loader
                                        type="TailSpin"
                                        color={WHITE}
                                        height={'20px'}
                                        width={'20px'} /> :
                                    <p className={styles.buttonText1}>Back</p>}
                            </a>
                            <p className={styles.contactUsLasttext}>
                                We responds to your queries via user mails
                    </p>
                        </div>

                    </> :
                    <>
                        <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                            <p className={styles.title} style={{ color: BLACK }}>Contact us form</p>
                            <p className={styles.text} style={{ color: GREY }}>
                                Feel free to contact us about issues with your ride or about feeback on how we can better our services.
                    </p>
                            <select
                                value={this.state.topic}
                                className={styles.selectTopic}
                                onChange={(v) => { this.setState({ topic: v.target.value }) }}
                                style={this.state.topic === 'unselected' ? { color: 'rgba(112, 112, 112, 0.7)' } : {}}
                            >
                                <option value="unselected">(--Select a topic--)</option>
                                <option value="Give feedback about our services">Give feedback about our services</option>
                                <option value="Missing item">Missing item</option>
                                <option value="Change your name">Change your name</option>
                                {
                                    this.state.userDetails.driverID ?
                                        <option value="Report a rider">Report a rider</option>
                                        : <>
                                            <option value="Report a driver">Report a driver</option>
                                            <option value="Work with us">Work with us</option>
                                        </>
                                }
                                <option value="Report a bug">Report a rider</option>
                                <option value="Other">Other</option>
                            </select>

                            <textarea
                                type="text"
                                placeholder="Enter your message here"
                                className={styles.contactUsContent}
                                value={this.state.message}
                                onChange={(event) => { this.setState({ message: event.target.value }); }} />
                            <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                        </div>

                        <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: this.state.result ? '0px' : '150px' }}>
                            <a className={styles.button1} id={styles.sendMessageContactUS} style={this.props.type == 'Driver' ? { backgroundColor: BLUE } : {}}
                                onClick={() => {
                                    if (!this.state.loading)
                                        sendFeedback.call(this);
                                }}>
                                <p className={styles.buttonText1}>Send Message</p>
                            </a>
                            <p className={styles.contactUsLasttext}>
                                We responds to your queries via user mails
                    </p>
                        </div>

                        {this.state.result ?
                            <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', marginBottom: '150px' }}>
                                <p className={styles.title} style={{ color: BLACK }}>Previous messages</p>
                                <p className={styles.text} style={{ color: GREY, marginBottom: '10px' }}>
                                    Here are some of your previous messages. Messages would be answered within 2-4 business days
                                </p>

                                {results}
                            </div> : <></>}

                    </>}
            </div>
        );
    };
};
export class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toShow: 'default',//default, changePassword, verify, whyDeleteAccount,logInToDeleteAccount,
            toVerify: '',
            url: null,
            userDetails: this.props.userDetails,
            newEmail: this.props.userDetails ? this.props.userDetails.email : '',
            newPhoneNumber: this.props.userDetails ? this.props.userDetails.phoneNumber : '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            loading: false,
            errorMessage: '',
            deleteAccountReason: '',
            email1: '',
            password1: '',
            timer: 0,

            emailVerified: false,
            phoneVerified: true,

            verifyText: '',

        };
    };
    componentDidMount() {
        this.setImage(this.state.userDetails.photoRef);

        firebase.database().ref(`users/${this.state.userDetails.userID}/summarizedHistory`).on('value', snap => {
            if (snap.val())
                this.setState({ emailVerified: snap.val().emailVerified, phoneVerified: snap.val().phoneVerified });
        })
    }
    setImage = (photoRef) => {
        firebase.storage().ref(`${photoRef}`).getDownloadURL()
            .then(result => {
                this.setState({ url: result })
            }).catch(error => { console.log(error.message) });
    };
    sendVerificationCode = (type) => {
        this.setState({ timer: 60 }, () => {
            const time = setInterval(() => {
                if (this.state.timer == 0)
                    clearInterval(time);
                else
                    this.setState({ timer: this.state.timer - 1 })
            }, 1000);
        });
        if (this.state.timer == 0)
            switch (type) {
                case 'email': {
                    sendVerification(this.state.userDetails.userID,
                        'email',
                        'storeAndSend',
                        '',
                        '',
                        this.state.newEmail,
                        this.state.userDetails.firstName);
                    this.setState({ toShow: 'verify', toVerify: 'email' });
                } break;
                case 'phoneNumber': {
                    sendVerification(this.state.userDetails.userID,
                        'phoneNumber',
                        'storeAndSend',
                        '',
                        this.state.newPhoneNumber,
                        '',
                        this.state.userDetails.firstName);
                    this.setState({ toShow: 'verify', toVerify: 'phone number' });
                } break;
            };
    };
    render() {
        let content = <></>;
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({
                userDetails: this.props.userDetails,
                newEmail: this.props.userDetails.email,
                newPhoneNumber: this.props.userDetails.phoneNumber,
            }, () => { this.setImage(this.state.userDetails.photoRef); });

        switch (this.state.toShow) {
            case 'default': {
                content = (<>
                    <p className={styles.title} style={{ color: BLACK, marginBottom: '15px' }}>{`User details`}</p>

                    <div className={styles.enterKilometerDiv} style={{ margin: '0px', width: '100%' }}>
                        <input type="text"
                            placeholder="First Name"
                            className={styles.inputPaymentPanel}
                            id={styles.inputSettings} style={{ width: '49%', margin: '0px' }}
                            value={this.state.userDetails ? this.state.userDetails.firstName : 'First Name'}
                            disabled={true}
                        />
                        <input type="text"
                            placeholder="Last Name"
                            className={styles.inputPaymentPanel}
                            id={styles.inputSettings}
                            style={{ width: '49%', margin: '0px' }}
                            value={this.state.userDetails ? this.state.userDetails.lastName : 'Last Name'}
                            disabled={true}
                        />
                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="text"
                            placeholder="Email Address"
                            className={styles.inputPaymentPanel}
                            value={this.state.newEmail}
                            onChange={(event) => { this.setState({ newEmail: event.target.value }) }}
                            id={styles.inputSettingCont_L} />
                        {this.state.emailVerified && this.state.userDetails.email == this.state.newEmail ?
                            <div className={styles.pickPaymentSelected} style={{ backgroundColor: this.props.type == 'Driver' ? '#39A2E5' : '#5EEF56', }} id={styles.inputSettingCont_R}>
                                <p className={styles.buttonText1} id={styles.settingsVerifyOrNot}>Verified</p>
                                <RiShieldCheckFill className={styles.settingsVerifyOrNotIcon} color={WHITE} />
                            </div> :
                            <div className={styles.pickPaymentSelected}
                                style={{ backgroundColor: '#FF4040' }}
                                id={styles.inputSettingCont_R_VERIFYNOW}
                                onClick={() => { this.sendVerificationCode('email') }}
                            >
                                <p className={styles.buttonText1} id={styles.settingsVerifyOrNot}>Verify Now</p>
                                <GiClick className={styles.settingsVerifyOrNotIcon} color={WHITE} />
                            </div>}
                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="text"
                            placeholder="Phone Number"
                            className={styles.inputPaymentPanel}
                            value={this.state.newPhoneNumber}
                            onChange={(event) => { this.setState({ newPhoneNumber: event.target.value }) }}
                            id={styles.inputSettingCont_L} />
                        {this.state.phoneVerified && this.state.userDetails.phoneNumber == this.state.newPhoneNumber ?
                            <div className={styles.pickPaymentSelected} style={{ backgroundColor: this.props.type == 'Driver' ? '#39A2E5' : '#5EEF56', }} id={styles.inputSettingCont_R}>
                                <p className={styles.buttonText1} id={styles.settingsVerifyOrNot}>Verified</p>
                                <RiShieldCheckFill className={styles.settingsVerifyOrNotIcon} color={WHITE} />
                            </div> :
                            <div
                                className={styles.pickPaymentSelected}
                                style={{ backgroundColor: '#FF4040' }}
                                id={styles.inputSettingCont_R_VERIFYNOW}
                                onClick={() => {
                                    axios.post(`https://us-central1-perch-01.cloudfunctions.net/checkIfPhoneNumberIsFree`, { phoneNumber: this.state.newPhoneNumber })
                                        .then((r) => {
                                            if (r.data) {
                                                this.sendVerificationCode('phoneNumber')
                                            }
                                            else
                                                this.setState({ error: true, errorMessage: 'Phone number already in use by another account' })
                                        })
                                        .catch(error => {
                                            this.setState({ error: true, errorMessage: error.message })
                                        })
                                }}>
                                <p className={styles.buttonText1} id={styles.settingsVerifyOrNot}>Verify Now</p>
                                <GiClick className={styles.settingsVerifyOrNotIcon} color={WHITE} />
                            </div>}
                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <p
                            onClick={() => { this.setState({ toShow: 'changePassword' }) }}
                            className={styles.changePasswordButton}
                            style={this.props.type ? { color: BLUE } : {}}>Change Password</p>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px' }}
                            onClick={() => { this.setState({ toShow: 'whyDeleteAccount' }) }}
                        >
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Delete Account</p>
                        </div>
                    </div>
                </>);
            } break;
            case 'changePassword': {
                content = (<>
                    <p className={styles.title} style={{ color: BLACK }}>Change Password</p>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input
                            type="password"
                            placeholder="Current Password"
                            className={styles.inputPaymentPanel}
                            id={styles.inputSettingCont_L}
                            value={this.state.currentPassword}
                            onChange={(event) => { this.setState({ currentPassword: event.target.value }) }}
                            style={{ width: '100%' }} />

                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input
                            type="password"
                            placeholder="New Password"
                            className={styles.inputPaymentPanel}
                            id={styles.inputSettingCont_L}
                            value={this.state.newPassword}
                            onChange={(event) => { this.setState({ newPassword: event.target.value }) }}
                            style={{ width: '100%' }}
                        />

                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            className={styles.inputPaymentPanel}
                            id={styles.inputSettingCont_L}
                            style={{ width: '100%' }}
                            value={this.state.confirmNewPassword}
                            onChange={(event) => { this.setState({ confirmNewPassword: event.target.value }) }}
                        />

                    </div>
                    <p className={styles.em}>{this.state.errorMessage}</p>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <div className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => {
                                if (!this.state.loading)
                                    this.setState({ toShow: 'default', errorMessage: '', currentPassword: '', newPassword: '', confirmNewPassword: '' });
                            }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? BLUE : GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => {
                                if (!this.state.loading) {
                                    if (this.state.newPassword == '')
                                        this.setState({ errorMessage: 'Please enter a new password' })
                                    else if (this.state.newPassword != this.state.confirmNewPassword)
                                        this.setState({ errorMessage: 'New password and confirm new password do not match' })
                                    else
                                        changePassword.call(this,
                                            this.state.userDetails.email,
                                            this.state.currentPassword,
                                            this.state.newPassword);
                                }
                            }}
                        >
                            {this.state.loading ?
                                <Loader
                                    type="TailSpin"
                                    color={WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1} id={styles.deleteAccountButton}>Change Password</p>
                            }
                        </div>
                    </div>
                </>);
            } break;
            case 'verify': {
                content = (<>
                    <p className={styles.title} style={{ color: BLACK }}>{`Verify your ${this.state.toVerify}`}</p>
                    <p className={styles.text} style={{ color: BLACK }}>
                        Enter the code sent to <span style={{ color: this.props.type == 'Driver' ? BLUE : GREEN }}>{
                            this.state.toVerify == 'email' ?
                                this.state.newEmail :
                                this.state.newPhoneNumber}</span>
                    </p>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input
                            type="text"
                            placeholder="Enter Code"
                            className={styles.inputPaymentPanel}
                            id={styles.inputSettingCont_L} style={{ width: '100%' }}
                            value={this.state.verifyText}
                            onChange={(v) => { this.setState({ verifyText: v.target.value }) }}
                        />
                    </div>
                    {this.state.timer == 0 ?
                        <p className={styles.text} style={{ color: BLACK, fontSize: '80%' }}>
                            Didn't get a code yet? <span
                                id={styles.resendCodeSettings}
                                onClick={() => { this.sendVerificationCode(this.state.toVerify == 'email' ? 'email' : 'phoneNumber') }}
                                style={{ color: BLUE_TEXT }}>Resend</span>
                        </p> :
                        <p className={styles.text} style={{ color: BLACK, fontSize: '80%' }}>
                            Resend in <span style={{ color: BLUE_TEXT }}>{` 0:${('0' + this.state.timer).slice(-2)}`}</span>
                        </p>}
                    <p className={styles.em}>{this.state.errorMessage}</p>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <div className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => { this.setState({ toShow: 'default', errorMessage: '' }) }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? BLUE : GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => {
                                const code = this.state.verifyText;
                                if (code.length != 6) {
                                    this.setState({ errorMessage: 'Verification code must be 6 characters long' })
                                } else {
                                    this.setState({ loading: true }, () => {
                                        const type = this.state.toVerify == 'email' ? 'email' : 'phoneNumber';
                                        switch (type) {
                                            case 'email': {
                                                axios.post(`https://us-central1-perch-01.cloudfunctions.net/sendVerificationCode`,
                                                    {
                                                        userID: this.state.userDetails.userID,
                                                        type: type,
                                                        action: 'check',
                                                        code: code,
                                                        phoneNumber: '',
                                                        email: this.state.newEmail,
                                                        name: this.state.userDetails.firstName
                                                    })
                                                    .then((r) => {
                                                        if (r.data) {
                                                            axios.post(`https://us-central1-perch-01.cloudfunctions.net/changeEmailAndPhoneNumberAfterVerifying`, {
                                                                userID: this.state.userDetails.userID,
                                                                type: type,
                                                                phoneNumber: '',
                                                                email: this.state.newEmail,
                                                            }).then(() => {
                                                                let userDetails = this.state.userDetails;
                                                                userDetails.email = this.state.newEmail;
                                                                this.setState({ toShow: 'default', loading: false, userDetails: userDetails, errorMessage: '' })
                                                            }).catch((error) => { this.setState({ errorMessage: error.message, loading: false }) })
                                                        }
                                                        else
                                                            this.setState({ errorMessage: 'Validation code is not valid', loading: false })
                                                    })
                                                    .catch((error) => { this.setState({ errorMessage: error.message, loading: false }) })

                                            } break;
                                            case 'phoneNumber': {
                                                axios.post(`https://us-central1-perch-01.cloudfunctions.net/sendVerificationCode`,
                                                    {
                                                        userID: this.state.userDetails.userID,
                                                        type: type,
                                                        action: 'check',
                                                        code: code,
                                                        phoneNumber: this.state.newPhoneNumber,
                                                        email: '',
                                                        name: this.state.userDetails.firstName
                                                    })
                                                    .then((r) => {
                                                        if (r.data) {
                                                            axios.post(`https://us-central1-perch-01.cloudfunctions.net/changeEmailAndPhoneNumberAfterVerifying`, {
                                                                userID: this.state.userDetails.userID,
                                                                type: type,
                                                                phoneNumber: '',
                                                                email: this.state.newEmail,
                                                            }).then(() => {
                                                                let userDetails = this.state.userDetails;
                                                                userDetails.phoneNumber = this.state.newPhoneNumber;
                                                                this.setState({ toShow: 'default', loading: false, userDetails: userDetails, errorMessage: '' })
                                                            }).catch((error) => { this.setState({ errorMessage: error.message, loading: false }) })
                                                        }
                                                        else
                                                            this.setState({ errorMessage: 'Validation code is not valid', loading: false })
                                                    })
                                                    .catch((error) => { this.setState({ errorMessage: error.message, loading: false }) })
                                            } break;
                                        }
                                    })
                                }
                            }}
                        >
                            {this.state.loading ?
                                <Loader
                                    type="TailSpin"
                                    color={WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1} id={styles.deleteAccountButton}>Verify</p>}
                        </div>
                    </div>
                </>);
            } break;
            case 'whyDeleteAccount': {
                content = (<>
                    <p className={styles.title} style={{ color: BLACK }}>Are you sure you would like to delete your account?</p>
                    <p className={styles.text} style={{ color: BLACK }}>
                        Please describe briefly why you would like to delete your account
                    </p>
                    <textarea
                        type="text"
                        placeholder="Enter your message here"
                        className={styles.contactUsContent}
                        style={{ width: '100%' }}
                        value={this.state.deleteAccountReason}
                        onChange={event => { this.setState({ deleteAccountReason: event.target.value }) }}
                    />

                    <p className={styles.em}>{this.state.errorMessage}</p>

                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => {
                                if (this.state.deleteAccountReason == '')
                                    this.setState({ errorMessage: 'Please enter a reason to delete your account' });
                                else if (this.state.deleteAccountReason.length < 15)
                                    this.setState({ errorMessage: 'Please enter a reason longer than 15 characters' });
                                else
                                    this.setState({ toShow: 'logInToDeleteAccount', errorMessage: '' })
                            }}
                        >
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Delete Account</p>
                        </div>

                        <div className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? BLUE : GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => { this.setState({ toShow: 'default', errorMessage: '', deleteAccountReason: '' }) }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                    </div>
                </>);
            } break;
            case 'logInToDeleteAccount': {
                content = (<>
                    <p className={styles.title} style={{ color: BLACK }}>We are sorry to see you leave Perch</p>
                    <p className={styles.text} style={{ color: BLACK }}>
                        Please describe briefly why you would like to delete your account
                    </p>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="text"
                            placeholder="Email"
                            className={styles.inputPaymentPanel}
                            id={styles.inputSettingCont_L}
                            style={{ width: '100%' }}
                            value={this.state.email1}
                            autoComplete={'off'}
                            onChange={(event) => { this.setState({ email1: event.target.value }) }} />
                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="password"
                            placeholder="Password"
                            className={styles.inputPaymentPanel}
                            id={styles.inputSettingCont_L}
                            style={{ width: '100%' }}
                            value={this.state.password1}
                            autoComplete={'off'}
                            onChange={(event) => { this.setState({ password1: event.target.value }) }} />
                    </div>
                    <p className={styles.em}>{this.state.errorMessage}</p>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <div className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => {
                                if (!this.state.loading)
                                    deleteAccount.call(this,
                                        this.state.email1,
                                        this.state.password1);
                            }}>
                            {this.state.loading ?
                                <Loader
                                    type="TailSpin"
                                    color={WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1} id={styles.deleteAccountButton}>Delete Account</p>
                            }
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? BLUE : GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => { this.setState({ toShow: 'default', errorMessage: '', email1: '', password1: '' }) }}
                        >
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                    </div>
                </>);
            } break;
        }
        return (
            <div className={styles.cont}>

                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', marginBottom: '150px' }}>
                    <p className={styles.title} style={{ color: BLACK }}>Rider settings</p>
                    <div className={styles.settingUserDetails} >
                        <div className={styles.displayPicSettings}>
                            <img src={this.state.url} className={styles.doggyProfilePicture} />
                        </div>
                        <div className={styles.settingsCont}>
                            {content}
                        </div>
                    </div>
                </div>
            </div >
        );
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
                                        <div className={styles.button2} style={{ backgroundColor: RED, width: '80%' }}>
                                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>Delete this card?</p>
                                        </div>
                                        <AiOutlineClose className={styles.closeDeletePayment} onClick={() => { this.setState({ deleteCard: false }) }} />
                                    </> :
                                    <>
                                        <div className={styles.button2} style={{}}>
                                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>Edit Card</p>
                                        </div>
                                        <div className={styles.button2} style={{ backgroundColor: RED }} onClick={() => { this.setState({ deleteCard: true }) }}>
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
                        <div className={styles.pickPaymentSelected} style={{ backgroundColor: GREEN, opacity: 0.6 }} onClick={() => { this.setState({ deleteCard: true }) }}>
                            <p className={styles.buttonText1} id={styles.paymentCardNumber_}>Selected</p>
                        </div>
                    </div>
                    <div className={styles.sharedLine} style={{ marginTop: '0px', width: '100%' }}></div>
                </>
            );
    }
};
class Trip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }
    render() {
        if (this.props.type == 'Rider') {
            let bar = <></>;
            const data = JSON.parse(this.props.data.data);
            let totalDistance = 0;
            switch (this.props.data.driverDetails.steps) {
                case 1: {
                    totalDistance = data.firstDistance;
                    bar = <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: GREEN }} >
                    </div>;
                } break;
                case 2: {
                    totalDistance = data.firstDistance + data.secondDistance;
                    bar = <div className={styles.tripPanelNoOfTrips}>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.firstDistance / totalDistance) * 100) + '%', backgroundColor: GREEN, borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }} >
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.secondDistance / totalDistance) * 100) + '%', backgroundColor: BLUE, borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }} >
                        </div>
                    </div>
                } break;
                case 3: {
                    totalDistance = data.firstDistance + data.secondDistance + data.thirdDistance;
                    bar = <div className={styles.tripPanelNoOfTrips}>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.firstDistance / totalDistance) * 100) + '%', backgroundColor: GREEN, borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }} >
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.secondDistance / totalDistance) * 100) + '%', backgroundColor: BLUE, borderRadius: '0px' }} >
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.thirdDistance / totalDistance) * 100) + '%', backgroundColor: PURPLE, borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }} >
                        </div>

                    </div>
                } break;
            };
            totalDistance > 100 ?
                totalDistance = `${(totalDistance / 1000).toFixed(1)} kilometers` :
                totalDistance = `${(totalDistance).toFixed(totalDistance != 0 ? 1 : 0)} meters`;
            return (
                <>
                    <div id={styles.tripPanelCont} >
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px' }}>
                            <p className={styles.tripPanelTitle}>{`${this.props.data.driverDetails.steps}-leg trip`}</p>
                            <p className={styles.tripPanelTime}>{this.props.date}</p>
                        </div>

                        {bar}
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '20px' }}>
                            <HiOutlineLocationMarker color={GREEN} style={{ margin: '0px', marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{this.props.data.location.description}</p>
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '10px' }}>
                            <BiStopCircle color={GREEN} style={{ marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{this.props.data.destination.description}</p>
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: GREY, height: '1px', marginTop: '17px' }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', marginTop: '10px', marginBottom: '15px' }}>
                            <p className={styles.tripPanelTitle} style={{ fontFamily: 'Gilroy-Medium', margin: '0px' }}>{totalDistance}</p>
                            <p className={styles.tripPanelCash} >{`$ 5.99`}</p>
                        </div>
                    </div>
                    {
                        this.props.lastItem ?//just for padding at the bottom
                            <div style={{ height: '150px', width: '100%', backgroundColor: 'transparent' }}></div>
                            : <></>
                    }
                </>
            );
        }
        else if (this.props.type == 'Driver') {
            const data = this.props.data;
            let passNo = 0, distance = 0, total = '$ 0.00';
            if (data.trips) {
                for (let key in data.trips) {
                    passNo += data.trips[key].details.tripDetails.seatNumber;
                    distance += (polylineLenght(JSON.parse(data.trips[key].details.tripDetails.leg)) * data.trips[key].details.tripDetails.seatNumber);//seat no * distance
                };
            };
            //distance = distance * passNo;
            distance > 100 ?
                distance = `${(distance / 1000).toFixed(1)} KM` :
                distance = `${(distance).toFixed(distance != 0 ? 1 : 0)} M`;

            distance = distance.toLowerCase();
            passNo = `${passNo} ${passNo == 1 ? 'person' : 'people'}`;
            total = '$ 213.00';


            return (
                <>
                    <div id={styles.tripPanelCont} >
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px' }}>
                            <p className={styles.tripPanelTitle}>{passNo}</p>
                            <p className={styles.tripPanelTime}>{this.props.date}</p>
                        </div>

                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: BLUE, height: '10px', }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '20px' }}>
                            <HiOutlineLocationMarker color={BLUE} style={{ margin: '0px', marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{data.locationAddress}</p>
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '10px' }}>
                            <BiStopCircle color={BLUE} style={{ marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{data.destinationAddress}</p>
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: GREY, height: '1px', marginTop: '17px' }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', marginTop: '10px', marginBottom: '15px' }}>
                            <p className={styles.tripPanelTitle} style={{ fontFamily: 'Gilroy-Medium', margin: '0px' }}>{distance}</p>
                            <p className={styles.tripPanelCash} style={{ color: BLUE }} >{total}</p>
                        </div>
                    </div>
                    {
                        this.props.lastItem ?//just for padding at the bottom
                            <div style={{ height: '150px', width: '100%', backgroundColor: 'transparent' }}></div>
                            : <></>
                    }
                </>
            );
        }
    }
};
export class DriverDashBoard extends React.Component {
    constructor() {
        super();

        this.state = {
            sharedLinks: true,
        };
    };
    componentDidMount() {
    };
    render() {
        let sharedLinks = [];
        for (let i = 0; i < 5; i++) {
            sharedLinks.push(
                <div className={styles.sharedLinksCont}>
                    <div className={styles.sharedLinks}>
                        <div className={styles.dp1}>
                            <img src="/doggyProfilePicture.svg" className={styles.doggyProfilePicture} />
                        </div>
                        <p className={styles.text1} style={{ color: BLACK }}>Edmond</p>
                        <p className={styles.addedKm}>+ 5km</p>
                    </div>
                    {i !== 5 - 1 ?
                        <div className={styles.sharedLine}></div>
                        : <></>}
                </div>
            );
        }
        return (
            <div className={styles.cont}>

                <DriverDashBoardSummary title='WH' />
                <DriverDashBoardSummary title='OH' />
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', marginBottom: "150px" }}>
                    <p className={styles.title} style={{ color: BLACK }}>Platform links</p>
                    <p className={styles.text} style={{ color: GREY }}>
                        At the moment, taking rides with Perch is only available on the mobile app for iOS and android devices.
                    </p>
                    <div style={{ display: 'flex', width: '90%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <div className={styles.downloadCont}>
                            <img src="/downloadAppStore.svg" alt="Download Perch on App store" className={styles.downloadApp} />
                            <img src="/downloadGooglePlay.svg" alt="Download Perch on App store" className={styles.downloadApp} />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
};
export class DriverTripHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            date: new Date().getTime(),
            userDetails: this.props.userDetails,
            summary: {
                distance: '...',
                passengerNo: '...',
                totalM: '...',
            },
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {
            this.setState({ result: null }, () => {
                firebase.database().ref(`driverHistory/${this.state.userDetails.userID}/carpool/${new Date(this.state.date).getFullYear()}/${M[new Date(this.state.date).getMonth()]}`).once('value', snapshot => {
                    this.setState({ result: snapshot.val() ? snapshot.val() : 'NORESULTS' });
                    let passengerNo = 0, distance = 0, totalM = '$ 1279.90';

                    for (let k in snapshot.val()) {
                        const d = snapshot.val()[k].trips;
                        for (let key in d) {
                            passengerNo += d[key].details.tripDetails.seatNumber;
                            distance += polylineLenght(JSON.parse(d[key].details.tripDetails.leg)) * d[key].details.tripDetails.seatNumber;
                            //work on cash here
                        };
                    };
                    distance > 100 ?
                        distance = (distance / 1000).toFixed(1) :
                        distance = (distance).toFixed(distance != 0 ? 1 : 0);

                    this.setState({
                        summary: {
                            distance: distance.toLowerCase(),
                            passengerNo: passengerNo,
                            totalM: totalM,
                        },
                    });

                }).catch(error => { console.log(error.message) });
            });
        }
    };
    sorter(a, b) {
        function numbergetter(time) {
            let slash1 = 0, slash2 = 0, slash3 = 0;
            for (let k = 0; k < time.length; k++) {
                if (time.charAt(k) == '-')
                    slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;
            };

            const DAY = Number(time.substring(0, slash1)) * 86400;
            const HOUR = Number(time.substring(slash1 + 1, slash2)) * 3600;
            const MINS = Number(time.substring(slash2 + 1, slash3)) * 60;
            const SECS = Number(time.substring(slash3 + 1, time.length));

            return (DAY + HOUR + MINS + SECS)
        };

        let a_time = numbergetter(a)
        let b_time = numbergetter(b)

        if (a_time > b_time)
            return -1;
        else
            return 1
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let trips = [];

        if (this.state.result && this.state.result != 'NORESULTS') {
            const keys = Object.keys(this.state.result).sort(this.sorter);
            for (let i = 0; i < keys.length; i++) {
                trips.push(
                    <Trip
                        key={keys[i]}
                        date={timeAndDate(keys[i], M[new Date(this.state.date).getMonth()], new Date(this.state.date).getFullYear())}
                        data={this.state.result[keys[i]]}
                        lastItem={i == keys.length - 1}
                        type='Driver'
                    />
                );
            }
        }
        return (
            <>

                <div className={styles.cont} style={{ height: '100%', paddingTop: '10px', position: 'relative' }}>

                    <div className={styles.tripPanelDesc} >
                        <div className={styles.tripPanelCalenderCont} style={{ marginRight: '10px' }}>
                            <VscCalendar color={BLUE} size={'24px'} style={{ marginRight: '4px', marginBottom: '3px' }} />
                            <DatePicker
                                className={styles.calendarDate}
                                id={styles.calendarDate}
                                placeholderText={`${M[new Date(this.state.date).getMonth()].toUpperCase()} ${new Date(this.state.date).getFullYear()}`}
                                onChange={date => { this.setState({ date: date }, () => { this.loadResult() }); }}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                            />
                        </div>
                        <p className={styles.contactUsLasttext} id={styles.tripPanelAlignMiddle} style={{ width: 'initial', fontSize: '80%', margin: '0px' }}>
                            To see the details of a trip please use the mobile app
                        </p>
                    </div>
                    {this.state.result && this.state.result !== 'NORESULTS' ?
                        <div id={styles.tripPanelCont} >
                            <p className={styles.title} style={{ width: '95%', marginTop: '20px', fontSize: '100%' }}>Total Summary</p>
                            <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px', marginTop: '5px' }}>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>{`Number of passengers`}</p>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>
                                    {this.state.summary.passengerNo} <span className={styles.driverTH_HIDESUMMARY}>{this.state.summary.passengerNo == 1 ? 'passenger' : 'passengers'}</span>
                                </p>
                            </div>

                            <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px', marginTop: '5px' }}>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>{`Total kilometers provided`}</p>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>
                                    {this.state.summary.distance} <span className={styles.driverTH_HIDESUMMARY}>{this.state.summary.distance > 100 ? 'kilometers' : 'meters'}</span>
                                </p>
                            </div>

                            <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px', marginTop: '10px', marginBottom: '15px' }}>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px', fontSize: '100%', fontFamily: 'Gilroy-Bold' }}>
                                    {`TOTAL MADE`}
                                </p>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px', fontSize: '105%', color: BLUE, fontFamily: 'Gilroy-Bold' }}>
                                    {this.state.summary.totalM}
                                </p>
                            </div>
                        </div> :
                        <></>}
                    {this.state.result ?
                        this.state.result == 'NORESULTS' ?
                            <div className={styles.tripPanelLoading} id={styles.tripPanelLoading_}>
                                <img src="/noResultsWomanBlue.svg" className={styles.noResultsWoman} alt="No Results" />
                                <p className={styles.contactUsLasttext} style={{ width: 'initial', fontSize: '90%', margin: '0px' }} id={styles.tripPanelLoadingText}>
                                    Surprisingly, You haven't booked any rides during this time.
                                </p>
                            </div> :
                            trips :
                        <div className={styles.tripPanelLoading}>
                            <Loader
                                type="TailSpin"
                                color={BLUE}
                                height={'100px'}
                                width={'100px'}
                            />
                        </div>}
                </div>
            </>
        );
    }
};
export class DriverVehicles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            addVehicle: false,
            userDetails: this.props.userDetails,

            make: '',
            model: '',
            year: '',
            color: '',
            plateNumber: '',


            vehicleImage: '',
            vehicleImagePreview: '',
            registration: '',
            insurance: '',
            inspection: '',
            loading: false,

            errorMessage: '',
        };

    }
    componentDidMount() {
        this.loadResult();
    };

    handleFileUpload() {
        this.setState({ loading: true, errorMessage: '' }, () => {
            const randomID = makeid(6);
            firebase.storage().ref(`driverAddVehicleApplication/${this.state.userDetails.userID}/registeration`).put(this.state.registration).catch(error => { console.log(error.message) });
            firebase.storage().ref(`driverAddVehicleApplication/${this.state.userDetails.userID}/insurance`).put(this.state.insurance).catch(error => { console.log(error.message) });
            firebase.storage().ref(`driverAddVehicleApplication/${this.state.userDetails.userID}/inspection`).put(this.state.inspection).catch(error => { console.log(error.message) });
            firebase.storage().ref(`driverAddVehicleApplication/${this.state.userDetails.userID}/vehicleImage`).put(this.state.vehicleImage).catch(error => { console.log(error.message) });
            firebase.storage().ref(`vehicles/${this.state.userDetails.userID}/${randomID}`).put(this.state.vehicleImage).catch(error => { console.log(error.message) });

            axios.post('https://us-central1-perch-01.cloudfunctions.net/addVehicle', {
                userID: this.state.userDetails.userID,
                vehicle: {
                    make: this.state.make,
                    model: this.state.model,
                    color: this.state.color,
                    year: this.state.year,
                    plateNumber: this.state.plateNumber.toUpperCase(),
                    maxSeatNumber: 3,
                    displayImage: `vehicles/${this.state.userDetails.userID}/${randomID}`,
                },
            })
                .then(() => {
                    this.setState({ errorMessage: '', loading: false, make: '', model: '', year: '', color: '', plateNumber: '', addVehicle: false }, () => { this.loadResult(); })
                }).catch(error => { this.setState({ errorMessage: error.message, loading: false }) })


        });
    };
    loadResult = () => {
        if (this.state.userDetails)
            firebase.database().ref(`vehicles/${this.state.userDetails.userID}`).once('value', snapshot => {
                this.setState({ result: snapshot.val() });
            }).catch(error => { console.log(error.message) });
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let vehicle = [];
        if (this.state.result) {
            const keys = Object.keys(this.state.result);
            for (let k = 0; k < keys.length; k++)
                if (keys[k] != 'selected')
                    vehicle.push(
                        <Vehicle
                            data={this.state.result[keys[k]]}
                            lastItem={k == keys.length - 1}
                        />
                    );
        }
        return (
            <>

                <div className={styles.cont} style={{ height: '100%', paddingTop: '10px', position: 'relative' }}>
                    {this.state.addVehicle ?
                        <>
                            <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                                <p className={styles.title} style={{ color: BLACK }}>Add a vehicle</p>
                                <div className={styles.enterKilometerDiv} style={{ marginTop: '15px', }}>
                                    <input type="text"
                                        placeholder={"Vehicle Make"}
                                        className={styles.inputPaymentPanel}
                                        style={{ width: '49%', margin: '0px' }} id={styles.inputPaymentPanel_ADD}
                                        value={this.state.make}
                                        onChange={event => { this.setState({ make: event.target.value }) }}
                                    />
                                    <input type="text"
                                        placeholder={"Vehicle Model"}
                                        className={styles.inputPaymentPanel}
                                        style={{ width: '49%', margin: '0px' }} id={styles.inputPaymentPanel_ADD}
                                        value={this.state.model}
                                        onChange={event => { this.setState({ model: event.target.value }) }} />
                                </div>
                                <div className={styles.enterKilometerDiv} style={{ marginTop: '10px', }}>
                                    <input type="text"
                                        placeholder={"Vehicle Year"}
                                        className={styles.inputPaymentPanel}
                                        style={{ width: '49%', margin: '0px' }}
                                        id={styles.inputPaymentPanel_ADD}
                                        value={this.state.year}
                                        onChange={event => { this.setState({ year: event.target.value }) }} />
                                    <input type="text"
                                        placeholder={"Vehicle Color"}
                                        className={styles.inputPaymentPanel}
                                        style={{ width: '49%', margin: '0px' }}
                                        id={styles.inputPaymentPanel_ADD}
                                        value={this.state.color}
                                        onChange={event => { this.setState({ color: event.target.value }) }} />
                                </div>
                                <input type="text"
                                    placeholder="Plate Number"
                                    className={styles.inputPaymentPanel}
                                    id={styles.inputPaymentPanel_ADD}
                                    style={{ marginTop: '10px' }}
                                    value={this.state.plateNumber}
                                    onChange={event => { this.setState({ plateNumber: event.target.value }) }} />
                                <div className={styles.driver_ADD_VEHICLE_LOWER}>

                                    {
                                        this.state.vehicleImagePreview == '' ?
                                            <div className={styles.driver_ADD_VEHICLE_IMGUPLOAD} onClick={() => { this.vehicleImage.click() }}>
                                                <AiOutlineCamera className={styles.driverVehicle_CAMERA} />
                                                <p className={styles.driverVehicle_CAMERATEXT}>
                                                    UPLOAD A PICTURE OF YOUR VEHICLE
                                        </p>
                                            </div> :
                                            <img className={styles.driver_ADD_VEHICLE_IMGUPLOAD} src={this.state.vehicleImagePreview} onClick={() => { this.vehicleImage.click() }} />
                                    }
                                    <a className={styles.driver_ADD_VEHICLE_IMG_GL} href='/s/articles/procedures_for_taking_a_picture'>
                                        <img src="/cameraGuidelinesForPictures.svg" className={styles.driverVehicle_GUIDELINES_CAM} />
                                        <p className={styles.driverVehicle_GUIDELINES_CAM_TEXT}>Guidelines for taking a picture of your vehicle</p>
                                    </a>
                                    <div className={styles.driver_ADD_VEHICLE_DOCSUPLOAD}>

                                        <input type='file'
                                            ref={(ref) => this.vehicleRegistrationRef = ref}
                                            className={styles.driverVehicle_INPUT}
                                            onChange={event => {
                                                if (event.target.files.length != 0) {
                                                    if (((event.target.files[0].size / 1024) / 1024) > 15)
                                                        this.setState({ errorMessage: 'File size is too large. A maximum of 15 megabytes is permitted for uploads' })
                                                    else
                                                        this.setState({ registration: event.target.files[0] })
                                                }
                                            }} />

                                        <input type='file'
                                            ref={(ref) => this.vehicleInsuranceRef = ref}
                                            className={styles.driverVehicle_INPUT}
                                            onChange={event => {
                                                if (event.target.files.length != 0) {
                                                    if (((event.target.files[0].size / 1024) / 1024) > 15)
                                                        this.setState({ errorMessage: 'File size is too large. A maximum of 15 megabytes is permitted for uploads' })
                                                    else
                                                        this.setState({ insurance: event.target.files[0] })
                                                }
                                            }} />

                                        <input type='file'
                                            ref={(ref) => this.vehicleInspectionRef = ref}
                                            className={styles.driverVehicle_INPUT}
                                            onChange={event => {
                                                if (event.target.files.length != 0) {
                                                    if (((event.target.files[0].size / 1024) / 1024) > 15)
                                                        this.setState({ errorMessage: 'File size is too large. A maximum of 15 megabytes is permitted for uploads' })
                                                    else
                                                        this.setState({ inspection: event.target.files[0] })
                                                }
                                            }} />

                                        <input type='file'
                                            ref={(ref) => this.vehicleImage = ref}
                                            className={styles.driverVehicle_INPUT}
                                            onChange={event => {
                                                if (event.target.files.length != 0) {
                                                    if (((event.target.files[0].size / 1024) / 1024) > 15)
                                                        this.setState({ errorMessage: 'File size is too large. A maximum of 15 megabytes is permitted for uploads' })
                                                    else
                                                        this.setState({ vehicleImage: event.target.files[0], vehicleImagePreview: URL.createObjectURL(event.target.files[0]) })
                                                }
                                            }} />

                                        <div
                                            className={styles.driverVehicle_UPLOADCONT} id={styles.driverVehicle_UPLOADCONT_}
                                            onClick={() => { this.vehicleRegistrationRef.click() }}>
                                            <p className={styles.driverVehicle_UPLOADTEXT}>{this.state.registration == '' ? 'Upload vehicle registration' : this.state.registration.name}</p>
                                            {this.state.registration == '' ?
                                                <BsCloudUpload size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={WHITE} /> :
                                                <AiOutlineCheck size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={WHITE} />}
                                        </div>

                                        <div
                                            className={styles.driverVehicle_UPLOADCONT}
                                            onClick={() => { this.vehicleInsuranceRef.click() }}>
                                            <p className={styles.driverVehicle_UPLOADTEXT}>{this.state.insurance == '' ? 'Upload vehicle insurance' : this.state.insurance.name}</p>
                                            {this.state.insurance == '' ?
                                                <BsCloudUpload size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={WHITE} /> :
                                                <AiOutlineCheck size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={WHITE} />}
                                        </div>

                                        <div
                                            className={styles.driverVehicle_UPLOADCONT}
                                            onClick={() => { this.vehicleInspectionRef.click() }}>
                                            <p className={styles.driverVehicle_UPLOADTEXT}>{this.state.inspection == '' ? 'Upload vehicle inspection' : this.state.inspection.name}</p>
                                            {this.state.inspection == '' ?
                                                <BsCloudUpload size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={WHITE} /> :
                                                <AiOutlineCheck size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={WHITE} />}
                                        </div>
                                    </div>
                                </div>
                                <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                            </div>
                            <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginLeft: '2.5%', width: '95%' }}>
                                <div className={styles.button2} style={{ backgroundColor: RED }}
                                    id={styles.buttonBottom}
                                    onClick={() => {
                                        if (!this.state.loading)
                                            this.setState({ addVehicle: false, errorMessage: '' });
                                    }}>
                                    <p className={styles.buttonText1}>Cancel</p>
                                </div>
                                <div className={styles.button2} style={{ backgroundColor: BLUE }} id={styles.buttonBottom}
                                    onClick={() => {
                                        if (!this.state.loading) {
                                            if (this.state.color == '' || this.state.model == '' || this.state.make == '' || this.state.year == '' || this.state.plateNumber == '')
                                                this.setState({ errorMessage: 'Please fill all fields' });
                                            else if (this.state.inspection == '' || this.state.registration == '' || this.state.insurance == '')
                                                this.setState({ errorMessage: 'Please upload all documents needed' });
                                            else if (this.state.vehicleImage == '')
                                                this.setState({ errorMessage: 'Please upload an image of your vehicle. It does not have to fit perfectly in frame.' });
                                            else
                                                this.handleFileUpload();
                                        }
                                    }}>
                                    {this.state.loading ?
                                        <Loader
                                            type="TailSpin"
                                            color={WHITE}
                                            height={'20px'}
                                            width={'20px'}
                                        /> :
                                        <p className={styles.buttonText1}>Add vehicle</p>}
                                </div>
                            </div>
                            <div style={{ height: '150px', width: '10px' }}></div>
                        </> :
                        <>
                            <div className={styles.tripPanelDesc} id={styles.tripPanelCalenderCont_AV} onClick={() => { this.setState({ addVehicle: true }) }}>
                                <div className={styles.tripPanelCalenderCont} style={{ alignItems: 'center', }}>
                                    <CgAdd color={WHITE} style={{ margin: '0px', minWidth: '20px', marginRight: '10px', height: '20px' }} />
                                    <p className={styles.driverVehicle_ADDAVEHICLE} style={{ margin: '0px', marginTop: '3px' }}>ADD A VEHICLE</p>
                                </div>
                            </div>

                            {this.state.result ?
                                this.state.result == 'NORESULTS' ?
                                    <div className={styles.tripPanelLoading} id={styles.tripPanelLoading_}>
                                        <img src="/noResultsWoman.svg" className={styles.noResultsWoman} alt="No Results" />
                                        <p className={styles.contactUsLasttext} style={{ width: 'initial', fontSize: '90%', margin: '0px' }} id={styles.tripPanelLoadingText}>
                                            We can't find any vehicles in your name at the moment
                                </p>
                                    </div> :
                                    vehicle :
                                <div className={styles.tripPanelLoading}>
                                    <Loader
                                        type="TailSpin"
                                        color={BLUE}
                                        height={'100px'}
                                        width={'100px'}
                                    />
                                </div>}
                        </>}
                </div>
            </>
        );
    }
};
export class HelpAndFAQ extends React.Component {
    constructor() {
        super();

        this.state = {

        };
    };
    componentDidMount() {
    };
    render() {
        return (
            <div className={styles.cont}>


                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', }}>
                    <p className={styles.title} style={{ color: BLACK }}>{`Help articles & Frequently asked questions`}</p>
                    <p className={styles.text} style={{ color: GREY }}>
                        Here are some articles that can help you navigating your way around the Perch Driver app. Contact us if you need help with an issue not addressed or with a bug.
                    </p>

                    <a className={styles.driverFAQCont} href='/s/articles/starting_a_driver_trip'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/carpoolOpenDoor.svg" className={styles.driverFAQ_PIC_IMAGE} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>How to start a driver trip</p>
                        </div>
                        <AiOutlineRight color={GREY} style={{ minWidth: '20px' }} />
                    </a>
                    <div className={styles.sharedLine} style={{ marginTop: '10px', opacity: 0.5 }}></div>

                    <a className={styles.driverFAQCont} href='/s/articles/driver_controls'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/logoBlue.svg" className={styles.driverFAQ_PIC_IMAGE} style={{ width: 'auto', height: '100%' }} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>Driver app controls</p>
                        </div>
                        <AiOutlineRight color={GREY} style={{ minWidth: '20px' }} />
                    </a>
                    <div className={styles.sharedLine} style={{ marginTop: '10px', opacity: 0.5 }}></div>

                    <a className={styles.driverFAQCont} href='/s/articles/scheduling_driver_trips'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/noCommitmentNoSchedule.svg" className={styles.driverFAQ_PIC_IMAGE} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>Scheduling a driver trip</p>
                        </div>
                        <AiOutlineRight color={GREY} style={{ minWidth: '20px' }} />
                    </a>
                    <div className={styles.sharedLine} style={{ marginTop: '10px', opacity: 0.5 }}></div>

                    <a className={styles.driverFAQCont} href='/s/articles/procedures_for_taking_a_picture'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/carPicture.svg" className={styles.driverFAQ_PIC_IMAGE} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>Procedures for taking a picture of your car</p>
                        </div>
                        <AiOutlineRight color={GREY} style={{ minWidth: '20px' }} />
                    </a>
                    <div className={styles.sharedLine} style={{ marginTop: '10px', opacity: 0.5 }}></div>

                    <a className={styles.driverFAQCont} style={{ marginBottom: '5px' }} href='/s/articles/guidelines_for_drivers_and_riders'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/community.svg" className={styles.driverFAQ_PIC_IMAGE} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>Guidelines for the Perch community</p>
                        </div>
                        <AiOutlineRight color={GREY} style={{ minWidth: '20px' }} />
                    </a>
                </div>

                <div style={{ height: '200px', width: '20px', backgroundColor: 'transparent' }}></div>
            </div>
        )

    }
};
class DriverDashBoardSummary extends React.Component {
    constructor() {
        super();
    };
    render() {
        return (
            <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                {this.props.title == 'OH' ?
                    <div className={styles.enterKilometerDiv}>
                        <p className={styles.title} style={{ color: BLACK, width: 'initial', }}>Overall history</p>
                        <p className={styles.driverDashboard_BOXTITLE} style={{ margin: '0px', textAlign: 'center', marginLeft: '20px' }}><span id={styles.driverDashboard_HALFDATE}>{`Joined 09/2019`}</span><span id={styles.driverDashboard_FULLDATE}>{`Joined September 2019`}</span></p>
                    </div> :
                    <p className={styles.title} style={{ color: BLACK }}>Monthly history</p>}

                <div className={styles.driverDashboardCont}>
                    <div className={styles.driverDashboard_TE}>
                        <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                            <p className={styles.driverDashboard_BOXTITLE}>Total earnings</p>
                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: BLUE }}>$ 1345.90</p>
                        </div>
                    </div>
                    <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                    <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                        <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                            <p className={styles.driverDashboard_BOXTITLE}>Completed trips</p>
                            <p className={styles.driverDashboard_BOXTEXT} >7</p>
                        </div>

                        <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Average rating</p>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <p className={styles.driverDashboard_BOXTEXT} >4.6</p>
                                <AiFillStar size={'15px'} style={{ marginLeft: '5px' }} />
                            </div>
                        </div>

                        <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Driver cancellations</p>
                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: RED }}>3</p>
                        </div>

                        <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Rider cancellations</p>
                            <p className={styles.driverDashboard_BOXTEXT} >17</p>
                        </div>

                        <div className={styles.driverDashboard_BOX} style={{ marginRight: '0px' }}>
                            <p className={styles.driverDashboard_BOXTITLE}>Passengers carried</p>
                            <p className={styles.driverDashboard_BOXTEXT} >237</p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
};
class Vehicle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            verified: this.props.data.verifyStatus == 'VERIFIED',
            url: null,
        }
    }
    componentDidMount() {
        this.setImage(this.props.data.displayImage);
    };
    setImage = (photoRef) => {
        firebase.storage().ref(`${photoRef}`).getDownloadURL()
            .then(result => {
                this.setState({ url: result })
            }).catch(error => { console.log(error.message) });
    };
    render() {
        const data = this.props.data;
        return (
            <>
                <div id={styles.tripPanelCont_} style={{ overflow: 'hidden', flexDirection: 'row' }}>
                    <div className={styles.driverVehicle_PIC_CONT}>
                        <img src={this.state.url} className={styles.driverVehicle_PIC} />
                    </div>
                    <p className={styles.driverVehicle_DESC}>
                        Color - {data.color}<br />
                        Year - {data.year}<br />
                        Make - {data.make}<br />
                        Model - {data.model}
                    </p>
                    {this.state.verified ?
                        <div id={styles.driverVehicle_VERIFYCONT} style={{ backgroundColor: '#39A2E5' }}>
                            <p id={styles.driverVehicle_VERIFYCONTTEXT}>Verified</p>
                            <RiShieldCheckFill className={styles.settingsVerifyOrNotIcon} style={{ margin: '0px' }} color={WHITE} />
                        </div>
                        :
                        <div id={styles.driverVehicle_VERIFYCONT} style={{ backgroundColor: '#FF4040' }}>
                            <p id={styles.driverVehicle_VERIFYCONTTEXT}>Verifying</p>
                            <BsClockHistory className={styles.settingsVerifyOrNotIcon} style={{ margin: '0px' }} color={WHITE} />
                        </div>}
                    <p id={styles.driverVehiclePLATENUMBER}>{data.plateNumber}</p>
                </div>
                {
                    this.props.lastItem ?//just for padding at the bottom
                        <div style={{ height: '150px', width: '100%', backgroundColor: 'transparent' }}></div>
                        : <></>
                }
            </>
        );
    }
};

export class VehicleConfirmation extends React.Component {
    constructor() {
        super();

        this.state = {
            s1: false,
            s2: false,
            s3: false,
            errorMessage: '',
            city: '',
            loading1: false,
            loading2: false,
            cityVerified: false,
        };
    };
    componentDidMount() {
    };
    nextStage = () => {
        this.setState({ loading2: true, errorMessage: '' }, () => {
            firebase.database().ref(`driverApplications/${this.props.userID}`).update({
                stage: 'two',
                city: this.capitalizeFirstLetter(this.state.city.toLowerCase()),
            })
                .then(() => { this.props.nextStage('two') })
                .catch(error => { console.log(error.message) });
        });
    };
    verifyCity = () => {
        if (!this.state.cityVerified)
            this.setState({ loading1: true }, () => {
                firebase.database().ref(`cities/${this.capitalizeFirstLetter(this.state.city.toLowerCase())}`).once('value', snapshot => {
                    if (snapshot.val()) {
                        this.setState({ cityVerified: true, loading1: false, errorMessage: '' })
                    }
                    else
                        this.setState({ loading1: false, errorMessage: 'Sadly Perch does not yet operate in your city. When we get there we would let you know. For further information please contact us.' })
                }).catch(error => { console.log(erroe.message) })
            })
    };
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', }}>
                    <div className={styles.driver_APP_TOPCONT}>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: WHITE }}>Vehicle Confirmation</p>
                        <p className={styles.driver_APP_TOP_TEXT}>Upload Documents</p>
                        <p className={styles.driver_APP_TOP_TEXT}>Application Status</p>

                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: WHITE }}>1</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB}>2</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB}>3</p>
                        <img src="/applicationDashArrow_.svg" className={styles.applicationDashArrow} style={{ width: '36%' }} />
                    </div>
                    <p className={styles.title} style={{ color: BLACK }}>{`Please confirm that your vehicle meets the following requirements`}</p>
                    <p className={styles.text} style={{ color: GREY }}>
                        You must be at least xx years of age and your car must satisfy these in order to continue
                    </p>

                    <div className={styles.driverFAQ_PICDESC}
                        style={{ width: '90%', marginTop: '10px' }}
                        id={styles.driver_APP_TOP_RADIO_CONT}
                        onClick={() => {
                            this.setState({ s1: !this.state.s1 });
                        }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s1 ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {
                                this.state.s1 ?
                                    <AiOutlineCheck color={WHITE} size={'15px'} />
                                    : <></>
                            }
                        </div>
                        <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px' }}>A 4 door vehicle</p>
                    </div>

                    <div className={styles.driverFAQ_PICDESC}
                        style={{ width: '90%', marginTop: '10px' }}
                        id={styles.driver_APP_TOP_RADIO_CONT}
                        onClick={() => {
                            this.setState({ s2: !this.state.s2 });
                        }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s2 ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {
                                this.state.s2 ?
                                    <AiOutlineCheck color={WHITE} size={'15px'} />
                                    : <></>
                            }
                        </div>
                        <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px' }}>A 2010 or newer car model</p>
                    </div>

                    <div className={styles.driverFAQ_PICDESC}
                        style={{ width: '90%', marginTop: '10px' }}
                        id={styles.driver_APP_TOP_RADIO_CONT}
                        onClick={() => {
                            this.setState({ s3: !this.state.s3 });
                        }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s3 ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {
                                this.state.s3 ?
                                    <AiOutlineCheck color={WHITE} size={'15px'} />
                                    : <></>
                            }
                        </div>
                        <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px' }}>Active status</p>
                    </div>

                    <p className={styles.text} style={{ color: GREY, marginTop: '20px' }}>
                        Enter your city to see if Perch is currently operating there. Please spell it out correctly.
                    </p>
                    <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px', marginBottom: '30px' }} >
                        <input type="text"
                            placeholder="Enter your city"
                            className={styles.inputPaymentPanel}
                            style={{ width: '150px', margin: '0px', fontSize: '90%', border: '1px solid rgba(149, 154, 172, 0.5)' }}
                            value={this.state.city}
                            onChange={event => {
                                this.setState({ city: event.target.value });
                                if (this.state.cityVerified)
                                    this.setState({ cityVerified: false })
                            }} />
                        <div className={styles.button2}
                            style={{ backgroundColor: GREEN, width: '80px', margin: '0px', marginLeft: '10px' }}
                            id={styles.buttonBottom}
                            onClick={() => {
                                if (!this.state.loading1)
                                    this.verifyCity();
                            }}>
                            {this.state.loading1 ?
                                <Loader
                                    type="TailSpin"
                                    color={WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1}>
                                    {this.state.cityVerified ? 'Verified' : 'Verify'}
                                </p>
                            }
                        </div>
                    </div>
                    <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                </div>
                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '150px' }}>
                    <a className={styles.button1} id={styles.sendMessageContactUS} onClick={() => {
                        if (!this.state.loading2) {
                            if (!this.state.s1 || !this.state.s2 || !this.state.s3)
                                this.setState({ errorMessage: 'Please tick out all the Perch car requirements if your vehicle meets them.' });
                            else if (!this.state.cityVerified)
                                this.setState({ errorMessage: 'Please verify your city.' });
                            else
                                this.nextStage();
                        }
                    }}>
                        {
                            this.state.loading2 ?
                                <Loader
                                    type="TailSpin"
                                    color={WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1}>Confirm</p>}
                    </a>
                    <p className={styles.contactUsLasttext}>
                        Having issues? <a href='/contact_us'><span id={styles.driver_APP_CU1}>Contact Us</span></a>.
                    </p>
                </div>
                <div style={{ height: '100px', width: '20px', backgroundColor: 'transparent' }}></div>
            </div>
        )

    }
};
export class UploadDocuments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadDocs: false,
            userID: this.props.userID,
            s: [//ORDER IS IMPORTANT FOR SERVER
                false, // "Driver's licence",
                false, // "Proof of work eligibility",
                false, // "EPS background check",
                false, // "Vehicle insurance",
                false, // "Vehicle registration",
                false, // "Vehicle inspection",
            ],
            docList: [
                "Driver's licence",
                "Proof of work eligibility",
                "EPS background check",
                "Vehicle insurance",
                "Vehicle registration",
                "Vehicle inspection",
            ],
            docID: [
                "driversLicence",
                "proofOfWorkEligibility",
                "epsBackgroundCheck",
                "vehicleInsurance",
                "vehicleRegistration",
                "vehicleInspection",
            ],
            docNames: [
                false, // "Driver's licence",
                false, // "Proof of work eligibility",
                false, // "EPS background check",
                false, // "Vehicle insurance",
                false, // "Vehicle registration",
                false, // "Vehicle inspection",
            ],
            selectedIndex: 0,
            loading: false,
            errorMessage: ''
        };
    };
    componentDidMount() {
        firebase.database().ref(`driverApplications/${this.state.userID}/documentsSubmitted`).once('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ s: JSON.parse(snapshot.val()), docNames: JSON.parse(snapshot.val()) });
            };
        }).catch(error => { console.log(error.message) });
    };

    submitDoc = () => {
        firebase.storage().ref(`driverApplication/${this.state.userID}/${this.state.docID[this.state.selectedIndex]}`)
            .put(this.state.s[this.state.selectedIndex])
            .then(() => {
                firebase.database().ref(`driverApplications/${this.state.userID}`).update({
                    documentsSubmitted: JSON.stringify(this.state.docNames),
                })
                    .then(() => { this.setState({ loading: false }) })
                    .catch(error => {
                        console.log(error.message);
                        this.setState({ loading: false });
                    })
            })
            .catch(error => {
                console.log(error.message);
                this.setState({ loading: false });
            });
    }
    nextStage = () => {
        firebase.database().ref(`driverApplications/${this.state.userID}`).update({
            stage: 'three',
            progress: JSON.stringify(['done', 'done', 'ongoing', 'undone', 'undone']),
        })
            .then(() => {
                firebase.database().ref(`completedDriverApplications`).update({
                    [this.state.userID]: 'UNPROCESSED',
                }).catch(error => { console.log(error.message) })
            })
            .then(() => { this.props.nextStage('three'); })
            .catch(error => { console.log(error.message) })

    }
    render() {
        let requirements = [];
        for (let i = 0; i < this.state.docList.length; i++)
            requirements.push(
                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_}
                    onClick={() => { this.setState({ uploadDocs: true, selectedIndex: i, errorMessage: '' }) }}>
                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>{this.state.docList[i]}</p>
                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s[i] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                        {this.state.s[i] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                    </div>
                </div>
            );

        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', }}>
                    <div className={styles.driver_APP_TOPCONT}>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: WHITE }}>Vehicle Confirmation</p>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: WHITE }}>Upload Documents</p>
                        <p className={styles.driver_APP_TOP_TEXT}>Application Status</p>

                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: WHITE }}>1</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: WHITE }}>2</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB}>3</p>
                        <img src="/applicationDashArrow_.svg" className={styles.applicationDashArrow} style={{ width: '69%' }} />
                    </div>
                    {
                        this.state.uploadDocs ?
                            <>
                                <p className={styles.title} style={{ color: BLACK }}>{`Upload your ${this.state.docList[this.state.selectedIndex]}`}</p>
                                <p className={styles.text} style={{ color: GREY }}>
                                    Documents can be submitted as a scanned pdf or a photograph of the document.<br />
                                    Pictures should be :<br />
                                    • Taken in a well place <br />
                                    • Show details clearly
                                </p>

                                {this.state.s[this.state.selectedIndex] ?
                                    <div
                                        className={styles.uploadDocumentIconCont}
                                        onClick={() => { this.document.click() }}
                                        style={{ flexDirection: 'column' }}>
                                        <img src="/documentsSubmitted.svg" className={styles.uploadDocumentPIC} style={{ height: '70%', marginTop: '10px' }} />
                                        <p className={styles.text}
                                            style={{ width: 'initial', fontFamily: 'Gilroy-Semibold', fontSize: '95%', color: GREY, maxWidth: '90%' }}>
                                            {this.state.s[this.state.selectedIndex].name}
                                        </p>
                                    </div> :
                                    <div className={styles.uploadDocumentIconCont} onClick={() => { this.document.click() }}>
                                        <img src='/uploadDocumentIcon.svg' className={styles.uploadDocumentPIC} />
                                    </div>
                                }
                                <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                            </>
                            :
                            <>
                                <p className={styles.title} style={{ color: BLACK }}>{`Upload Documents`}</p>
                                <p className={styles.text} style={{ color: GREY }}>
                                    All that is left to do is to submit the required documents and you’re on your way to becoming a Perch driver.
                                </p>
                                <p className={styles.title} style={{ color: GREY, fontSize: '95%', marginTop: '20px' }}>{`Required Documents`}</p>
                                {requirements}
                                <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                            </>
                    }
                </div>
                <input type='file'
                    ref={(ref) => this.document = ref}
                    className={styles.driverVehicle_INPUT}
                    onChange={event => {
                        if (event.target.files.length != 0) {
                            let files = this.state.s;
                            let docNames = this.state.docNames;
                            const filesize = ((event.target.files[0].size / 1024) / 1024).toFixed(4); // MB
                            if (filesize > 15)
                                this.setState({ errorMessage: 'File is too large. A maximum of 15 megabytes is permitted for uploads' });
                            else {
                                files[this.state.selectedIndex] = event.target.files[0];
                                docNames[this.state.selectedIndex] = { name: event.target.files[0].name };
                                this.setState({ s: files, docNames: docNames, loading: true }, () => { this.submitDoc(); });
                            }
                        }
                    }} />
                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '150px' }}>
                    {this.state.uploadDocs ?
                        <div className={styles.driverFAQ_PICDESC} style={{ width: '100%', justifyContent: 'space-between' }}>
                            <a className={styles.button1} id={styles.sendMessageContactUS}
                                onClick={() => {
                                    if (!this.state.loading)
                                        this.setState({ uploadDocs: false, errorMessage: '' })
                                }}
                                style={{ backgroundColor: RED, width: '48%' }}>
                                <p className={styles.buttonText1}>Cancel</p>
                            </a>

                            <a className={styles.button1}
                                id={styles.sendMessageContactUS}
                                style={{ width: '48%' }}
                                onClick={() => {
                                    if (!this.state.loading) {
                                        if (this.state.s[this.state.selectedIndex])
                                            this.setState({ uploadDocs: false, errorMessage: '' })
                                        else
                                            this.document.click();
                                    }
                                }}>
                                {this.state.loading ?
                                    <Loader
                                        type="TailSpin"
                                        color={WHITE}
                                        height={'20px'}
                                        width={'20px'} /> :
                                    <p className={styles.buttonText1}>{this.state.s[this.state.selectedIndex] ? 'Done' : 'Upload'}</p>
                                }
                            </a>
                        </div>
                        :
                        <a className={styles.button1} id={styles.sendMessageContactUS}
                            onClick={() => {
                                if (this.state.s.includes(false))
                                    this.setState({ errorMessage: 'Please upload all the required documents' });
                                else
                                    this.setState({ loading: true }, () => {
                                        this.nextStage();
                                    })
                            }}>
                            {this.state.loading ?
                                <Loader
                                    type="TailSpin"
                                    color={WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1}>Confirm</p>}
                        </a>}
                    <p className={styles.contactUsLasttext}>
                        Having issues? <a href='/contact_us'><span id={styles.driver_APP_CU1}>Contact Us</span></a>.
                    </p>
                </div>
                <div style={{ height: '100px', width: '20px', backgroundColor: 'transparent' }}></div>
            </div>
        )

    }
};
export class ApplicationStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: this.props.userID,
            completed: [
                'done',
                'done',
                'ongoing',
                'undone',
                'undone',
            ],
            steps: [
                'Submit Application',
                'Upload Documents',
                'Verifying submitted documents',
                'Final Assessment / Interview',
                'Welcome to Perch!'
            ],
        };
    };
    componentDidMount() {
        firebase.database().ref(`driverApplications/${this.state.userID}/progress`).once('value', (snapshot => {
            this.setState({ completed: JSON.parse(snapshot.val()) });
        })).catch(error => { console.log(error.message) });
    };
    render() {
        let steps = [];
        for (let i = 0; i < this.state.steps.length; i++)
            steps.push(
                <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px' }}>
                    <div className={styles.driver_APP_RADIO}
                        style={{
                            backgroundColor: this.state.completed[i] == 'done' ?
                                GREEN :
                                this.state.completed[i] == 'ongoing' ?
                                    'rgba(78, 184, 72,0.5)' :
                                    `rgb(149, 154, 172,0.5)`
                        }}>
                        {this.state.completed[i] == 'done' ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                    </div>
                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px' }}>{this.state.steps[i]}</p>
                </div>
            )
        return (
            <div className={styles.cont}>

                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', }}>
                    <div className={styles.driver_APP_TOPCONT} style={{ backgroundColor: GREEN }}>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: WHITE }}>Vehicle Confirmation</p>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: WHITE }}>Upload Documents</p>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: WHITE }}>Application Status</p>

                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: WHITE }}>1</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: WHITE }}>2</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: WHITE }}>3</p>
                    </div>
                    <p className={styles.title} style={{ color: BLACK }}>
                        Thanks for completing your checklist!<br />
                        Here you can watch your progress in real time
                    </p>
                    <p className={styles.text} style={{ color: GREY }}>
                        We are currently working on your profile. Updates would be sent via mail so no need to worry about missing them.
                    </p>
                    {steps}
                </div>

                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '150px' }}>
                    <p className={styles.contactUsLasttext}>
                        Having issues? <a href='/contact_us'><span id={styles.driver_APP_CU1}>Contact Us</span></a>.
                    </p>
                </div>
                <div style={{ height: '100px', width: '20px', backgroundColor: 'transparent' }}></div>
            </div>
        )

    }
};
export class AdminDashBoard extends React.Component {
    constructor() {
        super();

        this.state = {
            sharedLinks: true,
        };
    };
    componentDidMount() {
    };
    render() {
        let sharedLinks = [];
        for (let i = 0; i < 5; i++) {
            sharedLinks.push(
                <div className={styles.sharedLinksCont}>
                    <div className={styles.sharedLinks}>
                        <div className={styles.dp1}>
                            <img src="/doggyProfilePicture.svg" className={styles.doggyProfilePicture} />
                        </div>
                        <p className={styles.text1} style={{ color: BLACK }}>Edmond</p>
                        <p className={styles.addedKm}>+ 5km</p>
                    </div>
                    {i !== 5 - 1 ?
                        <div className={styles.sharedLine}></div>
                        : <></>}
                </div>
            );
        }
        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                    {this.props.title == 'OH' ?
                        <div className={styles.enterKilometerDiv}>
                            <p className={styles.title} style={{ color: BLACK, width: 'initial', }}>Overall history</p>
                            <p className={styles.driverDashboard_BOXTITLE} style={{ margin: '0px', textAlign: 'center', marginLeft: '20px' }}><span id={styles.driverDashboard_HALFDATE}>{`Joined 09/2019`}</span><span id={styles.driverDashboard_FULLDATE}>{`Joined September 2019`}</span></p>
                        </div> :
                        <p className={styles.title} style={{ color: BLACK }}>Breakdown</p>}

                    <div className={styles.driverDashboardCont}>
                        <div className={styles.driverDashboard_TE}>
                            <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                <p className={styles.driverDashboard_BOXTITLE}>Total number of users</p>
                                <p className={styles.driverDashboard_BOXTEXT} style={{ color: GREEN }}>1672</p>
                            </div>
                        </div>
                        <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                        <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                            <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                                <p className={styles.driverDashboard_BOXTITLE}>Completed trips</p>
                                <p className={styles.driverDashboard_BOXTEXT} >7</p>
                            </div>

                            <div className={styles.driverDashboard_BOX}>
                                <p className={styles.driverDashboard_BOXTITLE}>Unread feedback</p>
                                <p className={styles.driverDashboard_BOXTEXT} style={{ color: RED }}>328</p>
                            </div>

                            <div className={styles.driverDashboard_BOX}>
                                <p className={styles.driverDashboard_BOXTITLE}>Rider cancellations</p>
                                <p className={styles.driverDashboard_BOXTEXT} >17</p>
                            </div>

                            <div className={styles.driverDashboard_BOX}>
                                <p className={styles.driverDashboard_BOXTITLE}>Driver cancellations</p>
                                <p className={styles.driverDashboard_BOXTEXT} style={{ color: RED }}>3</p>
                            </div>

                            <div className={styles.driverDashboard_BOX} style={{ marginRight: '0px' }}>
                                <p className={styles.driverDashboard_BOXTITLE}>Number of deleted accounts</p>
                                <p className={styles.driverDashboard_BOXTEXT} style={{}}>132</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.container} style={{ backgroundColor: GREEN, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: WHITE }}>New driver applications</p>
                    <p className={styles.text} style={{ color: WHITE }}>
                        You have 16 new driver applications left
                    </p>
                </div>

                <div className={styles.container} style={{ backgroundColor: GREEN, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: WHITE }}>Unaswered messages</p>
                    <p className={styles.text} style={{ color: WHITE }}>
                        You have 16 unaswered messages
                    </p>
                </div>

                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', }}>
                    <p className={styles.title} style={{ color: BLACK }}>
                        Riders who signed up with your share link
                    </p>
                    <p className={styles.text} style={{ color: GREY }}>
                        {
                            this.state.sharedLinks ?
                                'These are people you need to add funds for as they shared  their account' :
                                'When you new people use share links, you\'d see it here'
                        }
                    </p>

                    {this.state.sharedLinks ? sharedLinks : <></>}

                </div>

                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px', marginBottom: '150px' }}>
                    <p className={styles.title} style={{ color: BLACK }}>
                        Uncontacted new users
                    </p>
                    <p className={styles.text} style={{ color: GREY }}>
                        {
                            this.state.sharedLinks ?
                                'These are people you need to contact' :
                                'When you have new uncontacted users, they\'ll show up here'
                        }
                    </p>

                    {this.state.sharedLinks ? sharedLinks : <></>}

                </div>
            </div>
        )

    }
};
export class UnreadMessages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idSearch: '',
            result: [1, 2, 3, 4, 5, 6, 7, 8, 9,],
            userDetails: this.props.userDetails,
            showMessage: false,
            response: '',
            readOrUnread: 'unRead',
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        // if (this.state.result) {
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++)
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => {
                        this.setState({
                            // messageObj: this.state.result[keys[k]], 
                            showMessage: true
                        })
                    }}>
                        <p style={{ fontSize: '95%' }}>{'this.state.result[keys[k]].subject'}</p>

                        <div className={styles.previousMessageDate}>
                            <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>
                                {
                                    //dateformat(this.state.result[keys[k]].date)
                                    '11/20/2020'
                                }</p>
                            <BsDot size={'55px'} color={
                                //this.state.result[keys[k]].status == 'PROCESSED' 
                                true ?
                                    GREEN : RED} />
                        </div>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        //}

        return (
            <div className={styles.cont}>
                {this.state.showMessage ?
                    <>
                        <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                            <p className={styles.title} style={{ color: BLACK, marginBottom: '30px' }}>{'this.state.messageObj.subject'}</p>


                            <div className={styles.previousMessageC} style={{ alignItems: 'flex-start' }}>
                                <div className={styles.previousMessageCol} style={{ backgroundColor: 'rgba(145, 134, 134, 0.5)' }}>
                                    <p style={{ fontSize: '95%', color: BLACK, lineHeight: '150%', paddingRight: '10px', paddingLeft: '10px' }}>
                                        {'this.state.messageObj.body'}
                                    </p>
                                </div>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>{
                                    //dateformat(this.state.messageObj.responseDate)
                                    '11/20/2020'}</p>
                            </div>
                            {//if theres a response display the response or else display the textedit
                                false ?
                                    <div className={styles.previousMessageC} style={{ alignItems: 'flex-end' }}>
                                        <div className={styles.previousMessageCol} style={{ backgroundColor: GREEN }}>
                                            <p style={{ fontSize: '95%', color: WHITE, lineHeight: '150%', paddingRight: '10px', paddingLeft: '10px' }}>
                                                {'this.state.messageObj.response'}
                                            </p>
                                        </div>
                                        <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>{
                                            //dateformat(this.state.messageObj.date)
                                            '11/11/2020'}</p>
                                    </div> :
                                    <>
                                        <div className={styles.sharedLine}></div>
                                        <textarea
                                            type="text"
                                            placeholder="Enter your response here"
                                            className={styles.contactUsContent}
                                            //style={{ width: '100%' }}
                                            value={this.state.response}
                                            onChange={event => { this.setState({ response: event.target.value }) }}
                                        />
                                    </>
                            }

                        </div>

                        <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                            <div className={styles.button2} style={{ backgroundColor: RED }} id={styles.buttonBottom} onClick={() => { this.setState({ showMessage: false }) }}>
                                <p className={styles.buttonText1}>Cancel</p>
                            </div>
                            <div className={styles.button2} style={{ backgroundColor: GREEN }} id={styles.buttonBottom}>
                                <p className={styles.buttonText1}>Send response</p>
                            </div>
                        </div>

                    </> :
                    <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                        <p className={styles.title} style={{ color: BLACK }}>Unread messages</p>
                        <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <input
                                type="text"
                                placeholder="Search by email / userID"
                                className={styles.searchInput}
                                //style={{ width: '150px', margin: '0px', fontSize: '90%', border: '1px solid rgba(149, 154, 172, 0.5)' }}
                                value={this.state.idSearch}
                                onChange={event => {
                                    this.setState({ idSearch: event.target.value });
                                }}
                            />
                            <div className={styles.readOrUnreadCont} onClick={() => { this.setState({ readOrUnread: this.state.readOrUnread == 'unRead' ? 'read' : 'unRead' }) }}>
                                <p className={styles.readOrUnreadText}>{this.state.readOrUnread == 'unRead' ? 'Un-Read' : 'Read'}</p>
                            </div>
                        </div>
                        {results}
                    </div>}
            </div>
        );
    };
};
export class SendAnEmail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    exportHtml = () => {
        this.emailEditor.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
        });
    };
    onLoad = () => {
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
    };
    render() {
        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: BLACK, marginBottom: '30px' }}>Send an Email</p>
                    <EmailEditor
                        ref={(ref) => this.emailEditor = ref}
                        style={{ width: '80%' }}
                        onLoad={this.onLoad}
                    />
                </div>
            </div>
        );
    };
};
export class CancelledTrips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idRiderSearch: '',
            idDriverSearch: '',
            result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,],
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        // if (this.state.result) {
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++)
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => { }}>
                        <p style={{ fontSize: '95%' }}>{'Martin Maddrazo'}</p>

                        <div style={{
                            display: 'flex', width: '27px', height: '27px', borderRadius: '40px', backgroundColor: GREEN,
                            //"#1970A7",
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>{`R`}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '150px', justifyContent: 'space-between' }}>
                            <div className={styles.previousMessageDate}>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>
                                    {
                                        //dateformat(this.state.result[keys[k]].date)
                                        '11/20/2020'
                                    }</p>

                            </div>
                            <div style={{ width: '50px', height: '30px', backgroundColor: GREEN, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>167</p>
                            </div>
                        </div>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        //}

        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: BLACK }}>Cancelled Trips</p>
                    <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <input
                            type="text"
                            placeholder="Search riders by email / userID"
                            className={styles.searchInput}
                            style={{ width: '48%' }}
                            value={this.state.idRiderSearch}
                            onChange={event => {
                                this.setState({ idRiderSearch: event.target.value });
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Search drivers by email / userID"
                            className={styles.searchInput}
                            style={{ width: '48%' }}
                            value={this.state.idRiderSearch}
                            onChange={event => {
                                this.setState({ idRiderSearch: event.target.value });
                            }}
                        />
                    </div>

                    {results}

                </div>

            </div>
        );
    };
};
export class VehicleApplications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDocs: false,
            result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,],
            docList: [
                "Car Details JSON",
                "Vehicle insurance",
                "Vehicle registration",
                "Vehicle inspection",
            ],
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    render() {
        let requirements = [];
        for (let i = 0; i < this.state.docList.length; i++)
            requirements.push(
                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_} onClick={() => { }}>
                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>{this.state.docList[i]}</p>
                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: GREEN }}>
                        <AiOutlineCheck color={WHITE} size={'15px'} />
                    </div>
                </div>
            );

        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        // if (this.state.result) {
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++)
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => { this.setState({ showDocs: true }) }}>
                        <p style={{ fontSize: '95%' }}>{'Thomas Muller'}</p>

                        <div className={styles.previousMessageDate}>
                            <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>
                                {
                                    //dateformat(this.state.result[keys[k]].date)
                                    '11/20/2020'
                                }</p>

                        </div>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        //}


        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: BLACK, marginBottom: '20px' }}>Vehicle Applications</p>
                    {this.state.showDocs ?
                        requirements : results}
                </div>
                {this.state.showDocs ?
                    <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                        <div className={styles.button2} style={{ backgroundColor: RED }} id={styles.buttonBottom} onClick={() => { this.setState({ showDocs: false }) }}>
                            <p className={styles.buttonText1}>Cancel</p>
                        </div>

                        <div className={styles.button2} style={{ backgroundColor: GREEN }} id={styles.buttonBottom} onClick={() => { }}>
                            <p className={styles.buttonText1}>Approve Vehicle</p>
                        </div>

                    </div> : <></>}

            </div>
        );
    };
};
export class DriverApplications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDocs: false,
            result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,],
            docList: [
                "Driver's licence",
                "Proof of work eligibility",
                "EPS background check",
                "Vehicle insurance",
                "Vehicle registration",
                "Vehicle inspection",
            ],
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    render() {
        let requirements = [];
        for (let i = 0; i < this.state.docList.length; i++)
            requirements.push(
                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_} onClick={() => { }}>
                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>{this.state.docList[i]}</p>
                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: GREEN }}>
                        <AiOutlineCheck color={WHITE} size={'15px'} />
                    </div>
                </div>
            );

        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        // if (this.state.result) {
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++)
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => { this.setState({ showDocs: true }) }}>
                        <p style={{ fontSize: '95%' }}>{'Martin Maddrazo'}</p>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '150px', justifyContent: 'space-between' }}>
                            <div className={styles.previousMessageDate}>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>
                                    {
                                        //dateformat(this.state.result[keys[k]].date)
                                        '11/20/2020'
                                    }</p>

                            </div>
                            <div style={{ width: '50px', height: '30px', backgroundColor: GREEN, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>S3</p>
                            </div>
                        </div>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        //}


        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: BLACK, marginBottom: '20px' }}>Driver Applications</p>
                    {this.state.showDocs ?
                        requirements : results}
                </div>
                {this.state.showDocs ?
                    <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                        <div className={styles.button2} style={{ backgroundColor: RED }} id={styles.buttonBottom} onClick={() => { this.setState({ showDocs: false }) }}>
                            <p className={styles.buttonText1}>Cancel</p>
                        </div>

                        <div className={styles.button2} style={{ backgroundColor: GREEN }} id={styles.buttonBottom} onClick={() => { }}>
                            <p className={styles.buttonText1}>Move to next stage</p>
                        </div>

                    </div> : <></>}

            </div>
        );
    };
};
export class Payments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    render() {


        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: BLACK }}>Payments</p>

                </div>

            </div>
        );
    };
};
export class ListOfRiders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idSearch: '',
            result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,],
            showSummary: false
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        // if (this.state.result) {
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++)
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => { this.setState({ showSummary: true }) }}>
                        <p style={{ fontSize: '95%' }}>{'Martin Maddrazo'}</p>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '260px', justifyContent: 'space-between' }}>
                            <div className={styles.previousMessageDate}>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>
                                    {
                                        //dateformat(this.state.result[keys[k]].date)
                                        'Joined at 11/20/2020'
                                    }</p>

                            </div>
                            <div style={{ width: '50px', height: '30px', backgroundColor: GREEN, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '-8px' }}>
                                <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>167</p>
                            </div>
                            <div style={{ width: '50px', height: '30px', backgroundColor: YELLOW, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>167</p>
                            </div>
                        </div>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        //}

        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                    {
                        this.state.showSummary ?
                            <>
                                <p className={styles.title} style={{ color: BLACK }}>{`Micheal Myers Summary`}</p>


                                <div className={styles.driverDashboardCont}>
                                    <div className={styles.driverDashboard_TE}>
                                        <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Total earnings</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: GREEN }}>$ 1345.90</p>
                                        </div>
                                    </div>
                                    <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                                    <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                                        <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Completed trips</p>
                                            <p className={styles.driverDashboard_BOXTEXT} >7</p>
                                        </div>

                                        <div className={styles.driverDashboard_BOX}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Average rating</p>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <p className={styles.driverDashboard_BOXTEXT} >4.6</p>
                                                <AiFillStar size={'15px'} style={{ marginLeft: '5px' }} />
                                            </div>
                                        </div>

                                        <div className={styles.driverDashboard_BOX}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Driver cancellations</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: RED }}>3</p>
                                        </div>

                                        <div className={styles.driverDashboard_BOX}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Rider cancellations</p>
                                            <p className={styles.driverDashboard_BOXTEXT} >17</p>
                                        </div>

                                        <div className={styles.driverDashboard_BOX} style={{ marginRight: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Passengers carried</p>
                                            <p className={styles.driverDashboard_BOXTEXT} >237</p>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.driverDashboardCont}>
                                    <div className={styles.driverDashboard_TE}>
                                        <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Email Address</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: GREEN, fontSize: '130%', fontFamily: 'Gilroy-Bold' }}>{'test@test.com'}</p>
                                        </div>
                                    </div>
                                    <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                                    <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                                        <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Phone number</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ fontSize: '130%', fontFamily: 'Gilroy-Bold' }}>+123456789</p>
                                        </div>

                                    </div>
                                </div>

                            </>
                            : <>
                                <p className={styles.title} style={{ color: BLACK }}>List of Riders</p>
                                <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <input
                                        type="text"
                                        placeholder="Search by email / userID"
                                        className={styles.searchInput}
                                        style={{ width: '48%' }}
                                        value={this.state.idSearch}
                                        onChange={event => {
                                            this.setState({ idSearch: event.target.value });
                                        }}
                                    />
                                </div>

                                {results}
                            </>
                    }

                </div>
                {
                    this.state.showSummary ?
                        <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                            <div className={styles.button2} style={{ backgroundColor: GREEN }} id={styles.buttonBottom} onClick={() => { this.setState({ showSummary: false }) }}>
                                <p className={styles.buttonText1}>Cancel</p>
                            </div>

                        </div> : <></>
                }
            </div>
        );
    };
};
export class ListOfDrivers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [1, 2, 3, 4, 5, 6, 7, 8, 9,],
            idSearch: '',
            showSummary: false
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        // if (this.state.result) {
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++)
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => { this.setState({ showSummary: true }) }}>
                        <p style={{ fontSize: '95%' }}>{'Martin Maddrazo'}</p>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '260px', justifyContent: 'space-between' }}>
                            <div className={styles.previousMessageDate}>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>
                                    {
                                        //dateformat(this.state.result[keys[k]].date)
                                        'Joined at 11/20/2020'
                                    }</p>

                            </div>
                            <div style={{ width: '50px', height: '30px', backgroundColor: GREEN, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '-8px' }}>
                                <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>167</p>
                            </div>
                            <div style={{ width: '50px', height: '30px', backgroundColor: RED, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>167</p>
                            </div>
                        </div>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        //}

        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: WHITE, marginTop: '20px' }}>
                    {
                        this.state.showSummary ?
                            <>
                                <p className={styles.title} style={{ color: BLACK }}>{`Micheal Myers Summary`}</p>


                                <div className={styles.driverDashboardCont}>
                                    <div className={styles.driverDashboard_TE}>
                                        <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Total earnings</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: GREEN }}>$ 1345.90</p>
                                        </div>
                                    </div>
                                    <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                                    <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                                        <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Completed trips</p>
                                            <p className={styles.driverDashboard_BOXTEXT} >7</p>
                                        </div>

                                        <div className={styles.driverDashboard_BOX}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Average rating</p>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <p className={styles.driverDashboard_BOXTEXT} >4.6</p>
                                                <AiFillStar size={'15px'} style={{ marginLeft: '5px' }} />
                                            </div>
                                        </div>

                                        <div className={styles.driverDashboard_BOX}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Driver cancellations</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: RED }}>3</p>
                                        </div>

                                        <div className={styles.driverDashboard_BOX}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Rider cancellations</p>
                                            <p className={styles.driverDashboard_BOXTEXT} >17</p>
                                        </div>

                                        <div className={styles.driverDashboard_BOX} style={{ marginRight: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Passengers carried</p>
                                            <p className={styles.driverDashboard_BOXTEXT} >237</p>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.driverDashboardCont}>
                                    <div className={styles.driverDashboard_TE}>
                                        <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Email Address</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: GREEN, fontSize: '130%', fontFamily: 'Gilroy-Bold' }}>{'test@test.com'}</p>
                                        </div>
                                    </div>
                                    <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                                    <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                                        <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Phone number</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ fontSize: '130%', fontFamily: 'Gilroy-Bold' }}>+123456789</p>
                                        </div>

                                    </div>
                                </div>

                            </>
                            : <>
                                <p className={styles.title} style={{ color: BLACK }}>List of Drivers</p>
                                <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <input
                                        type="text"
                                        placeholder="Search by email / userID"
                                        className={styles.searchInput}
                                        style={{ width: '48%' }}
                                        value={this.state.idSearch}
                                        onChange={event => {
                                            this.setState({ idSearch: event.target.value });
                                        }}
                                    />
                                </div>

                                {results}
                            </>
                    }

                </div>
                {
                    this.state.showSummary ?
                        <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                            <div className={styles.button2} style={{ backgroundColor: GREEN }} id={styles.buttonBottom} onClick={() => { this.setState({ showSummary: false }) }}>
                                <p className={styles.buttonText1}>Cancel</p>
                            </div>

                        </div> : <></>
                }
            </div>
        );
    };
};
function timeAndDate(time, month, year) {
    let slash1 = 0, slash2 = 0, slash3 = 0;
    for (let k = 0; k < time.length; k++) {
        if (time.charAt(k) == '-')
            slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;
    }

    const HOUR = Number(time.substring(slash1 + 1, slash2)) == 0 ? 12 : Number(time.substring(slash1 + 1, slash2)) > 12 ? Number(time.substring(slash1 + 1, slash2)) - 12 : Number(time.substring(slash1 + 1, slash2));
    const MIN = Number(time.substring(slash2 + 1, slash3)) < 10 ? `0` + time.substring(slash2 + 1, slash3) : Number(time.substring(slash2 + 1, slash3));
    const MERIDIAN = Number(time.substring(slash1 + 1, slash2)) < 12 ? 'AM' : 'PM';
    const DAY = time.substring(0, slash1);
    const MONTH = M.indexOf(month) + 1;
    const formattedDate = `${DAY}/${MONTH}/${year}, ${HOUR}:${MIN} ${MERIDIAN}`;

    return (formattedDate);
};