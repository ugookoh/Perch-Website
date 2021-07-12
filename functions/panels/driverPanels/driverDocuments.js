import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from '../panel_layout.module.css';
import { colors } from '../../functions';

const DriverDocuments = ({ userDetails }) => {

    const [driverLicense, setDriverLicense] = useState('');
    const [backgroundCheck, setBackgroundCheck] = useState('');
    const [offerLetter, setOfferLetter] = useState('');

    useEffect(() => {
        if (!userDetails)
            return;

        const { userID } = userDetails;
        firebase.storage().ref(`driverVehicleDocs/${userID}/driverDetails/driversLicence`).getDownloadURL()
            .then(result => {
                setDriverLicense(result);
            }).catch(error => { console.log(error.message) });
        firebase.storage().ref(`driverVehicleDocs/${userID}/driverDetails/epsBackgroundCheck`).getDownloadURL()
            .then(result => {
                setBackgroundCheck(result);
            }).catch(error => { console.log(error.message) });
        firebase.storage().ref(`driverVehicleDocs/${userID}/driverDetails/signedOfferLetter`).getDownloadURL()
            .then(result => {
                setOfferLetter(result);
            }).catch(error => { console.log(error.message) });

    }, [userDetails])


    return (
        <div className={styles.cont}>


            <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', }}>
                <p className={styles.title} style={{ color: colors.BLACK }}>{`My Documents`}</p>
                <p className={styles.text} style={{ color: colors.GREY }}>
                    Here You can download and view the documents you submitted during your application. Please contact us if any information has changed or is out of date.
                </p>

                <a className={styles.driverFAQ_PICDESC}
                    id={styles.driver_APP_TOP_RADIO_CONT_}
                    href={driverLicense}
                    target="_blank"
                >
                    <p className={styles.text} style={{ color: colors.GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>Driver's Licence</p>
                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: colors.BLUE }}>
                        <BiRightArrowAlt color={colors.WHITE} size={32} />
                    </div>
                </a>

                <a
                    className={styles.driverFAQ_PICDESC}
                    id={styles.driver_APP_TOP_RADIO_CONT_}
                    href={backgroundCheck}
                    target="_blank"
                >
                    <p className={styles.text} style={{ color: colors.GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>EPS Background Check</p>
                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: colors.BLUE }}>
                        <BiRightArrowAlt color={colors.WHITE} size={32} />
                    </div>
                </a>

                <a
                    className={styles.driverFAQ_PICDESC}
                    id={styles.driver_APP_TOP_RADIO_CONT_}
                    href={offerLetter}
                    target="_blank"
                >
                    <p className={styles.text} style={{ color: colors.GREY, width: 'initial', margin: '0px', marginLeft: '10px' }}>Signed Offer Letter</p>
                    <div className={styles.driver_APP_RADIO} style={{ backgroundColor: colors.BLUE }}>
                        <BiRightArrowAlt color={colors.WHITE} size={32} />
                    </div>
                </a>
            </div>

            <div style={{ height: '200px', width: '20px', backgroundColor: 'transparent' }}></div>
        </div>
    )
};

export default DriverDocuments;