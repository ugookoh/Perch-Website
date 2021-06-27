import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCheck } from 'react-icons/ai';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from '../panel_layout.module.css';
import { colors } from '../../functions';



export default class UploadDocuments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadDocs: false,
            userID: this.props.userID,
            vehicleRandomID: '',
            dateFormat: '',

            s: [//ORDER IS IMPORTANT FOR SERVER
                false, // "Driver's licence",
                false, // "Proof of work eligibility",
                false, // "EPS background check",
                false, // "Vehicle insurance",
                false, // "Vehicle registration",
                false, // "Vehicle inspection",
                false, // "Photo of Vehicle (Must be 4:3)"
                false, // "Profile Photo (Must be 1:1)"
            ],
            docList: [
                "Driver's licence",
                "Proof of work eligibility",
                "EPS background check",
                "Vehicle insurance",
                "Vehicle registration",
                "Vehicle inspection",
                "Photo of Vehicle (Must be 4:3)",
                "Profile Photo (Must be 1:1)"

            ],
            docID: [
                "driversLicence",
                "proofOfWorkEligibility",
                "epsBackgroundCheck",
                "vehicleInsurance",
                "vehicleRegistration",
                "vehicleInspection",
                "vehicleImage",
                "profilePicture"

            ],
            docNames: [
                false, // "Driver's licence",
                false, // "Proof of work eligibility",
                false, // "EPS background check",
                false, // "Vehicle insurance",
                false, // "Vehicle registration",
                false, // "Vehicle inspection",
                false, // "Photo of Vehicle (Must be 4:3)"
                false, // "Profile Photo (Must be 1:1)"
            ],

            vehicleMake: '',
            vehicleModel: '',
            vehicleYear: '',
            vehicleColor: '',
            plateNumber: '',

            selectedIndex: 0,
            loading: false,
            saveLoading: false,
            errorMessage: '',
            timestamp: null,
            name: null
        };
    };
    componentDidMount() {
        firebase.database().ref(`driverApplications/${this.state.userID}`).once('value', snapshot => {
            if (snapshot.val().documentsSubmitted) {
                this.setState({ s: JSON.parse(snapshot.val().documentsSubmitted), docNames: JSON.parse(snapshot.val().documentsSubmitted) });
            };
            firebase.database().ref(`vehicles/${this.state.userID}/${snapshot.val().dateFormat}`).once('value', snap => {
                if (snap.val()) {
                    const { make, model, plateNumber, year, color } = snap.val();
                    this.setState({
                        vehicleMake: make,
                        vehicleModel: model,
                        vehicleYear: year,
                        vehicleColor: color,
                        plateNumber: plateNumber,
                    })
                }
            })
            this.setState({
                vehicleRandomID: snapshot.val().vehicleRandomID,
                dateFormat: snapshot.val().dateFormat,
                timestamp: snapshot.val().timestamp,
                name: snapshot.val().name,
            })
        }).catch(error => { console.log(error.message) });
    };

    submitDoc = () => {//make position for other arrays item
        const userID = this.state.userID;
        const vehicleRandomID = this.state.vehicleRandomID;
        const docID = this.state.docID[this.state.selectedIndex];
        let toPut = '';
        if (docID == 'vehicleInsurance' || docID == 'vehicleRegistration' || docID == 'vehicleInspection' || docID == 'vehicleImage')
            toPut = `driverVehicleDocs/${userID}/${vehicleRandomID}/${docID}`;
        else if (docID == 'driversLicence' || docID == 'proofOfWorkEligibility' || docID == 'profilePicture' || docID == 'epsBackgroundCheck')
            toPut = `driverVehicleDocs/${userID}/driverDetails/${docID}`;//WHERE THE RIVER DETAILS ARE WLONG WITH THE PROFILE PHOTO

        firebase.storage().ref(toPut)
            .put(this.state.s[this.state.selectedIndex])
            .then(() => {
                firebase.database().ref(`driverApplications/${userID}`).update({
                    documentsSubmitted: JSON.stringify(this.state.docNames),
                })
                    .then(() => { this.setState({ loading: false }) })
                    .catch(error => {
                        console.log(error.message);
                        this.setState({ loading: false });
                    })
            })
            .catch(error => {
                console.log(error.message);
                this.setState({ loading: false });
            });
    };
    storeVehicleDetails = () => {
        const userID = this.state.userID;
        const dateFormat = this.state.dateFormat;
        this.setState({ saveLoading: true }, () => {
            firebase.database().ref(`vehicles/${userID}`).update({
                [dateFormat]: {
                    color: this.state.vehicleColor,
                    displayImage: `driverVehicleDocs/${userID}/${this.state.vehicleRandomID}/vehicleImage`,
                    make: this.state.vehicleMake,
                    model: this.state.vehicleModel,
                    plateNumber: this.state.plateNumber,
                    verifyStatus: 'UNVERIFIED',
                    year: this.state.vehicleYear,
                },
                selected: dateFormat,
            })
                .then(() => {
                    this.setState({ saveLoading: false });
                })
                .catch(error => { this.setState({ error: error.message }) })
        })
    };
    nextStage = () => {
        firebase.database().ref(`driverApplications/${this.state.userID}`).update({
            stage: 'three',
            progress: JSON.stringify(['done', 'done', 'ongoing', 'undone', 'undone']),
        })
            .then(() => {
                firebase.database().ref(`completedDriverApplications`).update({
                    [this.state.userID]: {
                        stage: 'three',
                        offerLetterSigned: false,
                        timestamp: this.state.timestamp,
                        name: this.state.name,
                    },
                }).catch(error => { console.log(error.message) })
            })
            .then(() => { this.props.nextStage('three'); })
            .catch(error => { console.log(error.message) })

    }
    render() {
        let requirements = [];
        for (let i = 0; i < this.state.docList.length; i++)
            requirements.push(
                <div className={styles.driverFAQ_PICDESC} id={styles.driver_APP_TOP_RADIO_CONT_}
                    onClick={() => { this.setState({ uploadDocs: true, selectedIndex: i, errorMessage: '' }) }}>
                    <p className={styles.text} style={{ color: colors.GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>{this.state.docList[i]}</p>
                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s[i] ? colors.GREEN : `rgba(78, 184, 72,0.5)` }}>
                        {this.state.s[i] ? <AiOutlineCheck color={colors.WHITE} size={'15px'} /> : <></>}
                    </div>
                </div>
            );

        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', }}>
                    <div className={styles.driver_APP_TOPCONT}>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: colors.WHITE }}>Vehicle Confirmation</p>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: colors.WHITE }}>Upload Documents</p>
                        <p className={styles.driver_APP_TOP_TEXT}>Application Status</p>

                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: colors.WHITE }}>1</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: colors.WHITE }}>2</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB}>3</p>
                        <img src="/applicationDashArrow_.svg" className={styles.applicationDashArrow} style={{ width: '69%' }} />
                    </div>
                    {
                        this.state.uploadDocs ?
                            <>
                                <p className={styles.title} style={{ color: colors.BLACK }}>{`Upload your ${this.state.docList[this.state.selectedIndex]}`}</p>
                                <p className={styles.text} style={{ color: colors.GREY }}>
                                    Documents should be submitted as a scanned pdf or a photograph of the document.<br />
                                    <a href='/s/articles/procedures_for_taking_a_picture' style={{ fontFamily: 'Gilroy-Semibold' }}>See details for taking vehicle and profile photo's here</a><br />
                                    Pictures should be :<br />
                                    • Taken in a well place <br />
                                    • Show details clearly
                                </p>

                                {this.state.s[this.state.selectedIndex] ?
                                    <div
                                        className={styles.uploadDocumentIconCont}
                                        onClick={() => { this.document.click() }}
                                        style={{ flexDirection: 'column' }}>
                                        <img src="/documentsSubmitted.svg" className={styles.uploadDocumentPIC} style={{ height: '70%', marginTop: '10px' }} />
                                        <p className={styles.text}
                                            style={{ width: 'initial', fontFamily: 'Gilroy-Semibold', fontSize: '95%', color: colors.GREY, maxWidth: '90%' }}>
                                            {this.state.s[this.state.selectedIndex].name}
                                        </p>
                                    </div> :
                                    <div className={styles.uploadDocumentIconCont} onClick={() => { this.document.click() }}>
                                        <img src='/uploadDocumentIcon.svg' className={styles.uploadDocumentPIC} />
                                    </div>
                                }
                                <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                            </>
                            :
                            <>
                                <p className={styles.title} style={{ color: colors.BLACK }}>{`Upload Documents`}</p>
                                <p className={styles.text} style={{ color: colors.GREY }}>
                                    All that is left to do is to submit the required documents and you’re on your way to becoming a Perch driver.
                                </p>
                                <p className={styles.title} style={{ color: colors.GREY, fontSize: '95%', marginTop: '20px' }}>{`Required Documents`}</p>
                                {requirements}
                                <p className={styles.title} style={{ color: colors.GREY, fontSize: '95%', marginTop: '20px' }}>{`Vehicle details`}</p>
                                <div className={styles.driverApplicationTextinput_OUTER}>
                                    <input
                                        type="text"
                                        placeholder="Enter vehicle make"
                                        className={styles.driverApplicationTextinput_CONT}
                                        //style={{ width: '150px', margin: '0px', fontSize: '90%', border: '1px solid rgba(149, 154, 172, 0.5)' }}
                                        value={this.state.vehicleMake}
                                        onChange={event => {
                                            this.setState({ vehicleMake: event.target.value });
                                        }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter vehicle model"
                                        className={styles.driverApplicationTextinput_CONT}
                                        //style={{ width: '150px', margin: '0px', fontSize: '90%', border: '1px solid rgba(149, 154, 172, 0.5)' }}
                                        value={this.state.vehicleModel}
                                        onChange={event => {
                                            this.setState({ vehicleModel: event.target.value });
                                        }}
                                    />
                                </div>
                                <div className={styles.driverApplicationTextinput_OUTER}>
                                    <input
                                        type="text"
                                        placeholder="Enter vehicle color"
                                        className={styles.driverApplicationTextinput_CONT}
                                        //style={{ width: '150px', margin: '0px', fontSize: '90%', border: '1px solid rgba(149, 154, 172, 0.5)' }}
                                        value={this.state.vehicleColor}
                                        onChange={event => {
                                            this.setState({ vehicleColor: event.target.value });
                                        }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter vehicle year (XXXX)"
                                        className={styles.driverApplicationTextinput_CONT}
                                        //style={{ width: '150px', margin: '0px', fontSize: '90%', border: '1px solid rgba(149, 154, 172, 0.5)' }}
                                        value={this.state.vehicleYear}
                                        onChange={event => {
                                            this.setState({ vehicleYear: event.target.value });
                                        }}
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter plate number"
                                    className={styles.driverApplicationTextinput_CONT}
                                    style={{ fontFamily: 'Gilroy-Bold', color: colors.GREEN, width: '90%' }}
                                    value={this.state.plateNumber}
                                    onChange={event => {
                                        this.setState({ plateNumber: event.target.value });
                                    }}
                                />

                                <a className={styles.button1} id={styles.sendMessageContactUS}
                                    style={{ width: '90%', marginTop: '20px', maxWidth: 'initial' }}
                                    onClick={() => {
                                        this.storeVehicleDetails();
                                    }}>
                                    {this.state.saveLoading ?
                                        <Loader
                                            type="TailSpin"
                                            color={colors.WHITE}
                                            height={'20px'}
                                            width={'20px'} /> :
                                        <p className={styles.buttonText1}>Save Vehicle details</p>}
                                </a>
                                <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                            </>
                    }
                </div>
                <input type='file'
                    ref={(ref) => this.document = ref}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className={styles.driverVehicle_INPUT}
                    onChange={event => {
                        if (event.target.files.length != 0) {
                            let files = this.state.s;
                            let docNames = this.state.docNames;
                            const filesize = ((event.target.files[0].size / 1024) / 1024).toFixed(4); // MB
                            if (filesize > 10)
                                this.setState({ errorMessage: 'File is too large. A maximum of 10 megabytes is permitted for uploads' });
                            else {
                                files[this.state.selectedIndex] = event.target.files[0];
                                docNames[this.state.selectedIndex] = { name: event.target.files[0].name };
                                this.setState({ s: files, docNames: docNames, loading: true }, () => { this.submitDoc(); });
                            }
                        }
                    }} />
                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '150px' }}>
                    {this.state.uploadDocs ?
                        <div className={styles.driverFAQ_PICDESC} style={{ width: '100%', justifyContent: 'space-between' }}>
                            <a className={styles.button1} id={styles.sendMessageContactUS}
                                onClick={() => {
                                    if (!this.state.loading)
                                        this.setState({ uploadDocs: false, errorMessage: '' })
                                }}
                                style={{ backgroundColor: colors.RED, width: '48%' }}>
                                <p className={styles.buttonText1}>Cancel</p>
                            </a>

                            <a className={styles.button1}
                                id={styles.sendMessageContactUS}
                                style={{ width: '48%' }}
                                onClick={() => {
                                    if (!this.state.loading) {
                                        if (this.state.s[this.state.selectedIndex])
                                            this.setState({ uploadDocs: false, errorMessage: '' })
                                        else
                                            this.document.click();
                                    }
                                }}>
                                {this.state.loading ?
                                    <Loader
                                        type="TailSpin"
                                        color={colors.WHITE}
                                        height={'20px'}
                                        width={'20px'} /> :
                                    <p className={styles.buttonText1}>{this.state.s[this.state.selectedIndex] ? 'Done' : 'Upload'}</p>
                                }
                            </a>
                        </div>
                        :
                        <a className={styles.button1} id={styles.sendMessageContactUS}
                            onClick={() => {
                                if (this.state.docNames.includes(false))
                                    this.setState({ errorMessage: 'Please upload all the required documents' });
                                else if (
                                    this.state.vehicleYear.length <= 3 ||
                                    this.state.vehicleColor.length <= 2 ||
                                    this.state.vehicleModel.length <= 3 ||
                                    this.state.vehicleMake.length <= 3 ||
                                    this.state.plateNumber.length <= 3)
                                    this.setState({ errorMessage: 'Please fill the vehicle details completely and correctly.' });
                                else
                                    this.setState({ loading: true }, () => {
                                        this.nextStage();
                                    })
                            }}>
                            {this.state.loading ?
                                <Loader
                                    type="TailSpin"
                                    color={colors.WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1}>{`Confirm & Submit`}</p>}
                        </a>}
                    <p className={styles.contactUsLasttext}>
                        Having issues? <a href='/contact_us'><span id={styles.driver_APP_CU1}>Contact Us</span></a>.  See <a href='/s/articles/procedures_for_taking_a_picture'><span id={styles.driver_APP_CU1}>guidelines for taking vehicle and profile photos</span></a>.<br />
                        By clicking Confirm & Submit you confirming that all the information you provided here is accurate and correct.
                    </p>
                </div>
                <div style={{ height: '100px', width: '20px', backgroundColor: 'transparent' }}></div>
            </div>
        )

    }
};