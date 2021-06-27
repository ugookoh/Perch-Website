import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { BsDot } from 'react-icons/bs';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    replyFeedback,
    dateOfQuery,
    colors
} from '../../functions';
import styles from '../panel_layout.module.css';

export default class UnreadMessages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idSearch: '',
            result: {},
            userDetails: this.props.userDetails,
            showMessage: false,
            response: '',
            riderOrDriver: 'Rider',
            toShow: null,
            showResponse: false,
            responseDate: 0,
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {
            const ref = this.state.riderOrDriver == 'Rider' ? `analytics/unansweredUserFeedbackMessages` : `analytics/unansweredDriverFeedbackMessages`;
            firebase.database().ref(ref).once('value', snapshot => {
                this.setState({ result: snapshot.val() ? snapshot.val() : {} });
            })
        }
    };
    loadMessage(path, timestamp, senderID) {
        const ref = this.state.riderOrDriver == 'Rider' ? `userFeedback/${path}` : `driverFeedback/${path}`;
        firebase.database().ref(ref).once('value', snapshot => {
            this.setState({
                toShow: {
                    ...snapshot.val(),
                    timestamp: timestamp,
                    senderID: senderID
                },
                showMessage: true,
                showResponse: false,
            });
        });
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        const keys = Object.keys(this.state.result).sort();
        for (let k = 0; k < keys.length; k++) {

            const path = this.state.result[keys[k]].path;
            const a = path.indexOf('/') + 1;
            const b = path.length;
            const timestamp = Number(path.slice(a, b));
            const senderID = path.slice(0, a - 1);
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => {
                        this.loadMessage(this.state.result[keys[k]].path, timestamp, senderID)
                    }}>
                        <p style={{ fontSize: '95%' }}>{this.state.result[keys[k]].subject}</p>
                        <div className={styles.previousMessageDate}>
                            <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>
                                {dateOfQuery(timestamp)}
                            </p>
                            <BsDot size={'55px'} color={colors.GREEN} />
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
                            <p className={styles.title} style={{ color: colors.BLACK, marginBottom: '30px' }}>
                                {this.state.toShow.subject}: <span style={{ fontFamily: 'Gilroy-Light', fontSize: '90%' }}>( Sender ID: {this.state.toShow.senderID} )</span>
                            </p>

                            <div className={styles.previousMessageC} style={{ alignItems: 'flex-start' }}>
                                <div className={styles.previousMessageCol} style={{ backgroundColor: 'rgba(145, 134, 134, 0.5)' }}>
                                    <p style={{ fontSize: '95%', color: colors.BLACK, lineHeight: '150%', paddingRight: '10px', paddingLeft: '10px' }}>
                                        {this.state.toShow.body}
                                    </p>
                                </div>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>
                                    {dateOfQuery(this.state.toShow.timestamp)}
                                </p>
                            </div>
                            {this.state.showResponse ?
                                <div className={styles.previousMessageC} style={{ alignItems: 'flex-end' }}>
                                    <div className={styles.previousMessageCol} style={{ backgroundColor: colors.GREEN }}>
                                        <p style={{ fontSize: '95%', color: colors.WHITE, lineHeight: '150%', paddingRight: '10px', paddingLeft: '10px' }}>
                                            {this.state.response}
                                        </p>
                                    </div>
                                    <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', }}>
                                        {dateOfQuery(this.state.responseDate)}
                                    </p>
                                </div> :
                                <>
                                    <div className={styles.sharedLine}></div>
                                    <textarea
                                        type="text"
                                        placeholder="Enter your response here"
                                        className={styles.contactUsContent}
                                        //style={{ width: '100%' }}
                                        value={this.state.response}
                                        onChange={event => { this.setState({ response: event.target.value }) }}
                                    />
                                </>
                            }

                        </div>

                        <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                            <div
                                className={styles.button2}
                                style={{ backgroundColor: colors.RED }}
                                id={styles.buttonBottom}
                                onClick={() => { this.setState({ showMessage: false }) }}>
                                <p className={styles.buttonText1}>Cancel</p>
                            </div>
                            <div
                                className={styles.button2}
                                style={{ backgroundColor: colors.GREEN }}
                                id={styles.buttonBottom}
                                onClick={() => {
                                    if (!this.state.showResponse)
                                        replyFeedback.call(this, this.state.response, this.state.riderOrDriver, this.state.toShow.senderID, this.state.toShow.timestamp);
                                    else
                                        alert('Response already sent')
                                }}>
                                <p className={styles.buttonText1}>Send response</p>
                            </div>
                        </div>

                    </> :
                    <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                        <p className={styles.title} style={{ color: colors.BLACK }}>Unread messages</p>
                        <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                            {/* <input
                                type="text"
                                placeholder="Search by email / userID"
                                className={styles.searchInput}
                                //style={{ width: '150px', margin: '0px', fontSize: '90%', border: '1px solid rgba(149, 154, 172, 0.5)' }}
                                value={this.state.idSearch}
                                onChange={event => {
                                    this.setState({ idSearch: event.target.value });
                                }}
                            /> */}
                            <div style={{ width: '90%', height: '10px' }}></div>
                            <div
                                className={styles.readOrUnreadCont}
                                onClick={() => {
                                    this.setState({ riderOrDriver: this.state.riderOrDriver == 'Rider' ? 'Driver' : 'Rider' }, () => {
                                        this.loadResult();
                                    })
                                }}>
                                <p className={styles.readOrUnreadText}>{this.state.riderOrDriver}</p>
                            </div>
                        </div>
                        {results}
                    </div>}
            </div>
        );
    };
};