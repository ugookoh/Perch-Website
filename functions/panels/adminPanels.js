import Head from 'next/head';
import styles from './panel_layout.module.css';
import React from 'react';
import Router from 'next/router';
import { MdContentCopy } from 'react-icons/md';
import { BiStopCircle, } from 'react-icons/bi';
import { BsClockHistory, BsCloudUpload } from 'react-icons/bs';
import { AiOutlineRight, AiOutlineClose, AiFillStar, AiOutlineCamera, AiOutlineCheck } from 'react-icons/ai';
import { RiShieldCheckFill } from 'react-icons/ri';
import { VscCalendar } from 'react-icons/vsc';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CgAdd } from 'react-icons/cg';
import { GiClick } from 'react-icons/gi';
import Loader from 'react-loader-spinner'
import DatePicker from "react-datepicker";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-datepicker/dist/react-datepicker.css";
const [GREEN, WHITE, GREY, BLACK, RED, BLUE_TEXT, BLUE] = ['#4EB848', '#FFFFFF', '#959AAC', '#000000', '#FF0000', '#284ED6', '#1970A7'];
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
    constructor() {
        super();

        this.state = {
            result: true,
            date: new Date().getTime(),
        };
    }
    render() {
        let trips = [];
        for (let i = 0; i < 6; i++) {
            trips.push(
                <Trip lastItem={i == 5} type='Rider' />
            );
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
                                onChange={date => { this.setState({ date: date }); }}
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
                                    Surprisingly, You haven't booked any rides during this time.
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
    constructor() {
        super();

        this.state = {
            topic: 'unselected',
        };
    }
    render() {
        return (
            <div className={styles.cont}>

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
                        <option value="Enter a problem">Enter a problem</option>
                        <option value="Enter a problem">Enter a problem</option>
                        <option value="Enter a problem">Enter a problem</option>
                    </select>

                    <textarea type="text" placeholder="Enter your message here" className={styles.contactUsContent} />
                </div>

                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '150px' }}>
                    <a className={styles.button1} id={styles.sendMessageContactUS} style={this.props.type == 'Driver' ? { backgroundColor: BLUE } : {}}>
                        <p className={styles.buttonText1}>Send Message</p>
                    </a>
                    <p className={styles.contactUsLasttext}>
                        We responds to your queries via user mails
                    </p>
                </div>
            </div>
        );
    }
};
export class Settings extends React.Component {
    constructor() {
        super();

        this.state = {
            toShow: 'default',//default, changePassword, verify, whyDeleteAccount,logInToDeleteAccount
        };
    };

