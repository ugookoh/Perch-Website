import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { BsDot } from 'react-icons/bs';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    dateformat,
    sendFeedback,
    colors,
} from '../../functions';
import styles from '../panel_layout.module.css';


export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: 'unselected',
            message: '',
            loading: false,
            showMessage: false,
            userDetails: this.props.userDetails,
            result: null,
            messageObj: null,
            errorMessage: '',
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {
            const ref = this.props.type == 'Driver' ? `driverFeedback/${this.state.userDetails.driverID}` : `userFeedback/${this.state.userDetails.userID}`;
            firebase.database().ref(ref).once('value', snapshot => {
                this.setState({ result: snapshot.val() ? snapshot.val() : null });
            }).catch(error => { console.log(error.message) });
        }
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        if (this.state.result) {
            const keys = Object.keys(this.state.result).sort((a, b) => b - a);
            for (let k = 0; k < keys.length; k++)
                results.push(
                    <>
                        <div className={styles.previousMessageSum} onClick={() => { this.setState({ messageObj: this.state.result[keys[k]], showMessage: true }) }}>
                            <p style={{ fontSize: '95%' }}>{this.state.result[keys[k]].subject}</p>

                            <div className={styles.previousMessageDate}>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>{dateformat(this.state.result[keys[k]].date)}</p>
                                <BsDot size={'55px'} color={this.state.result[keys[k]].status == 'PROCESSED' ? this.props.type == 'Driver' ? colors.BLUE : colors.GREEN : colors.RED} />
                            </div>
                        </div>
                        {
                            k == keys.length - 1 ?
                                <></> :
                                <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                        }
                    </>
                )
        }


        return (
            <div className={styles.cont}>
                {this.state.showMessage ?
                    <>
                        <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                            <p className={styles.title} style={{ color: colors.BLACK, marginBottom: '30px' }}>{this.state.messageObj.subject}</p>

                            <div className={styles.previousMessageC} style={{ alignItems: 'flex-end' }}>
                                <div className={styles.previousMessageCol} style={{ backgroundColor: this.props.type == 'Driver' ? colors.BLUE : colors.GREEN }}>
                                    <p style={{ fontSize: '95%', color: colors.WHITE, lineHeight: '150%', paddingRight: '10px', paddingLeft: '10px' }}>
                                        {this.state.messageObj.body}
                                    </p>
                                </div>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>{dateformat(this.state.messageObj.date)}</p>
                            </div>
                            {this.state.messageObj.status == 'PROCESSED' ?
                                <div className={styles.previousMessageC} style={{ alignItems: 'flex-start' }}>
                                    <div className={styles.previousMessageCol} style={{ backgroundColor: 'rgba(145, 134, 134, 0.5)' }}>
                                        <p style={{ fontSize: '95%', color: colors.BLACK, lineHeight: '150%', paddingRight: '10px', paddingLeft: '10px' }}>
                                            {this.state.messageObj.response}
                                        </p>
                                    </div>
                                    <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>{dateformat(this.state.messageObj.responseDate)}</p>
                                </div> : <></>}
                        </div>

                        <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: '100px' }}>
                            <a className={styles.button1} id={styles.sendMessageContactUS} style={this.props.type == 'Driver' ? { backgroundColor: colors.BLUE } : {}}
                                onClick={() => {
                                    this.setState({ showMessage: false })
                                }}>
                                {this.state.loading ?
                                    <Loader
                                        type="TailSpin"
                                        color={colors.WHITE}
                                        height={'20px'}
                                        width={'20px'} /> :
                                    <p className={styles.buttonText1}>Back</p>}
                            </a>
                            <p className={styles.contactUsLasttext}>
                                We respond to your queries via the Perch {this.props.type == 'Driver' ? `Driver` : ''} app
                    </p>
                        </div>

                    </> :
                    <>
                        <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                            <p className={styles.title} style={{ color: colors.BLACK }}>Contact us form</p>
                            <p className={styles.text} style={{ color: colors.GREY }}>
                                Feel free to contact us about issues with your ride or about feeback on how we can better our services.
                    </p>
                            <select
                                value={this.state.topic}
                                className={styles.selectTopic}
                                onChange={(v) => { this.setState({ topic: v.target.value }) }}
                                style={this.state.topic === 'unselected' ? { color: 'rgba(112, 112, 112, 0.7)' } : {}}
                            >
                                <option value="unselected">(--Select a topic--)</option>
                                <option value="Give feedback about our services">Give feedback about our services</option>
                                <option value="Missing item">Missing item</option>
                                <option value="Change your name">Change your name</option>
                                {
                                    this.props.type == 'Driver' ?
                                        <option value="Report a rider">Report a rider</option>
                                        : <>
                                            <option value="Report a driver">Report a driver</option>
                                            <option value="Work with us">Work with us</option>
                                        </>
                                }
                                <option value="Report a bug">Report a rider</option>
                                <option value="Other">Other</option>
                            </select>

                            <textarea
                                type="text"
                                placeholder="Enter your message here"
                                className={styles.contactUsContent}
                                value={this.state.message}
                                onChange={(event) => { this.setState({ message: event.target.value }); }} />
                            <p className={styles.em} style={{ textAlign: 'initial' }}>{this.state.errorMessage}</p>
                        </div>

                        <div className={styles.contactUsLC} style={{ marginTop: '15px', marginBottom: this.state.result ? '0px' : '150px' }}>
                            <a className={styles.button1} id={styles.sendMessageContactUS} style={this.props.type == 'Driver' ? { backgroundColor: colors.BLUE } : {}}
                                onClick={() => {
                                    if (!this.state.loading)
                                        sendFeedback.call(this);
                                }}>
                                <p className={styles.buttonText1}>Send Message</p>
                            </a>
                            <p className={styles.contactUsLasttext}>
                                We respond to your queries via the Perch {this.props.type == 'Driver' ? `Driver` : ''} app
                    </p>
                        </div>

                        {this.state.result ?
                            <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', marginBottom: '150px' }}>
                                <p className={styles.title} style={{ color: colors.BLACK }}>Previous messages</p>
                                <p className={styles.text} style={{ color: colors.GREY, marginBottom: '10px' }}>
                                    Here are some of your previous messages. Messages would be answered within 2-4 business days
                                </p>

                                {results}
                            </div> : <></>}

                    </>}
            </div>
        );
    };
};