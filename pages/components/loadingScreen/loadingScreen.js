import Head from 'next/head';
import styles from './layout.module.css';
import React, { Component, useEffect, useState } from 'react';
import { Logo } from '../../../functions/images/vectors';

export default class index extends React.Component {
    constructor() {
        super();

        this.state = { width: 0, height: 0 };
    };
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return (
            <div className={styles.container} style={{ height: this.state.height != 0 ? this.state.height : '100vh' }}>
                <Head>
                    <title>Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <div className={styles.logo}>
                    <Logo color={this.props.driverLogo ? '#1970A7' : '#4EB848'} />
                </div>
            </div>
        )
    }
}

