import Head from 'next/head';
import styles from './layout.module.css';
import React, { Component, useEffect, useState } from 'react';
import { Logo } from '../../images/vectors';

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
                    <link rel="icon" href="../../favicon.ico" />
                </Head>
                <div className={styles.logo}>
                    <Logo color={'#4EB848'} />
                </div>
            </div>
        )
    }
}

