import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiFillStar } from 'react-icons/ai';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../../functions';
import styles from '../panel_layout.module.css';



export default class DriverDashBoard extends React.Component {
    constructor() {
        super();

        this.state = {
            sharedLinks: true,
        };
    };
    componentDidMount() {
    };
    render() {
        let sharedLinks = [];
        for (let i = 0; i < 5; i++) {
            sharedLinks.push(
                <div className={styles.sharedLinksCont}>
                    <div className={styles.sharedLinks}>
                        <div className={styles.dp1}>
                            <img src="/doggyProfilePicture.svg" className={styles.doggyProfilePicture} />
                        </div>
                        <p className={styles.text1} style={{ color: colors.BLACK }}>Edmond</p>
                        <p className={styles.addedKm}>+ 5km</p>
                    </div>
                    {i !== 5 - 1 ?
                        <div className={styles.sharedLine}></div>
                        : <></>}
                </div>
            );
        }
        return (
            <div className={styles.cont}>

                <DriverDashBoardSummary title='WH' />
                <DriverDashBoardSummary title='OH' />
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', marginBottom: "150px" }}>
                    <p className={styles.title} style={{ color: colors.BLACK }}>Platform links</p>
                    <p className={styles.text} style={{ color: colors.GREY }}>
                        At the moment, taking rides with Perch is only available on the mobile app for iOS and android devices.
                    </p>
                    <div style={{ display: 'flex', width: '90%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <div className={styles.downloadCont}>
                            <img src="/downloadAppStore.svg" alt="Download Perch on App store" className={styles.downloadApp} />
                            <img src="/downloadGooglePlay.svg" alt="Download Perch on App store" className={styles.downloadApp} />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
};
class DriverDashBoardSummary extends React.Component {
    constructor() {
        super();
    };
    render() {
        return (
            <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                {this.props.title == 'OH' ?
                    <div className={styles.enterKilometerDiv}>
                        <p className={styles.title} style={{ color: colors.BLACK, width: 'initial', }}>Overall history</p>
                        <p className={styles.driverDashboard_BOXTITLE} style={{ margin: '0px', textAlign: 'center', marginLeft: '20px' }}><span id={styles.driverDashboard_HALFDATE}>{`Joined 09/2019`}</span><span id={styles.driverDashboard_FULLDATE}>{`Joined September 2019`}</span></p>
                    </div> :
                    <p className={styles.title} style={{ color: colors.BLACK }}>Monthly history</p>}

                <div className={styles.driverDashboardCont}>
                    <div className={styles.driverDashboard_TE}>
                        <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                            <p className={styles.driverDashboard_BOXTITLE}>Total earnings</p>
                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.BLUE }}>$ 1345.90</p>
                        </div>
                    </div>
                    <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                    <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                        <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                            <p className={styles.driverDashboard_BOXTITLE}>Completed trips</p>
                            <p className={styles.driverDashboard_BOXTEXT} >7</p>
                        </div>

                        <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Average rating</p>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <p className={styles.driverDashboard_BOXTEXT} >4.6</p>
                                <AiFillStar size={'15px'} style={{ marginLeft: '5px' }} />
                            </div>
                        </div>

                        <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Driver cancellations</p>
                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.RED }}>3</p>
                        </div>

                        <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Rider cancellations</p>
                            <p className={styles.driverDashboard_BOXTEXT} >17</p>
                        </div>

                        <div className={styles.driverDashboard_BOX} style={{ marginRight: '0px' }}>
                            <p className={styles.driverDashboard_BOXTITLE}>Passengers carried</p>
                            <p className={styles.driverDashboard_BOXTEXT} >237</p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
};