import Head from 'next/head';
import styles from './s/articles/layout.module.css';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Loader from 'react-loader-spinner';
import firebase from 'firebase';
import { resetPassword, emailFormat } from '../functions/functions';
import ShareIcons from '../functions/shareIcons';
import Router from 'next/router';
import axios from 'axios'
export default class index extends React.Component {
    static async getInitialProps({ query }) {
        const { mode, oobCode, email } = query;

        return {
            mode: mode,
            oobCode: oobCode,
            email: email,
        }
    }

    constructor() {
        super();

        this.state = {
            password: '',
            confirmPassword: '',
            loading: false,
            errorMessage: '',

            validationFailed: false,
            validationCompleted: false,
        };
    };
    componentDidMount() {
        if (this.props.mode == 'verifyEmail' && this.props.email) {
            const email = this.props.email;
            firebase.database().ref(`emailList/${emailFormat(email, 'emailToString')}`)
                .once('value', snapshot => {
                    if (snapshot.val())
                        axios.post(`https://us-central1-perch-01.cloudfunctions.net/verifyEmailAndPhoneNumber`, { type: 'email', userID: snapshot.val() })
                            .then(() => { this.setState({ validationCompleted: true, }) })
                            .catch(error => { this.setState({ errorMessage: error.message, validationFailed: true, }) })
                    else
                        this.setState({ errorMessage: 'This user does not exist', validationFailed: true })
                })
                .catch(error => {
                    this.setState({ errorMessage: error.message, validationFailed: true })
                });
        };
    };
    render() {
        const { mode, oobCode, email } = this.props;
        let title = '',
            subtitle = '',
            pageTitle = '',
            content = <></>;

        switch (mode) {
            case 'resetPassword': {

                pageTitle = 'Reset Password';
                title = 'Reset your password form';
                subtitle = 'Enter your new password and confirm it below.';
                content = <>
                    <input type="password"
                        placeholder="Enter new password"
                        className={styles.contactUsEmail}
                        value={this.state.password}
                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                    />

                    <input type="password"
                        placeholder="Re-enter your new password"
                        className={styles.contactUsEmail}
                        value={this.state.confirmPassword}
                        onChange={(event) => { this.setState({ confirmPassword: event.target.value }) }}
                    />
                </>;

            } break;
            case 'recoverEmail': {
                pageTitle = 'Recover Email';

            } break;
            case 'verifyEmail': {
                pageTitle = 'Verify Email';
                title = 'Verify your email';
                if (this.state.validationCompleted)
                    subtitle = `Your email, ${email} has been verified`;
                else if (this.state.validationFailed)
                    subtitle = 'Email verification failed. Please contact us for further assistance';
                else
                    subtitle = 'Verifying...';
            } break;
        }

        return (
            <div className={styles.container}>
                <Head>
                    <title>{`${pageTitle} | Perch`}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="theme-color" content="#ffffff" />
                    <html lang="en"></html>
                </Head>
                <Header />
                <img src="/articlesPageBack1.svg" alt="Perch Carpool" className={styles.mainPageBack1} />
                <div className={styles.body}>

                    <div className={styles.c_} style={{ marginTop: '15px', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center', }}>
                        <p className={styles.t1} style={{ margin: '0px' }}>{title}</p>
                        <ShareIcons />
                    </div>

                    {/* <p className={styles.subTitle} >{subtitle}</p> */}
                    <div className={styles.contactUsCont} style={{ paddingBottom: '20px' }}>
                        <p className={styles.contactUsTitle} style={{ marginTop: '20px', marginBottom: '0px' }}>{subtitle}</p>
                        {content}
                        <p className={styles.em} style={{ marginTop: '20px', marginBottom: '0px' }}>{this.state.errorMessage}</p>
                    </div>
                    {mode == 'resetPassword' ?
                        <div className={styles.contactUsLC}>
                            <a className={styles.button2}
                                onClick={() => {
                                    switch (mode) {
                                        case 'resetPassword': {
                                            if (this.state.password == '')
                                                this.setState({ errorMessage: 'Please enter a new password' });
                                            else if (this.state.confirmPassword != this.state.password)
                                                this.setState({ errorMessage: 'Passwords do not match' });
                                            else
                                                resetPassword.call(this, oobCode, this.state.password, email);
                                        } break;
                                        case 'recoverEmail': {

                                        } break;
                                        case 'verifyEmail': {

                                        } break;
                                    }

                                }}>
                                {this.state.loading ?
                                    <Loader
                                        type="TailSpin"
                                        color={'#ffffff'}
                                        height={'20px'}
                                        width={'20px'} /> :
                                    <p className={styles.buttonText2}>Reset password</p>}
                            </a>

                        </div> : <></>}
                </div>
                <Footer />
            </div>
        )

    }
}
