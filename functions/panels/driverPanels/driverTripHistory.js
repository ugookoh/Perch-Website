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
    polylineLenght,
    timeAndDate,
    M,
    colors,
} from '../../functions';
import styles from '../panel_layout.module.css';




export default class DriverTripHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            date: new Date().getTime(),
            userDetails: this.props.userDetails,
            summary: {
                distance: '...',
                passengerNo: '...',
                totalM: '...',
            },
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {
            this.setState({ result: null }, () => {
                firebase.database().ref(`driverHistory/${this.state.userDetails.userID}/carpool/${new Date(this.state.date).getFullYear()}/${M[new Date(this.state.date).getMonth()]}`).once('value', snapshot => {
                    this.setState({ result: snapshot.val() ? snapshot.val() : 'NORESULTS' });
                    let passengerNo = 0, distance = 0, totalM = 0;

                    for (let k in snapshot.val()) {
                        const d = snapshot.val()[k].trips;
                        for (let key in d) {
                            passengerNo += d[key].details.tripDetails.seatNumber;
                            distance += polylineLenght(JSON.parse(d[key].details.tripDetails.leg)) * d[key].details.tripDetails.seatNumber;
                            totalM += d[key].details.tripDetails.toPay;
                        };
                    };
                    distance > 100 ?
                        distance = (distance / 1000).toFixed(1) :
                        distance = (distance).toFixed(distance != 0 ? 1 : 0);

                    this.setState({
                        summary: {
                            distance: distance.toLowerCase(),
                            passengerNo: passengerNo,
                            totalM: totalM.toFixed(2),
                        },
                    });

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
                    />
                );
            }
        }
        return (
            <>

                <div className={styles.cont} style={{ height: '100%', paddingTop: '10px', position: 'relative' }}>

                    <div className={styles.tripPanelDesc} >
                        <div className={styles.tripPanelCalenderCont} style={{ marginRight: '10px' }}>
                            <VscCalendar color={colors.BLUE} size={'24px'} style={{ marginRight: '4px', marginBottom: '3px' }} />
                            <DatePicker
                                className={styles.calendarDate}
                                id={styles.calendarDate}
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
                    {this.state.result && this.state.result !== 'NORESULTS' ?
                        <div id={styles.tripPanelCont} >
                            <p className={styles.title} style={{ width: '95%', marginTop: '20px', fontSize: '100%' }}>Total Summary</p>
                            <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px', marginTop: '5px' }}>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>{`Number of passengers`}</p>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>
                                    {this.state.summary.passengerNo} <span className={styles.driverTH_HIDESUMMARY}>{this.state.summary.passengerNo == 1 ? 'passenger' : 'passengers'}</span>
                                </p>
                            </div>

                            <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px', marginTop: '5px' }}>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>{`Total kilometers provided`}</p>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px' }}>
                                    {this.state.summary.distance} <span className={styles.driverTH_HIDESUMMARY}>{this.state.summary.distance > 100 ? 'kilometers' : 'meters'}</span>
                                </p>
                            </div>

                            <div className={styles.enterKilometerDiv} style={{ width: '95%', margin: '0px', marginTop: '10px', marginBottom: '15px' }}>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px', fontSize: '100%', fontFamily: 'Gilroy-Bold' }}>
                                    {`TOTAL MADE`}
                                </p>
                                <p className={styles.text} style={{ width: 'initial', marginTop: '0px', fontSize: '105%', color: colors.BLUE, fontFamily: 'Gilroy-Bold' }}>
                                    $ {this.state.summary.totalM}
                                </p>
                            </div>
                        </div> :
                        <></>}
                    {this.state.result ?
                        this.state.result == 'NORESULTS' ?
                            <div className={styles.tripPanelLoading} id={styles.tripPanelLoading_}>
                                <img src="/noResultsWomanBlue.svg" className={styles.noResultsWoman} alt="No Results" />
                                <p className={styles.contactUsLasttext} style={{ width: 'initial', fontSize: '90%', margin: '0px' }} id={styles.tripPanelLoadingText}>
                                    Surprisingly, You haven't booked any rides during this time.
                                </p>
                            </div> :
                            trips :
                        <div className={styles.tripPanelLoading}>
                            <Loader
                                type="TailSpin"
                                color={colors.BLUE}
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
        const data = this.props.data;
        let passNo = 0, distance = 0, total = 0;
        if (data.trips) {
            for (let key in data.trips) {
                passNo += data.trips[key].details.tripDetails.seatNumber;
                distance += (polylineLenght(JSON.parse(data.trips[key].details.tripDetails.leg)) * data.trips[key].details.tripDetails.seatNumber);//seat no * distance
                total += data.trips[key].details.tripDetails.toPay;
            };
        };
        //distance = distance * passNo;
        distance > 100 ?
            distance = `${(distance / 1000).toFixed(1)} KM` :
            distance = `${(distance).toFixed(distance != 0 ? 1 : 0)} M`;

        distance = distance.toLowerCase();
        passNo = `${passNo} ${passNo == 1 ? 'person' : 'people'}`;
        total = total.toFixed(2);


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
                        <p className={styles.tripPanelCash} style={{ color: colors.BLUE }} >$ {total}</p>
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
};
