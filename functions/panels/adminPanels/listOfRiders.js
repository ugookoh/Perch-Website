import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiFillStar } from 'react-icons/ai';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../../functions';
import styles from '../panel_layout.module.css';
import firebase from 'firebase';
import Loader from 'react-loader-spinner';

export default class ListOfRiders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idSearch: '',
            result: null,
            loading: false,
        };
    };
    componentDidMount() {

    };
    loadResult = () => {
        if (this.state.idSearch.length <= 5)
            alert('Enter the full user ID for search');
        else
            this.setState({ loading: true }, () => {
                firebase.database().ref(`users/${this.state.idSearch}`).once('value', snapshot => {
                    const user = snapshot?.val();

                    if (!!user) {
                        this.setState({ result: user, loading: false })
                    }
                    else
                        this.setState({ result: null, loading: false }, () => {
                            alert('User not found');
                        })
                });
            });
    };
    render() {
        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                    <>
                        <p className={styles.title} style={{ color: colors.BLACK }}>List of Users</p>
                        <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <input
                                type="text"
                                placeholder="Search by userID"
                                className={styles.searchInput}
                                style={{ width: '48%' }}
                                value={this.state.idSearch}
                                onChange={event => {
                                    this.setState({ idSearch: event.target.value });
                                }}
                            />
                            <div className={styles.searchButton} onClick={() => { this.loadResult() }}>
                                {this.state.loading ?
                                    <Loader
                                        type="TailSpin"
                                        color={colors.WHITE}
                                        height={'20px'}
                                        width={'20px'}
                                    /> :
                                    <p className={styles.searchButtonText}>Search</p>}
                            </div>
                        </div>
                    </>
                </div>

                {this.state.result &&
                    <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', marginBottom: '150px' }}>
                        <>
                            <p className={styles.title} style={{ color: colors.BLACK }}>{`${this.state.result.firstName} ${this.state.result.lastName} Summary`}</p>


                            <div className={styles.driverDashboardCont}>
                                <div className={styles.driverDashboard_TE}>
                                    <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                        <p className={styles.driverDashboard_BOXTITLE}>Total earnings</p>
                                        <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.GREEN }}>$ 1345.90</p>
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
                                            <p className={styles.driverDashboard_BOXTEXT} >{this.state.result.summarizedHistory.carpool.rating}</p>
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

                            <div className={styles.driverDashboardCont}>
                                <div className={styles.driverDashboard_TE}>
                                    <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                        <p className={styles.driverDashboard_BOXTITLE}>Email Address</p>
                                        <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.GREEN, fontSize: '130%', fontFamily: 'Gilroy-Bold' }}>{this.state.result.email}</p>
                                    </div>
                                </div>
                                <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                                <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                                    <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                                        <p className={styles.driverDashboard_BOXTITLE}>Phone number</p>
                                        <p className={styles.driverDashboard_BOXTEXT} style={{ fontSize: '130%', fontFamily: 'Gilroy-Bold' }}>{this.state.result.phoneNumber}</p>
                                    </div>

                                </div>
                            </div>

                        </>
                    </div>}


            </div>
        );
    };
};