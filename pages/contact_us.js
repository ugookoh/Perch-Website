import Head from 'next/head';
import styles from './s/articles/layout.module.css';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Loader from 'react-loader-spinner';
import firebase from 'firebase';
import { sendFeedback } from '../functions/functions';
import ShareIcons from '../functions/shareIcons';


export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
            topic: 'unselected',
            userEmail: '',
            message: '',
            loading: false,
            errorMessage: ''
        };
    };
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
                firebase.database().ref(`users/${user.uid}/email`).once('value', (snapshot) => {
                    this.setState({ userEmail: snapshot.val() });
                }).catch(error => { console.log(error.message) })
            }
            else
                this.setState({ loggedIn: false });
        });
    };
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Contact Us | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>{`Contact Us`}</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle} >{`Hey there! Please feel free to send us any feedback or issues you might have with our service.`}</p>
                    <div className={styles.contactUsCont}>
                        <p className={styles.contactUsTitle}>Contact Us Form</p>
                        <select
                            value={this.state.topic}
                            className={styles.selectTopic}
                            onChange={(v) => { this.setState({ topic: v.target.value }) }}
                            style={this.state.topic === 'unselected' ? { color: 'rgba(112, 112, 112, 0.7)' } : {}}
                        >
                            <option value="unselected">(--Select a topic--)</option>
                            <option value="Give feedback about our services">Give feedback about our services</option>
                            <option value="Help with driver application">Help with driver application</option>
                            <option value="Missing item">Missing item</option>
                            <option value="Change your name">Change your name</option>
                            <option value="Report a driver">Report a driver</option>
                            <option value="Report a driver">Report a rider</option>
                            <option value="Work with us">Work with us</option>
                            <option value="Report a bug">Report a rider</option>
                            <option value="Other">Other</option>
                        </select>

                        <input type="text"
                            placeholder="Enter your email address"
                            className={styles.contactUsEmail}
                            value={this.state.userEmail}
                            onChange={(event) => { this.setState({ userEmail: event.target.value }) }} />

                        <textarea
                            type="text"
                            placeholder="Enter your message here"
                            className={styles.contactUsContent}
                            value={this.state.message}
                            onChange={(event) => { this.setState({ message: event.target.value }) }} />
                        <p className={styles.em}>{this.state.errorMessage}</p>
                    </div>
                    <div className={styles.contactUsLC}>
                        <a className={styles.button2}
                            onClick={() => {
                                if (this.state.userEmail == '')
                                    this.setState({ errorMessage: 'Please enter an email for us to response to' });
                                else
                                    sendFeedback.call(this, true);
                            }}>
                            {this.state.loading ?
                                <Loader
                                    type="TailSpin"
                                    color={'#ffffff'}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText2}>Send Message</p>}
                        </a>
                        <p className={styles.contactUsLasttext}>
                            We respond to your inquires via your email. We would not send you promotional emails unless you are already a signed up Perch user.
                        </p>
                    </div>


                </div>
                <Footer />
            </div>
        )

    }
}
