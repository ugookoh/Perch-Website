import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import EmailEditor from 'react-email-editor';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors, sendUserEmail } from '../../functions';
import styles from '../panel_layout.module.css';
import Loader from 'react-loader-spinner';

export default class SendAnEmail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            text: '',
            subject: '',
            loading: false,
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    exportHtml = () => {
        this.emailEditor.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
        });
    };
    onLoad = () => {
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
    };
    render() {
        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.BLACK, marginBottom: '30px' }}>Send an Email</p>
                    {/* <EmailEditor
                        ref={(ref) => this.emailEditor = ref}
                        style={{ width: '80%' }}
                        onLoad={this.onLoad}
                    /> */}

                    <input
                        type="text"
                        placeholder="Enter user's email"
                        className={styles.contactUsEmail}
                        value={this.state.email}
                        onChange={event => { this.setState({ email: event.target.value }) }}
                    />
                    <input
                        type="text"
                        placeholder="Enter subject"
                        className={styles.contactUsEmail}
                        style={{ marginTop: '10px' }}
                        value={this.state.subject}
                        onChange={event => { this.setState({ subject: event.target.value }) }}
                    />
                    <div className={styles.sharedLine}></div>
                    <textarea
                        type="text"
                        placeholder="Enter your message here"
                        className={styles.contactUsContent}
                        //style={{ width: '100%' }}
                        value={this.state.text}
                        onChange={event => { this.setState({ text: event.target.value }) }}
                    />
                </div>
                <div className={styles.enterKilometerDiv} style={{ marginTop: '20px', marginBottom: '150px', marginLeft: '2.5%', width: '95%' }}>
                    <div
                        className={styles.button2}
                        style={{ backgroundColor: colors.GREEN, width: '100%', maxWidth: 'initial' }}
                        id={styles.buttonBottom}
                        onClick={() => {
                            const { text, subject, email } = this.state;
                            if (text.length < 15)
                                alert('Please enter a good amount of information for user')
                            else if (subject.length < 5)
                                alert('Please a proper subject')
                            else if (email.length < 5)
                                alert('Please enter correct email address')
                            else {
                                this.setState({ loading: true }, () => {
                                    sendUserEmail.call(this, email, subject, text);
                                });
                            }

                        }}>
                        {this.state.loading ?
                            <Loader
                                type="TailSpin"
                                color={colors.WHITE}
                                height={'15px'}
                                width={'15px'} /> :
                            <p className={styles.buttonText1}>Send Email</p>}
                    </div>
                </div>
            </div>
        );
    };
};