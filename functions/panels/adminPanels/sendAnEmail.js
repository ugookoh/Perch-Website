import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import EmailEditor from 'react-email-editor';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../../functions';
import styles from '../panel_layout.module.css';



export default class SendAnEmail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

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
                    <EmailEditor
                        ref={(ref) => this.emailEditor = ref}
                        style={{ width: '80%' }}
                        onLoad={this.onLoad}
                    />
                </div>
            </div>
        );
    };
};