import Head from 'next/head';
import styles from './layout.module.css';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Router from 'next/router';
import ShareIcons from '../../../functions/shareIcons';
import firebase from 'firebase';
import { colors } from '../../../functions/functions';

export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
            perchKilometerForReferral: 0,
            perchKilometerForSignUp: 0,
        };
    };
    componentDidMount() {
        firebase.database().ref('perchKilometerForReferral').once('value', perchKilometerForReferral => {
            this.setState({ perchKilometerForReferral: perchKilometerForReferral.val() });
        }).catch(error => { console.log(error.message) });
        firebase.database().ref('perchKilometerForSignUp').once('value', perchKilometerForSignUp => {
            this.setState({ perchKilometerForSignUp: perchKilometerForSignUp.val() });
        }).catch(error => { console.log(error.message) });
    };
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Promos and Freebies | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="theme-color" content="#ffffff" />
                    <html lang="en"></html>
                </Head>
                <Header loggedIn={this.state.loggedIn} />
                <img src="/articlesPageBack1.svg" alt="Perch Carpool" className={styles.mainPageBack1} />
                <div className={styles.body}>

                    <div className={styles.c_} style={{ marginTop: '15px', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center', }}>
                        <p className={styles.t1} style={{ margin: '0px' }}>Promos and Freebies</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle}>{`We love to share here are Perch! Here are a few promotions and freebies we are currently offering`}</p>
                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Bold', textDecoration: 'underline' }}>Referral promotions</span><br />
                        We are giving out <span style={{ fontFamily: 'Gilroy-Semibold', color: colors.GREEN }}>{this.state.perchKilometerForReferral} free Perch kilometres</span> to users who get friends to sign up for a Perch account using their unique referral code. The user gets their free kilometres after their friend signs up and completes their first paid ride with Perch. And there’s no limit to this, so the more friends you share your referral code with, the more free kilometres you get! You can find your referral code at the “<span style={{ fontFamily: 'Gilroy-Medium', }}>Get free rides</span>” section of the menu drawer in the Perch app or the Perch website dashboard. Basically wherever you see this paper plane icon.
                    </p>
                    <img
                        style={{ marginTop: 20 }}
                        src={`/referralCodeImage.svg`}
                        alt={'referralCodeImage'}
                        className={styles.referralCodeImage}
                    />
                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Bold', textDecoration: 'underline' }}>Sign Up promotions</span><br />
                        For a limited time, we are giving out <span style={{ fontFamily: 'Gilroy-Semibold', color: colors.GREEN }}>{this.state.perchKilometerForSignUp} free Perch kilometres</span> for every user who signs up for a Perch account. Whether or not you use a referral code to sign up, you still get this free bonus to test out Perch! So tell your friends and let them enjoy the free rides.
                    </p>
                    <img
                        style={{ marginTop: 20 }}
                        src={`/sharingGiftReferral.svg`}
                        alt={'sharingGiftReferral'}
                        className={styles.sharingGiftReferral}
                    />

                </div>
                <Footer />
            </div>
        )

    }
}
