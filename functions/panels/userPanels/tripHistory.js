import firebase from 'firebase';
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiStopCircle } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { VscCalendar } from 'react-icons/vsc';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    M, polylineLenght,
    timeAndDate, colors
} from '../../functions';
import styles from '../panel_layout.module.css';


export default class TripHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: false,
            date: new Date().getTime(),
            userDetails: this.props.userDetails,
        };
    };

    componentDidMount() {
        this.loadResult();
    }

    loadResult = () => {
        if (this.state.userDetails) {
            this.setState({ result: null }, () => {
                firebase.database().ref(`userHistory/${this.state.userDetails.userID}/carpool/${new Date(this.state.date).getFullYear()}/${M[new Date(this.state.date).getMonth()]}`).once('value', snapshot => {
                    this.setState({ result: snapshot.val() ? snapshot.val() : 'NORESULTS' });
                }).catch(error => { console.log(error.message) });
            });
        }
    };
    sorter(a, b) {
        function numbergetter(time) {
            let slash1 = 0, slash2 = 0, slash3 = 0;
            for (let k = 0; k < time.length; k++) {
                if (time.charAt(k) == '-')
                    slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;
            };

            const DAY = Number(time.substring(0, slash1)) * 86400;
            const HOUR = Number(time.substring(slash1 + 1, slash2)) * 3600;
            const MINS = Number(time.substring(slash2 + 1, slash3)) * 60;
            const SECS = Number(time.substring(slash3 + 1, time.length));

            return (DAY + HOUR + MINS + SECS)
        };

        let a_time = numbergetter(a)
        let b_time = numbergetter(b)

        if (a_time > b_time)
            return -1;
        else
            return 1
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let trips = [];

        if (this.state.result && this.state.result != 'NORESULTS') {
            const keys = Object.keys(this.state.result).sort(this.sorter);
            for (let i = 0; i < keys.length; i++) {
                trips.push(
                    <Trip
                        key={keys[i]}
                        date={timeAndDate(keys[i], M[new Date(this.state.date).getMonth()], new Date(this.state.date).getFullYear())}
                        data={this.state.result[keys[i]]}
                        lastItem={i == keys.length - 1}
                        type='Rider'
                    />
                );
            }
        }
        return (
            <>
                <div className={styles.cont} style={{ height: '100%', paddingTop: '10px', position: 'relative' }}>

                    <div className={styles.tripPanelDesc} >
                        <div className={styles.tripPanelCalenderCont} style={{ marginRight: '10px' }}>
                            <VscCalendar color={colors.GREEN} size={'24px'} style={{ marginRight: '4px', marginBottom: '3px' }} />
                            <DatePicker
                                className={styles.calendarDate}
                                placeholderText={`${M[new Date(this.state.date).getMonth()].toUpperCase()} ${new Date(this.state.date).getFullYear()}`}
                                onChange={date => { this.setState({ date: date }, () => { this.loadResult() }); }}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                            />
                        </div>
                        <p className={styles.contactUsLasttext} id={styles.tripPanelAlignMiddle} style={{ width: 'initial', fontSize: '80%', margin: '0px' }}>
                            To see the details of a trip please use the mobile app
                        </p>
                    </div>
                    {this.state.result ?
                        this.state.result == 'NORESULTS' ?
                            <div className={styles.tripPanelLoading} id={styles.tripPanelLoading_}>
                                <img src="/noResultsWoman.svg" className={styles.noResultsWoman} alt="No Results" />
                                <p className={styles.contactUsLasttext} style={{ width: 'initial', fontSize: '90%', margin: '0px' }} id={styles.tripPanelLoadingText}>
                                    Surprisingly, you haven't booked any rides during this time.
                                </p>
                            </div> :
                            trips :
                        <div className={styles.tripPanelLoading}>
                            <Loader
                                type="TailSpin"
                                color={colors.GREEN}
                                height={'100px'}
                                width={'100px'}
                            />
                        </div>}
                </div>
            </>
        );
    }
};

