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
            numberOVehicleAdditionRequest: 0,
            numberOfCancelledTrips: 0,
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
        firebase.database().ref(`analytics/numberOVehicleAdditionRequest`).on('value', snapshot => {
            this.setState({ unansweredDriverMessages: snapshot.val() })
        });
        firebase.database().ref(`analytics/numberOfDriverApplications`).on('value', snapshot => {
            this.setState({ numberOfDriverApplications: snapshot.val() })
        });
    };
    render() {
        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                    {this.props.title == 'OH' ?
                        <div className={styles.enterKilometerDiv}>
                            <p className={styles.title} style={{ color: colors.BLACK, width: 'initial', }}>Overall history</p>
                            <p className={styles.driverDashboard_BOXTITLE} style={{ margin: '0px', textAlign: 'center', marginLeft: '20px' }}><span id={styles.driverDashboard_HALFDATE}>{`Joined 09/2019`}</span><span id={styles.driverDashboard_FULLDATE}>{`Joined September 2019`}</span></p>
                        </div> :
                        <p className={styles.title} style={{ color: colors.BLACK }}>Breakdown</p>}

                    <div className={styles.driverDashboardCont}>
                        <div className={styles.driverDashboard_TE}>
                            <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                <p className={styles.driverDashboard_BOXTITLE}>Total number of users</p>
                                <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.GREEN }}>1672</p>
                            </div>
                        </div>
                        <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                        <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                            <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                                <p className={styles.driverDashboard_BOXTITLE}>Completed trips</p>
                                <p className={styles.driverDashboard_BOXTEXT} >7</p>
                            </div>

                            <div className={styles.driverDashboard_BOX}>
                                <p className={styles.driverDashboard_BOXTITLE}>Unread feedback</p>
                                <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.RED }}>328</p>
                            </div>

                            <div className={styles.driverDashboard_BOX}>
                                <p className={styles.driverDashboard_BOXTITLE}>Rider cancellations</p>
                                <p className={styles.driverDashboard_BOXTEXT} >17</p>
                            </div>

                            <div className={styles.driverDashboard_BOX}>
                                <p className={styles.driverDashboard_BOXTITLE}>Driver cancellations</p>
                                <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.RED }}>3</p>
                            </div>

                            <div className={styles.driverDashboard_BOX} style={{ marginRight: '0px' }}>
                                <p className={styles.driverDashboard_BOXTITLE}>Number of deleted accounts</p>
                                <p className={styles.driverDashboard_BOXTEXT} style={{}}>132</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.container} style={{ backgroundColor: colors.GREEN, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.WHITE }}>New driver applications</p>
                    <p className={styles.text} style={{ color: colors.WHITE }}>
                        You have {this.state.numberOfDriverApplications} new driver applications left
                    </p>
                </div>

                <div className={styles.container} style={{ backgroundColor: colors.GREEN, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.WHITE }}>New vehicle applications</p>
                    <p className={styles.text} style={{ color: colors.WHITE }}>
                        You have {this.state.numberOVehicleAdditionRequest} new vehicle applications left
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
                <div  style={{ backgroundColor: colors.WHITE, marginTop: '20px', marginBottom: '150px' }}>
                </div>
            </div>
        )

    }
};