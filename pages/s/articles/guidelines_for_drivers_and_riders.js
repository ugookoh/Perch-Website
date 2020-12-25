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
                    <title>{`Guidelines For Drivers & Riders | Perch`}</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>{`Guidelines for drivers & riders`}</p>
                        <div className={styles.shareIcon_C} style={{ margin: '0px' }}>
                            <img src="/facebook_share.svg" alt="Perch Facebook" className={styles.shareIcon} />
                            <img src="/google_share.svg" alt="Perch Google" className={styles.shareIcon} />
                            <img src="/twitter_share.svg" alt="Perch Twitter" className={styles.shareIcon} />
                            <img src="/instagram_share.svg" alt="Perch Instagram" className={styles.shareIcon} />
                        </div>
                    </div>

                    <p className={styles.subTitle} >{`In order to foster  caring respectful environment between our driver and rider community, we have some guidelines to help make trips enjoyable for all parties involved.`}</p>
                    <img src={'/community.svg'} alt={'Perch Carpool'} className={styles.carPicture} />
                    <p className={styles.textBox} style={{ lineHeight: '190%' }}>
                        <span style={{ fontFamily: 'Gilroy-Semibold', textDecoration: 'underline' }}>Guidelines for riders</span><br />
                        • Always get to your pick up destination before the driver gets there to avoid waiting and trip delays.<br />
                        • Always look at your stops correctly to avoid any mixup in your trip.<br />
                        • Always contact your driver via cell or text whenever something confusing about your trip arises.<br />
                        • Always try and leave your driver’s car as clean as possible.<br /><br />

                        <span style={{ fontFamily: 'Gilroy-Semibold', textDecoration: 'underline' }}>Guidelines for driver</span><br />
                        • No excessively loud music in cars.<br />
                        • Always try and get contact riders before cancelling a trip to avoid any mixups in their planned commute.<br />
                        • Pickups and drop-offs should be as fast as possible in order to accommodate other rider’s time constraints.<br />
                        • Always try to leave your car in a clean state before starting any commute and clear out all your seats.<br />
                        <br />
                        Lastly for everyone in the Perch community,  <span style={{ fontFamily: 'Gilroy-Semibold', textDecoration: 'underline' }}>please be respectful to everyone.</span>
                    </p>

                </div>
                <Footer />
            </div>
        )

    }
}
