import Head from 'next/head';
import styles from './layout.module.css';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Router from 'next/router';
import ShareIcons from '../../../functions/shareIcons';


export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
        };
    };
    componentDidMount() {

    };
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Refunds and Disputes | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>Refunds, Disputes and Trip Issues</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle}>{`We understand that sometimes things don't go as planned and we are here to help.`}</p>

                    <div className={styles.c_} style={{}}>
                        <div >
                            <p className={styles.t}>{`How to request refunds and resolve disputes`}</p>
                            <p className={styles.text}>{`Perch is commited to fostering a fair community for everyone using our app. To enforce this, we take a look at every trip cancellation and issue compensation / refunds accordingly. To file a complaint or let us know about something, please mail us via the "Contact Us" tab of your Perch app or the website`}</p>
                            <a className={styles.button1} href='/s/db/udash'>
                                <p className={styles.buttonText1}>{'Contact Us'}</p>
                            </a>
                        </div>
                        <img src="/refund.svg" alt="Perch Carpool" className={styles.map1Trip} />
                    </div>

                    <div className={styles.c} style={{ marginTop: '100px' }}>
                        <img src="/cancelTripPhone.svg" alt="Perch Carpool" className={styles.girlsJumpingGivingGifts} style={{ maxWidth: '375px' }} />

                        <div>
                            <p className={styles.t}>{`Cancellation and Refunds explained`}</p>
                            <p className={styles.text}>
                                <span style={{ fontFamily: 'Gilroy-SemiBold' }}>Cancellation conditions for immediate rides</span><br />
                                - You cancel more than 2 mins after booking your ride or your driver cancels after waiting for more than 3 minutes.<br />
                                - You cancelled a ride that has already started.<br />
                                - You might not get a refund if you cancel after going halfway through the trip or causing a dispute in the vehicle which lead to the trip being cancelled.<br />
                                - You cancelled a ride that has already started.<br /><br />

                                <span style={{ fontFamily: 'Gilroy-SemiBold' }}>Cancellation conditions for scheduled rides</span><br />
                                - You are not charged for cancelling a scheduled ride as long as you cancel it at least 10 minutes before the ride starts.<br /><br />

                                <span style={{ fontFamily: 'Gilroy-SemiBold' }}>Pending refunds and payments</span><br />
                                - Although we usually message you about your refund and what is going to happen, the refund can take anywhere from 1-4 business days to return to your original method of payment.<br />
                            </p>
                        </div>
                    </div>




                </div>
                <Footer />
            </div>
        )

    }
}
