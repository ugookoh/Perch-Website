import Head from 'next/head';
import styles from './layout.module.css';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import firebase from 'firebase';
import ShareIcons from '../../../functions/shareIcons';


export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
            cities: [],
        };
    };
    componentDidMount() {
        firebase.database().ref(`cities`).once('value', snap => {
            let p = [];
            const keys = Object.keys(snap.val() ? snap.val() : {}).sort();
            for (let i = 0; i < keys.length; i++)
                p.push(keys[i]);
            this.setState({ cities: p });
        })
    };
    render() {
        let cities = [];
        for (let i = 0; i < this.state.cities.length; i++)
            cities.push(
                <>
                    • <span className={styles.faqChoice_}>{this.state.cities[i]}</span><br />
                </>);
        return (
            <div className={styles.container}>
                <Head>
                    <title>Available Locations | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>Available Locations for Perch</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle}>{`These are countries and cities where Perch is currently available`}</p>
                    <img src={'/globe.svg'} alt={'Perch Carpool'} className={styles.globe} />
                    <p className={styles.textBox} style={{ lineHeight: '190%' }}>
                        <span className={styles.faqChoice_} style={{ fontFamily: 'Gilroy-Semibold', }}>Canada</span><br />
                        {cities}
                    </p>


                </div>
                <Footer />
            </div>
        )

    }
}
