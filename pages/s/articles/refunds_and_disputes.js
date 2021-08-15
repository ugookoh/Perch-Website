import Head from 'next/head';
import React from 'react';
import { colors } from '../../../functions/functions';
import ShareIcons from '../../../functions/shareIcons';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './layout.module.css';

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
                <img src="/articlesPageBack1.svg" alt="articlesPageBack1" className={styles.mainPageBack1} />
                <div className={styles.body}>

                    <div className={styles.c_} style={{ marginTop: '15px', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center', }}>
                        <p className={styles.t1} style={{ margin: '0px' }}>Refunds, Disputes and Trip Issues</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle}>{`We love trips to be as smooth as possible, here are some conditions we have in place to ensure that.`}</p>
                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Bold', textDecoration: 'underline' }}>Cancellation policies</span><br />
                        Both drivers and riders can cancel trips at any time but there are conditions for cancellations so as to save and respect everyone’s time.
                        <br /><br />
                        <span style={{ fontFamily: 'Gilroy-Bold', textDecoration: 'underline' }}>For Riders</span><br />
                        • Cancellations at most 20 minutes after a scheduled trip has been booked would be refunded as long as the trip has not started<br />
                        • Cancellations at most 5 minutes after a regular trip has been booked would be partially  or fully refunded depending on where the driver is<br />
                        • Cancellations after entering the vehicle or starting the ride would not be refunded unless the driver was disrespectful or violated in some sort of way.<br />
                        • Cancellations and potentially a ban might happen for disrespect and violation from any party. We respect ourselves here.<br />
                        * Driver cancellations would be partially refunded if they had to wait to pick you up or fully refunded if they had to do cancel for whatever reason.<br />
                        <br /><br />
                        <span style={{ fontFamily: 'Gilroy-Bold', textDecoration: 'underline' }}>Refunds</span><br />
                        Any trip that gets cancelled is automatically reviewed by us and we then decide what conditions were met or violated. After this, we issue refunds if applicable. To discuss a trip with us, please use the <a href='/contact_us' target="_blank" className={styles.faqChoice} style={{ fontFamily: 'Gilroy-Semibold' }}>Contact Us</a> form.
                    </p>
                    <img
                        style={{ marginTop: 20 }}
                        src={`/handShakeGreen.svg`}
                        alt={'handShakeGreen'}
                        className={styles.handShakeGreen}
                    />




                </div>
                <Footer />
            </div>
        )

    }
}
