import Head from 'next/head';
import styles from './layout.module.css';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Router from 'next/router';
import ShareIcons from '../../../functions/shareIcons';


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
                    <title>Why Should You Be A Perch Driver | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="theme-color" content="#ffffff" />
                    <html lang="en"></html>
                </Head>
                <Header loggedIn={this.state.loggedIn} />
                <img src="/articlesPageBack1.svg" alt="Perch Carpool" className={styles.mainPageBack1} />
                <div className={styles.body}>

                    <div className={styles.c_} style={{ marginTop: '15px', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center', }}>
                        <p className={styles.t1} style={{ margin: '0px' }}>Why should you become a Perch Driver</p>
                        <ShareIcons />
                    </div>

                    <p className={styles.subTitle}>{`There are so many reasons to join the happy Perch community. However we would only mention a few reasons why you should already be one of us, and let you decide the rest.`}</p>

                    <div className={styles.c_} style={{}}>
                        <div >
                            <p className={styles.t}>No schedule, no commitment</p>
                            <p className={styles.text}>{`Considering joining Perch but doubtful? What if we told you that you do not need any schedule or any commitment to work with us? That’s right, Perch pairs you with riders already going in your direction so you do not need to worry about going out of your way to pick up riders. Because of this, you can expect to make money going to your workplace, going to the gym, going to school, going anywhere.  You don’t need any commitment or any schedule, just set your trip in the driver’s app and start earning as you go about your busy life!`}</p>

                        </div>
                        <img src="/noCommitmentNoSchedule.svg" alt="Perch Carpool" className={styles.noCommitmentNoSchedule} />
                    </div>

                    <div className={styles.c} style={{ marginTop: '100px' }}>
                        <img src="/exchangeMoney.svg" alt="Perch Carpool" className={styles.exchangeMoney} />

                        <div>
                            <p className={styles.t}>{`Get paid for every person entering your vehicle and for every kilometre you carry them.`}</p>
                            <p className={styles.text}>{`Perch has no surge pricing and traffic factors are not considered in billing riders. But you still get paid a lot more than if there was surge pricing and traffic pricing. How?  To substitute for this, we implemented a system that makes you get paid for every person entering your vehicle and also for every kilometre you carry the person. In this case, quantity ( and distance ) counts. It does not matter if they are commuting together, everyone has to pay to enter. And our algorithm constantly matches you with riders with the goal of always making your vehicle full, so when you drop off one rider, expect to be paired with another rider to fill up the empty space.`}</p>
                        </div>
                    </div>

                    <div className={styles.c_} style={{ marginTop: '100px' }}>
                        <div>
                            <p className={styles.t}>{`You are already driving with Perch, just make it official`}</p>
                            <p className={styles.text}>{`Driving with Perch is the same thing as driving by yourself ! The only difference is that the empty seats in your car would always be full and you might arrive at your destination a little later than usual, but the passive income you make, simply by filling your empty car seats, overcompensates it. Join Perch now and start enjoying these benefits and many more. `}</p>
                            <a className={styles.button1} href='/s/articles/steps_to_becoming_a_perch_driver'>
                                <p className={styles.buttonText1}>Learn more</p>
                            </a>
                        </div>
                        <img src="/manOnBlueCar.svg" alt="Perch Carpool" className={styles.manOnBlueCar} />
                    </div>

                    <div className={styles.c} style={{ marginTop: '100px' }}>
                        <div className={styles.downloadContainer} id={styles.app2}>
                            <img src="/downloadAppStore.svg" alt="Perch Carpool" className={styles.appIcon} />
                            <img src="/downloadGooglePlay.svg" alt="Perch Carpool" className={styles.appIcon} />
                        </div>
                        <img src="/boxBlueLogo.svg" alt="Perch Carpool" className={styles.boxBlueLogo} />
                        <div className={styles.buttonC}>
                            <p className={styles.t}>{`Download the Perch Driver app now`}</p>
                            <p className={styles.text}>{`To start giving out rides, you’d need the Perch Driver app. It’s an amazing application that streamlines your commuting experience. If you get a little confused , you can find help on using it in the “Help & FAQ ” section. Download it and start giving out rides now  `}</p>
                            <div className={styles.downloadContainer} id={styles.app1}>
                                <img src="/downloadAppStore.svg" alt="Perch Carpool" className={styles.appIcon} />
                                <img src="/downloadGooglePlay.svg" alt="Perch Carpool" className={styles.appIcon} />
                            </div>
                        </div>

                    </div>


                </div>
                <Footer />
            </div>
        )

    }
}
