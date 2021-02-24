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

                    <p className={styles.subTitle}>{`Among the many benefits to using Perch, we also offer a unique method of calculating price of commute trips to find the perect correlation between cost and comfort`}</p>

                    <div className={styles.c_} style={{}}>
                        <div >
                            <p className={styles.t}>{`Lorem Ipsum is simply dummy text of the printing`}</p>
                            <p className={styles.text}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}</p>
                        </div>
                        <img src="/map1Trip.svg" alt="Perch Carpool" className={styles.map1Trip} />
                    </div>

                    <div className={styles.c} style={{ marginTop: '100px' }}>
                        <img src="/girlsJumpingGivingGifts.svg" alt="Perch Carpool" className={styles.girlsJumpingGivingGifts} />

                        <div>
                            <p className={styles.t}>{`Lorem Ipsum is simply dummy text of the printing`}</p>
                            <p className={styles.text}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}</p>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )

    }
}
