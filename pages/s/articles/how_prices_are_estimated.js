import Head from 'next/head';
import styles from './layout.module.css';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import firebase from 'firebase';
import ShareIcons from '../../../functions/shareIcons';
import { colors } from '../../../functions/functions';


export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
            costPerKM: 0,
            costPerPerchKM: 0,
        };
    };
    componentDidMount() {
        firebase.database().ref('costPerKM').once('value', costPerKM => {
            this.setState({ costPerKM: costPerKM.val() });
        }).catch(error => { console.log(error.message) });
        firebase.database().ref('costPerPerchKM').once('value', costPerPerchKM => {
            this.setState({ costPerPerchKM: costPerPerchKM.val() });
        }).catch(error => { console.log(error.message) });
    };
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>How Prices Are Estimated | Perch</title>
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
                        <p className={styles.t1} style={{ margin: '0px' }}>How Perch costs are estimated</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle}>{`Our prices are calculated using a simple formula. It’s easy to know what you’ll have to pay beforehand.`}</p>
                    <p className={styles.textBox}>
                        <span style={{ fontFamily: 'Gilroy-Bold', textDecoration: 'underline' }}>Perch and Kilometers</span><br />
                        At Perch we bill based off of the amount of kilometers you travel and not the time it takes to travel. This is because our drivers are already going in that direction so it is at no extra cost for you to ride along with them. Because of this we can ensure that riders have consistency in their expected cost for the ride.<br /><br />
                        We use rates per kilometer to calculate the cost of your ride. Say for instance the current rate is $1.11  per kilometer and you are travelling 3.00 kilometers, you would have a bill of around $3.33 . One thing to note is that using <span style={{ color: colors.GREEN, fontFamily: 'Gilroy-Medium' }}>Perch Kilometers</span> would save you on trips as they are cheaper than the regular kilometers.
                        <br />
                        Here are the current rates for regular and <span style={{ color: colors.GREEN, fontFamily: 'Gilroy-Medium' }}>Perch Kilometers</span>
                    </p>
                    <div className={styles.sep}>
                        <div className={styles.ratesCont}>
                            <p className={styles.rateText1}>Regular Kilometers</p>
                            <p className={styles.rateText2}>${this.state.costPerKM.toFixed(2)}</p>
                            <p className={styles.rateText3}>per kms</p>
                        </div>
                        <div className={styles.ratesCont} id={styles.ratesCont_}>
                            <p className={styles.rateText1} style={{ color: colors.GREEN }}>Perch Kilometers</p>
                            <p className={styles.rateText2} style={{ color: colors.GREEN }}>${this.state.costPerPerchKM.toFixed(2)}</p>
                            <p className={styles.rateText3} style={{ color: colors.GREEN }}>per kms</p>
                        </div>

                    </div>
                    <p className={styles.textBox}>
                        So for rides that are not exceptionally long we have you would get billed at whatever rate you choose. You can buy <span style={{ color: colors.GREEN, fontFamily: 'Gilroy-Medium' }}>Perch Kilometers</span> from the “Wallet” section of the Perch app or the Perch Website.
                    </p>
                    <img
                        style={{ marginTop: 20 }}
                        src={`/perchWalletPanel.svg`}
                        alt={'perchWalletPanel'}
                        className={styles.perchWalletPanel}
                    />
                    <p className={styles.textBox}>
                        You can then activate your <span style={{ color: colors.GREEN, fontFamily: 'Gilroy-Medium' }}>Perch Kilometers</span> by clicking <span style={{ fontFamily: 'Gilroy-Medium' }}>CHANGE</span> under payment method when booking a trip and then activating Perch kilometers by flicking the switch.
                        <br /><br />
                        <span style={{ textDecoration: 'underline', fontFamily: 'Gilroy-Bold' }}>Available Payment methods</span><br />
                        • <span style={{}}>Perch Kilometers</span><br />
                        • Debit / Credit card<br />
                        • Apple / Google pay<br />
                    </p>

                </div>
                <Footer />
            </div>
        )

    }
}
