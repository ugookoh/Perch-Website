import Head from 'next/head';
import styles from './layout.module.css';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Router from 'next/router';

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
                    <title>Scheduling Driver Trips | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" href="/favicon.ico" />
                    <html lang="en"></html>
                </Head>
                <Header loggedIn={this.state.loggedIn} />
                <img src="/articlesPageBack1.svg" alt="Perch Carpool" className={styles.mainPageBack1} />
                <div className={styles.body}>

                    <div className={styles.c_} style={{ marginTop: '15px', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center', }}>
                        <p className={styles.t1} style={{ margin: '0px' }}>Scheduling driver trips</p>
                        <div className={styles.shareIcon_C} style={{ margin: '0px' }}>
                            <img src="/facebook_share.svg" alt="Perch Facebook" className={styles.shareIcon} />
                            <img src="/google_share.svg" alt="Perch Google" className={styles.shareIcon} />
                            <img src="/twitter_share.svg" alt="Perch Twitter" className={styles.shareIcon} />
                            <img src="/instagram_share.svg" alt="Perch Instagram" className={styles.shareIcon} />
                        </div>
                    </div>

                    <p className={styles.subTitle} >{`Sometimes you want to schedule your commutes beforehand in order to get more riders to tag along. This is how you do it.`}</p>
                    <p className={styles.textBox}>
                        Scheduling rides are very simple with Perch. By scheduling rides in advance, you maximize your potential to get as many riders as possible.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/sdt1_.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/sdt2_.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>

                    <p className={styles.textBox}>
                        After hitting the <span style={{ fontFamily: 'Gilroy-Semibold' }}>“Hello, where are you headed?”</span> button on the main screen, enter your destination and hit the switch on the trip breakdown screen.
                        You would have the option to schedule the time from 15 minutes to 24 hours in advance.
                        Then you can schedule the trip.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/sdt3_.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/sdt4_.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                    <p className={styles.textBox}>
                        To see your trip, on the menu on the main screen, you can see the <span style={{ fontFamily: 'Gilroy-Semibold' }}>“Scheduled Trip”</span> panel.
                        If you check that you would see your scheduled trip.
                        You can only schedule one trip at a time.<br />
                        You can hit <span style={{ fontFamily: 'Gilroy-Semibold' }}>“Cancel trip”</span> button to cancel the scheduled trip.
                        You can only cancel the trip if you have no pending requests and no riders awaiting pickup.
                        You can use <span style={{ fontFamily: 'Gilroy-Semibold' }}>“Start trip”</span> to start your trip but you can only start a trip 5 minutes in advance.
                        Once you start your trip, your riders can then start their trips as well.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/sdt5_.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/sdt6_.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                    <p className={styles.textBox}>
                        You have a status switch.
                        If it is active, you would keep receiving requests but if you set it to inactive, you would no longer receive requests.
                        You also have the <span style={{ fontFamily: 'Gilroy-Semibold' }}>Pending Request</span> and <span style={{ fontFamily: 'Gilroy-Semibold' }}>Accepted Requests</span> tabs.
                        All riders that send requests appear on the pending request tabs and the riders you accept appear on the accepted request tab.
                        You can see how to accept and decline requests at the Pending Request section <a href='/s/articles/driver_controls'><span className={styles.faqChoice} style={{ fontFamily: 'Gilroy-Semibold' }}>here</span></a>.
                        All requests from the riders must be accepted at least 5 minutes before the trip starts or else it would be cancelled and you might not receive requests from that user any more.
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}> Always accept or decline requests</span>.
                        There is no timeout for requests made to scheduled trips.<br /><br />
                        New requests would not be received 5 minutes prior to the starting time of the trip. On starting the trip, you would be navigated to the Navigations page where your carpooling
                        continues as expected. <a href='/s/articles/driver_controls'><span className={styles.faqChoice} style={{ fontFamily: 'Gilroy-Semibold' }}>To see how to use the driver controls , click here</span></a>.
                    </p>
                </div>
                <Footer />
            </div>
        )

    }
}