class Trip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }
    render() {
        if (this.props.type == 'Rider') {
            let bar = <></>;
            const data = JSON.parse(this.props.data.data);
            let totalDistance = 0;
            switch (this.props.data.driverDetails.steps) {
                case 1: {
                    totalDistance = data.firstDistance;
                    bar = <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: colors.GREEN }} >
                    </div>;
                } break;
                case 2: {
                    totalDistance = data.firstDistance + data.secondDistance;
                    bar = <div className={styles.tripPanelNoOfTrips}>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.firstDistance / totalDistance) * 100) + '%', backgroundColor: colors.GREEN, borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }} >
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.secondDistance / totalDistance) * 100) + '%', backgroundColor: colors.BLUE, borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }} >
                        </div>
                    </div>
                } break;
                case 3: {
                    totalDistance = data.firstDistance + data.secondDistance + data.thirdDistance;
                    bar = <div className={styles.tripPanelNoOfTrips}>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.firstDistance / totalDistance) * 100) + '%', backgroundColor: colors.GREEN, borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }} >
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.secondDistance / totalDistance) * 100) + '%', backgroundColor: colors.BLUE, borderRadius: '0px' }} >
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ width: ((data.thirdDistance / totalDistance) * 100) + '%', backgroundColor: colors.PURPLE, borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }} >
                        </div>

                    </div>
                } break;
            };
            totalDistance > 100 ?
                totalDistance = `${(totalDistance / 1000).toFixed(1)} kilometers` :
                totalDistance = `${(totalDistance).toFixed(totalDistance != 0 ? 1 : 0)} meters`;
            return (
                <>
                    <div id={styles.tripPanelCont} >
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px' }}>
                            <p className={styles.tripPanelTitle}>{`${this.props.data.driverDetails.steps}-leg trip`}</p>
                            <p className={styles.tripPanelTime}>{this.props.date}</p>
                        </div>

                        {bar}
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '20px' }}>
                            <HiOutlineLocationMarker color={colors.GREEN} style={{ margin: '0px', marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{this.props.data.location.description}</p>
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '10px' }}>
                            <BiStopCircle color={colors.GREEN} style={{ marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{this.props.data.destination.description}</p>
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: colors.GREY, height: '1px', marginTop: '17px' }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', marginTop: '10px', marginBottom: '15px' }}>
                            <p className={styles.tripPanelTitle} style={{ fontFamily: 'Gilroy-Medium', margin: '0px' }}>{totalDistance}</p>
                            <p className={styles.tripPanelCash} >{`$ 5.99`}</p>
                        </div>
                    </div>
                    {
                        this.props.lastItem ?//just for padding at the bottom
                            <div style={{ height: '150px', width: '100%', backgroundColor: 'transparent' }}></div>
                            : <></>
                    }
                </>
            );
        }
        else if (this.props.type == 'Driver') {
            const data = this.props.data;
            let passNo = 0, distance = 0, total = '$ 0.00';
            if (data.trips) {
                for (let key in data.trips) {
                    passNo += data.trips[key].details.tripDetails.seatNumber;
                    distance += (polylineLenght(JSON.parse(data.trips[key].details.tripDetails.leg)) * data.trips[key].details.tripDetails.seatNumber);//seat no * distance
                };
            };
            //distance = distance * passNo;
            distance > 100 ?
                distance = `${(distance / 1000).toFixed(1)} KM` :
                distance = `${(distance).toFixed(distance != 0 ? 1 : 0)} M`;

            distance = distance.toLowerCase();
            passNo = `${passNo} ${passNo == 1 ? 'person' : 'people'}`;
            total = '$ 213.00';


            return (
                <>
                    <div id={styles.tripPanelCont} >
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px' }}>
                            <p className={styles.tripPanelTitle}>{passNo}</p>
                            <p className={styles.tripPanelTime}>{this.props.date}</p>
                        </div>

                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: colors.BLUE, height: '10px', }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '20px' }}>
                            <HiOutlineLocationMarker color={colors.BLUE} style={{ margin: '0px', marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{data.locationAddress}</p>
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', justifyContent: 'initial', marginTop: '10px' }}>
                            <BiStopCircle color={colors.BLUE} style={{ marginRight: '10px' }} className={styles.driverHistory_ICON} />
                            <p className={styles.tripPanelTime} style={{ margin: '0px' }}>{data.destinationAddress}</p>
                        </div>
                        <div className={styles.tripPanelNoOfTrips} style={{ backgroundColor: colors.GREY, height: '1px', marginTop: '17px' }} >
                        </div>
                        <div className={styles.enterKilometerDiv} style={{ width: '95%', marginTop: '10px', marginBottom: '15px' }}>
                            <p className={styles.tripPanelTitle} style={{ fontFamily: 'Gilroy-Medium', margin: '0px' }}>{distance}</p>
                            <p className={styles.tripPanelCash} style={{ color: colors.BLUE }} >{total}</p>
                        </div>
                    </div>
                    {
                        this.props.lastItem ?//just for padding at the bottom
                            <div style={{ height: '150px', width: '100%', backgroundColor: 'transparent' }}></div>
                            : <></>
                    }
                </>
            );
        }
    }
};