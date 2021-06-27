import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCheck } from 'react-icons/ai';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    validateVehicle,
    dateOfQuery,
    colors,
} from '../../functions';
import styles from '../panel_layout.module.css';



export default class VehicleApplications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDocs: false,
            result: {},
            docList: [
                "Vehicle insurance",
                "Vehicle registration",
                "Vehicle inspection",
            ],
            selected: {},

            docRegistrationURL: '',
            docInsuranceURL: '',
            docInspectionURL: '',
            docVehicleImage: '',

            inspectionVerified: false,
            registrationVerified: false,
            insuranceVerified: false,

            urlToShow: null,
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {
            firebase.database().ref(`vehicleAdditionRequest`).once('value', snapshot => {
                this.setState({ result: snapshot.val() ? snapshot.val() : {} })
            });
        }
    };
    loadDocument = (userID, documentStorageID) => {

        firebase.storage().ref(`driverVehicleDocs/${userID}/${documentStorageID}/vehicleRegistration`).getDownloadURL()
            .then(result => {
                this.setState({ docRegistrationURL: result });
            })
            .catch(error => { console.log(error.message); });
        firebase.storage().ref(`driverVehicleDocs/${userID}/${documentStorageID}/vehicleInsurance`).getDownloadURL()
            .then(result => {
                this.setState({ docInsuranceURL: result });
            })
            .catch(error => { console.log(error.message) });
        firebase.storage().ref(`driverVehicleDocs/${userID}/${documentStorageID}/vehicleInspection`).getDownloadURL()
            .then(result => {
                this.setState({ docInspectionURL: result });
            }).catch(error => { console.log(error.message) });
        firebase.storage().ref(`driverVehicleDocs/${userID}/${documentStorageID}/vehicleImage`).getDownloadURL()
            .then(result => {
                this.setState({ docVehicleImage: result });
            }).catch(error => { console.log(error.message) });
    };
    render() {
        let requirements = [];
        for (let i = 0; i < this.state.docList.length; i++) {
            let urlToShow = '';
            if (this.state.docList[i] == 'Vehicle insurance')
                urlToShow = this.state.docInsuranceURL;
            else if (this.state.docList[i] == 'Vehicle registration')
                urlToShow = this.state.docRegistrationURL;
            else if (this.state.docList[i] == 'Vehicle inspection')
                urlToShow = this.state.docInspectionURL;

            let isVerified = false;
            if (this.state.docList[i] == 'Vehicle insurance')
                isVerified = this.state.insuranceVerified;
            else if (this.state.docList[i] == 'Vehicle registration')
                isVerified = this.state.registrationVerified;
            else if (this.state.docList[i] == 'Vehicle inspection')
                isVerified = this.state.inspectionVerified;

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
                            if (this.state.docList[i] == 'Vehicle insurance')
                                this.setState({ insuranceVerified: true });
                            else if (this.state.docList[i] == 'Vehicle registration')
                                this.setState({ registrationVerified: true });
                            else if (this.state.docList[i] == 'Vehicle inspection')
                                this.setState({ inspectionVerified: true });
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
        const keys = Object.keys(this.state.result).sort();
        for (let k = 0; k < keys.length; k++) {
            const { year, make, model, timestamp, userID, documentStorageID } = this.state.result[keys[k]];
            const carName = `${year} ${make} ${model}`;
            results.push(
                <>
                    <div className={styles.previousMessageSum}
                        onClick={() => {
                            this.loadDocument(userID, documentStorageID)
                            this.setState({
                                showDocs: true,
                                selected: {
                                    carName: carName,
                                    ...this.state.result[keys[k]],
                                },
                            })
                        }}>
                        <p style={{ fontSize: '95%' }}>{carName}</p>
                        <div className={styles.previousMessageDate}>
                            <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>
                                {dateOfQuery(timestamp)}
                            </p>
                        </div>
                    </div>
                    {k == keys.length - 1 ? <></> : <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>}
                </>
            )
        }
        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.BLACK, marginBottom: '20px' }}>{this.state.showDocs ? <>{this.state.selected.carName} - <span style={{ color: colors.GREEN }}>{this.state.selected.plateNumber}</span></> : 'Vehicle Applications'}</p>
                    {this.state.showDocs ?
                        <>
                            {requirements}
                            <img src={this.state.docVehicleImage} className={styles.driverVehicleIMAGE} />
                        </> :
                        results}
                </div>
                {this.state.showDocs ?
                    <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                        <div className={styles.button2} style={{ backgroundColor: colors.RED }} id={styles.buttonBottom} onClick={() => { this.setState({ showDocs: false }) }}>
                            <p className={styles.buttonText1}>Cancel</p>
                        </div>

                        <div className={styles.button2} style={{ backgroundColor: colors.GREEN }}
                            id={styles.buttonBottom}
                            onClick={() => {
                                if (this.state.inspectionVerified && this.state.insuranceVerified && this.state.registrationVerified) {
                                    const { userID, timestamp, dateFormat } = this.state.selected;
                                    validateVehicle.call(this, userID, timestamp, dateFormat);
                                    this.setState({ showDocs: false })
                                } else
                                    alert('Please verify all the documents by ticking the green button next to it');
                            }}>
                            <p className={styles.buttonText1}>Approve Vehicle</p>
                        </div>

                    </div> : <></>}

            </div>
        );
    };
};