//admin dashboard
import firebase from 'firebase';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import { BiCar } from 'react-icons/bi';
import { BsConeStriped, BsListCheck } from 'react-icons/bs';
import { GoCreditCard } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { ImExit } from "react-icons/im";
import { TiMessages } from 'react-icons/ti';
import { signOut } from '../../functions/functions';
import { DashboardIcons, Logo } from '../../functions/images/vectors';
import {
    AdminDashBoard,
    CancelledTrips,
    DriverApplications,
    ListOfRiders,
    Payments,
    PendingProcesses,
    SendAnEmail,
    Settings,
    UnreadMessages,
    VehicleApplications
} from '../../functions/panels/panels';
import LoadingScreen from '../components/loadingScreen/loadingScreen';
import styles from './layout.module.css';
export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            optionCode: 'db',
            width: 0, height: 0,
            loggedIn: 'NULL',
            userDetails: null,
            url: null,
        }
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.database().ref(`users/${user.uid}`).once('value', (snapshot) => {
                    this.setState({ userDetails: snapshot.val() });
                    this.setImage(snapshot.val().photoRef);
                }).catch(error => { console.log(error.message) });


                firebase.database().ref(`adminAuthorized/${user.uid}`).once(`value`, snapshot => {
                    if (snapshot.val())
                        this.setState({ loggedIn: 'TRUE' });
                    else
                        this.setState({ loggedIn: 'FALSE' });
                }).catch(error => {
                    this.setState({ loggedIn: 'FALSE' });
                })
            }
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
                this.setState({ optionCode: 'db' });
            } break;
            case 'pp': {
                this.setState({ optionCode: 'pp' });
            } break;
            case 'um': {
                this.setState({ optionCode: 'um' });
            } break;
            case 'se': {
                this.setState({ optionCode: 'se' });
            } break;
            case 'ct': {
                this.setState({ optionCode: 'ct' });
            } break;
            case 'va': {
                this.setState({ optionCode: 'va' });
            } break;
            case 'da': {
                this.setState({ optionCode: 'da' });
            } break;
            case 'pa': {
                this.setState({ optionCode: 'pa' });
            } break;
            case 'lr': {
                this.setState({ optionCode: 'lr' });
            } break;
            case 'ss': {
                this.setState({ optionCode: 'ss' });
            } break;
        }
    }
    render() {
        if (this.state.loggedIn == 'FALSE')
            Router.push('/admin');
        if (this.state.loggedIn != 'TRUE')
            return <LoadingScreen />;



        let option = '';
        let content = <></>;
        switch (this.state.optionCode) {
            case 'db': {
                option = 'Dashboard';
                content = <AdminDashBoard userDetails={this.state.userDetails} />;
            } break;
            case 'pp': {
                option = 'Pending Processes';
                content = <PendingProcesses userDetails={this.state.userDetails} />;
            } break;
            case 'um': {
                option = 'Unread Messages';
                content = <UnreadMessages userDetails={this.state.userDetails} />;
            } break;
            case 'se': {
                option = 'Send an Email';
                content = <SendAnEmail userDetails={this.state.userDetails} />;
            } break;
            case 'ct': {
                option = 'Cancelled Trips';
                content = <CancelledTrips userDetails={this.state.userDetails} />;
            } break;
            case 'va': {
                option = 'Vehicle Applications';
                content = <VehicleApplications userDetails={this.state.userDetails} />;
            } break;
            case 'da': {
                option = 'Driver Applications';
                content = <DriverApplications userDetails={this.state.userDetails} />;
            } break;
            case 'pa': {
                option = 'Payments';
                content = <Payments userDetails={this.state.userDetails} />;
            } break;
            case 'lr': {
                option = 'List of Users';
                content = <ListOfRiders userDetails={this.state.userDetails} />;
            } break;
            case 'ss': {
                option = 'Settings';
                content = <Settings userDetails={this.state.userDetails} />
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
                            {
                                this.state.userDetails ?
                                    <>
                                        {this.state.url ?
                                            <img src={this.state.url} className={styles.dp} style={{ objectFit: 'cover', borderWidth: '0px' }} /> :
                                            <div className={styles.dp}></div>}
                                        <p className={styles.text_}>{`Hello, ${this.state.userDetails.firstName}`}</p>
                                    </> :
                                    <></>
                            }
                            <a className={styles.link_}><p className={styles.text}>How it works</p></a>
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

                            <a onClick={() => { this.navigate('db') }}>
                                <div className={this.state.optionCode == 'db' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.db}>
                                        <DashboardIcons icon={'db'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('pp') }}>
                                <div className={this.state.optionCode == 'pp' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <p style={{ fontFamily: 'Gilroy-ExtraBold', color: '#FFFFFF', fontSize: '120%', margin: '0px' }}>PP</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('um') }}>
                                <div className={this.state.optionCode == 'um' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.th}>
                                        <TiMessages color='#ffffff' size={'27.26px'} />
                                    </div>
                                </div>
                            </a>


                            <a onClick={() => { this.navigate('se') }}>
                                <div className={this.state.optionCode == 'se' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.pw}>
                                        <HiOutlineMail color='#ffffff' size={'27.26px'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('ct') }}>
                                <div className={this.state.optionCode == 'ct' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.cu}>
                                        <BsConeStriped color='#ffffff' size={'27.26px'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('va') }}>
                                <div className={this.state.optionCode == 'va' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.db}>
                                        <BiCar color='#ffffff' size={'27.26px'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('da') }}>
                                <div className={this.state.optionCode == 'da' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.th}>
                                        <BsListCheck color='#ffffff' size={'27.26px'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('pa') }}>
                                <div className={this.state.optionCode == 'pa' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.pw}>
                                        <GoCreditCard color='#ffffff' size={'27.26px'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('lr') }}>
                                <div className={this.state.optionCode == 'lr' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <p style={{ fontFamily: 'Gilroy-ExtraBold', color: '#FFFFFF', fontSize: '120%', margin: '0px' }}>LU</p>
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

                            <a onClick={() => { this.navigate('pp') }}>
                                <div className={this.state.optionCode == 'pp' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Pending Processes</p>
                                </div>
                            </a>
                            
                            <a onClick={() => { this.navigate('um') }}>
                                <div className={this.state.optionCode == 'um' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Unread Messages</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('se') }}>
                                <div className={this.state.optionCode == 'se' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Send an Email</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('ct') }}>
                                <div className={this.state.optionCode == 'ct' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Cancelled trips</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('va') }}>
                                <div className={this.state.optionCode == 'va' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Vehicle Application</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('da') }}>
                                <div className={this.state.optionCode == 'da' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Driver Application</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('pa') }}>
                                <div className={this.state.optionCode == 'pa' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Payments</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('lr') }}>
                                <div className={this.state.optionCode == 'lr' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>List of Users</p>
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