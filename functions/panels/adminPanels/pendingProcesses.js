import firebase from 'firebase';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    colors,
    formatDateAllValues, pendingProcessesFunction, pendingProcessesFunctionDelete
} from '../../functions';
import styles from '../panel_layout.module.css';
export default class PendingProcesses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: {},
            listOfProcesses: [],

            loading: false,
            loading1: false,
            pushId: '',
            addProcess: false,
            isNewProcess: false,
            viewList: false,
            userID: '',
            type: '',
            mainTopic: '',
            timeCreated: null,
            title: '',
            details: '',

            errorMessage: '',

        };
    };
    componentDidMount() {
        firebase.database().ref(`pendingProcessesList`).once('value', snapshot => {
            this.setState({ result: snapshot.val() })
        })
    };
    renderList = () => {
        let r = [];
        r.push(
            <>
                <div className={styles.widthSeperator}>
                    <p className={styles.mainText}>{`• User ID - ${this.state.userID}`}</p>
                    <div style={{ width: '90px', height: '30px', backgroundColor: this.state.type == 'rider' ? colors.GREEN : colors.BLUE, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>{this.state.type == 'rider' ? 'Rider' : 'Driver'}</p>
                    </div>
                </div>
                <div className={styles.widthSeperator}>
                    <p className={styles.mainText}>{`• Topic - ${this.state.mainTopic}`}</p>
                    <p className={styles.mainText}>{`Created at  ( ${formatDateAllValues(new Date(this.state.timeCreated))} )`}</p>
                </div>
            </>
        );

        const listOfProcesses = this.state.listOfProcesses;
        for (let i = 0; i < listOfProcesses.length; i++) {
            r.push(
                <div className={styles.containerForPendingList}>
                    <p className={styles.listOfProcessesTitle}>{listOfProcesses[i].title}</p>
                    <p className={styles.listOfProcessesDetails}>{listOfProcesses[i].details}</p>
                    <p className={styles.listOfProcessesTime}>{formatDateAllValues(new Date(listOfProcesses[i].timeCreated))}</p>
                </div>
            )
        }

        return r;
    };

    loadOldList = (data) => {
        const { pushId, userID, type, mainTopic, timeCreated, } = data;
        this.setState({ loading: true }, () => {
            firebase.database()
                .ref(`pendingProcessesListMessages/${pushId}`)
                .once('value', snapshot => {
                    let oldV = [];
                    snapshot.forEach(v => {
                        oldV.push(v.val());
                    });
                    this.setState({
                        listOfProcesses: oldV,
                        viewList: true,
                        loading: false,
                        userID: userID,
                        type: type,
                        pushId: pushId,
                        mainTopic: mainTopic,
                        timeCreated: timeCreated
                    });
                })
        })
    };
    stringIsNotEmpty(s) {
        return (s.length >= 4);
    };
    render() {
        let results = [];
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++) {
            const data = this.state.result[keys[k]];
            const displayDate = formatDateAllValues(new Date(data.timeCreated))
            results.push(
                <>
                    <div
                        className={styles.previousMessageSum}
                        onClick={() => {
                            this.loadOldList(data)
                        }}>
                        <p style={{ fontSize: '105%', fontFamily: 'Gilroy-Regular', color: colors.BLACK }}>
                            {data.mainTopic}
                        </p>
                        {/* <div style={{ width: '90px', height: '30px', backgroundColor: data.type == 'rider' ? colors.GREEN : colors.BLUE, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>{data.type == 'rider' ? 'Rider' : 'Driver'}</p>
                        </div> */}
                        <p style={{ fontSize: '100%', fontFamily: 'Gilroy-Light', color: colors.GREEN }}>
                            <span style={{ color: colors.GREY }}>{displayDate}</span>
                        </p>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        };
        const { addProcess, errorMessage, isNewProcess, viewList } = this.state;
        return (
            <div className={styles.cont}>
                {!(addProcess) && !(isNewProcess) && (!viewList) &&
                    <div className={styles.enterKilometerDiv}
                        style={{ marginTop: '20px', marginBottom: '0px', marginLeft: '2.5%', width: '95%' }}>
                        <div
                            className={styles.button2}
                            style={{ backgroundColor: colors.GREEN, width: '100%', maxWidth: 'initial' }}
                            id={styles.buttonBottom}
                            onClick={() => {
                                this.setState({
                                    addProcess: true,
                                    isNewProcess: true,
                                    userID: '',
                                    type: '',
                                    mainTopic: '',
                                    title: '',
                                    details: '',

                                    errorMessage: '',
                                })
                            }}>
                            {this.state.loading ?
                                <Loader
                                    type="TailSpin"
                                    color={colors.WHITE}
                                    height={'20px'}
                                    width={'20px'} /> :
                                <p className={styles.buttonText1}>Add new process</p>}
                        </div>
                    </div>}
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.BLACK }}>{
                        addProcess ?
                            'Add a new process' :
                            viewList ?
                                'View process history' :
                                'List of pending processes'
                    }</p>
                    {addProcess ?
                        <>
                            {isNewProcess ?
                                <>
                                    <div className={styles.widthSeperator}>
                                        <input
                                            type="text"
                                            placeholder="User ID"
                                            className={styles.searchInput}
                                            style={{ width: '67%' }}
                                            value={this.state.userID}
                                            onChange={event => {
                                                this.setState({ userID: event.target.value });
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Type"
                                            className={styles.searchInput}
                                            style={{ width: '32%' }}
                                            value={this.state.type}
                                            onChange={event => {
                                                this.setState({ type: event.target.value.toLowerCase() });
                                            }}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Main topic"
                                        className={styles.searchInput}
                                        style={{ width: '90%', marginTop: '15px' }}
                                        value={this.state.mainTopic}
                                        onChange={event => {
                                            this.setState({ mainTopic: event.target.value });
                                        }}
                                    />
                                </> :
                                <>
                                    <div className={styles.widthSeperator}>
                                        <p className={styles.mainText}>{`• User ID - ${this.state.userID}`}</p>
                                        <div style={{ width: '90px', height: '30px', backgroundColor: this.state.type == 'rider' ? colors.GREEN : colors.BLUE, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>{this.state.type == 'rider' ? 'Rider' : 'Driver'}</p>
                                        </div>
                                    </div>
                                    <div className={styles.widthSeperator}>
                                        <p className={styles.mainText}>{`• Topic - ${this.state.mainTopic}`}</p>
                                        <p className={styles.mainText}>{`Created at  ( ${formatDateAllValues(new Date(this.state.timeCreated))} )`}</p>
                                    </div>
                                </>}
                            <input
                                type="text"
                                placeholder="Title"
                                className={styles.searchInput}
                                style={{ width: '90%', marginTop: '15px' }}
                                value={this.state.title}
                                onChange={event => {
                                    this.setState({ title: event.target.value });
                                }}
                            />
                            <textarea
                                type="text"
                                placeholder="Details"
                                className={styles.contactUsContent}
                                style={{ width: '90%', marginTop: '15px', fontSize: '100%' }}
                                value={this.state.details}
                                onChange={event => {
                                    this.setState({ details: event.target.value });
                                }}
                            />
                        </>
                        :
                        viewList ?
                            <>
                                <div style={{ height: '20px', width: '100%' }}></div>
                                {this.renderList()}
                            </> :
                            <>
                                <div style={{ height: '20px', width: '100%' }}></div>
                                {results}
                            </>
                    }
                    {errorMessage != '' && <p
                        className={styles.em}
                        style={{ textAlign: 'initial' }}>{errorMessage}</p>}
                </div>

                {(addProcess || viewList) &&
                    <>
                        <div className={styles.enterKilometerDiv}
                            style={{ marginTop: '20px', marginBottom: viewList ? '0px' : '150px', marginLeft: '2.5%', width: '95%' }}>
                            <div
                                className={styles.button2}
                                style={{ backgroundColor: colors.RED }}
                                id={styles.buttonBottom}
                                onClick={() => {
                                    if (addProcess || viewList)
                                        this.setState({
                                            addProcess: false,
                                            isNewProcess: false,
                                            viewList: false,
                                            userID: '',
                                            type: '',
                                            mainTopic: '',
                                            timeCreated: null,
                                            title: '',
                                            details: '',

                                            errorMessage: '',
                                        })
                                }}>
                                <p className={styles.buttonText1}>{addProcess ? 'Cancel' : 'Close'}</p>
                            </div>
                            <div
                                className={styles.button2}
                                style={{ backgroundColor: colors.GREEN }}
                                id={styles.buttonBottom}
                                onClick={() => {
                                    if (addProcess) {
                                        if (isNewProcess) {
                                            if (
                                                this.stringIsNotEmpty(this.state.userID) &&
                                                (this.state.type == 'rider' || this.state.type == 'driver') &&
                                                this.stringIsNotEmpty(this.state.mainTopic) &&
                                                this.stringIsNotEmpty(this.state.title) &&
                                                this.stringIsNotEmpty(this.state.details)
                                            )
                                                pendingProcessesFunction.call(this, {
                                                    userID: this.state.userID,
                                                    isNewProcess: true,
                                                    type: this.state.type,
                                                    mainTopic: this.state.mainTopic,
                                                    title: this.state.title,
                                                    details: this.state.details,
                                                });
                                            else
                                                this.setState({
                                                    errorMessage: 'Please verify all fields are entered correctly and type is either "driver" or "rider"'
                                                });
                                        }
                                        else {
                                            if (
                                                this.stringIsNotEmpty(this.state.title) &&
                                                this.stringIsNotEmpty(this.state.details)
                                            )
                                                pendingProcessesFunction.call(this, {
                                                    isNewProcess: false,
                                                    title: this.state.title,
                                                    details: this.state.details,
                                                    oldPushId: this.state.pushId
                                                });
                                            else
                                                this.setState({
                                                    errorMessage: 'Please verify all fields are entered correctly'
                                                });
                                        }
                                    }
                                    else if (viewList) {
                                        this.setState({
                                            addProcess: true,
                                            isNewProcess: false,
                                            viewList: false,
                                            title: '',
                                            details: '',
                                        })
                                    }
                                }}>
                                {this.state.loading ?
                                    <Loader
                                        type="TailSpin"
                                        color={colors.WHITE}
                                        height={'20px'}
                                        width={'20px'} /> :
                                    <p className={styles.buttonText1}>{'Add new process'}</p>}
                            </div>
                        </div>
                    </>}
                {viewList && <div
                    className={styles.button2}
                    style={{
                        backgroundColor: colors.GREY,
                        width: '95%',
                        marginLeft: '2.5%',
                        marginTop: '20px',
                        marginBottom: '150px',
                        maxWidth: 'initial'
                    }}
                    id={styles.buttonBottom}
                    onClick={() => {
                        pendingProcessesFunctionDelete.call(this, this.state.pushId)
                    }}>
                    {this.state.loading1 ?
                        <Loader
                            type="TailSpin"
                            color={colors.WHITE}
                            height={'20px'}
                            width={'20px'} /> :
                        <p className={styles.buttonText1}>Complete this task</p>}
                </div>}
            </div>
        )

    }
};