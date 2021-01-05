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
                    <title>Scheduling Rides | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>Scheduling Rides</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle} >{`When your day gets too busy and you want to secure your ride home, you can schedule future rides with Perch. Here’s how.`}</p>
                    <p className={styles.textBox}>
                        To schedule your ride, click on the clock icon and select a time.
                        You can select any time from 15 minutes to 24 hours in advance.
                        If you pick a time closer than 15 mins in advance, it would default to the next day, take note of this when picking a ride.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/sr1.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/sr2.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>

                    <p className={styles.textBox}>
                        The results that would load up might not be at the exact same time you needed.
                        You would get results ranged anytime from 10 minutes before to 30 minutes after about the time you selected.
                        This is so you can see all your possible options and you can move earlier or later to make your commute.
                        All scheduled rides are always one-step trips.
                        This means that you would always get one ride to your destination.<br /><br />
                        Select an option and send a request to the driver.
                        You can send as many requests as you want to different drivers and you can see these requests on the <span style={{ fontFamily: 'Gilroy-Semibold' }}>“Scheduled Trips”</span> tab on the menu icon from the main screen.
                        Once a driver accepts your request, every other request would get deleted.
                        You can also cancel a request you sent out provided the driver has not accepted it
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/sr3.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/sr4.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                    <p className={styles.textBox}>
                        You can message and call your driver to discuss the details of the trip.
                        The button called <span style={{ fontFamily: 'Gilroy-Semibold' }}>”Start trip now”</span> only gets highlighted when the driver start their trip.
                        When this happens, you can start your trip as usual.
                        You would also get some notifications ahead of the time before you start.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/sr5.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/sr6.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}
