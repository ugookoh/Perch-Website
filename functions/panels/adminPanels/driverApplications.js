import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCheck } from 'react-icons/ai';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from '../panel_layout.module.css';
import {
    dateOfQuery,
    colors,
    driverAppplicationAdvance,
    validateDriver,
} from '../../functions';

export default class DriverApplications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDocs: false,
            result: {},
            docList: [
                "Driver's licence",
                "Proof of work eligibility",
                "EPS background check",
                "Vehicle insurance",
                "Vehicle registration",
                "Vehicle inspection",
            ],

            docDriversLicenseURL: false,
            docProofOfWorkEligibilityURL: false,
            docEPSBackgroundCheckURL: false,
            docRegistrationURL: '',
            docInsuranceURL: '',
            docInspectionURL: '',
            docVehicleImage: '',
            docProfilePicture: '',

            driversLicenseVerified: false,
            proofOfWorkEligibilityVerified: false,
            epsBackgroundCheckVerified: false,
            inspectionVerified: false,
            registrationVerified: false,
            insuranceVerified: false,

            verified: [],
            //driversLicenseVerified
            //proofOfWorkEligibilityVerified
            //epsBackgroundCheckVerified
            //insuranceVerified
            //registrationVerified
            //inspectionVerified

            selected: {},
            vehicle: {},
            offerLetter: null,
        };
    };

    componentDidMount() {
        this.loadResult();
    };

    loadResult = () => {
        if (this.state.userDetails) {
            firebase.database().ref(`completedDriverApplications`).once('value', snapshot => {
                this.setState({ result: snapshot.val() ? snapshot.val() : {} })
            });

            // firebase.database().ref(`driverApplications`).once('value', snapshot => {
            //     this.setState({ result: snapshot.val() ? snapshot.val() : {} })
            // });
        }
    };

    loadDocument = (userID, documentStorageID, dateFormat) => {
        firebase.storage().ref(`driverVehicleDocs/${userID}/driverDetails/driversLicence`).getDownloadURL()
            .then(result => { this.setState({ docDriversLicenseURL: result }); })
            .catch(error => { console.log(error.message); });

        firebase.storage().ref(`driverVehicleDocs/${userID}/driverDetails/proofOfWorkEligibility`).getDownloadURL()
            .then(result => { this.setState({ docProofOfWorkEligibilityURL: result }); })
            .catch(error => { console.log(error.message) });

        firebase.storage().ref(`driverVehicleDocs/${userID}/driverDetails/epsBackgroundCheck`).getDownloadURL()
            .then(result => { this.setState({ docEPSBackgroundCheckURL: result }); })
            .catch(error => { console.log(error.message) });

        firebase.storage().ref(`driverVehicleDocs/${userID}/driverDetails/profilePicture`).getDownloadURL()
            .then(result => { this.setState({ docProfilePicture: result }); })
            .catch(error => { console.log(error.message) });

        firebase.storage().ref(`driverVehicleDocs/${userID}/${documentStorageID}/vehicleRegistration`).getDownloadURL()
            .then(result => { this.setState({ docRegistrationURL: result }); })
            .catch(error => { console.log(error.message); });

        firebase.storage().ref(`driverVehicleDocs/${userID}/${documentStorageID}/vehicleInsurance`).getDownloadURL()
            .then(result => { this.setState({ docInsuranceURL: result }); })
            .catch(error => { console.log(error.message) });

        firebase.storage().ref(`driverVehicleDocs/${userID}/${documentStorageID}/vehicleInspection`).getDownloadURL()
            .then(result => { this.setState({ docInspectionURL: result }); })
            .catch(error => { console.log(error.message) });

        firebase.storage().ref(`driverVehicleDocs/${userID}/${documentStorageID}/vehicleImage`).getDownloadURL()
            .then(result => { this.setState({ docVehicleImage: result }); })
            .catch(error => { console.log(error.message) });

        firebase.database().ref(`vehicles/${userID}/${dateFormat}`).once('value', snapshot => {
            this.setState({ vehicle: snapshot.val() })
        })
    };

    loadOfferLeffer = (userID) => {
        firebase.storage().ref(`driverVehicleDocs/${userID}/driverDetails/signedOfferLetter.pdf`).getDownloadURL()
            .then(result => { this.setState({ offerLetter: result }); })
            .catch(error => { console.log(error.message); });
    };

    loadSelectedResult = (userID) => {
        firebase.database().ref(``).once('value', snapshot => {
            const { stage, timestamp, name, vehicleRandomID, dateFormat, offerLetterSigned } = snapshot.val();
            const verified = JSON.parse(snapshot.val().verified)
            if (stage == 'three') {
                this.loadDocument(userID, vehicleRandomID, dateFormat);
                this.setState({
                    showDocs: true,
                    selected: {
                        name: name,
                        timestamp: timestamp,
                        userID: userID,
                        stage: stage,
                        offerLetterSigned: offerLetterSigned,
                    },
                    verified: verified,
                })
            }
            else if (stage == 'four') {
                if (offerLetterSigned)
                    this.loadOfferLeffer(userID);
                this.setState({
                    showDocs: true,
                    selected: {
                        name: name,
                        timestamp: timestamp,
                        userID: userID,
                        stage: stage,
                        offerLetterSigned: offerLetterSigned,
                        dateFormat: dateFormat,
                    },
                })
            }
        })
    }

    render() {
        let requirements = [];
        for (let i = 0; i < this.state.docList.length; i++) {

            let urlToShow = '';
            if (this.state.docList[i] == "Driver's licence")
                urlToShow = this.state.docDriversLicenseURL;
            else if (this.state.docList[i] == 'Proof of work eligibility')
                urlToShow = this.state.docProofOfWorkEligibilityURL;
            else if (this.state.docList[i] == 'EPS background check')
                urlToShow = this.state.docEPSBackgroundCheckURL;
            else if (this.state.docList[i] == 'Vehicle insurance')
                urlToShow = this.state.docInsuranceURL;
            else if (this.state.docList[i] == 'Vehicle registration')
                urlToShow = this.state.docRegistrationURL;
            else if (this.state.docList[i] == 'Vehicle inspection')
                urlToShow = this.state.docInspectionURL;

            let isVerified = this.state.verified[i];

            requirements.push(
                <div className={styles.driverFAQ_PICDESC}
                    id={styles.driverROUNDSUPPORT}
                >
                    <a href={urlToShow}
                        target={'_blank'}>
                        <p className={styles.text} style={{ color: '#000000', width: 'initial', margin: '0px', marginLeft: '10px' }}>{this.state.docList[i]}</p>
                    </a>
                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: colors.GREEN, opacity: isVerified ? 1 : 0.5 }}
                        onClick={() => {
                            let verified = this.state.verified;
                            verified[i] = true;
                            this.setState({ verified: verified }, () => {
                                firebase.database().ref(`driverApplications/${this.state.selected.userID}`).update({
                                    verified: JSON.stringify(verified),
                                })
                            })
                        }}
                    >
                        {isVerified ?
                            <AiOutlineCheck color={colors.WHITE} size={'15px'} /> :
                            <></>
                        }
                    </div>
                </div>
            );
        }

        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        const keys = Object.keys(this.state.result).sort((a, b) => {
            let stageA = 0, stageB = 0;
            switch (this.state.result[a].stage) {
                case 'one': { stageA = 1; } break;
                case 'two': { stageA = 2; } break;
                case 'three': { stageA = 3; } break;
                case 'four': { stageA = 4; } break;
            };
            switch (this.state.result[b].stage) {
                case 'one': { stageB = 1; } break;
                case 'two': { stageB = 2; } break;
                case 'three': { stageB = 3; } break;
                case 'four': { stageB = 4; } break;
            };

            if (stageB == 4 && this.state.result[b].offerLetterSigned == false)//so that drivers that havent signed offer letters stay below
                return (stageA - stageB);
            else
                return (stageB - stageA);
        });
        for (let k = 0; k < keys.length; k++) {
            const userID = keys[k];
            const { stage, timestamp, name, } = this.state.result[keys[k]];
            let stageToDisplay = 0;
            let color = colors.YELLOW;
            switch (stage) {
                case 'one': {
                    stageToDisplay = `S1`;
                } break;
                case 'two': {
                    stageToDisplay = `S2`;
                } break;
                case 'three': {
                    stageToDisplay = `S3`;
                    color = colors.GREEN;
                } break;
                case 'four': {
                    stageToDisplay = `S4`;
                    color = colors.GREEN;
                } break;
            };

            results.push(
                <>
                    <div
                        className={styles.previousMessageSum}
                        onClick={() => { this.loadSelectedResult(userID) }}>
                        <p style={{ fontSize: '95%' }}>{name}</p>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '150px', justifyContent: 'space-between' }}>
                            <span style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }}>
                                <div className={styles.previousMessageDate}>
                                    <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>
                                        {dateOfQuery(timestamp)}
                                    </p>
                                </div>
                                <div style={{ width: '50px', height: '30px', backgroundColor: color, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>{stageToDisplay}</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    {k == keys.length - 1 ?
                        <></> :
                        <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        }


        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.BLACK, marginBottom: '20px' }}>{this.state.showDocs ? this.state.selected.name : 'Driver Applications'}</p>
                    {this.state.selected.stage == 'three' ?
                        <p className={styles.title} style={{ color: colors.BLACK, marginTop: '-10px' }}>{this.state.showDocs ? <>{this.state.vehicle.year} {this.state.vehicle.color} {this.state.vehicle.model} {this.state.vehicle.make} - (<span style={{ color: colors.GREEN }}>{this.state.vehicle.plateNumber}</span>)</> : ''}</p>
                        : this.state.selected.stage == 'four' ?
                            <p className={styles.title} style={{ color: colors.BLACK, marginTop: '-10px' }}>{`User ID - ${this.state.selected.userID}`}</p>
                            : <></>
                    }

                    {this.state.showDocs ?
                        this.state.selected.stage == 'three' ?
                            <>
                                <img
                                    src={this.state.docProfilePicture}
                                    className={styles.driverVehicleIMAGE}
                                    style={{ maxWidth: '250px', marginTop: '20px' }}
                                />
                                {requirements}
                                <img
                                    src={this.state.docVehicleImage}
                                    className={styles.driverVehicleIMAGE} />
                            </> ://STAGE FOUR
                            <>
                                <div className={styles.driverFAQ_PICDESC}
                                    id={styles.driverROUNDSUPPORT}
                                >
                                    <a href={this.state.offerLetter}
                                        target={'_blank'}>
                                        <p className={styles.text} style={{ color: '#000000', width: 'initial', margin: '0px', marginLeft: '10px' }}>{'Perch Offer Letter'}</p>
                                    </a>
                                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: colors.GREEN, opacity: this.state.selected.offerLetterSigned ? 1 : 0.6 }}>
                                        {
                                            this.state.selected.offerLetterSigned ?
                                                <AiOutlineCheck color={colors.WHITE} size={'15px'} /> : <></>
                                        }
                                    </div>
                                </div>
                            </> :
                        results}
                </div>
                {this.state.showDocs ?
                    <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                        <div
                            className={styles.button2}
                            style={{ backgroundColor: colors.RED }}
                            id={styles.buttonBottom}
                            onClick={() => {
                                this.setState({ showDocs: false, vehicle: {}, verified: [] });
                            }}>
                            <p className={styles.buttonText1}>Cancel</p>
                        </div>

                        <div
                            className={styles.button2}
                            style={{ backgroundColor: colors.GREEN }}
                            id={styles.buttonBottom}
                            onClick={() => {
                                if (this.state.selected.stage == 'three') {
                                    if (this.state.verified.indexOf(false) != -1)
                                        alert('You need to verify all the provided documents');
                                    else {
                                        driverAppplicationAdvance.call(this);
                                    }
                                }
                                else if (this.state.selected.stage == 'four') {
                                    if (this.state.selected.offerLetterSigned) {
                                        const { userID, timestamp, dateFormat } = this.state.selected;
                                        validateDriver.call(this, userID, timestamp, dateFormat);
                                    }
                                    else
                                        alert('Driver has not yet signed offer letter, please send them a reminder if it has been a while')
                                }
                            }}>
                            <p className={styles.buttonText1}>Move to next stage</p>
                        </div>

                    </div> : <></>}

            </div>
        );
    };
};