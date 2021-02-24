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
                    <title>{`Help & FAQ | Perch`}</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>{`Help & FAQ`}</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle} >{`Click on a topic below to help answer any questions regarding the Perch platform. Contact us if you don’t see the help you need for us to provide you with further assistance.`}</p>
                    <p className={styles.textBox} style={{ lineHeight: '190%' }}>
                        <span style={{ fontFamily: 'Gilroy-Semibold', }}>Rider topics</span><br />
                        • <a className={styles.faqChoice} href='/s/articles/booking_a_ride_and_ride_controls'>How to book a ride</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/scheduling_rides'>How to schedule a trip for riders</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/joint_rides'>Joint rides</a><br /><br />

                        <span style={{ fontFamily: 'Gilroy-Semibold', }}>Driver topics</span><br />
                        • <a className={styles.faqChoice} href='/s/articles/steps_to_becoming_a_perch_driver'>Steps to becoming a Perch driver</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/starting_a_driver_trip'>How to start a trip</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/driver_controls'>Driver app controls</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/scheduling_driver_trips'>Scheduling a driver trip</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/procedures_for_taking_a_picture'>Procedures for taking a picture of your vehicle</a><br /><br />

                        <span style={{ fontFamily: 'Gilroy-Semibold', }}>Payment and Disputes</span><br />
                        • <a className={styles.faqChoice} href='/s/articles/how_prices_are_estimated'>How prices are estimated</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/refunds_and_disputes'>Refunds and disputes</a><br /><br />

                        <span style={{ fontFamily: 'Gilroy-Semibold', }}>Other topics</span><br />
                        • <a className={styles.faqChoice} href='/s/articles/how_perch_works'>How Perch works</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/why_should_you_join_perch'>Why should you use Perch?</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/why_should_you_be_a_perch_driver'>Why should you become a Perch driver?</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/guidelines_for_drivers_and_riders'>Guidelines for the Perch community</a><br />
                        • <a className={styles.faqChoice} href='/s/articles/available_locations'>Locations where Perch operates</a><br />
                    </p>
                    <div className={styles.lowerFAQImageCont}>
                        <img src={'/helpDesk.svg'} alt={'Perch Carpool'} className={styles.helpDesk} />
                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}
