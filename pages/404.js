import Head from 'next/head';
import styles from '../styles/error_layout.module.css';

import { Logo } from '../functions/images/vectors';
import React from 'react';
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
                    <title>{`404 Page Not Found | Perch`}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" href="/favicon.ico" />
                    <html lang="en"></html>
                </Head>
                <img src="/errorPageBackL.svg" alt="Perch Carpool" id={styles.l} className={styles.pageBack1} />
                <img src="/errorPageBackT.svg" alt="Perch Carpool" id={styles.t} className={styles.pageBack1} />
                <img src="/errorPageBackP.svg" alt="Perch Carpool" id={styles.p} className={styles.pageBack1} />

                <div className={styles.body}>
                    <div className={styles.column1}>
                        <div className={styles.logoCont}>
                            <a className={styles.logo} href='./'>
                                <Logo color={'#4EB848'} />
                            </a>
                        </div>
                        <p className={styles.title}>
                            ERROR 404
                        </p>
                        <p className={styles.text}>
                            Hello there traveller!<br />
                            You must’ve wandered around and gotten lost with John here
                        </p>
                        <a className={styles.button} id={styles.b1} href='./'>
                            <p className={styles.buttonText}>Take me back to civilization</p>
                        </a>
                    </div>
                    <img src="/error404.svg" alt="Perch Carpool" className={styles.errorImage} />
                    <a className={styles.button} id={styles.b2} href='./'>
                        <p className={styles.buttonText}>Take me back to civilization</p>
                    </a>
                </div>
            </div>
        )

    }
}
