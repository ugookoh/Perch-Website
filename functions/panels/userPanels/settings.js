import axios from 'axios';
import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { GiClick } from 'react-icons/gi';
import { RiShieldCheckFill } from 'react-icons/ri';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    changePassword,
    deleteAccount,
    sendVerification,
    colors
} from '../../functions';
import styles from '../panel_layout.module.css';


export default class Settings extends React.Component {
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
                    <p className={styles.title} style={{ color: colors.BLACK, marginBottom: '15px' }}>{`User details`}</p>

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
                                <RiShieldCheckFill className={styles.settingsVerifyOrNotIcon} color={colors.WHITE} />
                            </div> :
                            <div className={styles.pickPaymentSelected}
                                style={{ backgroundColor: '#FF4040' }}
                                id={styles.inputSettingCont_R_VERIFYNOW}
                                onClick={() => { this.sendVerificationCode('email') }}
                            >
                                <p className={styles.buttonText1} id={styles.settingsVerifyOrNot}>Verify Now</p>
                                <GiClick className={styles.settingsVerifyOrNotIcon} color={colors.WHITE} />
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
                                <RiShieldCheckFill className={styles.settingsVerifyOrNotIcon} color={colors.WHITE} />
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
                                <GiClick className={styles.settingsVerifyOrNotIcon} color={colors.WHITE} />
                            </div>}
                    </div>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <p
                            onClick={() => { this.setState({ toShow: 'changePassword' }) }}
                            className={styles.changePasswordButton}
                            style={this.props.type ? { color: colors.BLUE } : {}}>Change Password</p>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: colors.RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px' }}
                            onClick={() => { this.setState({ toShow: 'whyDeleteAccount' }) }}
                        >
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Delete Account</p>
                        </div>
                    </div>
                </>);
            } break;
            case 'changePassword': {
                content = (<>
                    <p className={styles.title} style={{ color: colors.BLACK }}>Change Password</p>
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
                            style={{ backgroundColor: colors.RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => {
                                if (!this.state.loading)
                                    this.setState({ toShow: 'default', errorMessage: '', currentPassword: '', newPassword: '', confirmNewPassword: '' });
                            }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? colors.BLUE : colors.GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
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
                                    color={colors.WHITE}
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
                    <p className={styles.title} style={{ color: colors.BLACK }}>{`Verify your ${this.state.toVerify}`}</p>
                    <p className={styles.text} style={{ color: colors.BLACK }}>
                        Enter the code sent to <span style={{ color: this.props.type == 'Driver' ? colors.BLUE : colors.GREEN }}>{
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
                        <p className={styles.text} style={{ color: colors.BLACK, fontSize: '80%' }}>
                            Didn't get a code yet? <span
                                id={styles.resendCodeSettings}
                                onClick={() => { this.sendVerificationCode(this.state.toVerify == 'email' ? 'email' : 'phoneNumber') }}
                                style={{ color: colors.BLUE_TEXT }}>Resend</span>
                        </p> :
                        <p className={styles.text} style={{ color: colors.BLACK, fontSize: '80%' }}>
                            Resend in <span style={{ color: colors.BLUE_TEXT }}>{` 0:${('0' + this.state.timer).slice(-2)}`}</span>
                        </p>}
                    <p className={styles.em}>{this.state.errorMessage}</p>
                    <div className={styles.enterKilometerDiv} id={styles.inputSettingCont__} >
                        <div className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: colors.RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => { this.setState({ toShow: 'default', errorMessage: '' }) }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? colors.BLUE : colors.GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
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
                                    color={colors.WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1} id={styles.deleteAccountButton}>Verify</p>}
                        </div>
                    </div>
                </>);
            } break;
            case 'whyDeleteAccount': {
                content = (<>
                    <p className={styles.title} style={{ color: colors.BLACK }}>Are you sure you would like to delete your account?</p>
                    <p className={styles.text} style={{ color: colors.BLACK }}>
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
                            style={{ backgroundColor: colors.RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
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
                            style={{ backgroundColor: this.props.type == 'Driver' ? colors.BLUE : colors.GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => { this.setState({ toShow: 'default', errorMessage: '', deleteAccountReason: '' }) }}>
                            <p className={styles.buttonText1} id={styles.deleteAccountButton}>Cancel</p>
                        </div>
                    </div>
                </>);
            } break;
            case 'logInToDeleteAccount': {
                content = (<>
                    <p className={styles.title} style={{ color: colors.BLACK }}>We are sorry to see you leave Perch</p>
                    <p className={styles.text} style={{ color: colors.BLACK }}>
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
                            style={{ backgroundColor: colors.RED, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
                            onClick={() => {
                                if (!this.state.loading)
                                    deleteAccount.call(this,
                                        this.state.email1,
                                        this.state.password1);
                            }}>
                            {this.state.loading ?
                                <Loader
                                    type="TailSpin"
                                    color={colors.WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1} id={styles.deleteAccountButton}>Delete Account</p>
                            }
                        </div>
                        <div
                            className={styles.button1}
                            id={styles.deleteAccountButton_}
                            style={{ backgroundColor: this.props.type == 'Driver' ? colors.BLUE : colors.GREEN, maxWidth: 'initial', height: '40px', minHeight: 'initial', margin: '0px', width: '49%' }}
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

                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', marginBottom: '150px' }}>
                    <p className={styles.title} style={{ color: colors.BLACK }}>Rider settings</p>
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