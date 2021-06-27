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
                    <title>How To Take Your Vehicle and Profile Photo | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>Guidelines for taking pictures of your vehicle and yourself</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle} >{`Taking your vehicle photo`}</p>

                    <p className={styles.textBox} style={{ marginTop: '-10px' }}>
                        The picture taken for your vehicle is for your identification purposes only. The picture is for your records and and also for identification purposes. The recommended way to take a picture is to use landscape mode on your mobile smartphone and centre your vehicle in the middle, in the way that shows both the front of the car and also a side of the car. {<span style={{ fontFamily: 'Gilroy-Bold' }}>The height to width ratio should be 4:3</span>}.  Also make sure the vehicle is centered nicely in the middle of the photo. See the graphic below for an example of how the vehicle should be placed. Again this is just a picture for identification so there is no exact right way to take it. All pictures must be in .JPED or .PNG format.
                    </p>
                    <img src={'/carPicture.svg'} alt={'Perch Carpool'} className={styles.carPicture} />
                    <p className={styles.subTitle} style={{ width: '60%', maxWidth: '900px', textAlign: 'center', fontSize: '85%' }}>
                        {'Format of taking a picture of your vehicle. Remember to use landscape mode and to place the vehicle centred into the frame.'}
                    </p>

                    <p className={styles.subTitle} style={{ marginTop: '40px', }}>{`Taking your profile photo`}</p>

                    <p className={styles.textBox} style={{ marginTop: '-10px' }}>
                        As a Perch driver we need riders to be able to identify you when you pick them up and that's what this photo is for. We simply require a photo {<span style={{ fontFamily: 'Gilroy-Bold' }}>with a height to width ratio of 1:1</span>}. Feel free to smile! All pictures must be in .JPED or .PNG format.
                    </p>
                    <img src={'/womanProfilePicture.svg'} alt={'Perch Carpool'} className={styles.profilePicture} />
                    <p className={styles.subTitle} style={{ width: '60%', maxWidth: '900px', textAlign: 'center', fontSize: '80%' }}>
                        {'Format of taking your profile photo. Remember to use portrait mode and to use a 1:1 ratio.'}
                    </p>
                </div>
                <Footer />
            </div>
        )

    }
}
