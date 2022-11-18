import axios from 'axios';
import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCamera, AiOutlineCheck } from 'react-icons/ai';
import { BsClockHistory, BsCloudUpload } from 'react-icons/bs';
import { CgAdd } from 'react-icons/cg';
import { RiShieldCheckFill } from 'react-icons/ri';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { makeid, colors } from '../../functions';
import styles from '../panel_layout.module.css';



export default class DriverVehicles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            addVehicle: false,
            userDetails: this.props.userDetails,

            make: '',
            model: '',
            year: '',
            color: '',
            plateNumber: '',


            vehicleImage: '',
            vehicleImagePreview: '',
            registration: '',
            insurance: '',
            inspection: '',
            loading: false,

            errorMessage: '',
        };

    }
    componentDidMount() {
        this.loadResult();
    };

    handleFileUpload() {
        this.setState({ loading: true, errorMessage: '' }, () => {
            const randomID = makeid(6);
            firebase.storage().ref(`driverVehicleDocs/${this.state.userDetails.userID}/${randomID}/vehicleRegistration`).put(this.state.registration).catch(error => { console.log(error.message) });
            firebase.storage().ref(`driverVehicleDocs/${this.state.userDetails.userID}/${randomID}/vehicleInsurance`).put(this.state.insurance).catch(error => { console.log(error.message) });
            firebase.storage().ref(`driverVehicleDocs/${this.state.userDetails.userID}/${randomID}/vehicleInspection`).put(this.state.inspection).catch(error => { console.log(error.message) });
            firebase.storage().ref(`driverVehicleDocs/${this.state.userDetails.userID}/${randomID}/vehicleImage`).put(this.state.vehicleImage).catch(error => { console.log(error.message) });
            firebase.storage().ref(`vehicles/${this.state.userDetails.userID}/${randomID}/vehicleImage`).put(this.state.vehicleImage).catch(error => { console.log(error.message) });

            axios.post('https://us-central1-perch-01.cloudfunctions.net/addVehicle', {
                userID: this.state.userDetails.userID,
                vehicle: {
                    make: this.state.make,
                    model: this.state.model,
                    color: this.state.color,
                    year: this.state.year,
                    plateNumber: this.state.plateNumber.toUpperCase(),
                    maxSeatNumber: 3,
                    displayImage: `driverVehicleDocs/${this.state.userDetails.userID}/${randomID}/vehicleImage`,
                    documentStorageID: randomID,
                },
            })
                .then(() => {
                    this.setState({ errorMessage: '', loading: false, make: '', model: '', year: '', color: '', plateNumber: '', addVehicle: false }, () => { this.loadResult(); })
                }).catch(error => { this.setState({ errorMessage: error.message, loading: false }) })


        });
    };
    loadResult = () => {
        if (this.state.userDetails)
            firebase.database().ref(`vehicles/${this.state.userDetails.userID}`).once('value', snapshot => {
                this.setState({ result: snapshot.val() || 'NORESULTS' });
            }).catch(error => { console.log(error.message) });
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let vehicle = [];
        if (this.state.result) {
            const keys = Object.keys(this.state.result);
            for (let k = 0; k < keys.length; k++)
                if (keys[k] != 'selected')
                    vehicle.push(
                        <Vehicle
                            data={this.state.result[keys[k]]}
                            lastItem={k == keys.length - 1}
                        />
                    );
        }
        return (
            <>

                <div className={styles.cont} style={{ height: '100%', paddingTop: '10px', position: 'relative' }}>
                    {this.state.addVehicle ?
                        <>
                            <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                                <p className={styles.title} style={{ color: colors.BLACK }}>Add a vehicle</p>
                                <div className={styles.enterKilometerDiv} style={{ marginTop: '15px', }}>
                                    <input type="text"
                                        placeholder={"Vehicle Make"}
                                        className={styles.inputPaymentPanel}
                                        style={{ width: '49%', margin: '0px' }} id={styles.inputPaymentPanel_ADD}
                                        value={this.state.make}
                                        onChange={event => { this.setState({ make: event.target.value }) }}
                                    />
                                    <input type="text"
                                        placeholder={"Vehicle Model"}
                                        className={styles.inputPaymentPanel}
                                        style={{ width: '49%', margin: '0px' }} id={styles.inputPaymentPanel_ADD}
                                        value={this.state.model}
                                        onChange={event => { this.setState({ model: event.target.value }) }} />
                                </div>
                                <div className={styles.enterKilometerDiv} style={{ marginTop: '10px', }}>
                                    <input type="text"
                                        placeholder={"Vehicle Year"}
                                        className={styles.inputPaymentPanel}
                                        style={{ width: '49%', margin: '0px' }}
                                        id={styles.inputPaymentPanel_ADD}
                                        value={this.state.year}
                                        onChange={event => { this.setState({ year: event.target.value }) }} />
                                    <input type="text"
                                        placeholder={"Vehicle Color"}
                                        className={styles.inputPaymentPanel}
                                        style={{ width: '49%', margin: '0px' }}
                                        id={styles.inputPaymentPanel_ADD}
                                        value={this.state.color}
                                        onChange={event => { this.setState({ color: event.target.value }) }} />
                                </div>
                                <input type="text"
                                    placeholder="Plate Number"
                                    className={styles.inputPaymentPanel}
                                    id={styles.inputPaymentPanel_ADD}
                                    style={{ marginTop: '10px' }}
                                    value={this.state.plateNumber}
                                    onChange={event => { this.setState({ plateNumber: event.target.value }) }} />
                                <div className={styles.driver_ADD_VEHICLE_LOWER}>

                                    {
                                        this.state.vehicleImagePreview == '' ?
                                            <div className={styles.driver_ADD_VEHICLE_IMGUPLOAD} onClick={() => { this.vehicleImage.click() }}>
                                                <AiOutlineCamera className={styles.driverVehicle_CAMERA} />
                                                <p className={styles.driverVehicle_CAMERATEXT}>
                                                    UPLOAD A PICTURE OF YOUR VEHICLE
                                                </p>
                                            </div> :
                                            <img className={styles.driver_ADD_VEHICLE_IMGUPLOAD} src={this.state.vehicleImagePreview} onClick={() => { this.vehicleImage.click() }} />
                                    }
                                    <a className={styles.driver_ADD_VEHICLE_IMG_GL} href='/s/articles/procedures_for_taking_a_picture'>
                                        <img src="/cameraGuidelinesForPictures.svg" className={styles.driverVehicle_GUIDELINES_CAM} />
                                        <p className={styles.driverVehicle_GUIDELINES_CAM_TEXT}>Guidelines for taking a picture of your vehicle</p>
                                    </a>
                                    <input type='file'
                                        ref={(ref) => this.vehicleImage = ref}
                                        className={styles.driverVehicle_INPUT}
                                        onChange={event => {
                                            if (event.target.files.length != 0) {
                                                if (((event.target.files[0].size / 1024) / 1024) > 10)
                                                    this.setState({ errorMessage: 'File size is too large. A maximum of 10 megabytes is permitted for uploads' })
                                                else
                                                    this.setState({ vehicleImage: event.target.files[0], vehicleImagePreview: URL.createObjectURL(event.target.files[0]) })
                                            }
                                        }} />
                                    {/* <div className={styles.driver_ADD_VEHICLE_DOCSUPLOAD}>

                                        <input type='file'
                                            ref={(ref) => this.vehicleRegistrationRef = ref}
                                            className={styles.driverVehicle_INPUT}
                                            onChange={event => {
                                                if (event.target.files.length != 0) {
                                                    if (((event.target.files[0].size / 1024) / 1024) > 10)
                                                        this.setState({ errorMessage: 'File size is too large. A maximum of 10 megabytes is permitted for uploads' })
                                                    else
                                                        this.setState({ registration: event.target.files[0] })
                                                }
                                            }} />

                                        <input type='file'
                                            ref={(ref) => this.vehicleInsuranceRef = ref}
                                            className={styles.driverVehicle_INPUT}
                                            onChange={event => {
                                                if (event.target.files.length != 0) {
                                                    if (((event.target.files[0].size / 1024) / 1024) > 10)
                                                        this.setState({ errorMessage: 'File size is too large. A maximum of 10 megabytes is permitted for uploads' })
                                                    else
                                                        this.setState({ insurance: event.target.files[0] })
                                                }
                                            }} />

                                        <input type='file'
                                            ref={(ref) => this.vehicleInspectionRef = ref}
                                            className={styles.driverVehicle_INPUT}
                                            onChange={event => {
                                                if (event.target.files.length != 0) {
                                                    if (((event.target.files[0].size / 1024) / 1024) > 10)
                                                        this.setState({ errorMessage: 'File size is too large. A maximum of 10 megabytes is permitted for uploads' })
                                                    else
                                                        this.setState({ inspection: event.target.files[0] })
                                                }
                                            }} />



                                        <div
                                            className={styles.driverVehicle_UPLOADCONT} id={styles.driverVehicle_UPLOADCONT_}
                                            onClick={() => { this.vehicleRegistrationRef.click() }}>
                                            <p className={styles.driverVehicle_UPLOADTEXT}>{this.state.registration == '' ? 'Upload vehicle registration' : this.state.registration.name}</p>
                                            {this.state.registration == '' ?
                                                <BsCloudUpload size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={colors.WHITE} /> :
                                                <AiOutlineCheck size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={colors.WHITE} />}
                                        </div>

                                        <div
                                            className={styles.driverVehicle_UPLOADCONT}
                                            onClick={() => { this.vehicleInsuranceRef.click() }}>
                                            <p className={styles.driverVehicle_UPLOADTEXT}>{this.state.insurance == '' ? 'Upload vehicle insurance' : this.state.insurance.name}</p>
                                            {this.state.insurance == '' ?
                                                <BsCloudUpload size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={colors.WHITE} /> :
                                                <AiOutlineCheck size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={colors.WHITE} />}
                                        </div>

                                        <div
                                            className={styles.driverVehicle_UPLOADCONT}
                                            onClick={() => { this.vehicleInspectionRef.click() }}>
                                            <p className={styles.driverVehicle_UPLOADTEXT}>{this.state.inspection == '' ? 'Upload vehicle inspection' : this.state.inspection.name}</p>
                                            {this.state.inspection == '' ?
                                                <BsCloudUpload size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={colors.WHITE} /> :
                                                <AiOutlineCheck size={'20px'} style={{ marginLeft: '10px', minWidth: '20px' }} color={colors.WHITE} />}
                                        </div>
                                    </div> */}
                                </div>
                                <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                            </div>
                            <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginLeft: '2.5%', width: '95%' }}>
                                <div className={styles.button2} style={{ backgroundColor: colors.RED }}
                                    id={styles.buttonBottom}
                                    onClick={() => {
                                        if (!this.state.loading)
                                            this.setState({ addVehicle: false, errorMessage: '' });
                                    }}>
                                    <p className={styles.buttonText1}>Cancel</p>
                                </div>
                                <div className={styles.button2} style={{ backgroundColor: colors.BLUE }} id={styles.buttonBottom}
                                    onClick={() => {
                                        if (!this.state.loading) {
                                            if (this.state.color == '' || this.state.model == '' || this.state.make == '' || this.state.year == '' || this.state.plateNumber == '')
                                                this.setState({ errorMessage: 'Please fill all fields' });
                                            // else if (this.state.inspection == '' || this.state.registration == '' || this.state.insurance == '')
                                            //     this.setState({ errorMessage: 'Please upload all documents needed' });
                                            else if (this.state.vehicleImage == '')
                                                this.setState({ errorMessage: 'Please upload an image of your vehicle. It does not have to fit perfectly in frame.' });
                                            else
                                                this.handleFileUpload();
                                        }
                                    }}>
                                    {this.state.loading ?
                                        <Loader
                                            type="TailSpin"
                                            color={colors.WHITE}
                                            height={'20px'}
                                            width={'20px'}
                                        /> :
                                        <p className={styles.buttonText1}>Add vehicle</p>}
                                </div>
                            </div>
                            <div style={{ height: '150px', width: '10px' }}></div>
                        </> :
                        <>
                            <div className={styles.tripPanelDesc} id={styles.tripPanelCalenderCont_AV} onClick={() => { this.setState({ addVehicle: true }) }}>
                                <div className={styles.tripPanelCalenderCont} style={{ alignItems: 'center', }}>
                                    <CgAdd color={colors.WHITE} style={{ margin: '0px', minWidth: '20px', marginRight: '10px', height: '20px' }} />
                                    <p className={styles.driverVehicle_ADDAVEHICLE} style={{ margin: '0px', marginTop: '3px' }}>ADD A VEHICLE</p>
                                </div>
                            </div>

                            {this.state.result ?
                                this.state.result == 'NORESULTS' ?
                                    <div className={styles.tripPanelLoading} id={styles.tripPanelLoading_}>
                                        <img src="/noResultsWoman.svg" className={styles.noResultsWoman} alt="No Results" />
                                        <p className={styles.contactUsLasttext} style={{ width: 'initial', fontSize: '90%', margin: '0px' }} id={styles.tripPanelLoadingText}>
                                            We can't find any vehicles in your name at the moment
                                        </p>
                                    </div> :
                                    vehicle :
                                <div className={styles.tripPanelLoading}>
                                    <Loader
                                        type="TailSpin"
                                        color={colors.BLUE}
                                        height={'100px'}
                                        width={'100px'}
                                    />
                                </div>}
                        </>}
                </div>
            </>
        );
    }
};
class Vehicle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            verified: this.props.data.verifyStatus == 'VERIFIED',
            url: null,
        }
    }
    componentDidMount() {
        this.setImage(this.props.data.displayImage);
    };
    setImage = (photoRef) => {
        firebase.storage().ref(`${photoRef}`).getDownloadURL()
            .then(result => {
                this.setState({ url: result })
            }).catch(error => { console.log(error.message) });
    };
    render() {
        const data = this.props.data;
        return (
            <>
                <div id={styles.tripPanelCont_} style={{ overflow: 'hidden', flexDirection: 'row' }}>
                    <div className={styles.driverVehicle_PIC_CONT}>
                        <img src={this.state.url} className={styles.driverVehicle_PIC} />
                    </div>
                    <p className={styles.driverVehicle_DESC}>
                        Color - {data.color}<br />
                        Year - {data.year}<br />
                        Make - {data.make}<br />
                        Model - {data.model}
                    </p>
                    {this.state.verified ?
                        <div id={styles.driverVehicle_VERIFYCONT} style={{ backgroundColor: '#39A2E5' }}>
                            <p id={styles.driverVehicle_VERIFYCONTTEXT}>Verified</p>
                            <RiShieldCheckFill className={styles.settingsVerifyOrNotIcon} style={{ margin: '0px' }} color={colors.WHITE} />
                        </div>
                        :
                        <div id={styles.driverVehicle_VERIFYCONT} style={{ backgroundColor: '#FF4040' }}>
                            <p id={styles.driverVehicle_VERIFYCONTTEXT}>Verifying</p>
                            <BsClockHistory className={styles.settingsVerifyOrNotIcon} style={{ margin: '0px' }} color={colors.WHITE} />
                        </div>}
                    <p id={styles.driverVehiclePLATENUMBER}>{data.plateNumber}</p>
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