//admin dashboard
import React, { Component } from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
import { ImExit } from "react-icons/im";
import { Logo, DashboardIcons } from '../../functions/images/vectors';
import Router from 'next/router';
import { UserDashBoard, PerchWallet, ContactUs, TripHistory, Settings } from '../../functions/panels/adminPanels';
import firebase from 'firebase';
import LoadingScreen from '../components/loadingScreen/loadingScreen';
export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            optionCode: 'db',
            width: 0, height: 0,
            loggedIn: 'NULL',
        }
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        firebase.auth().onAuthStateChanged(user => {
            if (user)
                this.setState({ loggedIn: 'TRUE' });
            else
                this.setState({ loggedIn: 'FALSE' });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    navigate = (x) => {
        switch (x) {
            case 'db': {
                this.setState({ optionCode: 'db' })
            } break;
            case 'th': {
                this.setState({ optionCode: 'th' })
            } break;
            case 'pw': {
                this.setState({ optionCode: 'pw' })
            } break;
            case 'cu': {
                this.setState({ optionCode: 'cu' })
            } break;
            case 'ss': {
                this.setState({ optionCode: 'ss' })
            } break;
        }
    }
    render() {
        if (this.state.loggedIn == 'FALSE')
            Router.push('/s/auth/u_si_su');
        if (this.state.loggedIn != 'TRUE')
            return <LoadingScreen />;



        let option = '';
        let content = <></>;
        switch (this.state.optionCode) {
            case 'db': {
                option = 'Dashboard';
                content = <UserDashBoard />;
            } break;
            case 'th': {
                option = 'Trip History';
                content = <TripHistory />;
            } break;
            case 'pw': {
                option = 'Perch Wallet';
                content = <PerchWallet />;
            } break;
            case 'cu': {
                option = 'Contact Us';
                content = <ContactUs />;
            } break;
            case 'ss': {
                option = 'Settings';
                content = <Settings />
            } break;
        }
        return (
            <div className={styles.container} style={{ height: this.state.height != 0 ? this.state.height : '100vh' }}>

                <Head>
                    <html lang="en"></html>
                    <title>Admin Dashboard | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className={styles.header}>
                    <div className={styles.logoBox}>
                        <div>
                            <div className={styles.logo}>
                                <Logo color={'#FFFFFF'} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.optionShadowBox}>
                        <p className={styles.optionTitle}>{option}</p>
                        <div className={styles.textRow1}>
                            <div className={styles.dp}></div>
                            <p className={styles.text_}>{'Hello, Ugochukwu'}</p>
                            <a className={styles.link_}><p className={styles.text}>How it works</p></a>
                            <a>
                                <div className={styles.circle}>
                                    <ImExit color={'#FFFFFF'} className={styles.logOut} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.couple}>
                        <div className={styles.column}>

                            <a onClick={() => { this.navigate('db') }}>
                                <div className={this.state.optionCode == 'db' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.db}>
                                        <DashboardIcons icon={'db'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('th') }}>
                                <div className={this.state.optionCode == 'th' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.th}>
                                        <DashboardIcons icon={'th'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('pw') }}>
                                <div className={this.state.optionCode == 'pw' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.pw}>
                                        <DashboardIcons icon={'pw'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('cu') }}>
                                <div className={this.state.optionCode == 'cu' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.cu}>
                                        <DashboardIcons icon={'cu'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('ss') }}>
                                <div className={this.state.optionCode == 'ss' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.ss}>
                                        <DashboardIcons icon={'ss'} />
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className={styles.optionList}>

                            <a onClick={() => { this.navigate('db') }}>
                                <div className={this.state.optionCode == 'db' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Dashboard</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('th') }}>
                                <div className={this.state.optionCode == 'th' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Trip History</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('pw') }}>
                                <div className={this.state.optionCode == 'pw' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Perch Wallet</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('cu') }}>
                                <div className={this.state.optionCode == 'cu' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Contact Us</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('ss') }}>
                                <div className={this.state.optionCode == 'ss' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Settings</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {content}
                    </div>
                </div>
            </div>
        );
    };
}