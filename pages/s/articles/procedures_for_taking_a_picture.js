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
                    <title>How To Take A Vehicle Picture | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>Procedures for taking a vehicle picture</p>
                        <div className={styles.shareIcon_C} style={{ margin: '0px' }}>
                            <img src="/facebook_share.svg" alt="Perch Facebook" className={styles.shareIcon} />
                            <img src="/google_share.svg" alt="Perch Google" className={styles.shareIcon} />
                            <img src="/twitter_share.svg" alt="Perch Twitter" className={styles.shareIcon} />
                            <img src="/instagram_share.svg" alt="Perch Instagram" className={styles.shareIcon} />
                        </div>
                    </div>

                    <p className={styles.subTitle} >{`This is a guideline for taking a photo of your vehicle for a Perch Driver application.`}</p>

                    <p className={styles.textBox}>
                        {`The picture taken for your vehicle is for your identification purposes only. It is not sent to riders and as such they cannot see the exact picture of your vehicle. The picture is only for your records and identification. \nThe recommended way to take a picture is to use landscape mode on your mobile smartphone and centre your vehicle in the middle, in the way that shows both the front of the car and also one side of the car. Also make sure the vehicle is centred nicely in the middle of the photo. See the image below of an example of how the vehicle should be entered on your picture.Again this is just a picture for personal identification so there is no right way to take the picture. `}
                    </p>
                    <img src={'/carPicture.svg'} alt={'Perch Carpool'} className={styles.carPicture} />
                    <p className={styles.subTitle} style={{ width: '60%', maxWidth: '900px', textAlign: 'center' }}>
                        {'Format of taking a picture of your vehicle. Remember to use landscape mode and to place the vehicle centred into the frame.'}
                    </p>
                </div>
                <Footer />
            </div>
        )

    }
}
