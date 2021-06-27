import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCheck } from 'react-icons/ai';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from '../panel_layout.module.css';
import { colors } from '../../functions';



export default class VehicleConfirmation extends React.Component {
    constructor() {
        super();

        this.state = {
            s1: false,
            s2: false,
            s3: false,
            errorMessage: '',
            city: '',
            loading1: false,
            loading2: false,
            cityVerified: false,
        };
    };
    componentDidMount() {
    };
    nextStage = () => {
        this.setState({ loading2: true, errorMessage: '' }, () => {
            firebase.database().ref(`driverApplications/${this.props.userID}`).update({
                stage: 'two',
                city: this.capitalizeFirstLetter(this.state.city.toLowerCase()),
            })
                .then(() => { this.props.nextStage('two') })
                .catch(error => { console.log(error.message) });
        });
    };
    verifyCity = () => {
        if (!this.state.cityVerified)
            this.setState({ loading1: true }, () => {
                firebase.database().ref(`cities/${this.capitalizeFirstLetter(this.state.city.toLowerCase())}`).once('value', snapshot => {
                    if (snapshot.val()) {
                        this.setState({ cityVerified: true, loading1: false, errorMessage: '' })
                    }
                    else
                        this.setState({ loading1: false, errorMessage: 'Sadly Perch does not yet operate in your city. When we get there we would let you know. For further information please contact us.' })
                }).catch(error => { console.log(erroe.message) })
            })
    };
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', }}>
                    <div className={styles.driver_APP_TOPCONT}>
                        <p className={styles.driver_APP_TOP_TEXT} style={{ color: colors.WHITE }}>Vehicle Confirmation</p>
                        <p className={styles.driver_APP_TOP_TEXT}>Upload Documents</p>
                        <p className={styles.driver_APP_TOP_TEXT}>Application Status</p>

                        <p className={styles.driver_APP_TOP_TEXT_NUMB} style={{ color: colors.WHITE }}>1</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB}>2</p>
                        <p className={styles.driver_APP_TOP_TEXT_NUMB}>3</p>
                        <img src="/applicationDashArrow_.svg" className={styles.applicationDashArrow} style={{ width: '36%' }} />
                    </div>
                    <p className={styles.title} style={{ color: colors.BLACK }}>{`Please confirm that your vehicle meets the following requirements`}</p>
                    <p className={styles.text} style={{ color: colors.GREY }}>
                        You must be at least xx years of age and your car must satisfy these in order to continue
                    </p>

                    <div className={styles.driverFAQ_PICDESC}
                        style={{ width: '90%', marginTop: '10px' }}
                        id={styles.driver_APP_TOP_RADIO_CONT}
                        onClick={() => {
                            this.setState({ s1: !this.state.s1 });
                        }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s1 ? colors.GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {
                                this.state.s1 ?
                                    <AiOutlineCheck color={colors.WHITE} size={'15px'} />
                                    : <></>
                            }
                        </div>
                        <p className={styles.text} style={{ color: colors.GREY, width: 'initial', margin: '0px' }}>A 4 door vehicle</p>
                    </div>

                    <div className={styles.driverFAQ_PICDESC}
                        style={{ width: '90%', marginTop: '10px' }}
                        id={styles.driver_APP_TOP_RADIO_CONT}
                        onClick={() => {
                            this.setState({ s2: !this.state.s2 });
                        }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s2 ? colors.GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {
                                this.state.s2 ?
                                    <AiOutlineCheck color={colors.WHITE} size={'15px'} />
                                    : <></>
                            }
                        </div>
                        <p className={styles.text} style={{ color: colors.GREY, width: 'initial', margin: '0px' }}>A 2010 or newer car model</p>
                    </div>

                    <div className={styles.driverFAQ_PICDESC}
                        style={{ width: '90%', marginTop: '10px' }}
                        id={styles.driver_APP_TOP_RADIO_CONT}
                        onClick={() => {
                            this.setState({ s3: !this.state.s3 });
                        }}>
                        <div className={styles.driver_APP_RADIO} style={{ backgroundColor: this.state.s3 ? colors.GREEN : `rgba(78, 184, 72,0.5)` }}>
                            {
                                this.state.s3 ?
                                    <AiOutlineCheck color={colors.WHITE} size={'15px'} />
                                    : <></>
                            }
                        </div>
                        <p className={styles.text} style={{ color: colors.GREY, width: 'initial', margin: '0px' }}>Active status</p>
                    </div>

                    <p className={styles.text} style={{ color: colors.GREY, marginTop: '20px' }}>
                        Enter your city to see if Perch is currently operating there. Please spell it out correctly .<a href='/s/articles/available_locations' target='_blank' style={{ fontFamily: 'Gilroy-Semibold' }}>Click here for our available locations</a>
                    </p>
                    <div className={styles.driverFAQ_PICDESC} style={{ width: '90%', marginTop: '10px', marginBottom: '30px' }} >
                        <input type="text"
                            placeholder="Enter your city"
                            className={styles.inputPaymentPanel}
                            style={{ width: '150px', margin: '0px', fontSize: '90%', border: '1px solid rgba(149, 154, 172, 0.5)' }}
                            value={this.state.city}
                            onChange={event => {
                                this.setState({ city: event.target.value });
                                if (this.state.cityVerified)
                                    this.setState({ cityVerified: false })
                            }} />
                        <div className={styles.button2}
                            style={{ backgroundColor: colors.GREEN, width: '80px', margin: '0px', marginLeft: '10px' }}
                            id={styles.buttonBottom}
                            onClick={() => {
                                if (!this.state.loading1)
                                    this.verifyCity();
                            }}>
                            {this.state.loading1 ?
                                <Loader
                                    type="TailSpin"
                                    color={colors.WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1}>
                                    {this.state.cityVerified ? 'Verified' : 'Verify'}
                                </p>
                            }
                        </div>
                    </div>
                    <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                </div>
                <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '150px' }}>
                    <a className={styles.button1} id={styles.sendMessageContactUS} onClick={() => {
                        if (!this.state.loading2) {
                            if (!this.state.s1 || !this.state.s2 || !this.state.s3)
                                this.setState({ errorMessage: 'Please tick out all the Perch car requirements if your vehicle meets them.' });
                            else if (!this.state.cityVerified)
                                this.setState({ errorMessage: 'Please verify your city.' });
                            else
                                this.nextStage();
                        }
                    }}>
                        {
                            this.state.loading2 ?
                                <Loader
                                    type="TailSpin"
                                    color={colors.WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1}>Confirm</p>}
                    </a>
                    <p className={styles.contactUsLasttext}>
                        Having issues? <a href='/contact_us'><span id={styles.driver_APP_CU1}>Contact Us</span></a>.
                    </p>
                </div>
                <div style={{ height: '100px', width: '20px', backgroundColor: 'transparent' }}></div>
            </div>
        )

    }
};