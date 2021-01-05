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
                    <title>Why Should You Join Perch | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>Why should you join Perch</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle}>{`Becoming a Percher has so many benefits especially with regards to your daily commute. Here are a few reasons why you should already be using Perch.`}</p>

                    <div className={styles.c_} style={{}}>
                        <div >
                            <p className={styles.t}>{`Go about your daily commute in a new better way.\nEnter Perch.`}</p>
                            <p className={styles.text}>{`Perch is a new carpooling solution aimed at streamlining commuters journeys by pairing them with the thousands of empty seats in the cars of drivers. You no longer have two options of either hailing a cab or using public transport .With our amazing app, Perch gives you an avenue to solve this by providing you with access to drivers going towards your destination. There are is no need for scheduling or booking beforehand as the booking process is as streamlined as possible, all you need to do is open the app and enter your destination and we pair all drivers currently on that path with you. They then pick you and drop you off at a very close distance to your destination !`}</p>
                            <a className={styles.button1} href='/s/articles/how_perch_works'>
                                <p className={styles.buttonText1}>How does Perch work?</p>
                            </a>
                        </div>
                        <img src="/map1Trip.svg" alt="Perch Carpool" className={styles.map1Trip} />
                    </div>

                    <div className={styles.c} style={{ marginTop: '100px' }}>
                        <img src="/girlsJumpingGivingGifts.svg" alt="Perch Carpool" className={styles.girlsJumpingGivingGifts} />

                        <div>
                            <p className={styles.t}>{`Daily carpooling has never been more affordable.`}</p>
                            <p className={styles.text}>{`Perch has no surge pricing and traffic factors are not considered in billing riders. Why? Because the drivers are already on their way there! It is at no extra cost to them ( except a couple of seconds ) to pick up a rider and continue their journey. Because of this, we can afford to make the price of carpooling very low yet keeping it at a level where drivers have enough incentive to carry riders along. Thus we bill riders at a fixed rate per kilometre. Not by time taken. So you always know the amount your trip would cost before you even start it and thus it is affordable enough for daily use. Every person entering a vehicle pays for the kilometres they’ll be taken.`}</p>
                        </div>
                    </div>

                    <div className={styles.c_} style={{ marginTop: '100px' }}>
                        <div>
                            <p className={styles.t}>{`Our incentives, offers and promos never end. Start getting free Perch rides now.`}</p>
                            <p className={styles.text}>{`In Perch we love making bold moves and are confident in our service. Every first ride with Perch is free  and the coupons and incentives never cease to come in, so expect regular freebies from us. Also did we mention how much we love sharing? Share the app with a friend and when they book their first ride, you get a guaranteed gift from Perch!`}</p>

                        </div>
                        <img src="/glassSavings.svg" alt="Perch Carpool" className={styles.glassSavings} />
                    </div>

                    <div className={styles.c} style={{ marginTop: '100px' }}>
                        <div className={styles.downloadContainer} id={styles.app2}>
                            <img src="/downloadAppStore.svg" alt="Perch Carpool" className={styles.appIcon} />
                            <img src="/downloadGooglePlay.svg" alt="Perch Carpool" className={styles.appIcon} />
                        </div>
                        <img src="/boxGreenLogo.svg" alt="Perch Carpool" className={styles.boxBlueLogo} />
                        <div className={styles.buttonC}>
                            <p className={styles.t}>{`Download the Perch app now`}</p>
                            <p className={styles.text}>{`The Perch app is the only way to book rides at the moment. It’s an amazing application that really streamlines the carpooling process in simple steps. However If you get confused and need some help, we have articles in the “Help & FAQ ” of the webpage. Download Perch and start commuting with ease.`}</p>
                            <div className={styles.downloadContainer} id={styles.app1}>
                                <img src="/downloadAppStore.svg" alt="Perch Carpool" className={styles.appIcon} />
                                <img src="/downloadGooglePlay.svg" alt="Perch Carpool" className={styles.appIcon} />
                            </div>
                        </div>

                    </div>


                </div>
                <Footer />
            </div>
        )

    }
}
