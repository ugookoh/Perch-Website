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
                    <title>Starting A Driver Trip | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>Starting a driver trip</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle} >{`Becoming a driver with Perch is very simple and straightforward. Here is how you start making money as you drive to your destination.`}</p>
                    <p className={styles.textBox}>
                        Now you have your driver account validated.
                        You can now start carrying fellow Perchers as you go about your daily commute.
                        To start, hit the “Hello, where are you headed?” button , select your destination.
                        As a driver, your starting point would always be your current location , unless you are scheduling a ride for the future, more on <a href='/s/articles/scheduling_driver_trips'><span className={styles.faqChoice} style={{ fontFamily: 'Gilroy-SemiBold' }}>scheduling rides here</span></a>.
                        Upon selecting your destination, you see a panel with the trip breakdown, the timing, the vehicle you are using and the maximum number of passengers you intend to carry at a time.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/sdt1.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/sdt2.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                    <p className={styles.textBox}>
                        The trip breakdown has the details of the trip.
                        The timing is used to either start trips now or some time in the future.
                        You can schedule trips from 15 minutes to 24 hours advance.
                        <a href='/s/articles/scheduling_driver_trips'> <span className={styles.faqChoice} style={{ fontFamily: 'Gilroy-SemiBold', }}>See how to schedule trips here.</span></a> If you are starting the trip immediately, leave the switch on and leave it on <span style={{ fontFamily: 'Gilroy-SemiBold', display: 'inline-flex' }}>“Right now”</span>.
                        The trip options has the default vehicle, you used in your application.
                        If you have more than 1 verified vehicle on file, you can change it here.
                        You can also add vehicles here or on the menu tab on the main screen.
                        The passengers option is for picking the maximum number of riders to be in your car at every point in time.
                        For example , if you set it to 2 passengers, you would only have 2 passengers in your vehicle at every pint in time.
                        You would still be able to pick and drop more than 2 people , but only 2 people would be in the car at one point in time.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/sdt3.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/sdt4.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                    <p className={styles.textBox}>
                        After starting the trip, you would be sent to the main screen where you can simply start your trip.
                        You would receive requests, see your riders awaiting pickups and also see where to drop off current riders.
                        Note that, <span style={{ fontFamily: 'Gilroy-Bold', }}> you must always follow the path provided to you by the app</span> because it is with this path that we pair you with riders going in your direction.
                        In order not to make this post too long, we wrote the driver controls for when a trip is started on another page.
                        Click here to view these driver controls.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/sdt5.png`} alt={'Perch Carpool'} id={styles.sdt5} className={styles.screenshot} />
                        <img src={`/sdt6.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}