    render() {
        let content = <></>;
        switch (this.state.toShow) {
            case 'default': {
                content = (<>
                    <p className={styles.title} style={{ color: BLACK, marginBottom: '15px' }}>{`User details`}</p>

                    <div className={styles.enterKilometerDiv} style={{ margin: '0px', width: '100%' }}>
                        <input type="text" placeholder="First Name" className={styles.inputPaymentPanel} id={styles.inputSettings} style={{ width: '49%', margin: '0px' }} />
                        <input type="text" placeholder="Last Name" className={styles.inputPaymentPanel} id={styles.inputSettings} style={{ width: '49%', margin: '0px' }} />
                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="text" placeholder="Email Address" className={styles.inputPaymentPanel} id={styles.inputSettingCont_L} />
                        <div className={styles.pickPaymentSelected} style={{ backgroundColor: this.props.type == 'Driver' ? '#39A2E5' : '#5EEF56', }} id={styles.inputSettingCont_R}>
                            <>
                                <p className={styles.buttonText1} id={styles.settingsVerifyOrNot}>Verified</p>
                                <RiShieldCheckFill className={styles.settingsVerifyOrNotIcon} color={WHITE} />
                            </>
                        </div>
                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="text" placeholder="Phone Number" className={styles.inputPaymentPanel} id={styles.inputSettingCont_L} />
                        <div className={styles.pickPaymentSelected} style={{ backgroundColor: '#FF4040' }} id={styles.inputSettingCont_R}>
                            <>
                                <p className={styles.buttonText1} id={styles.settingsVerifyOrNot}>Verify Now</p>
                                <GiClick className={styles.settingsVerifyOrNotIcon} color={WHITE} />
                            </>
                        </div>
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
                        <input type="text" placeholder="Current Password" className={styles.inputPaymentPanel} id={styles.inputSettingCont_L} style={{ width: '100%' }} />

                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="text" placeholder="New Password" className={styles.inputPaymentPanel} id={styles.inputSettingCont_L} style={{ width: '100%' }} />

                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="text" placeholder="Confirm New Password" className={styles.inputPaymentPanel} id={styles.inputSettingCont_L} style={{ width: '100%' }} />

                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <div className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => { this.setState({ toShow: 'default' }) }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? BLUE : GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                        >
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Change Password</p>
                        </div>
                    </div>
                </>);
            } break;
            case 'verify': {
                content = (<>
                    <p className={styles.title} style={{ color: BLACK }}>{`Verify your phone number`}</p>
                    <p className={styles.text} style={{ color: BLACK }}>
                        Enter the code sent to <span style={{ color: this.props.type == 'Driver' ? BLUE : GREEN }}>{`(123)-456-7890`}</span>
                    </p>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="text" placeholder="Enter Code" className={styles.inputPaymentPanel} id={styles.inputSettingCont_L} style={{ width: '100%' }} />
                    </div>
                    <p className={styles.text} style={{ color: BLACK, fontSize: '80%' }}>
                        Didn't get a code yet?  <span id={styles.resendCodeSettings} style={{ color: BLUE_TEXT }}>Resend</span>
                    </p>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <div className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => { this.setState({ toShow: 'default' }) }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? BLUE : GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                        >
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Verify</p>
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
                    <textarea type="text" placeholder="Enter your message here" className={styles.contactUsContent} style={{ width: '100%' }} />


                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <div className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => { this.setState({ toShow: 'default' }) }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? BLUE : GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                        >
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Delete Account</p>
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
                        <input type="text" placeholder="Email" className={styles.inputPaymentPanel} id={styles.inputSettingCont_L} style={{ width: '100%' }} />
                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont_}>
                        <input type="text" placeholder="Password" className={styles.inputPaymentPanel} id={styles.inputSettingCont_L} style={{ width: '100%' }} />
                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <div className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Delete Account</p>
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? BLUE : GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => { this.setState({ toShow: 'default' }) }}
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
                            <img src="/doggyProfilePicture.svg" className={styles.doggyProfilePicture} />
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
    constructor() {
        super();


    }
    render() {
        if (this.props.type == 'Rider')
            return (
                <>
                    <div id={styles.tripPanelCont} >
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px' }}>
                            <p className={styles.tripPanelTitle}>{`3-leg trip`}</p>
                            <p className={styles.tripPanelTime}>{`11/20/2017`}</p>
                        </div>

                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: GREEN }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '20px' }}>
                            <HiOutlineLocationMarker color={GREEN} style={{ margin: '0px', marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{`10012 87 Ave Northwest`}</p>
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '10px' }}>
                            <BiStopCircle color={GREEN} style={{ marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{`University of Alberta`}</p>
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: GREY, height: '1px', marginTop: '17px' }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', marginTop: '10px', marginBottom: '15px' }}>
                            <p className={styles.tripPanelTitle} style={{ fontFamily: 'Gilroy-Medium', margin: '0px' }}>{`8.9 kilometers`}</p>
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
        else if (this.props.type == 'Driver')
            return (
                <>
                    <div id={styles.tripPanelCont} >
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px' }}>
                            <p className={styles.tripPanelTitle}>{`29 passengers`}</p>
                            <p className={styles.tripPanelTime}>{`11/20/2017`}</p>
                        </div>

                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: BLUE, height: '10px', }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '20px' }}>
                            <HiOutlineLocationMarker color={BLUE} style={{ margin: '0px', marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{`10012 87 Ave Northwest`}</p>
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '10px' }}>
                            <BiStopCircle color={BLUE} style={{ marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{`University of Alberta`}</p>
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: GREY, height: '1px', marginTop: '17px' }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', marginTop: '10px', marginBottom: '15px' }}>
                            <p className={styles.tripPanelTitle} style={{ fontFamily: 'Gilroy-Medium', margin: '0px' }}>{`289.4 kilometers`}</p>
                            <p className={styles.tripPanelCash} style={{ color: BLUE }} >{`$ 65.99`}</p>
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
    constructor() {
        super();

        this.state = {
            result: null,
            date: new Date().getTime(),
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ result: true })
        }, 3000);
    }
    render() {
        let trips = [];
        for (let i = 0; i < 6; i++) {
            trips.push(
                <Trip lastItem={i == 5} type='Driver' />
            );
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
                                onChange={date => { this.setState({ date: date }); }}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                            />
                        </div>
                        <p className={styles.contactUsLasttext} id={styles.tripPanelAlignMiddle} style={{ width: 'initial', fontSize: '80%', margin: '0px' }}>
                            To see the details of a trip please use the mobile app
                        </p>
                    </div>
                    {
                        this.state.result && this.state.result !== 'NORESULTS' ?
                            <div id={styles.tripPanelCont} >
                                <p className={styles.title} style={{ width: '95%', marginTop: '20px', fontSize: '100%' }}>Total Summary</p>
                                <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px', marginTop: '5px' }}>
                                    <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>{`Number of passengers`}</p>
                                    <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>
                                        {`16`} <span className={styles.driverTH_HIDESUMMARY}>passengers</span>
                                    </p>
                                </div>

                                <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px', marginTop: '5px' }}>
                                    <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>{`Total kilometers provided`}</p>
                                    <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>
                                        {`213`} <span className={styles.driverTH_HIDESUMMARY}>kilometers</span>
                                    </p>
                                </div>

                                <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px', marginTop: '10px', marginBottom: '15px' }}>
                                    <p className={styles.text} style={{ width: 'initial', marginTop: '0px', fontSize: '100%', fontFamily: 'Gilroy-Bold' }}>
                                        {`TOTAL MADE`}
                                    </p>
                                    <p className={styles.text} style={{ width: 'initial', marginTop: '0px', fontSize: '105%', color: BLUE, fontFamily: 'Gilroy-Bold' }}>
                                        {`$ 1256.90`}
                                    </p>
                                </div>
                            </div> :
                            <></>
                    }
                    {this.state.result ?
                        this.state.result == 'NORESULTS' ?
                            <div className={styles.tripPanelLoading} id={styles.tripPanelLoading_}>
                                <img src="/noResultsWoman.svg" className={styles.noResultsWoman} alt="No Results" />
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
    constructor() {
        super();

        this.state = {
            result: null,
            addVehicle: false,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ result: true })
        }, 3000);
    }
    render() {
        let vehicle = [];
        for (let i = 0; i < 6; i++) {
            vehicle.push(
                <Vehicle lastItem={i == 5} />
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
                                    <input type="text" placeholder={"Vehicle Make"} className={styles.inputPaymentPanel} style={{ width: '49%', margin: '0px' }} id={styles.inputPaymentPanel_ADD} />
                                    <input type="text" placeholder={"Vehicle Model"} className={styles.inputPaymentPanel} style={{ width: '49%', margin: '0px' }} id={styles.inputPaymentPanel_ADD} />
                                </div>
                                <div className={styles.enterKilometerDiv} style={{ marginTop: '10px', }}>
                                    <input type="text" placeholder={"Vehicle Year"} className={styles.inputPaymentPanel} style={{ width: '49%', margin: '0px' }} id={styles.inputPaymentPanel_ADD} />
                                    <input type="text" placeholder={"Vehicle Color"} className={styles.inputPaymentPanel} style={{ width: '49%', margin: '0px' }} id={styles.inputPaymentPanel_ADD} />
                                </div>
                                <input type="text" placeholder="Plate Number" className={styles.inputPaymentPanel} id={styles.inputPaymentPanel_ADD} style={{ marginTop: '10px' }} />
                                <div className={styles.driver_ADD_VEHICLE_LOWER}>

                                    <div className={styles.driver_ADD_VEHICLE_IMGUPLOAD}>
                                        <AiOutlineCamera className={styles.driverVehicle_CAMERA} />
                                        <p className={styles.driverVehicle_CAMERATEXT}>
                                            UPLOAD A PICTURE OF YOUR VEHICLE
                                        </p>
                                    </div>
                                    <div className={styles.driver_ADD_VEHICLE_IMG_GL}>
                                        <p className={styles.driverVehicle_GUIDELINES_CAM_TEXT}>Guidelines for taking a picture of your vehicle</p>
                                    </div>
                                    <div className={styles.driver_ADD_VEHICLE_DOCSUPLOAD}>
                                        <input type='file' ref={this.vehicleRegistrationRef} className={styles.driverVehicle_INPUT} />
                                        <input type='file' ref={this.vehicleInsuranceRef} className={styles.driverVehicle_INPUT} />
                                        <input type='file' ref={this.vehicleInspectionRef} className={styles.driverVehicle_INPUT} />

                                        <div className={styles.driverVehicle_UPLOADCONT} id={styles.driverVehicle_UPLOADCONT_}>
                                            <p className={styles.driverVehicle_UPLOADTEXT} >Upload vehicle registration</p>
                                            <BsCloudUpload size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={WHITE} />
                                        </div>

                                        <div className={styles.driverVehicle_UPLOADCONT}>
                                            <p className={styles.driverVehicle_UPLOADTEXT}>Upload vehicle insurance</p>
                                            <BsCloudUpload size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={WHITE} />
                                        </div>

                                        <div className={styles.driverVehicle_UPLOADCONT}>
                                            <p className={styles.driverVehicle_UPLOADTEXT}>Upload vehicle inspection</p>
                                            <BsCloudUpload size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={WHITE} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginLeft: '2.5%', width: '95%' }}>
                                <div className={styles.button2} style={{ backgroundColor: RED }} id={styles.buttonBottom} onClick={() => { this.setState({ addVehicle: false }) }}>
                                    <p className={styles.buttonText1}>Cancel</p>
                                </div>
                                <div className={styles.button2} style={{ backgroundColor: BLUE }} id={styles.buttonBottom}>
                                    <p className={styles.buttonText1}>Add vehicle</p>
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
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>Procedures for taking a picture of your car</p>
                        </div>
                        <AiOutlineRight color={GREY} style={{ minWidth: '20px' }} />
                    </a>
                    <div className={styles.sharedLine} style={{ marginTop: '10px', opacity: 0.5 }}></div>

                    <a className={styles.driverFAQCont} style={{ marginBottom: '5px' }} href='/s/articles/guidelines_for_drivers_and_riders'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
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
                    <p className={styles.title} style={{ color: BLACK }}>Weekly history</p>}

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
    constructor() {
        super();

        this.state = {
            verified: true,
        }
    }
    render() {
        return (
            <>
                <div id={styles.tripPanelCont_} style={{ overflow: 'hidden', flexDirection: 'row' }}>
                    <div className={styles.driverVehicle_PIC_CONT}>
                        <img src="/developmentCar.jpg" className={styles.driverVehicle_PIC} />
                    </div>
                    <p className={styles.driverVehicle_DESC}>
                        Color - {'Black'}<br />
                        Year - {'2017'}<br />
                        Make - {'Hyundai'}<br />
                        Model - {'Sonata'}
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
                    <p id={styles.driverVehiclePLATENUMBER}>{`HKA8PA-09`}</p>
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
        };
    };
    componentDidMount() {
    };
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
                        Enter your city to see if Perch is currently operating there.
                    </p>
                    <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px', marginBottom: '30px' }} >
                        <input type="text" placeholder="Enter your city" className={styles.inputPaymentPanel} style={{ width: '150px', margin: '0px', fontSize: '90%', border: '1px solid rgba(149, 154, 172, 0.5)' }} />
                        <div className={styles.button2} style={{ backgroundColor: GREEN, width: '80px', margin: '0px', marginLeft: '10px' }} id={styles.buttonBottom}>
                            <p className={styles.buttonText1}>Verify</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '150px' }}>
                    <a className={styles.button1} id={styles.sendMessageContactUS} >
                        <p className={styles.buttonText1}>Confirm</p>
                    </a>
                    <p className={styles.contactUsLasttext}>
                        Having issues? <span id={styles.driver_APP_CU1}>Contact Us</span>.
                    </p>
                </div>
                <div style={{ height: '100px', width: '20px', backgroundColor: 'transparent' }}></div>
            </div>
        )

    }
};
export class UploadDocuments extends React.Component {
    constructor() {
        super();

        this.state = {
            uploadDocs: false,
            s: [true],
        };
    };
    componentDidMount() {
    };
    render() {
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
                                <p className={styles.title} style={{ color: BLACK }}>{`Upload your driver's license`}</p>
                                <p className={styles.text} style={{ color: GREY }}>
                                    Documents can be submitted as a scanned pdf or a photograph of the document.<br />
                                    Pictures should be :<br />
                                    • Taken in a well place <br />
                                    • Show details clearly
                                </p>

                                <div className={styles.uploadDocumentIconCont}>
                                    <img src='/uploadDocumentIcon.svg' className={styles.uploadDocumentPIC} />
                                </div>

                            </>
                            :
                            <>
                                <p className={styles.title} style={{ color: BLACK }}>{`Upload Documents`}</p>
                                <p className={styles.text} style={{ color: GREY }}>
                                    All that is left to do is to submit the required documents and you’re on your way to becoming a Perch driver.
                                </p>

                                <p className={styles.title} style={{ color: GREY, fontSize: '95%', marginTop: '20px' }}>{`Required Documents`}</p>

                                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_}
                                    onClick={() => { this.setState({ uploadDocs: true }) }}>
                                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>Requirement</p>
                                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                                        {this.state.s[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                                    </div>
                                </div>

                                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_}>
                                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>Requirement</p>
                                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                                        {this.state.s[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                                    </div>
                                </div>

                                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_}>
                                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>Requirement</p>
                                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                                        {this.state.s[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                                    </div>
                                </div>

                                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_}>
                                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>Requirement</p>
                                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                                        {this.state.s[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                                    </div>
                                </div>

                                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_}>
                                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>Requirement</p>
                                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                                        {this.state.s[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                                    </div>
                                </div>

                                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_}>
                                    <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>Requirement</p>
                                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                                        {this.state.s[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                                    </div>
                                </div>
                            </>
                    }

                </div>
                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '150px' }}>
                    {this.state.uploadDocs ?
                        <div className={styles.driverFAQ_PICDESC} style={{ width: '100%', justifyContent: 'space-between' }}>
                            <a className={styles.button1} id={styles.sendMessageContactUS}
                                onClick={() => { this.setState({ uploadDocs: false }) }}
                                style={{ backgroundColor: RED, width: '48%' }}>
                                <p className={styles.buttonText1}>Cancel</p>
                            </a>
                            <a className={styles.button1} id={styles.sendMessageContactUS} style={{ width: '48%' }}>
                                <p className={styles.buttonText1}>Upload</p>
                            </a>
                        </div>
                        :
                        <a className={styles.button1} id={styles.sendMessageContactUS} >
                            <p className={styles.buttonText1}>Confirm</p>
                        </a>}
                    <p className={styles.contactUsLasttext}>
                        Having issues? <span id={styles.driver_APP_CU1}>Contact Us</span>.
                    </p>
                </div>
                <div style={{ height: '100px', width: '20px', backgroundColor: 'transparent' }}></div>
            </div>
        )

    }
};
export class ApplicationStatus extends React.Component {
    constructor() {
        super();

        this.state = {
            completed: [true],
        };
    };
    componentDidMount() {
    };
    render() {
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

                    <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px' }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.completed[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {this.state.completed[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                        </div>
                        <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px' }}>Submit Application</p>
                    </div>

                    <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px' }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.completed[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {this.state.completed[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                        </div>
                        <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px' }}>Upload Documents</p>
                    </div>

                    <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px' }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.completed[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {this.state.completed[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                        </div>
                        <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px' }}>We are verifying your documents</p>
                    </div>

                    <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px' }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.completed[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {this.state.completed[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                        </div>
                        <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px' }}>Final Assessment</p>
                    </div>

                    <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px' }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.completed[0] ? GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {this.state.completed[0] ? <AiOutlineCheck color={WHITE} size={'15px'} /> : <></>}
                        </div>
                        <p className={styles.text} style={{ color: GREY, width: 'initial', margin: '0px' }}>You can start driving</p>
                    </div>

                </div>

                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '150px' }}>
                    <p className={styles.contactUsLasttext}>
                        Having issues? <span id={styles.driver_APP_CU1}>Contact Us</span>.
                    </p>
                </div>
                <div style={{ height: '100px', width: '20px', backgroundColor: 'transparent' }}></div>            </div>
        )

    }
};