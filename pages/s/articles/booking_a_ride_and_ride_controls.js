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
                    <title>{`Booking A Ride & Ride Controls | Perch`}</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>{`Booking a ride & ride controls`}</p>
                        <div className={styles.shareIcon_C} style={{ margin: '0px' }}>
                            <img src="/facebook_share.svg" alt="Perch Facebook" className={styles.shareIcon} />
                            <img src="/google_share.svg" alt="Perch Google" className={styles.shareIcon} />
                            <img src="/twitter_share.svg" alt="Perch Twitter" className={styles.shareIcon} />
                            <img src="/instagram_share.svg" alt="Perch Instagram" className={styles.shareIcon} />
                        </div>
                    </div>

                    <p className={styles.subTitle} >{`These are the simple steps to booking a ride on Perch, along with how to use the tools, controls and information the app provides you with.`}</p>
                    <p className={styles.textBox}>
                        Perch connects you to drivers going in your direction.
                        In order to make this as cost efficient as possible, we decided to make it so that you might have to walk a little bit to get as close as you can to the driver’s path of travel.
                        Walking for extended distances is not a problem as most times you do not have to walk and even if you do , we only pair you with walks having around a maximum of 100-200 meters.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/brc1.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/brc2.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>

                    <p className={styles.textBox}>
                        To book a ride, open the Perch application and sign in or create a new account.
                        You would need to verify your phone number in order to ride with us.
                        After verifying, hit the <span style={{ fontFamily: 'Gilroy-Semibold' }}>“Where are you headed?”</span> button and enter your location and destination.
                        The location is your current destination by default.
                        You would then be loaded into a screen with different types of rides.
                        One car represents a one-step ride, two cars represent a two-step ride and three cars represent a three-step ride.
                        This simply means you might have to take one or more cars to get to your destination, much like the bus except it’s much faster, convenient and efficient.
                        This is so that you always have options for your commute. Most times, you would get a one-step trip to your destination unless it is very far.
                        See more on <a href='/s/articles/joint_rides'><span className={styles.faqChoice} style={{ fontFamily: 'Gilroy-Semibold' }}>joint rides here</span></a>. At this point, be sure to <span style={{ fontFamily: 'Gilroy-Semibold' }}>verify the number of seats you need</span> for the trip.
                        By default it is 1 passenger. Tap the number to change to the number you need.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/brc3.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/brc4.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                    <p className={styles.textBox}>
                        Click on an option to view the details of the ride.
                        Here you would see panels of useful information.
                        The map shows you the path the driver would carry you and the paths would walk.
                        The path the driver would carry you would be coloured while walking paths would be dotted.
                        The map also provides you with real time updates of the drivers locations.
                        After the map we provided a trip details tab and on scrolling down , you would see the trip breakdown tab which contains full details of your commute.
                        The trip breakdown includes the type of cars that would pick you up, the starting and stopping locations for the drivers ,the time of their arrival and the distance they would carry you.
                        It is with this distance that the <a href='/s/articles/why_should_you_join_perch'><span className={styles.faqChoice} style={{ fontFamily: 'Gilroy-Semibold' }}>cost of the ride is calculated</span></a>.
                        Click on any one of the driver’s tabs in the trip breakdown to see the driver profile of that car.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/brc5.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/brc6.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                    <p className={styles.textBox}>
                        Upon reviewing your trip, click on the <span style={{ fontFamily: 'Gilroy-Semibold' }}>“Request Perch”</span> button to send a request to the driver(s).
                        You would see a popup with the driver’s name and a loading icon.
                        Drivers then accept or decline your request.
                        You don’t get billed until every driver involved in your trip accepts your request.
                        When a driver accepts, the icon turns into a checkmark and if they all accept , your trip starts!
                        It’s as easy as that.
                        When your trip starts, you have access to a panel that gives you real-time updates based on your location, the time and the driver’s locations.
                        You also have access to a lot of useful information about your trip.
                        You can also call or message a driver about your trip.
                        If you happen to accidentally close the app, on reopening it, if your trip is still ongoing you’ll have access to the trip so you would not get confused about your trip details.
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}> Don’t forget to share your share code at the bottom of your screen with friends to receive free kilometres! </span>
                        When your trip is completed, you can now rate your drivers and return to the home screen.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/brc7.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/brc8.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}
