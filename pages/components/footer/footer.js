import styles from './layout.module.css';
import React, { Component } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { Logo, Footer } from '../../images/vectors';

export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            size: 'laptopSize',
        };
    };
    componentDidMount() {

        window.addEventListener('resize', (event) => {
            this.setter();
        });
        //this.setter();
    }

    setter = () => {
        if (window.innerWidth > 1024) {
            if (this.state.size !== 'laptopSize')
                this.setState({ size: 'laptopSize' });
        }
        else if (window.innerWidth > 480) {
            if (this.state.size !== 'tabSize')
                this.setState({ size: 'tabSize' });
        }
        else {
            this.setState({ size: 'phoneSize' });
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                </Head>
                <div className={styles.logoDiv}>
                    <div className={styles.topLogo}>
                        <Logo color={'#4EB848'} />
                    </div>
                </div>

                <div className={styles.laptopSize}>
                    <Footer size={'laptopSize'} />
                </div>

                <div className={styles.lowerContainer}>
                    <div className={styles.box1}>
                        <p className={styles.introText}>Perch is a new carpooling service made to provide a convenient and affordable alternative to other commuting options available, by pairing people  going in the same direction together.</p>
                    </div>
                    <div className={styles.box2C}>
                        <div className={styles.box2}>
                            <a className={styles.link}><p className={styles.titleText}>About Us</p></a>
                            <a className={styles.link} href='/s/articles/how_perch_works'><p className={styles.lowerText} >How it works</p></a>
                            <a className={styles.link} href='/s/articles/help_and_frequently_asked_questions'><p className={styles.lowerText} >{`Help & FAQ`}</p></a>
                            <a className={styles.link}><p className={styles.lowerText}>Cities</p></a>
                            <a className={styles.link} href='/s/articles/contact_us'><p className={styles.lowerText} >Contact Us</p></a>
                        </div>
                        <div className={styles.box2}>
                            <a className={styles.link}><p className={styles.titleText}>Driver</p></a>
                            <a className={styles.link} href='/s/articles/why_should_you_be_a_perch_driver'><p className={styles.lowerText} >Why should you become a Perch driver</p></a>
                            <a className={styles.link} href='/s/articles/steps_to_becoming_a_perch_driver'><p className={styles.lowerText} >How to become a Perch driver</p></a>
                            <a className={styles.link} href='/s/auth/d_si_su'><p className={styles.lowerText}>Become a Perch driver</p></a>
                        </div>
                        <div className={styles.box2}>
                            <a className={styles.link}><p className={styles.titleText}>Riders</p></a>
                            <a className={styles.link} href='/s/articles/why_should_you_join_perch'><p className={styles.lowerText} >Why ride with us ?</p></a>
                            <a className={styles.link} href='/s/auth/u_si_su'><p className={styles.lowerText} >Become a Percher</p></a>
                        </div>
                    </div>
                </div>
                <div className={styles.cRContainer}>
                    <hr className={styles.line} />
                    <p className={styles.cR}>Copyright © 2020. All rights reserved.</p>
                </div>
            </div>
        )
    }
}