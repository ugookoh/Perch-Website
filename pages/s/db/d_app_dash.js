//driver application dashboard
import React, { Component } from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
import { ImExit } from "react-icons/im";
import { Logo, DashboardIcons } from '../../../functions/images/vectors';
import Router from 'next/router';
import { VehicleConfirmation, UploadDocuments, ApplicationStatus } from '../../../functions/panels/panels';
import firebase from 'firebase';
import LoadingScreen from '../../components/loadingScreen/loadingScreen';
import { signOut, makeid } from '../../../functions/functions';
import axios from 'axios';


export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            width: 0, height: 0,
            loggedIn: 'NULL',
            currentState: {
                stage: 'one',
            },
            userID: '',
            url: null,
            firstName: null,
        }
    };
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.database().ref(`users/${user.uid}/driverVerified`).once('value', snap => {
                    if (snap.val() == 'VERIFIED')
                        Router.push('/s/db/ddash').then(() => window.scrollTo(0, 0));
                    else
                        this.setState({ userID: user.uid }, () => {
                            firebase.database().ref(`users/${user.uid}/firstName`).once('value', snapshot => { this.setState({ firstName: snapshot.val() }) }).catch(error => { console.log(error.message) });
                            firebase.database().ref(`users/${user.uid}/photoRef`).once('value', snapshot => { this.setImage(snapshot.val()) }).catch(error => { console.log(error.message) });

                            firebase.database().ref(`driverApplications/${user.uid}`).once('value', snapshot => {
                                if (snapshot.val()) {
                                    if (snapshot.val().stage == 'four' || snapshot.val().stage == 'five')
                                        this.setState({ currentState: { ...snapshot.val(), stage: 'three' }, loggedIn: 'TRUE' });
                                    else
                                        this.setState({ currentState: snapshot.val(), loggedIn: 'TRUE' });
                                }
                                else {
                                    axios.post('https://us-central1-perch-01.cloudfunctions.net/updateUserDetails', {
                                        userID: user.uid,
                                        fieldsToUpdate: { driverVerified: 'PENDING' },
                                    }).catch(error => { alert(error.message) })

                                    firebase.database().ref(`users/${user.uid}`).once('value', names => {
                                        const { firstName, lastName } = names.val();
                                        const name = `${firstName} ${lastName}`;
                                        const timestamp = new Date().getTime();
                                        const DAY = new Date(timestamp).getDate();
                                        const MONTH = new Date(timestamp).getMonth();
                                        const YEAR = new Date(timestamp).getFullYear();
                                        const HOUR = new Date(timestamp).getHours();
                                        const MIN = new Date(timestamp).getMinutes();
                                        const SECOND = new Date(timestamp).getSeconds();

                                        firebase.database().ref(`driverApplications/${user.uid}`).update({
                                            stage: 'one',
                                            timestamp: timestamp,
                                            name: name,
                                            vehicleRandomID: makeid(6),
                                            dateFormat: `${YEAR}-${MONTH}-${DAY}-${HOUR}-${MIN}-${SECOND}`,
                                            verified: JSON.stringify([
                                                false,//driversLicenseVerified
                                                false,//proofOfWorkEligibilityVerified
                                                false,//epsBackgroundCheckVerified
                                                false,//insuranceVerified
                                                false,//registrationVerified
                                                false,//inspectionVerified
                                            ]),
                                            offerLetterSigned: false,
                                        })
                                            .then(() => { this.setState({ loggedIn: 'TRUE' }); })
                                            .catch(error => { console.log(error.message) })
                                    }).catch(error => { console.log(error.message) })
                                }
                            }).catch(error => { console.log(error.message) })
                        });
                })
            }
            else
                this.setState({ loggedIn: 'FALSE' });
        });
    };
    setImage = (photoRef) => {
        firebase.storage().ref(`${photoRef}`).getDownloadURL()
            .then(result => {
                this.setState({ url: result })
            }).catch(error => { console.log(error.message) });
    };
    nextStage = (next) => {
        this.setState({
            currentState: {
                stage: next,
            }
        })
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    // navigate = (x) => {
    //     switch (x) {
    //         case 'one': {
    //             this.setState({ optionCode: 'one' });
    //         } break;
    //         case 'two': {
    //             this.setState({ optionCode: 'two' });
    //         } break;
    //         case 'three': {
    //             this.setState({ optionCode: 'three' });
    //         } break;
    //     }
    // }
    render() {
        if (this.state.loggedIn == 'FALSE') //ALSO TEST TO SEE IF THE DRIVER HAS A PENDING APPLICATION OR ELSE NAVIGATE TO DRIVER DASHBOARD OR MAYBE JUST LEAVE IT AT COMPLETED? 
            Router.push('/s/auth/d_si_su').then(() => window.scrollTo(0, 0));
        if (this.state.loggedIn != 'TRUE')
            return <LoadingScreen />;



        let content = <></>;
        let option = '';
        switch (this.state.currentState.stage) {
            case 'one': {
                option = 'Vehicle Confirmation';
                content = <VehicleConfirmation userID={this.state.userID} nextStage={this.nextStage.bind(this)} />;
            } break;
            case 'two': {
                option = 'Upload Documents';
                content = <UploadDocuments userID={this.state.userID} nextStage={this.nextStage.bind(this)} />;
            } break;
            case 'three': {
                option = 'Application Status';
                content = <ApplicationStatus userID={this.state.userID} />;
            } break;

        }
        return (
            <div className={styles.container} style={{ height: this.state.height != 0 ? this.state.height : '100vh' }}>

                <Head>
                    <title>Driver Application | Perch</title>
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
                    <div className={styles.logoBox}>
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
                                this.state.firstName ?
                                    <>
                                        {this.state.url ?
                                            <img src={this.state.url} className={styles.dp} style={{ objectFit: 'cover', borderWidth: '0px' }} /> :
                                            <div className={styles.dp}></div>}
                                        <p className={styles.text_}>{`Hello, ${this.state.firstName}`}</p>
                                    </> :
                                    <></>
                            }
                            <a className={styles.link_} href='/s/articles/how_perch_works'><p className={styles.text}>How it works</p></a>
                            <a>
                                <div className={styles.circle} onClick={() => { signOut.call(this, true) }}>
                                    <ImExit color={'#FFFFFF'} className={styles.logOut} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.couple}>
                        <div className={styles.column}>

                            <a>
                                <div className={this.state.currentState.stage == 'one' ? styles.optionIcon_Selected : styles.optionIcon} id={styles.optionIcon_}>
                                    <div className={styles.one}>
                                        <DashboardIcons icon={'one'} />
                                    </div>
                                </div>
                            </a>

                            <a>
                                <div className={this.state.currentState.stage == 'two' ? styles.optionIcon_Selected : styles.optionIcon} id={styles.optionIcon_}>
                                    <div className={styles.two}>
                                        <DashboardIcons icon={'two'} />
                                    </div>
                                </div>
                            </a>

                            <a>
                                <div className={this.state.currentState.stage == 'three' ? styles.optionIcon_Selected : styles.optionIcon} id={styles.optionIcon_}>
                                    <div className={styles.three}>
                                        <DashboardIcons icon={'three'} />
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className={styles.optionList}>

                            <a >
                                <div className={this.state.currentState.stage == 'one' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont} id={styles.optionDescriptionCont_}>
                                    <p className={styles.optionDescription}>Vehicle Confirmation</p>
                                </div>
                            </a>

                            <a >
                                <div className={this.state.currentState.stage == 'two' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont} id={styles.optionDescriptionCont_}>
                                    <p className={styles.optionDescription}>Upload Documents</p>
                                </div>
                            </a>

                            <a >
                                <div className={this.state.currentState.stage == 'three' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont} id={styles.optionDescriptionCont_}>
                                    <p className={styles.optionDescription}>Application Status</p>
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