import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCheck } from 'react-icons/ai';
import { RiDownloadCloudLine, RiUploadCloud2Line, RiCheckboxCircleLine } from 'react-icons/ri';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from '../panel_layout.module.css';
import { colors } from '../../functions';
import Loader from 'react-loader-spinner';

export default class ApplicationStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: this.props.userID,
            completed: [
                'done',
                'done',
                'ongoing',
                'undone',
                'undone',
            ],
            steps: [
                'Submit Application',
                'Upload Documents',
                'Verifying submitted documents or Interview',
                'Sign offer letter provided',
                'Welcome to Perch!'
            ],
            isUploaded: false,
            perchOfferLetter: null,
            signedOfferLetter: null,
            loading: false,
            loading1: false,
        };
    };
    componentDidMount() {
        firebase.database().ref(`driverApplications/${this.state.userID}/progress`).once('value', (snapshot => {
            this.setState({ completed: JSON.parse(snapshot.val()) }, () => {
                firebase.storage().ref(`constants/PerchOfferLetter.pdf`).getDownloadURL()
                    .then(result => { this.setState({ perchOfferLetter: result }); })
                    .catch(error => { console.log(error.message); });
            });
        })).catch(error => { console.log(error.message) });
    };
    uploadOfferLetter = () => {
        this.setState({ loading1: true }, () => {
            firebase.storage().ref(`driverVehicleDocs/${this.state.userID}/driverDetails/signedOfferLetter`)
                .put(this.state.signedOfferLetter)
                .then(() => {
                    firebase.database().ref(`completedDriverApplications${this.state.userID}`).update({
                        stage: snapshot.after.val(),
                        offerLetterSigned: true,
                    }).catch(error => { console.log(error.message) });

                    firebase.database().ref(`driverApplications/${this.state.userID}`).update({
                        offerLetterSigned: true,
                        progress: JSON.stringify(["done", "done", "done", "done", "ongoing"]),
                    }).then(() => {
                        this.setState({
                            completed: [
                                'done',
                                'done',
                                'done',
                                'done',
                                'ongoing',
                            ],
                        })
                    }).catch(error => { console.log(error.message); })
                }).catch(error => {
                    console.log(error.message);
                    this.setState({ loading: false });
                });
        });
    }
    render() {
        let steps = [];
        for (let i = 0; i < this.state.steps.length; i++)
            steps.push(
                <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px' }}>
                    <div className={styles.driver_APP_RADIO}
                        style={{
                            backgroundColor: this.state.completed[i] == 'done' ?
                                colors.GREEN :
                                this.state.completed[i] == 'ongoing' ?
                                    'rgba(78, 184, 72,0.5)' :
                                    `rgb(149, 154, 172,0.5)`
                        }}>
                        {this.state.completed[i] == 'done' ? <AiOutlineCheck color={colors.WHITE} size={'15px'} /> : <></>}
                    </div>
                    <p className={styles.text} style={{ color: colors.GREY, width: 'initial', margin: '0px' }}>{this.state.steps[i]}</p>
                </div>
            )
        return (
            <div className={styles.cont}>

                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', }}>
                    <div className={styles.driver_APP_TOPCONT} style={{ backgroundColor: colors.GREEN }}>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: colors.WHITE }}>Vehicle Confirmation</p>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: colors.WHITE }}>Upload Documents</p>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: colors.WHITE }}>Application Status</p>

                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: colors.WHITE }}>1</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: colors.WHITE }}>2</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: colors.WHITE }}>3</p>
                    </div>
                    <p className={styles.title} style={{ color: colors.BLACK }}>
                        Thanks for completing your checklist !<br />
                        Here you can watch your progress in real time
                    </p>
                    <p className={styles.text} style={{ color: colors.GREY }}>
                        We are currently working on your profile. Updates would be sent via mail so no need to worry about missing them.
                    </p>
                    {steps}
                </div>

                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: this.state.completed[2] === 'done' ? '0px' : '150px' }}>
                    <p className={styles.contactUsLasttext}>
                        Having issues? <a href='/contact_us'><span id={styles.driver_APP_CU1}>Contact Us</span></a>.
                    </p>
                </div>

                {//OFFER LETTER 
                    this.state.completed[2] == 'done' && this.state.completed[3] == 'ongoing' ?
                        <>
                            <input type='file'
                                ref={(ref) => this.document = ref}
                                accept=".pdf"
                                className={styles.driverVehicle_INPUT}
                                onChange={event => {
                                    if (event.target.files.length != 0) {
                                        const filesize = ((event.target.files[0].size / 1024) / 1024).toFixed(4); // MB
                                        if (filesize > 10)
                                            this.setState({
                                                errorMessage: 'File is too large. A maximum of 10 megabytes is permitted for uploads',
                                                loading: false,
                                            });
                                        else
                                            this.setState({
                                                signedOfferLetter: event.target.files[0],
                                                loading: false,
                                                isUploaded: true,
                                            }, () => { });
                                    }
                                }} />

                            <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginBottom: '150px' }}>
                                <p className={styles.title} style={{ color: colors.BLACK }}>
                                    Congratulations! Here's your offer letter.
                                </p>
                                <p className={styles.text} style={{ color: colors.GREY }}>
                                    Please download, read, sign and submit it in the submission portal
                                </p>
                                <a href={this.state.perchOfferLetter}
                                    target={'_blank'} className={styles.offerLetterDIV_CONTAINER}>
                                    <p style={{ color: colors.GREEN, margin: 0, padding: 0, fontFamily: 'Gilroy-Semibold' }}>Download offer letter here. Sign and reupload below</p>
                                    <RiDownloadCloudLine color={colors.GREEN} size={'25px'} style={{ margin: 0 }} />
                                </a>
                                <div className={styles.offerLetterDIV_CONTAINER2}>
                                    <div
                                        className={styles.offerLetterDIV_CONTAINER2_Button}
                                        id={styles.offerLetterDIV_CONTAINER2_Button_}
                                        onClick={() => { this.document.click(); }}>
                                        <div className={styles.offerLetterDIV_Upload}>
                                            <p className={styles.submitOfferButtonText} style={{ marginRight: '10px' }}>Click to upload</p>
                                            {this.state.loading ?
                                                <Loader
                                                    type="TailSpin"
                                                    color={colors.WHITE}
                                                    height={'15px'}
                                                    width={'15px'} />
                                                :
                                                this.state.isUploaded ?
                                                    <RiCheckboxCircleLine color={colors.WHITE} size={'25px'} /> :
                                                    <RiUploadCloud2Line color={colors.WHITE} size={'25px'} />}
                                        </div>
                                    </div>
                                    <div
                                        className={styles.offerLetterDIV_CONTAINER2_Button}
                                        id={this.state.isUploaded ? styles.offerLetterDIV_CONTAINER2_Button_1 : null}
                                        style={{ opacity: this.state.isUploaded ? 1 : 0.7 }}
                                        onClick={this.uploadOfferLetter}>
                                        <p className={styles.submitOfferButtonText}
                                            style={{ marginRight: this.state.loading1 ? '10px' : 0 }}>Submit now</p>
                                        {this.state.loading1 ?
                                            <Loader
                                                type="TailSpin"
                                                color={colors.WHITE}
                                                height={'15px'}
                                                width={'15px'} /> :
                                            <></>}
                                    </div>
                                </div>
                                <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                            </div>

                        </>
                        : <></>
                }
            </div>
        )

    }
};
