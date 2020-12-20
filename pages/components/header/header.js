import styles from './layout.module.css';
import React, { Component } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { Logo } from '../../images/vectors';
import { IoIosMenu } from "react-icons/io";
import { Animated } from "react-animated-css";
import { ImExit } from "react-icons/im";
import firebase from 'firebase';
import { signOut } from '../../../functions/functions';

export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            dropDownMenu: false,
            hideMenu: false,
            firstName: null,
            isDriver: false,
            url: null,
            loggedIn: false,
        };
    };
    componentDidMount() {
        window.addEventListener('resize', (event) => {
            if (window.innerWidth > 1024 && this.state.hideMenu == false)
                this.setState({ dropDownMenu: false, hideMenu: true })
            else if (window.innerWidth < 1024 && this.state.hideMenu == true)
                this.setState({ hideMenu: false })
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref(`users/${user.uid}/firstName`).once('value', (snapshot) => {
                    firebase.database().ref(`users/${user.uid}/driverID`).once('value', (snap) => {
                        this.setState({ isDriver: snap.val() ? true : false, firstName: snapshot.val(), loggedIn: true });
                    }).catch(error => { console.log(error.message) });
                }).catch(error => { console.log(error.message) });

                firebase.database().ref(`users/${user.uid}/photoRef`).once('value', (snapshot) => {
                    firebase.storage().ref(`${snapshot.val()}`).getDownloadURL()
                        .then(result => {
                            this.setState({ url: result })
                        }).catch(error => { console.log(error.message) });
                }).catch(error => { console.log(error.message) });
            }
            else
                this.setState({ loggedIn: false });
        });
    }

    componentWillUnmount() {
        // window.removeEventListener('resize');
    }

    render() {
        return (
            <div className={styles.container1}>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                </Head>
                <div className={styles.container}>
                    <a className={styles.menu} onClick={() => { this.setState({ dropDownMenu: !this.state.dropDownMenu }) }}>
                        <IoIosMenu color={'#4EB848'} className={styles.menuIcon} />
                    </a>
                    <a href="/">
                        <div className={styles.logo} >
                            <Logo color={'#4EB848'} />
                        </div>
                    </a>
                    {this.state.loggedIn ?
                        <div className={styles.textRow1}>
                            {this.state.firstName ?
                                <>
                                    {this.state.url ?
                                        <img src={this.state.url} className={styles.dp} style={{ borderWidth: '0px' }} /> :
                                        <div className={styles.dp}></div>}
                                    <p className={styles.text_}>{`Hello, ${this.state.firstName}`}</p>
                                </> : <></>}
                            {
                                this.state.isDriver ?
                                    <>
                                        <a className={styles.link_} href='/s/db/ddash'><p className={styles.text}>Driver dashboard</p></a>
                                        <a className={styles.link_} href='/s/db/udash'><p className={styles.text}>Rider dashboard</p></a>
                                    </> :
                                    <a className={styles.link_} href='/s/db/udash'><p className={styles.text}>My dashboard</p></a>
                            }
                            <a className={styles.link_} href='/s/articles/how_perch_works'><p className={styles.text}>How it works</p></a>
                            <div className={styles.circle} onClick={() => { signOut.call(this, true); }}>
                                <ImExit color={'#FFFFFF'} className={styles.logOut} />
                            </div>
                        </div> :
                        <div className={styles.textRow}>
                            <a className={styles.link1} href='/s/articles/how_perch_works'><p className={styles.text}>How it works</p></a>
                            <a className={styles.link} href='/s/auth/u_si_su'><p className={styles.text}>Rider</p></a>
                            <a className={styles.link} href='/s/auth/d_si_su'><p className={styles.text}>Driver</p></a>
                        </div>}
                </div>
                {this.state.hideMenu ?
                    <></> :
                    <Animated
                        animationInDuration={300}
                        animationOutDuration={300}
                        animationIn={'fadeIn'}
                        animationOut={'fadeOut'}
                        isVisible={this.state.dropDownMenu}
                        animateOnMount={false}
                        className={styles.animated}>
                        <div className={styles.lowersection}>
                            <hr className={styles.hr} />
                            {this.state.loggedIn ?
                                <>
                                    <p className={styles.lowerLinkText_} >{`Hello, ${this.state.firstName}`}</p>
                                    {
                                        this.state.isDriver ?
                                            <>
                                                <a className={styles.lowerLink} href='/s/db/ddash'><p className={styles.lowerLinkText}>Driver dashboard</p></a>
                                                <a className={styles.lowerLink} href='/s/db/udash'><p className={styles.lowerLinkText}>Rider dashboard</p></a>
                                            </> :
                                            <a className={styles.lowerLink} href='/s/db/udash'><p className={styles.lowerLinkText}>My dashboard</p></a>
                                    }
                                    <a className={styles.lowerLink} href='/s/articles/how_perch_works'><p className={styles.lowerLinkText}>How it works</p></a>
                                    <a className={styles.lowerLink} onClick={() => { signOut.call(this, true); }}><p className={styles.lowerLinkText}>Log out</p></a>

                                </> : <>
                                    <a className={styles.lowerLink} href='/s/articles/how_perch_works'><p className={styles.lowerLinkText}>How it works</p></a>
                                    <a className={styles.lowerLink} href='/s/auth/u_si_su'><p className={styles.lowerLinkText}>Rider</p></a>
                                    <a className={styles.lowerLink} href='/s/auth/d_si_su'><p className={styles.lowerLinkText}>Driver</p></a>
                                </>}
                        </div>
                    </Animated>}
            </div>
        )
    }
}
