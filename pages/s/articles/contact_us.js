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
            topic: 'unselected',
        };
    };
    componentDidMount() {

    };
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Contact Us | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" href="/favicon.ico" />
                    <html lang="en"></html>
                </Head>
                <Header loggedIn={this.state.loggedIn} />
                <img src="/articlesPageBack1.svg" alt="Perch Carpool" className={styles.mainPageBack1} />
                <div className={styles.body}>

                    <div className={styles.c_} style={{ marginTop: '15px', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center', }}>
                        <p className={styles.t1} style={{ margin: '0px' }}>{`Contact Us`}</p>
                        <div className={styles.shareIcon_C} style={{ margin: '0px' }}>
                            <img src="/facebook_share.svg" alt="Perch Facebook" className={styles.shareIcon} />
                            <img src="/google_share.svg" alt="Perch Google" className={styles.shareIcon} />
                            <img src="/twitter_share.svg" alt="Perch Twitter" className={styles.shareIcon} />
                            <img src="/instagram_share.svg" alt="Perch Instagram" className={styles.shareIcon} />
                        </div>
                    </div>

                    <p className={styles.subTitle} >{`Hey there! Please feel free to send us any feedback or issues you might have with our service.`}</p>
                    <div className={styles.contactUsCont}>
                        <p className={styles.contactUsTitle}>Contact Us Form</p>
                        <select
                            value={this.state.topic}
                            className={styles.selectTopic}
                            onChange={(v) => { this.setState({ topic: v.target.value }) }}
                            style={this.state.topic === 'unselected' ? { color: 'rgba(112, 112, 112, 0.7)' } : {}}
                        >
                            <option value="unselected">(--Select a topic--)</option>
                            <option value="Enter a problem">Enter a problem</option>
                            <option value="Enter a problem">Enter a problem</option>
                            <option value="Enter a problem">Enter a problem</option>
                        </select>

                        <input type="text" placeholder="Enter your email address" className={styles.contactUsEmail} />
                        <textarea type="text" placeholder="Enter your message here" className={styles.contactUsContent} />

                    </div>
                    <div className={styles.contactUsLC}>
                        <a className={styles.button2}>
                            <p className={styles.buttonText2}>Send Message</p>
                        </a>
                        <p className={styles.contactUsLasttext}>
                            We respond to your inquires via your email. We would not send you promotional emails unless you are already a signed up Perch user.
                        </p>
                    </div>


                </div>
                <Footer />
            </div>
        )

    }
}
