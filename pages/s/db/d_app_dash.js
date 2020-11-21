//driver application dashboard
import React, { Component } from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
import { ImExit } from "react-icons/im";
import { Logo, DashboardIcons } from '../../images/vectors';
import Router from 'next/router';
import { VehicleConfirmation, UploadDocuments, ApplicationStatus } from './panels';
import firebase from 'firebase';
import LoadingScreen from '../../components/loadingScreen/loadingScreen';

export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            optionCode: 'three',
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
            case 'one': {
                this.setState({ optionCode: 'one' });
            } break;
            case 'two': {
                this.setState({ optionCode: 'two' });
            } break;
            case 'three': {
                this.setState({ optionCode: 'three' });
            } break;
        }
    }
    render() {
        if (this.state.loggedIn == 'FALSE') //ALSO TEST TO SEE IF THE DRIVER HAS A PENDING APPLICATION OR ELSE NAVIGATE TO DRIVER DASHBOARD OR MAYBE JUST LEAVE IT AT COMPLETED? 
            Router.push('/s/auth/d_si_su');
        if (this.state.loggedIn != 'TRUE')
            return <LoadingScreen />;



        let content = <></>;
        let option = '';
        switch (this.state.optionCode) {
            case 'one': {
                option = 'Vehicle Confirmation';
                content = <VehicleConfirmation />;
            } break;
            case 'two': {
                option = 'Upload Documents';
                content = <UploadDocuments />;
            } break;
            case 'three': {
                option = 'Application Status';
                content = <ApplicationStatus />;
            } break;

        }
        return (
            <div className={styles.container} style={{ height: this.state.height != 0 ? this.state.height : '100vh' }}>

                <Head>
                    <title>Driver Application | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" href="/favicon.ico" />
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

                            <a onClick={() => { this.navigate('one') }}>
                                <div className={this.state.optionCode == 'one' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.one}>
                                        <DashboardIcons icon={'one'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('two') }}>
                                <div className={this.state.optionCode == 'two' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.two}>
                                        <DashboardIcons icon={'two'} />
                                    </div>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('three') }}>
                                <div className={this.state.optionCode == 'three' ? styles.optionIcon_Selected : styles.optionIcon}>
                                    <div className={styles.three}>
                                        <DashboardIcons icon={'three'} />
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className={styles.optionList}>

                            <a onClick={() => { this.navigate('one') }}>
                                <div className={this.state.optionCode == 'one' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Vehicle Confirmation</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('two') }}>
                                <div className={this.state.optionCode == 'two' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
                                    <p className={styles.optionDescription}>Upload Documents</p>
                                </div>
                            </a>

                            <a onClick={() => { this.navigate('three') }}>
                                <div className={this.state.optionCode == 'three' ? styles.optionDescriptionCont_Selected : styles.optionDescriptionCont}>
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