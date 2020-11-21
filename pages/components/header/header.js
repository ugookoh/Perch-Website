import styles from './layout.module.css';
import React, { Component } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { Logo } from '../../images/vectors';
import { IoIosMenu } from "react-icons/io";
import { Animated } from "react-animated-css";
import { ImExit } from "react-icons/im";

export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            dropDownMenu: false,
            hideMenu: false,
        };
    };
    componentDidMount() {
        window.addEventListener('resize', (event) => {
            if (window.innerWidth > 1024 && this.state.hideMenu == false)
                this.setState({ dropDownMenu: false, hideMenu: true })
            else if (window.innerWidth < 1024 && this.state.hideMenu == true)
                this.setState({ hideMenu: false })
        })
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
                    {this.props.loggedIn ?
                        <div className={styles.textRow1}>
                            <div className={styles.dp}></div>
                            <p className={styles.text_}>{'Hello, Ugochukwu'}</p>
                            <a className={styles.link_} ><p className={styles.text}>My dashboard</p></a>
                            <a className={styles.link_} ><p className={styles.text}>How it works</p></a>
                            <div className={styles.circle}>
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
                            {this.props.loggedIn ?
                                <>
                                    <p className={styles.lowerLinkText_}>{'Hello, Ugochukwu'}</p>
                                    <a className={styles.lowerLink}><p className={styles.lowerLinkText}>Dashboard</p></a>
                                    <a className={styles.lowerLink}><p className={styles.lowerLinkText}>How it works</p></a>
                                    <a className={styles.lowerLink}><p className={styles.lowerLinkText}>Log out</p></a>

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
