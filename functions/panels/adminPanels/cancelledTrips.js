import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors, distanceCalculator, formatDateAllValues, isNumber, M, millisToMinutesAndSeconds, cancelledTripResolver } from '../../functions';
import styles from '../panel_layout.module.css';
import firebase from 'firebase';
import GoogleMapReact from 'google-map-react';
const polyline = require("@mapbox/polyline");
import { BiCurrentLocation } from 'react-icons/bi';
import * as turf from '@turf/turf'; //for encoding polylines
import Loader from 'react-loader-spinner';

export default class CancelledTrips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,

            idRiderSearch: '',
            idDriverSearch: '',
            result: {},
            currentData: null,
            key: "",

            refundRiderAmount: '',
            refundRiderPerchKms: '',
            payFirstDriver: '',
            paySecondDriver: '',
            payThirdDriver: '',
            adminCut: '',

            costPerPerchKM: 0,

            loading: false,
        };
    };
    componentDidMount() {
        this.loadResult();
        firebase.database().ref('GOOGLE_KEY').once('value', key => {
            this.setState({ key: key.val() })
        }).catch(error => console.log(error.message));
        firebase.database().ref('costPerPerchKM').once('value', cost => {
            this.setState({ costPerPerchKM: cost.val() })
        }).catch(error => console.log(error.message));
    };
    loadResult = () => {
        firebase.database().ref(`cancelled_UNRESOLVED`).once('value', snapshot => {
            this.setState({ result: snapshot.val() ? snapshot.val() : {} })
        }).catch(error => { alert(error.message) })
    };
    getMapBounds = (map, maps, legs) => {
        const bounds = new maps.LatLngBounds();
        const r = [
            ...legs,
            //[this.props.location.latitude, this.props.location.longitude], //USER LOCATION SHOULD BE HERE
            //[this.props.destination.latitude, this.props.destination.longitude] //DRIVER LOCATION SHOULD BE HERE
        ];
        const line = turf.lineString(r);
        turf.bboxPolygon(turf.bbox(line)).geometry.coordinates[0].forEach((v => {
            bounds.extend(new maps.LatLng(
                v[0],
                v[1],
            ));
        }));
        map.fitBounds(bounds);
    };
    renderPolylines = (map, maps, fitToBoundsOnly) => {
        function geodesicPolyline(polyline_, m, color) {
            const poly = polyline.decode(polyline_)
            for (let i = 0; i < poly.length; i++)
                m.push({
                    lat: poly[i][0],
                    lng: poly[i][1],
                });
            if (!fitToBoundsOnly) {
                let geodesicPolyliner = new maps.Polyline({
                    path: m,
                    options: {
                        strokeColor: color,
                        strokeOpacity: 1,
                        strokeWeight: 4,
                    },
                })
                geodesicPolyliner.setMap(map);
            }
        };
        const { polylines } = this.state.currentData;
        let markers1 = [], markers2 = [], markers3 = [];

        if (polylines?.firstLeg)
            geodesicPolyline(polylines?.firstLeg, markers1, colors.GREEN);
        if (polylines?.secondLeg)
            geodesicPolyline(polylines?.secondLeg, markers2, colors.BLUE);
        if (polylines?.thirdLeg)
            geodesicPolyline(polylines?.thirdLeg, markers3, colors.PURPLE);

        let newArray = [...markers1, ...markers2, ...markers3];
        this.getMapBounds(map, maps, newArray.map(v => { return [v.lat, v.lng] }))

    };
    renderDriverMarkers = (tripDetails) => {
        let driverMarkers = [];
        for (let key in tripDetails) {
            let image = '';
            switch (key) {
                case '_1': { image = '/greenCarIcon.svg'; } break;
                case '_2': { image = '/blueCarIcon.svg'; } break;
                case '_3': { image = '/purpleCarIcon.svg'; } break;
            };
            driverMarkers.push(
                <img
                    key={key}
                    lat={tripDetails[key].location.latitude}
                    lng={tripDetails[key].location.longitude}
                    src={image}
                    className={styles.mapIcon}
                />);
        };
        return driverMarkers;
    };
    renderCurrentDataTripDetails(currentData) {
        const { tripDetails, userLocation, driverID } = currentData;
        let tripDetailsRender = [];
        let i = 0;

        for (let key in tripDetails) {
            i++;
            let distance = '';
            const { status } = tripDetails[key];
            let value = '';
            switch (key) {
                case '_1': { value = 'First Trip'; } break;
                case '_2': { value = 'Second Trip'; } break;
                case '_3': { value = 'Third Trip'; } break;
            };
            if (userLocation) {
                let d = distanceCalculator(userLocation.latitude, userLocation.longitude, tripDetails[key].location.latitude, tripDetails[key].location.longitude);
                let unit = d > 1000 ? 'km' : 'meters';
                d = d > 1000 ? (d / 1000) : d;
                distance = `(${d.toFixed(2)} ${unit} away)`;
            }

            tripDetailsRender.push(
                <div
                    className={styles.breakdownSpreadApart}
                    style={{ marginTop: 15, }}
                    key={key}>
                    <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>{value} <span style={{ fontFamily: 'Gilroy-Semibold', color: colors.GREY }}>{driverID == tripDetails[key].driverID ? ' (CANCELLER)' : ''}</span></p>
                    <p style={{ fontFamily: 'Gilroy-Medium', margin: 0, }}>{status} <span style={{ color: colors.GREY, fontFamily: 'Gilroy-Semibold' }}>{distance}</span></p>
                </div>
            );
        };

        tripDetailsRender.unshift(
            <div
                className={styles.breakdownSpreadApart}
                style={{ marginTop: 20, }}
            >
                <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>Trip Number</p>
                <p style={{ fontFamily: 'Gilroy-Bold', margin: 0 }}>{i}</p>
            </div>
        )
        return tripDetailsRender;
    };
    renderCurrentDataTripDetailsTime(t1_, startAt) {
        const t1 = new Date(t1_);//time we ended trip
        const t2 = new Date(startAt.year, M.indexOf(startAt.month), startAt.day, startAt.hour, startAt.min, startAt.sec);//time we started trip
        const difference = t1.getTime() - t2.getTime();


        return (
            <>
                <div
                    className={styles.breakdownSpreadApart}
                    style={{ marginTop: 15, }}>
                    <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>Time of trip confirmation</p>
                    <p style={{ fontFamily: 'Gilroy-Medium', margin: 0, }}>{formatDateAllValues(t2)}</p>
                </div>
                <div
                    className={styles.breakdownSpreadApart}
                    style={{ marginTop: 15, }}>
                    <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>Time of trip cancellation</p>
                    <p style={{ fontFamily: 'Gilroy-Medium', margin: 0, }}>{formatDateAllValues(t1)}</p>
                </div>
                <div
                    className={styles.breakdownSpreadApart}
                    style={{ marginTop: 15, }}>
                    <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>Duration before trip cancellation</p>
                    <p style={{ fontFamily: 'Gilroy-Medium', margin: 0, }}>{millisToMinutesAndSeconds(difference)}</p>
                </div>
            </>
        );
    };
    renderCurrentDataCost = (currentData) => {
        const { cost, driverID, tripDetails } = currentData;
        const { toDrivers, total, usedPerchKms } = cost;
        let v = [];

        v.push(
            <>
                {!!usedPerchKms && <div
                    key='second'
                    className={styles.breakdownSpreadApart}
                    style={{ marginTop: 20, }}>
                    <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>Perch Kilometers paid</p>
                    <p style={{ fontFamily: 'Gilroy-Medium', margin: 0, }}>{usedPerchKms.toFixed(2)}km - $( {Number(usedPerchKms * this.state.costPerPerchKM).toFixed(2)} )</p>
                </div>}
            </>
        );

        let cut = 0;
        for (let key in toDrivers) {
            let value = '';
            let toCkeckIfCanceller = '';
            switch (key) {
                case 'firstDriverPay': {
                    value = "First driver's cut";
                    toCkeckIfCanceller = '_1';
                } break;
                case 'secondDriverPay': {
                    value = "Second driver's cut";
                    toCkeckIfCanceller = '_2';
                } break;
                case 'thirdDriverPay': {
                    value = "Third driver's cut";
                    toCkeckIfCanceller = '_3';
                } break;
            };
            cut += toDrivers[key];
            if (toDrivers[key])
                v.push(
                    <div
                        key={key}
                        className={styles.breakdownSpreadApart}
                        style={{ marginTop: 15, }}>
                        <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>{value} <span style={{ fontFamily: 'Gilroy-Semibold', color: colors.GREY }}>{driverID == tripDetails[toCkeckIfCanceller].driverID ? ' (CANCELLER)' : ''}</span></p>
                        <p style={{ fontFamily: 'Gilroy-Medium', margin: 0, }}>${toDrivers[key]}</p>
                    </div>
                );
        }
        cut = Number(total) + Number(usedPerchKms * this.state.costPerPerchKM) - cut;
        v.unshift(
            <div
                key={'cut'}
                className={styles.breakdownSpreadApart}
                style={{ marginTop: 15, }}>
                <p style={{ fontFamily: 'Gilroy-Semibold', margin: 0, }}>Admin's cut</p>
                <p style={{ fontFamily: 'Gilroy-Bold', margin: 0, }}>${cut.toFixed(2)}</p>
            </div>
        );
        v.push(
            <div
                key='top'
                className={styles.breakdownSpreadApart}
                style={{ marginTop: 20, }}>
                <p style={{ fontFamily: 'Gilroy-Regular', margin: 0, color: colors.GREEN }}>Total paid</p>
                <p style={{ fontFamily: 'Gilroy-Medium', margin: 0, color: colors.GREEN }}>${total}</p>
            </div>
        )
        return v;
    };
    renderCurrentDataRefund = (cost) => {
        const { toDrivers, total, usedPerchKms } = cost;
        let v = [];

        v.push(
            <>
                {!!usedPerchKms && <div
                    key={'2'}
                    className={styles.breakdownSpreadApart}
                    style={{ marginTop: 15, }}>
                    <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>Refund Rider Perch Kilometers</p>
                    <input
                        type="text"
                        placeholder={`$${(usedPerchKms * this.state.costPerPerchKM).toFixed(2)}`}
                        className={styles.searchInput}
                        style={{ width: '20%', height: '40px' }}
                        value={this.state.refundRiderPerchKms}
                        onChange={event => {
                            const value = event.target.value;
                            if ((isNumber(value) && Number(value) <= Number((usedPerchKms * this.state.costPerPerchKM).toFixed(2))) || !value)
                                this.setState({ refundRiderPerchKms: value });
                        }}
                    />
                </div>}
            </>
        );
        let cut = 0;
        for (let key in toDrivers) {
            let value = '';
            let toEdit = '';

            switch (key) {
                case 'firstDriverPay': {
                    value = "First driver's payment";
                    toEdit = 'payFirstDriver';
                } break;
                case 'secondDriverPay': {
                    value = "Second driver's payment";
                    toEdit = 'paySecondDriver';
                } break;
                case 'thirdDriverPay': {
                    value = "Third driver's payment";
                    toEdit = 'payThirdDriver';
                } break;
            };
            cut += toDrivers[key];
            if (toDrivers[key])
                v.push(
                    <div
                        key={key}
                        className={styles.breakdownSpreadApart}
                        style={{ marginTop: 15, }}>
                        <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>{value}</p>
                        <input
                            type="text"
                            placeholder={`$${toDrivers[key]}`}
                            className={styles.searchInput}
                            style={{ width: '20%', height: '40px' }}
                            value={this.state[toEdit]}
                            onChange={event => {
                                const value = event.target.value;
                                if ((isNumber(value) && Number(value) <= toDrivers[key]) || !value)
                                    this.setState({ [toEdit]: value });
                            }}
                        />
                    </div>
                );
        };
        cut = Number(total) + Number(usedPerchKms * this.state.costPerPerchKM) - cut;
        v.unshift(
            <div
                key={'cut'}
                className={styles.breakdownSpreadApart}
                style={{ marginTop: 15, }}>
                <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>Admin's cut</p>
                <input
                    type="text"
                    placeholder={`$${cut.toFixed(2)}`}
                    className={styles.searchInput}
                    style={{ width: '20%', height: '40px' }}
                    value={this.state.adminCut}
                    onChange={event => {
                        const value = event.target.value;
                        if ((isNumber(value) && Number(value) <= Number(cut.toFixed(2))) || !value)
                            this.setState({ adminCut: value });
                    }}
                />
            </div>
        )
        v.push(
            <div
                key={`1`}
                className={styles.breakdownSpreadApart}
                style={{ marginTop: 20, }}>
                <p style={{ fontFamily: 'Gilroy-Regular', margin: 0 }}>Refund Rider Cash</p>
                <input
                    type="text"
                    placeholder={`$${total}`}
                    className={styles.searchInput}
                    style={{ width: '20%', height: '40px' }}
                    value={this.state.refundRiderAmount}
                    onChange={event => {
                        const value = event.target.value;
                        if ((isNumber(value) && Number(value) <= Number(total)) || !value)
                            this.setState({ refundRiderAmount: value });
                    }}
                />
            </div>
        )
        return v;
    };
    costIsBalanced = () => {
        const {
            refundRiderAmount,
            currentData,
            payFirstDriver,
            paySecondDriver,
            payThirdDriver,
            adminCut,
            refundRiderPerchKms,
            costPerPerchKM,
        } = this.state;
        const refundedCash = Number(Number(refundRiderAmount == "" ? 0 : refundRiderAmount).toFixed(2));
        const refundedPerchCash = Number(Number(refundRiderPerchKms == "" ? 0 : refundRiderPerchKms).toFixed(2));
        const total = Number(currentData.cost.total);

        const totalTaken = total + (currentData.cost.usedPerchKms * costPerPerchKM);

        const totalGiven =
            Number(Number(payFirstDriver == "" ? 0 : payFirstDriver).toFixed(2))
            + Number(Number(paySecondDriver == "" ? 0 : paySecondDriver).toFixed(2))
            + Number(Number(payThirdDriver == "" ? 0 : payThirdDriver).toFixed(2))
            + Number(Number(adminCut == "" ? 0 : adminCut).toFixed(2))
            + (refundedCash + refundedPerchCash);
        function f(s) {
            return s != '';
        };
        const allFieldsFilled =
            f(refundRiderAmount) &&
            f(payFirstDriver) &&
            f(adminCut) &&
            (!!currentData.cost.usedPerchKms ? f(refundRiderPerchKms) : true) &&
            (!!currentData.cost.toDrivers.secondDriverPay ? f(paySecondDriver) : true) &&
            (!!currentData.cost.toDrivers.thirdDriverPay ? f(payThirdDriver) : true);

        return {
            totalCollected: totalTaken.toFixed(2),
            totalAllocated: totalGiven.toFixed(2),
            totalLeft: (totalTaken - totalGiven).toFixed(2),
            balancedBool: (totalGiven.toFixed(2) === totalTaken.toFixed(2)) && allFieldsFilled,
        };


    };
    render() {
        let results = [];
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++) {
            const data = this.state.result[keys[k]];
            const { startAt } = data;
            const displayDate = formatDateAllValues(new Date(startAt.year, M.indexOf(startAt.month), startAt.day, startAt.hour, startAt.min, startAt.sec))
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => {
                        this.setState({ currentData: data, index: k })
                    }}>
                        <div style={{ width: '90px', height: '30px', backgroundColor: data.canceller == 'rider' ? colors.GREEN : colors.BLUE, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>{data.canceller == 'rider' ? 'Rider' : 'Driver'}</p>
                        </div>
                        <p style={{ fontSize: '105%', fontFamily: 'Gilroy-Bold', color: colors.GREEN }}>
                            {/* {`$ ${data.cost.total}   `}-  */}
                            <span style={{ color: colors.GREY }}>{displayDate}</span></p>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        };

        const defaultProps = {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 11
        };

        return (
            <div className={styles.cont}>
                {
                    this.state.currentData ?
                        <>
                            <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                                <p className={styles.title} style={{ color: colors.BLACK }}>Cancelled Trip</p>
                                <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                                </div>
                                <div className={styles.mapBox}>
                                    <div className={styles.mapBoxCenter}
                                        onClick={() => {
                                            this.renderPolylines(this.map.map_, this.map.maps_, true);
                                        }}
                                    >
                                        <BiCurrentLocation color={colors.GREEN} size={25} />
                                    </div>
                                    <GoogleMapReact
                                        ref={(map) => this.map = map}
                                        bootstrapURLKeys={{ key: this.state.key }}
                                        defaultCenter={defaultProps.center}
                                        defaultZoom={defaultProps.zoom}
                                        options={{
                                            fullscreenControl: false,
                                            disableDefaultUI: true,
                                        }}
                                        onGoogleApiLoaded={({ map, maps }) => this.renderPolylines(map, maps)}
                                    >
                                        {this.state.currentData.userLocation &&
                                            <img
                                                lat={this.state.currentData.userLocation.latitude}
                                                lng={this.state.currentData.userLocation.longitude}
                                                src={'/userIcon.svg'}
                                                className={styles.mapIcon}
                                            />}
                                        {this.renderDriverMarkers(this.state.currentData.tripDetails)}
                                    </GoogleMapReact>
                                </div>
                                <p className={styles.text} style={{ color: colors.GREY, fontFamily: 'Gilroy-SemiBold', marginTop: '40px' }}>
                                    Breakdown of trip cancellation
                                </p>
                                <div style={{ height: '1px', width: '90%', backgroundColor: colors.GREY, marginTop: '5px' }}></div>
                                <div className={styles.breakdownSpreadApart}
                                    style={{ marginTop: '20px' }}
                                >
                                    <p style={{ fontFamily: 'Gilroy-Medium', margin: 0 }}>Canceller</p>
                                    <div style={{ width: '90px', height: '30px', backgroundColor: this.state.currentData.canceller == 'rider' ? colors.GREEN : colors.BLUE, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>{this.state.currentData.canceller == 'rider' ? 'Rider' : 'Driver'}</p>
                                    </div>
                                </div>
                                {this.renderCurrentDataTripDetails(this.state.currentData)}

                                <p className={styles.text} style={{ color: colors.GREY, fontFamily: 'Gilroy-SemiBold', marginTop: '50px' }}>
                                    Time details
                                </p>
                                <div style={{ height: '1px', width: '90%', backgroundColor: colors.GREY, marginTop: '5px' }}></div>
                                {this.renderCurrentDataTripDetailsTime(this.state.currentData.time, this.state.currentData.startAt)}
                                <p className={styles.text} style={{ color: colors.GREY, fontFamily: 'Gilroy-SemiBold', marginTop: '50px' }}>
                                    Cost Details
                                </p>
                                <div style={{ height: '1px', width: '90%', backgroundColor: colors.GREY, marginTop: '5px' }}></div>
                                {this.renderCurrentDataCost(this.state.currentData)}
                                <p className={styles.text} style={{ color: colors.GREY, fontFamily: 'Gilroy-SemiBold', marginTop: '50px' }}>
                                    Refund values
                                </p>
                                <div style={{ height: '1px', width: '90%', backgroundColor: colors.GREY, marginTop: '5px' }}></div>
                                {this.renderCurrentDataRefund(this.state.currentData.cost)}
                                <div style={{ height: '1px', width: '90%', backgroundColor: colors.GREY, marginTop: '25px' }}></div>
                                <div
                                    className={styles.breakdownSpreadApart}
                                    style={{ marginTop: '10px', }}
                                >
                                    <div className={styles.breakdownParter}>
                                        <p className={styles.breakdownTitle}>Total Collected</p>
                                        <p className={styles.breakdownCash} style={{ color: colors.GREY }}>${this.costIsBalanced().totalCollected}</p>
                                    </div>
                                    <div className={styles.breakdownParter}>
                                        <p className={styles.breakdownTitle}>Total Left</p>
                                        <p className={styles.breakdownCash} style={{ color: colors.GREY }}>${this.costIsBalanced().totalLeft}</p>
                                    </div>
                                    <div className={styles.breakdownParter}>
                                        <p className={styles.breakdownTitle}>Total Allocated</p>
                                        <p className={styles.breakdownCash} style={{ color: colors.GREEN }}>${this.costIsBalanced().totalAllocated}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                                <div
                                    className={styles.button2}
                                    style={{ backgroundColor: colors.RED }}
                                    id={styles.buttonBottom}
                                    onClick={() => {
                                        this.setState({
                                            currentData: null,
                                            refundRiderAmount: '',
                                            refundRiderPerchKms: '',
                                            payFirstDriver: '',
                                            paySecondDriver: '',
                                            payThirdDriver: '',
                                            adminCut: '',
                                        })
                                    }}>
                                    <p className={styles.buttonText1}>Cancel</p>
                                </div>
                                <div
                                    className={this.costIsBalanced().balancedBool ? styles.button2 : styles.buttonSelected}
                                    style={{ backgroundColor: colors.GREEN }}
                                    id={styles.buttonBottom}
                                    onClick={() => {
                                        if (this.costIsBalanced().balancedBool) {
                                            this.setState({ loading: true }, () => {
                                                let driverObjects = [];
                                                for (let newKey in this.state.currentData.tripDetails) {
                                                    let toPay = '';
                                                    switch (newKey) {
                                                        case '_1': { toPay = this.state.payFirstDriver } break;
                                                        case '_2': { toPay = this.state.paySecondDriver } break;
                                                        case '_3': { toPay = this.state.payThirdDriver } break;
                                                    };
                                                    driverObjects.push({
                                                        driverID: this.state.currentData.tripDetails[newKey].driverID,
                                                        driverHistoryRef: this.state.currentData.tripDetails[newKey].historyRef,
                                                        toPay: Number(Number(toPay).toFixed(2)),
                                                    });
                                                };
                                                cancelledTripResolver.call(this, {
                                                    refundRiderAmount: Number(Number(this.state.refundRiderAmount).toFixed(2)),
                                                    refundRiderPerchKms: (Number(this.state.refundRiderPerchKms) / this.state.costPerPerchKM),
                                                    driverObjects: driverObjects, //An array of objects containing {driverID,toPay,driverHistoryRef}
                                                    userID: this.state.currentData.riderID,
                                                    historyRef: this.state.currentData.historyRef,
                                                    paymentIntentId: this.state.currentData.cost.paymentIntentId,
                                                    cancelled_UNRESOLVED_KEY: keys[this.state.index],
                                                });
                                            });
                                        }
                                    }}>
                                    {this.state.loading ?
                                        <Loader
                                            type="TailSpin"
                                            color={colors.WHITE}
                                            height={'20px'}
                                            width={'20px'} /> :
                                        <p className={styles.buttonText1}>Refund Amount</p>}
                                </div>
                            </div>
                        </>
                        :
                        <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                            <p className={styles.title} style={{ color: colors.BLACK }}>Cancelled Trips</p>
                            <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                                {/* <input
                            type="text"
                            placeholder="Search riders by email / userID"
                            className={styles.searchInput}
                            style={{ width: '48%' }}
                            value={this.state.idRiderSearch}
                            onChange={event => {
                                this.setState({ idRiderSearch: event.target.value });
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Search drivers by email / userID"
                            className={styles.searchInput}
                            style={{ width: '48%' }}
                            value={this.state.idRiderSearch}
                            onChange={event => {
                                this.setState({ idRiderSearch: event.target.value });
                            }}
                        /> */}
                            </div>

                            {results}

                        </div>}
            </div>
        );
    };
};