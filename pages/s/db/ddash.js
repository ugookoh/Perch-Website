//driver dashboard
import React, { Component } from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
import { ImExit } from "react-icons/im";
import { Logo, DashboardIcons } from '../../../functions/images/vectors';
import Router from 'next/router';
import { DriverDashBoard, DriverTripHistory, DriverVehicles, HelpAndFAQ, ContactUs, Settings } from '../../../functions/panels/panels';
import firebase from 'firebase';
import LoadingScreen from '../../components/loadingScreen/loadingScreen';
import { signOut } from '../../../functions/functions';

export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            optionCode: 'db',
            width: 0, height: 0,
            loggedIn: 'NULL',
            url: null,
        }
    };
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        firebase.auth().onAuthStateChanged(user => {
            if (user)
                firebase.database().ref(`users/${user.uid}`).once('value', (snapshot) => {
                    if (snapshot.val().driverVerified == 'VERIFIED') {
                        this.setImage(snapshot.val().photoRef);
                        this.setState({ loggedIn: snapshot.val() ? 'TRUE' : 'FALSE', userDetails: snapshot.val() });
                    }
                    else
                        Router.push('/s/db/d_app_dash').then(() => window.scrollTo(0, 0));
                }).catch(error => { console.log(error.message) });
            else
                this.setState({ loggedIn: 'FALSE' });
        });
    }
    setImage = (photoRef) => {
        firebase.storage().ref(`${photoRef}`).getDownloadURL()
            .then(result => {
                this.setState({ url: result })
            }).catch(error => { console.log(error.message) });
    };
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
            case 'tt': {
                this.setState({ optionCode: 'tt' })
            } break;
            case 'vh': {
                this.setState({ optionCode: 'vh' })
            } break;
            case 'tx': {
                this.setState({ optionCode: 'tx' })
            } break;
            case 'pi': {
                this.setState({ optionCode: 'pi' })
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
            Router.push('/s/auth/d_si_su').then(() => window.scrollTo(0, 0));
        if (this.state.loggedIn != 'TRUE')
            return <LoadingScreen driverLogo={true} />;


        let option = '';
        let content = <></>;
        switch (this.state.optionCode) {
            case 'db': {
                option = 'Dashboard'
                content = <DriverDashBoard userDetails={this.state.userDetails} />;
            } break;
            case 'th': {
                option = 'Trip History';
                content = <DriverTripHistory userDetails={this.state.userDetails} />;
            } break;
            case 'tt': {
                option = 'Help & FAQ';
                content = <HelpAndFAQ userDetails={this.state.userDetails} />;
            } break;
            case 'vh': {
                option = 'My Vehicles';
                content = <DriverVehicles userDetails={this.state.userDetails} />;
            } break;
            case 'tx': { option = 'Tax Information' } break;
            case 'pi': { option = 'Payout Information' } break;
            case 'cu': {
                option = 'Contact Us';
                content = <ContactUs type='Driver' userDetails={this.state.userDetails} />;
            } break;
            case 'ss': {
                option = 'Settings';
                content = <Settings type='Driver' userDetails={this.state.userDetails} />
            } break;
        }
        return (
            <div className={styles.container} style={{ height: this.state.height != 0 ? this.state.height : '100vh' }}>

                <Head>
                    <title>Driver Dashboard | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="theme-color" content="#ffffff" />
                    <html lang="en"></html>
                </Head>

                <div className={styles.header}>
                    <div className={styles.logoBox_d}>
                        <a href='/'>
                            <div className={styles.logo}>
                                <Logo color={'#FFFFFF'} />
                            </div>
                        </a>
                    </div>
                    <div className={styles.optionShadowBox}>
                        <p className={styles.optionTitle}>{option}</p>
                        <div className={styles.textRow1}>
                            {
                                this.state.userDetails ?
                                    <>
                                        {this.state.url ?
                                            <img src={this.state.url} className={styles.dp} style={{ objectFit: 'cover', borderWidth: '0px' }} /> :
                                            <div className={styles.dp}></div>}
                                        <p className={styles.text_d}>{`Hello, ${this.state.userDetails.firstName}`}</p>
                                    </> :
                                    <></>
                            }
                            <a className={styles.link_d} href='/s/articles/how_perch_works'><p className={styles.text}>How it works</p></a>
                            <a>
                                <div className={styles.circle_d} onClick={() => { signOut.call(this, true) }}>
                                    <ImExit color={'#FFFFFF'} className={styles.logOut} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.couple}>
                        <div className={styles.column_d}>

                            <a onClick={() => { this.navigate('db') }}>
                                <div className={this.state.optionCode == 'db' ? styles.optionIcon_Selected_d : styles.optionIcon_d}>
                                    <div className={styles.db}>
                                        <DashboardIcons icon={'db'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('th') }}>
                                <div className={this.state.optionCode == 'th' ? styles.optionIcon_Selected_d : styles.optionIcon_d}>
                                    <div className={styles.th}>
                                        <DashboardIcons icon={'th'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('vh') }}>
                                <div className={this.state.optionCode == 'vh' ? styles.optionIcon_Selected_d : styles.optionIcon_d}>
                                    <div className={styles.vh}>
                                        <DashboardIcons icon={'vh'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('tx') }}>
                                <div className={this.state.optionCode == 'tx' ? styles.optionIcon_Selected_d : styles.optionIcon_d}>
                                    <div className={styles.tx}>
                                        <DashboardIcons icon={'tx'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('pi') }}>
                                <div className={this.state.optionCode == 'pi' ? styles.optionIcon_Selected_d : styles.optionIcon_d}>
                                    <div className={styles.pi}>
                                        <DashboardIcons icon={'pi'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('tt') }}>
                                <div className={this.state.optionCode == 'tt' ? styles.optionIcon_Selected_d : styles.optionIcon_d}>
                                    <div className={styles.tt}>
                                        <DashboardIcons icon={'tt'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('cu') }}>
                                <div className={this.state.optionCode == 'cu' ? styles.optionIcon_Selected_d : styles.optionIcon_d}>
                                    <div className={styles.cu}>
                                        <DashboardIcons icon={'cu'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('ss') }}>
                                <div className={this.state.optionCode == 'ss' ? styles.optionIcon_Selected_d : styles.optionIcon_d}>
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

                            <a onClick={() => { this.navigate('vh') }}>
                                <div className={this.state.optionCode == 'vh' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>My Vehicles</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('tx') }}>
                                <div className={this.state.optionCode == 'tx' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Tax Information</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('pi') }}>
                                <div className={this.state.optionCode == 'pi' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Payout Information</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('tt') }}>
                                <div className={this.state.optionCode == 'tt' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Help and FAQ</p>
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