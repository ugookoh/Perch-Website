import Head from 'next/head';
import styles from './layout.module.css';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Router from 'next/router';

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
                    <title>How Perch Works | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" href="/favicon.ico" />
                    <html lang="en"></html>
                </Head>
                <Header loggedIn={this.state.loggedIn} />
                <img src="/articlesPageBack1.svg" alt="Perch Carpool" className={styles.mainPageBack1} />
                <div className={styles.body}>

                    <div className={styles.c_} style={{ marginTop: '15px', marginBottom: '20px', justifyContent: 'space-between', alignItems: 'center', }}>
                        <p className={styles.t1} style={{ margin: '0px' }}>How Perch works</p>
                        <div className={styles.shareIcon_C} style={{ margin: '0px' }}>
                            <img src="/facebook_share.svg" alt="Perch Facebook" className={styles.shareIcon} />
                            <img src="/google_share.svg" alt="Perch Google" className={styles.shareIcon} />
                            <img src="/twitter_share.svg" alt="Perch Twitter" className={styles.shareIcon} />
                            <img src="/instagram_share.svg" alt="Perch Instagram" className={styles.shareIcon} />
                        </div>
                    </div>

                    <p className={styles.subTitle} >{`Getting a ride to your destination has never been easier. This is how Perch gets you from your location to your destination in the most affordable and convenient way.`}</p>

                    <div className={styles.p_} style={{ marginTop: '60px' }} >
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} style={{ top: '0px' }}></div>
                        <div className={styles.sFill} id={styles.leftPanel}>
                            <img src="/installingPerch.svg" alt="Perch Carpool" className={styles.hpwImage} />
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} id={styles.panelBottom}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    Install Perch and create an account
                                </p>
                                <p className={styles.panelText}>
                                    Perch is available on iOS and Android operating systems at the moment so feel free to install it and get your first ride on us.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.p_} style={{}} id={styles.p__}>
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} id={styles.c_dash2nd}></div>
                        <div className={styles.sFill_} id={styles.leftPanel}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    Enter your location and destination
                                </p>
                                <p className={styles.panelText}>
                                    Click on the <span style={{ fontFamily: 'Gilroy-SemiBold' }}>Where are you headed?</span> button and enter your location and destination.
                                     You can also use the pin-drag feature on the map to fine tune your search results.
                                </p>
                            </div>
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} >
                            <img src="/whereYouHeaded.svg" alt="Perch Carpool" className={styles.hpwImage} />
                        </div>
                    </div>

                    <div className={styles.p_} style={{}} >
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} style={{ }}></div>
                        <div className={styles.sFill} id={styles.leftPanel}>
                            <img src="/serverImage.svg" alt="Perch Carpool" className={styles.hpwImage} />
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} id={styles.panelBottom}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    Get results, fast.
                                </p>
                                <p className={styles.panelText}>
                                    Perch’s algorithm provides optimal commuting options by pairing riders with the empty seats of drivers going in the same direction.
                                    Unlike other ride sharing options where drivers are on a schedule to find rides,
                                    it is at no extra cost or time for the driver to have you on their ride,
                                    hence giving the driver a source of truly passive income while drastically increasing convenience for your commute by providing you with the luxury,
                                    privacy and speed of a car over public transport.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.p_} style={{}} id={styles.p__}>
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} id={styles.c_dash2nd}></div>
                        <div className={styles.sFill_} id={styles.leftPanel}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    How pairing works
                                </p>
                                <p className={styles.panelText}>
                                    Unlike other ride-sharing options which require drivers to be on a schedule,
                                    Perch pairs you with people already going in your direction.
                                    It is at no extra cost or time for the drivers to carry you along.
                                    So in order to apply this, sometimes, you might have to walk a little distance,
                                    having a maximum of around 300 meters,
                                    to get to where the driver picks you and also walk a little distance to the drop-off.
                                </p>
                            </div>
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} >
                            <img src="/map1Trip.svg" alt="Perch Carpool" className={styles.hpwImage} />
                        </div>
                    </div>

                    <div className={styles.p_} style={{}} >
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} style={{ }}></div>
                        <div className={styles.sFill} id={styles.leftPanel}>
                            <img src="/123TripsPanels.svg" alt="Perch Carpool" className={styles.hpwImage} />
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} id={styles.panelBottom}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    Get results, fast.
                                </p>
                                <p className={styles.panelText}>
                                    In order to ensure you get the most convenient,
                                    most affordable option always,
                                    Perch pairs you not only with single rides but also with double and triple rides and you can identify this by the number of car icons on an option.<br /><br />
                                    A one-step ride would have one driver pick you from your location and drop you at your destination.
                                    In a two-step ride,
                                    a first driver would carry you halfway along your trip your destination and a second driver would carry you along the other half and drop you at your destination.
                                    In a three-step ride, you take three different stops to your destination.
                                    All these transfers happen with minimal waiting times.<br /><br />
                                    <a href='/s/articles/joint_rides'><span className={styles.faqChoice} style={{ fontFamily: 'Gilroy-Semibold', }}>See more on joint rides here</span></a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.p_} style={{}} id={styles.p__}>
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} id={styles.c_dash2nd}></div>
                        <div className={styles.sFill_} id={styles.leftPanel}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    Make a choice based on your preference.
                                </p>
                                <p className={styles.panelText}>
                                    There are many things affecting the perfect commute for you and we want to get it right.
                                    You can pick the ride closest to you,
                                    the cheapest option, the option with the lowest walking distance,
                                    the option with the minimum or maximum number of stops or the one that would get you to your location the earliest.
                                    Don’t forget to pick out the <span style={{ fontFamily: 'Gilroy-Semibold' }}>number of seats</span> you need.
                                </p>
                            </div>
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} >
                            <img src="/womanChoice.svg" alt="Perch Carpool" className={styles.hpwImage} />
                        </div>
                    </div>

                    <div className={styles.p_} style={{}} >
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} style={{ }}></div>
                        <div className={styles.sFill} id={styles.leftPanel}>
                            <img src="/tripDetailsPanel.svg" alt="Perch Carpool" className={styles.hpwImage} id={styles.tripDetailsPanel} />
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} id={styles.panelBottom}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    Send your request to the driver
                                </p>
                                <p className={styles.panelText}>
                                    After reviewing your trip details,
                                    click on the <span style={{ fontFamily: 'Gilroy-Semibold' }}>Request Perch</span> button to send a request to the drivers.
                                    If you are getting a two or three step ride,
                                    it would need approval from all the drivers involved.
                                    Once they all accept, your trip will begin.
                                    You only get charged after all drivers involved accept your request.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.p_} style={{}} id={styles.p__}>
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} id={styles.c_dash2nd}></div>
                        <div className={styles.sFill_} id={styles.leftPanel}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    The kilometre plan
                                </p>
                                <p className={styles.panelText}>
                                    Since Perch pairs you with drivers already going on the same route as you,
                                    it makes it a very affordable option to commute.
                                    Commute cost is independent of traffic and surge pricing making it constant at every given point in time.
                                    Riders can now pay using a constant rate per kilometre travelled so travel amount is upfront and easily affordable.<br /><br />
                                    <span style={{ fontFamily: 'Gilroy-Semibold' }} className={styles.faqChoice}>Read more on payment here</span>
                                </p>
                            </div>
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} >
                            <img src="/cashMoneyPanels.svg" alt="Perch Carpool" className={styles.hpwImage} />
                        </div>
                    </div>

                    <div className={styles.p_} style={{}} >
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} style={{ }}></div>
                        <div className={styles.sFill} id={styles.leftPanel}>
                            <img src="/getRealTimeUpdatesPanel.svg" alt="Perch Carpool" className={styles.hpwImage} id={styles.tripDetailsPanel} />
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} id={styles.panelBottom}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    Get real time updates
                                </p>
                                <p className={styles.panelText}>
                                    Several panels in the app provides you with real time updates and trip information like when to start walking to your stop,
                                    when to get off a car,
                                    your next driver,
                                    car details and other important updates needed along your commute.
                                    Remember to always check and verify your ride before entering the vehicle.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.p_} style={{}} id={styles.p__}>
                        <div className={styles.dash}></div>
                        <div className={styles.c_dash} style={{ top: '0px' }}></div>
                        <div className={styles.c_dash} style={{ bottom: '0px' }}></div>
                        <div className={styles.sFill_} id={styles.leftPanel}>
                            <div className={styles.panel}>
                                <p className={styles.panelTitle}>
                                    Rate your driver
                                </p>
                                <p className={styles.panelText}>
                                    Tell us how great our service was and what we need to improve.
                                    Always feel free to provide feedback using our <a href='/contact_us'><span style={{ fontFamily: 'Gilroy-Semibold' }} className={styles.faqChoice}>Contact Us</span></a> feature. Happy commuting !
                                </p>
                            </div>
                        </div>
                        <div className={styles.inv}></div>
                        <div className={styles.sFill} >
                            <img src="/rateRiders.svg" alt="Perch Carpool" className={styles.hpwImage} />
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )

    }
}
