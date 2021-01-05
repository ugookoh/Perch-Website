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
                    <title>Driver Controls | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>Driver app controls</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle} >{`These are the controls for using the Perch Driver app after starting a trip. Read on to see more.`}</p>
                    <p className={styles.textBox}>
                        First off , this post is directed towards understanding the driver app and it’s controls after staring a trip so we assume that you have already read  <a href='/s/articles/starting_a_driver_trip'><span className={styles.faqChoice} style={{ fontFamily: 'Gilroy-SemiBold', }}>how to start a trip</span></a>.<br /><br />
                        The navigation screen can be broken down into 4 main parts,
                        the direction-navigation feature, the map and map button controls,
                        the request panel and the trip control buttons at the bottom.
                        It’s not half as complicated as it sounds, so let’s break this down.
                    </p>
                    <img src={`/dc1.png`} alt={'Perch Carpool'} className={styles.screenshot} />

                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Semibold', textDecoration: 'underline' }}>Controls</span><br />
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}>( 1 ) Navigation directions</span> : This shows step-by-step directions as you go about your trip. Note that , you must follow the path given for trips because it is with that path that we pair you with riders in your direction.<br />
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}>( 2 ) Mute /Unmute</span> : The navigation features text to speech capabilities so you can use this to mute or unmute the directions you get.<br />
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}>( 3 ) Next drop-off or pickup</span> : This shows you the closest pickup or drop-off to you. You can hit the find my location button to override it.<br />
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}>( 4 ) Go inactive</span> : This makes you inactive and you would no longer receive any new requests until you go active again. You must however complete any request you currently have.<br />
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}>( 5 ) End trip</span> : This button ends your trip and removes you from the map. You cannot end a trip without completing all your pickups and drop-offs.<br /><br />

                        <span style={{ fontFamily: 'Gilroy-Semibold', textDecoration: 'underline' }}>Rider requests</span><br />
                        The lower panel is where all the fun happens, it is divided into <span style={{ fontFamily: 'Gilroy-Semibold' }}>Pending Requests</span>, <span style={{ fontFamily: 'Gilroy-Semibold' }}>Awaiting Pickup</span> and <span style={{ fontFamily: 'Gilroy-Semibold' }}>Current Riders</span>. This is how you accept requests and manage these accepted requests.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/dc2.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/dc3.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Semibold', textDecoration: 'underline' }}>( 1 )  Pending Requests</span><br />
                        The first portion is the pending request.
                        Any requests from riders going in your direction would be placed there.
                        When you receive the request, a <span style={{ fontFamily: 'Gilroy-Semibold' }}>purple pin</span> would show up on the map and that means a pending pickup is there.
                        You can accept requests immediately or you can hit the “See Details” button to see the details of the trip where you can also accept it or decline it.
                        You have <span style={{ fontFamily: 'Gilroy-Semibold' }}>2 minutes</span> to accept or decline a pending request,
                        the timeout on a request shows this.
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}> You must accept or decline all requests</span> or you might be contacted as to why you are letting requests time out.
                        It is important to give riders a timely response as whenever possible to keep receiving trip requests.
                    </p>
                    <div className={styles._2screenshot}>
                        <img src={`/dc4.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                        <img src={`/dc5.png`} alt={'Perch Carpool'} className={styles.screenshot} />
                    </div>
                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Semibold', textDecoration: 'underline' }}>( 2 )  Awaiting Pickup</span><br />
                        This section is for riders that are currently awaiting pickup.
                        They are indicated on the map with a <span style={{ fontFamily: 'Gilroy-Semibold' }}>red pin</span>.
                        This is where you need to pick them up.
                        Make sure you hit the  <span style={{ fontFamily: 'Gilroy-Semibold' }}>“Start trip”</span> button when you are picking up the rider.
                        You also see a lot of information regarding what time to pick them up and the distance left until you can pick them up.
                        You also see a <span style={{ fontFamily: 'Gilroy-Semibold' }}>green pin</span> on the map which indicates the current location of a rider.
                        You can easily hit the rider’s name to see the current location of the driver and the drop-off or the pickup location.<br /><br />

                        <span style={{ fontFamily: 'Gilroy-Semibold', textDecoration: 'underline' }}>( 3 )  Current Riders</span><br />
                        These are riders that are already in your vehicle.
                        Hit the <span style={{ fontFamily: 'Gilroy-Semibold' }}>“Drop off”</span> button to drop the rider when you arrive at their destination.
                        You can see their destination on the map as a <span style={{ fontFamily: 'Gilroy-Semibold' }}>yellow pin</span>.
                        You can also see the distance left to drop them off and approximated time of their drop-off.
                    </p>
                </div>
                <Footer />
            </div>
        )

    }
}
