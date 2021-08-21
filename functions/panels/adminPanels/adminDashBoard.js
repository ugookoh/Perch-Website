import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../../functions';
import styles from '../panel_layout.module.css';

export default class AdminDashBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sharedLinks: true,
            userDetails: this.props.userDetails,
            numberOfDriverApplications: 0,
            unansweredMessages: 0,
            unansweredDriverMessages: 0,
            numberOfVehicleAdditionRequest: 0,
            numberOfCancelledTrips: 0,
            allTimeAnalytics: {},
            weeklyAnalytics: {},
        };
    };
    componentDidMount() {
        firebase.database().ref(`analytics/numberOfUserFeedbackMessages`).on('value', snapshot => {
            this.setState({ unansweredMessages: snapshot.val() })
        });
        firebase.database().ref(`analytics/numberOfCancelledTrips`).on('value', snapshot => {
            this.setState({ numberOfCancelledTrips: snapshot.val() })
        });
        firebase.database().ref(`analytics/numberOfDriverFeedbackMessages`).on('value', snapshot => {
            this.setState({ unansweredDriverMessages: snapshot.val() })
        });
        firebase.database().ref(`analytics/numberOfVehicleAdditionRequest`).on('value', snapshot => {
            this.setState({ numberOfVehicleAdditionRequest: snapshot.val() })
        });
        firebase.database().ref(`analytics/numberOfDriverApplications`).on('value', snapshot => {
            this.setState({ numberOfDriverApplications: snapshot.val() })
        });

        firebase.database().ref(`analytics/allTimeAnalytics/admin`).once('value', snapshot => {
            this.setState({ allTimeAnalytics: snapshot.val() });
        });
        firebase.database().ref(`currentWeek/value`).once('value', week => {
            firebase.database().ref(`analytics/weeklyAnalytics/${week.val()}/admin`).once('value', snapshot => {
                this.setState({ weeklyAnalytics: snapshot.val() })
            });
        });
    };

    render() {
        return (
            <div className={styles.cont}>
                <AdminDashSummary
                    title={'WH'}
                    data={this.state.weeklyAnalytics}
                />
                <AdminDashSummary
                    title={'OH'}
                    data={this.state.allTimeAnalytics}
                />
                <div className={styles.container} style={{ backgroundColor: colors.GREEN, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.WHITE }}>New driver applications</p>
                    <p className={styles.text} style={{ color: colors.WHITE }}>
                        You have {this.state.numberOfDriverApplications} new driver applications left
                    </p>
                </div>

                <div className={styles.container} style={{ backgroundColor: colors.GREEN, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.WHITE }}>New vehicle applications</p>
                    <p className={styles.text} style={{ color: colors.WHITE }}>
                        You have {this.state.numberOfVehicleAdditionRequest} new vehicle applications left
                    </p>
                </div>

                <div className={styles.container} style={{ backgroundColor: colors.GREEN, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.WHITE }}>Unanswered messages</p>
                    <p className={styles.text} style={{ color: colors.WHITE }}>
                        You have {this.state.unansweredMessages} unaswered messages
                    </p>
                </div>

                <div className={styles.container} style={{ backgroundColor: colors.GREEN, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.WHITE }}>Unanswered driver messages</p>
                    <p className={styles.text} style={{ color: colors.WHITE }}>
                        You have {this.state.unansweredDriverMessages} unaswered driver messages
                    </p>
                </div>

                <div className={styles.container} style={{ backgroundColor: colors.GREEN, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.WHITE }}>Cancelled trips</p>
                    <p className={styles.text} style={{ color: colors.WHITE }}>
                        You have {this.state.numberOfCancelledTrips} unresolved cancelled trips
                    </p>
                </div>
                <div style={{ backgroundColor: colors.WHITE, marginTop: '20px', marginBottom: '150px' }}>
                </div>
            </div>
        )

    }
};

const AdminDashSummary = ({ title, data }) => {
    const rendervalid = (x) => {
        if (x) return x;
        else return 0;
    }
    return (
        <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
            {title == 'OH' ?
                <div className={styles.enterKilometerDiv}>
                    <p className={styles.title} style={{ color: colors.BLACK, width: 'initial', }}>Overall history</p>
                </div> :
                <p className={styles.title} style={{ color: colors.BLACK }}>Weekly History</p>}

            <div className={styles.driverDashboardCont}>
                <div className={styles.driverDashboard_TE}>
                    <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                        <p className={styles.driverDashboard_BOXTITLE}>Total number of users</p>
                        <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.GREEN }}>{rendervalid(data?.numberOfUsers)}</p>
                    </div>
                    <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                        <p className={styles.driverDashboard_BOXTITLE}>Perch kms (Sign Up)</p>
                        <p className={styles.driverDashboard_BOXTEXT} style={{}}>{rendervalid(data?.perchKilometersGivenOut?.signUp)}</p>
                    </div>
                    <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                        <p className={styles.driverDashboard_BOXTITLE}>Perch kms (Referrals)</p>
                        <p className={styles.driverDashboard_BOXTEXT} style={{}}>{rendervalid(data?.perchKilometersGivenOut?.referral)}</p>
                    </div>
                </div>
                <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                    <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                        <p className={styles.driverDashboard_BOXTITLE}>Completed trips</p>
                        <p className={styles.driverDashboard_BOXTEXT} >{rendervalid(data?.completedTrips)}</p>
                    </div>

                    <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                        <p className={styles.driverDashboard_BOXTITLE}>Passengers carried</p>
                        <p className={styles.driverDashboard_BOXTEXT} >{rendervalid(data?.passengersCarried)}</p>
                    </div>

                    <div className={styles.driverDashboard_BOX}>
                        <p className={styles.driverDashboard_BOXTITLE}>Driver's to be paid</p>
                        <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.BLUE }}>${rendervalid(data?.toBePaidToDrivers).toFixed(2)}</p>
                    </div>

                    <div className={styles.driverDashboard_BOX}>
                        <p className={styles.driverDashboard_BOXTITLE}>Rider cancellations</p>
                        <p className={styles.driverDashboard_BOXTEXT} >{rendervalid(data?.cancelledTrips?.rider)}</p>
                    </div>

                    <div className={styles.driverDashboard_BOX}>
                        <p className={styles.driverDashboard_BOXTITLE}>Driver cancellations</p>
                        <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.RED }}>{rendervalid(data?.cancelledTrips?.driver)}</p>
                    </div>

                    <div className={styles.driverDashboard_BOX} style={{ marginRight: '0px' }}>
                        <p className={styles.driverDashboard_BOXTITLE}>Number of deleted accounts</p>
                        <p className={styles.driverDashboard_BOXTEXT} style={{}}>{rendervalid(data?.numberOfDeletedUsers)}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};