import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiFillStar } from 'react-icons/ai';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../../functions';
import styles from '../panel_layout.module.css';

export default class ListOfDrivers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [1, 2, 3, 4, 5, 6, 7, 8, 9,],
            idSearch: '',
            showSummary: false
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        // if (this.state.result) {
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++)
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => { this.setState({ showSummary: true }) }}>
                        <p style={{ fontSize: '95%' }}>{'Martin Maddrazo'}</p>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '260px', justifyContent: 'space-between' }}>
                            <div className={styles.previousMessageDate}>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>
                                    {
                                        //dateformat(this.state.result[keys[k]].date)
                                        'Joined at 11/20/2020'
                                    }</p>

                            </div>
                            <div style={{ width: '50px', height: '30px', backgroundColor: colors.GREEN, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '-8px' }}>
                                <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>167</p>
                            </div>
                            <div style={{ width: '50px', height: '30px', backgroundColor: colors.RED, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>167</p>
                            </div>
                        </div>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        //}

        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                    {
                        this.state.showSummary ?
                            <>
                                <p className={styles.title} style={{ color: colors.BLACK }}>{`Micheal Myers Summary`}</p>


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

                                <div className={styles.driverDashboardCont}>
                                    <div className={styles.driverDashboard_TE}>
                                        <div className={styles.driverDashboard_BOX} style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Email Address</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ color: colors.GREEN, fontSize: '130%', fontFamily: 'Gilroy-Bold' }}>{'test@test.com'}</p>
                                        </div>
                                    </div>
                                    <div className={styles.sharedLine} style={{ width: '95%', backgroundColor: 'rgba(112, 112, 112, 0.19)' }}></div>
                                    <div className={styles.driverDashboard_TE} style={{ marginBottom: '15px' }}>

                                        <div className={styles.driverDashboard_BOX} style={{ marginLeft: '0px' }}>
                                            <p className={styles.driverDashboard_BOXTITLE}>Phone number</p>
                                            <p className={styles.driverDashboard_BOXTEXT} style={{ fontSize: '130%', fontFamily: 'Gilroy-Bold' }}>+123456789</p>
                                        </div>

                                    </div>
                                </div>

                            </>
                            : <>
                                <p className={styles.title} style={{ color: colors.BLACK }}>List of Drivers</p>
                                <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <input
                                        type="text"
                                        placeholder="Search by email / userID"
                                        className={styles.searchInput}
                                        style={{ width: '48%' }}
                                        value={this.state.idSearch}
                                        onChange={event => {
                                            this.setState({ idSearch: event.target.value });
                                        }}
                                    />
                                </div>

                                {results}
                            </>
                    }

                </div>
                {
                    this.state.showSummary ?
                        <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                            <div className={styles.button2} style={{ backgroundColor: colors.GREEN }} id={styles.buttonBottom} onClick={() => { this.setState({ showSummary: false }) }}>
                                <p className={styles.buttonText1}>Cancel</p>
                            </div>

                        </div> : <></>
                }
            </div>
        );
    };
};