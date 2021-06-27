import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineRight } from 'react-icons/ai';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from '../../functions';
import styles from '../panel_layout.module.css';



export default class HelpAndFAQ extends React.Component {
    constructor() {
        super();

        this.state = {

        };
    };
    componentDidMount() {
    };
    render() {
        return (
            <div className={styles.cont}>


                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', }}>
                    <p className={styles.title} style={{ color: colors.BLACK }}>{`Help articles & Frequently asked questions`}</p>
                    <p className={styles.text} style={{ color: colors.GREY }}>
                        Here are some articles that can help you navigating your way around the Perch Driver app. Contact us if you need help with an issue not addressed or with a bug.
                    </p>

                    <a className={styles.driverFAQCont} href='/s/articles/starting_a_driver_trip'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/carpoolOpenDoor.svg" className={styles.driverFAQ_PIC_IMAGE} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>How to start a driver trip</p>
                        </div>
                        <AiOutlineRight color={colors.GREY} style={{ minWidth: '20px' }} />
                    </a>
                    <div className={styles.sharedLine} style={{ marginTop: '10px', opacity: 0.5 }}></div>

                    <a className={styles.driverFAQCont} href='/s/articles/driver_controls'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/logoBlue.svg" className={styles.driverFAQ_PIC_IMAGE} style={{ width: 'auto', height: '100%' }} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>Driver app controls</p>
                        </div>
                        <AiOutlineRight color={colors.GREY} style={{ minWidth: '20px' }} />
                    </a>
                    <div className={styles.sharedLine} style={{ marginTop: '10px', opacity: 0.5 }}></div>

                    <a className={styles.driverFAQCont} href='/s/articles/scheduling_driver_trips'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/noCommitmentNoSchedule.svg" className={styles.driverFAQ_PIC_IMAGE} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>Scheduling a driver trip</p>
                        </div>
                        <AiOutlineRight color={colors.GREY} style={{ minWidth: '20px' }} />
                    </a>
                    <div className={styles.sharedLine} style={{ marginTop: '10px', opacity: 0.5 }}></div>

                    <a className={styles.driverFAQCont} href='/s/articles/procedures_for_taking_a_picture'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/carPicture.svg" className={styles.driverFAQ_PIC_IMAGE} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>Procedures for taking a picture of your car</p>
                        </div>
                        <AiOutlineRight color={colors.GREY} style={{ minWidth: '20px' }} />
                    </a>
                    <div className={styles.sharedLine} style={{ marginTop: '10px', opacity: 0.5 }}></div>

                    <a className={styles.driverFAQCont} style={{ marginBottom: '5px' }} href='/s/articles/guidelines_for_drivers_and_riders'>
                        <div className={styles.driverFAQ_PICDESC}>
                            <div className={styles.driverFAQ_PIC}>
                                <img src="/community.svg" className={styles.driverFAQ_PIC_IMAGE} />
                            </div>
                            <p className={styles.text} style={{ width: 'initial', margin: '0px' }}>Guidelines for the Perch community</p>
                        </div>
                        <AiOutlineRight color={colors.GREY} style={{ minWidth: '20px' }} />
                    </a>
                </div>

                <div style={{ height: '200px', width: '20px', backgroundColor: 'transparent' }}></div>
            </div>
        )

    }
};