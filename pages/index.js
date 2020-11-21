//landing page
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Router from 'next/router';

export default class index extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
    };
  };
  componentDidMount() {
    // Router.push('./s/articles/procedures_for_taking_a_picture').then(() => window.scrollTo(0, 0));
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    //   firebase.auth().signInWithEmailAndPassword('test@test.com', 'Test123')
    //     .catch(error => { alert(error.message) });
    // }).catch(error => { console.log(error.message) });
  };
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Main Page | Perch</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href="/favicon.ico" />
          <html lang="en"></html>
        </Head>
        <Header loggedIn={this.state.loggedIn} />

        <img src="/mainPageBack1.svg" alt="Perch Carpool" className={styles.mainPageBack1} />
        {/* <img src="/mainPageBack2.svg" alt="Perch Carpool" className={styles.mainPageBack2} /> */}
        <div className={styles.body}>
          <div className={styles.c} style={{}}>
            <img src="/carpoolOpenDoor.svg" alt="Perch Carpool" className={styles.carpoolOpenDoor} />
            <div>
              <p className={styles.t1}>In need of a fun, affordable way to go about your daily commute? <span style={{ color: '#4EB848', display: 'inherit' }}>Introducing Perch</span></p>
              <p className={styles.text}>{`Perch is a new carpooling service aimed at easing your daily commute by providing you with access to the empty seats of thousands of drivers who commute on the same route as you. Read on to see how it works.`}</p>
            </div>
          </div>

          <div className={styles.c_} style={{ marginTop: '100px' }}>
            <div className={styles.buttonC}>
              <p className={styles.t}>{`How does Perch work?`}</p>
              <p className={styles.text}>{`Unlike other ride-sharing or carpooling options, driving for Perch does need a schedule or some free time. All it needs is a destination to go to. Because of this, as drivers drive to their destination, it is at no extra cost to pick up riders. As riders get paired with drivers going in their direction all they have to do is walk a little distance into the path of the driver and get a ride along with them to their destination at a very affordable cost. `}</p>
              <a className={styles.button1}>
                <p className={styles.buttonText1}>See how it works</p>
              </a>
            </div>
            <img src="/map1Trip.svg" alt="Perch Carpool" id={styles.map1Trip} className={styles.map1Trip} />
          </div>

          <div className={styles.c} style={{ marginTop: '100px' }}>
            <img src="/girlsGivingGifts.svg" alt="Perch Carpool" className={styles.girlsGivingGifts} id={styles.girlsGivingGifts} />
            <div className={styles.buttonC}>
              <p className={styles.t}>{`Efficient and affordable, a gift to the community of daily commuters `}</p>
              <p className={styles.text}>{`No surge pricing, no pricing based on traffic, only pay based on the kilometres travelled. Since the driver is already going on that direction, it is at no extra cost to them to carry you along. We are also giving out free rides! You read the right, in order to show you how amazing the service is, we are giving every first trip free of charge. We also provide regular incentives and even more for sharing the app with your friends.`}</p>
              <a className={styles.button1}>
                <p className={styles.buttonText1}>Learn more</p>
              </a>
            </div>
          </div>

          <div className={styles.c_} style={{ marginTop: '100px' }}>
            <div className={styles.buttonC}>
              <p className={styles.t}>{`Download and share`}</p>
              <p className={styles.text}>{`To book or make rides, you need the Perch application which is only available on iOS and Android operating systems at the moment. It’s a full developed software to provide you with all the information you need from the beginning to the end of your commute. Feel free to download it and provide any feedback on what you feel needs improvement `}</p>
              <div className={styles.downloadContainer} id={styles.app1}>
                <img src="/downloadAppStore.svg" alt="Perch Carpool" className={styles.appIcon} />
                <img src="/downloadGooglePlay.svg" alt="Perch Carpool" className={styles.appIcon} />
              </div>
            </div>
            <img src="/phonesPerch.svg" alt="Perch Carpool" className={styles.phonesPerch} />
            <div className={styles.downloadContainer} id={styles.app2}>
              <img src="/downloadAppStore.svg" alt="Perch Carpool" className={styles.appIcon} />
              <img src="/downloadGooglePlay.svg" alt="Perch Carpool" className={styles.appIcon} />
            </div>
          </div>

          <div className={styles.c} style={{ marginTop: '100px' }}>
            <img src="/manOnCarMoney.svg" alt="Perch Carpool" className={styles.manOnCarMoney} />
            <div className={styles.buttonC}>
              <p className={styles.t}>{`How does making money for every kilometre you drive soon?`}</p>
              <p className={styles.text}>{`If you are a commuter with a car, you need to join in on the fun ! With Perch you do not need a schedule or some free time to be allowed to drive with us. All you need is a destination. Our driver app is amazing and easy to use.  Enter your destination and get payed for the distance and number of people you carry. So theoretically, carrying 4 people over a distance of 10 kilometres would give you a 40 kilometre payout at no extra cost to you. Read more on it below.`}</p>
              <a className={styles.button1}>
                <p className={styles.buttonText1}>Read more</p>
              </a>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    )

  }
}
