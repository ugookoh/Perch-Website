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
                    <title>Steps To Becoming A Perch Driver | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>Steps to becoming a Perch driver</p>
                        <div className={styles.shareIcon_C} style={{ margin: '0px' }}>
                            <img src="/facebook_share.svg" alt="Perch Facebook" className={styles.shareIcon} />
                            <img src="/google_share.svg" alt="Perch Google" className={styles.shareIcon} />
                            <img src="/twitter_share.svg" alt="Perch Twitter" className={styles.shareIcon} />
                            <img src="/instagram_share.svg" alt="Perch Instagram" className={styles.shareIcon} />
                        </div>
                    </div>

                    <p className={styles.subTitle} >{`Becoming a driver with Perch is very simple and straightforward. Here is how you can start making money as you drive anywhere`}</p>
                    <p className={styles.textBox}>
                        To become a Perch driver, all you have to do is start a Perch driver application.
                        On starting this, you would have to confirm your email and phone number.
                        After that, the process is divided into 3 parts.
                    </p>
                    <img src={`/manChecklist.svg`} alt={'Perch Carpool'} className={styles.manChecklist} />

                    <p className={styles.textBox}>
                        The first part involves answering a questionnaire.
                        It’s all about your car and the details of your car.
                        It’s a very short questionnaire that would take les than a minute to complete
                    </p>
                    <img src={`/womanFolder.svg`} alt={'Perch Carpool'} className={styles.manChecklist} />

                    <p className={styles.textBox}>
                        The second part involves you uploading several documents.
                        Examples are your car registration, insurance, driver’s license and other documents related to your ability to drive.
                    </p>
                    <img src={`/carpoolOpenDoor.svg`} alt={'Perch Carpool'} className={styles.manChecklist} />

                    <p className={styles.textBox}>
                        For the third part, we might contact you for extra documents that we need or we might just validate your driver’s account.
                        That’s how to become a Perch driver!
                     </p>
                    <a className={styles.button1} style={{ maxWidth: '430px', marginTop: '30px', width: '90%' }} href='/s/auth/d_si_su'>
                        <p className={styles.buttonText1}>Start your driver application now!</p>
                    </a>

                    <p className={styles.textBox} style={{ width: 'initial', marginTop: '30px', maxWidth: '90%', textAlign: 'center' }}>
                        Download the Perch Driver app with these links below
                    </p>
                    <div className={styles.downloadContainer} style={{ width: '90%' }}>
                        <img src="/downloadAppStore.svg" alt="Perch Carpool" className={styles.appIcon} />
                        <img src="/downloadGooglePlay.svg" alt="Perch Carpool" className={styles.appIcon} />
                    </div>

                </div>
                <Footer />
            </div>
        )

    }
}
