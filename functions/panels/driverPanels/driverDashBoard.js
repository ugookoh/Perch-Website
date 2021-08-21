import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiFillStar } from 'react-icons/ai';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../../functions';
import styles from '../panel_layout.module.css';
import firebase from 'firebase';


export default class DriverDashBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userDetails: this.props.userDetails,
            allTimeAnalytics: {},
            weeklyAnalytics: {},
        };
    };
    componentDidMount() {
        const { userID } = this.props.userDetails;
        firebase.database().ref(`analytics/allTimeAnalytics/driver/${userID}`).once('value', snapshot => {
            this.setState({ allTimeAnalytics: snapshot.val() });
        });
        firebase.database().ref(`currentWeek/value`).once('value', week => {
            firebase.database().ref(`analytics/weeklyAnalytics/${week.val()}/driver/${userID}`).once('value', snapshot => {
                this.setState({ weeklyAnalytics: snapshot.val() })
            });
        });
    };
    render() {
        return (
            <div className={styles.cont}>

                <DriverDashBoardSummary title='WH'
                    data={this.state.weeklyAnalytics}
                />
                <DriverDashBoardSummary title='OH'
                    data={this.state.allTimeAnalytics}
                    driverRating={this.state.userDetails.driverSummarizedHistory.carpool.rating}
                    driverJoinedText={this.state.userDetails.driverJoinedText}
                />
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
    constructor(props) {
        super(props);
    };
    rendervalid(x) {
        if (x) return x;
        else return 0;
    }
    render() {
        const { data, driverRating, driverJoinedText } = this.props;
        return (
            <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                {this.props.title == 'OH' ?
                    <div className={styles.enterKilometerDiv}>
                        <p className={styles.title} style={{ color: colors.BLACK, width: 'initial', }}>Overall history</p>
                        <p className={styles.driverDashboard_BOXTITLE} style={{ margin: '0px', textAlign: 'center', marginLeft: '20px' }}><span id={styles.driverDashboard_FULLDATE}>{driverJoinedText}</span></p>
                    </div> :
                    <p className={styles.title} style={{ color: colors.BLACK }}>Weekly history</p>}

                <div className={styles.driverDashboardCont}>
                    <div className={styles.driverDashboard_TE}>
                        <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                            <p className={styles.driverDashboard_BOXTITLE}>Total earnings</p>
                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.BLUE }}>$ {this.rendervalid(data?.amountEarned).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                    <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                        <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                            <p className={styles.driverDashboard_BOXTITLE}>Completed trips</p>
                            <p className={styles.driverDashboard_BOXTEXT} >{this.rendervalid(data?.completedTrips)}</p>
                        </div>

                        {driverRating && <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Rating</p>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <p className={styles.driverDashboard_BOXTEXT}>{driverRating.toFixed(1)}</p>
                                <AiFillStar size={'15px'} style={{ marginLeft: '5px' }} />
                            </div>
                        </div>}

                        <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Driver cancellations</p>
                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.RED }}>{this.rendervalid(data?.cancelledTrips?.cancelled)}</p>
                        </div>

                        <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Rider cancellations</p>
                            <p className={styles.driverDashboard_BOXTEXT} >{this.rendervalid(data?.cancelledTrips?.cancelledOn)}</p>
                        </div>

                        <div className={styles.driverDashboard_BOX} style={{ marginRight: '0px' }}>
                            <p className={styles.driverDashboard_BOXTITLE}>Passengers carried</p>
                            <p className={styles.driverDashboard_BOXTEXT} >{this.rendervalid(data?.passengersCarried)}</p>
                        </div>

                        <div className={styles.driverDashboard_BOX}>
                            <p className={styles.driverDashboard_BOXTITLE}>Driver timeouts</p>
                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.RED }}>{this.rendervalid(data?.driverTimeouts)}</p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
};