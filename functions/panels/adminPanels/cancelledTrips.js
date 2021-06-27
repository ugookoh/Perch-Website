import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../../functions';
import styles from '../panel_layout.module.css';

export default class CancelledTrips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idRiderSearch: '',
            idDriverSearch: '',
            result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,],
        };
    }
    componentDidMount() {
        this.loadResult();
    }
    loadResult = () => {
        if (this.state.userDetails) {

        }
    };
    render() {
        if (!this.state.userDetails && this.props.userDetails)
            this.setState({ userDetails: this.props.userDetails }, () => { this.loadResult(); });

        let results = [];
        // if (this.state.result) {
        const keys = Object.keys(this.state.result).sort((a, b) => b - a);
        for (let k = 0; k < keys.length; k++)
            results.push(
                <>
                    <div className={styles.previousMessageSum} onClick={() => { }}>
                        <p style={{ fontSize: '95%' }}>{'Martin Maddrazo'}</p>

                        <div style={{
                            display: 'flex', width: '27px', height: '27px', borderRadius: '40px', backgroundColor: colors.GREEN,
                            //"#1970A7",
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>{`R`}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '150px', justifyContent: 'space-between' }}>
                            <div className={styles.previousMessageDate}>
                                <p style={{ fontFamily: 'Gilroy-Semibold', fontSize: '75%', marginRight: '-10px', paddingLeft: '10px' }}>
                                    {
                                        //dateformat(this.state.result[keys[k]].date)
                                        '11/20/2020'
                                    }</p>

                            </div>
                            <div style={{ width: '50px', height: '30px', backgroundColor: colors.GREEN, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p className={styles.readOrUnreadText} style={{ color: '#ffffff', fontFamily: 'Gilroy-ExtraBold' }}>167</p>
                            </div>
                        </div>
                    </div>
                    {
                        k == keys.length - 1 ?
                            <></> :
                            <div className={styles.sharedLine} style={{ marginTop: '5px' }}></div>
                    }
                </>
            )
        //}

        return (
            <div className={styles.cont}>
                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.BLACK }}>Cancelled Trips</p>
                    <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <input
                            type="text"
                            placeholder="Search riders by email / userID"
                            className={styles.searchInput}
                            style={{ width: '48%' }}
                            value={this.state.idRiderSearch}
                            onChange={event => {
                                this.setState({ idRiderSearch: event.target.value });
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Search drivers by email / userID"
                            className={styles.searchInput}
                            style={{ width: '48%' }}
                            value={this.state.idRiderSearch}
                            onChange={event => {
                                this.setState({ idRiderSearch: event.target.value });
                            }}
                        />
                    </div>

                    {results}

                </div>

            </div>
        );
    };
};