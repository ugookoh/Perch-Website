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
                    <title>Joint Rides | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" href="/favicon.ico" />
                    <html lang="en"></html>
                </Head>
                <Header loggedIn={this.state.loggedIn} />
                <img src="/articlesPageBack1.svg" alt="Perch Carpool" className={styles.mainPageBack1} />
                <div className={styles.body}>

                    <div className={styles.c_} style={{ marginTop: '15px', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center', }}>
                        <p className={styles.t1} style={{ margin: '0px' }}>Joint rides</p>
                        <div className={styles.shareIcon_C} style={{ margin: '0px' }}>
                            <img src="/facebook_share.svg" alt="Perch Facebook" className={styles.shareIcon} />
                            <img src="/google_share.svg" alt="Perch Google" className={styles.shareIcon} />
                            <img src="/twitter_share.svg" alt="Perch Twitter" className={styles.shareIcon} />
                            <img src="/instagram_share.svg" alt="Perch Instagram" className={styles.shareIcon} />
                        </div>
                    </div>

                    <p className={styles.subTitle} >{`To get you to your destination, we have created an algorithm to provide you with different types of trips.`}</p>
                    <p className={styles.textBox}>
                        You can see 3 different types of trips when you put in your destination.
                        A one-step trip has 1 car icon, which is green .
                        A two-step trip has 2 car icons , one green and one blue,  for the first and the second drivers respectively.
                        A three-step trip has 3 car icon, a green, a blue and a purple colour, which is for the first, second and third drivers respectively.
                    </p>
                    <img src={`/jt1.png`} alt={'Perch Carpool'} className={styles.screenshot} />

                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}>One step trip</span><br />
                        In this you get a single driver take you to your destination .
                        You only need one driver to get you to your destination from your location.
                        You might have to walk a little distance to your location or your destination This is the most common type of rides you would get.
                        All scheduled trips are also one step trips
                    </p>
                    <img src={`/map1Trip.svg`} alt={'Perch Carpool'} className={styles.map1Trip} />
                    <p style={{ maxWidth: '1486px', textAlign: 'center', margin: '0px',width:'70%',fontSize:'smaller' }}>
                        A one-step trip takes you directly to your destination with one vehicle
                    </p>

                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}>Two step trip</span><br />
                        In this, you need two drivers to get to your destination.
                        The first trip, coloured green, takes you half the way, while the second trip, coloured blue, takes you along the other way.
                         There is a very brief waiting time between the first and second trip and you might have to walk a little bit to get to the starting point of the vehicle.
                         You don’t have to worry about not arriving on time as all the arrival times of the cars have been calculated.
                        </p>
                    <img src={`/map2Trip.svg`} alt={'Perch Carpool'} className={styles.map1Trip} />
                    <p style={{ maxWidth: '1486px', textAlign: 'center', margin: '0px',width:'70%',fontSize:'smaller' }}>
                        A two-step trip involves two drivers taking you to your direction
                    </p>
                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Semibold' }}>Three step trip</span><br />
                        In this, you need three drivers to get to your destination.
                        The first trip, coloured green, takes you along the way, the second trip, coloured blue, takes you along, then the final trip, coloured purple , talked you the final route.
                        There is a very brief waiting time between each trip and you might have to walk a little bit to get to the starting point a trip.
                        You don’t have to worry about not arriving on time as all the arrival times of the cars have been calculated.
                        </p>
                    <img src={`/map3Trip.svg`} alt={'Perch Carpool'} className={styles.map1Trip} />
                    <p style={{ maxWidth: '1486px', textAlign: 'center', margin: '0px',width:'70%',fontSize:'smaller' }}>
                        A three-step trip involves three drivers taking you to your direction
                    </p>

                </div>
                <Footer />
            </div>
        )

    }
}
