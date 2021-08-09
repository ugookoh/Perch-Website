import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { MdContentCopy } from 'react-icons/md';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from '../panel_layout.module.css';
import { colors } from '../../functions';
import firebase from 'firebase';

export default class UserDashBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userDetails: this.props.userDetails,
            sharedLinks: true,
            peopleWhoUsedReferralCodes: null,
        };
    };
    componentDidMount() {
        firebase.database().ref(`peopleWhoUsedReferralCodes/${this.state.userDetails.userID}`).once('value', snapshot => {

            if (snapshot.val()) {
                let snap_ = { ...snapshot.val() };
                let p = [];
                function downLoadUrl(key) {
                    return new Promise(resolve => {
                        firebase.storage().ref(snap_[key].avatar).getDownloadURL()
                            .then(result => {
                                snap_[key].avatar = result;
                                resolve(null)
                            })
                            .catch(error => { console.log(error.message); });
                    })
                };
                for (let key in snap_) {
                    p.push(downLoadUrl(key));
                };
                Promise.all(p)
                    .then(() => {
                        this.setState({ peopleWhoUsedReferralCodes: snap_ });
                    }).catch(error => { console.log(error.message) })
            }
            else
                this.setState({ peopleWhoUsedReferralCodes: null });
        });
    };
    copyToClipboard = () => {
        navigator.clipboard.writeText(`Sign up with my Perch referral code "${this.state.userDetails?.shareCode}" at https://perchrides.com/s/auth/u_si_su?mode=signUp&referralCode=${this.state.userDetails?.shareCode}`)
    };
    render() {
        let sharedLinks = [];
        const peopleWhoUsedReferralCodes = this.state.peopleWhoUsedReferralCodes || {};
        const keys = Object.keys(peopleWhoUsedReferralCodes);

        for (let i = 0; i < keys.length; i++) {
            const obj = peopleWhoUsedReferralCodes[keys[i]];
            sharedLinks.push(
                <div className={styles.sharedLinksCont}>
                    <div className={styles.sharedLinks}>
                        <div className={styles.dp1}>
                            <img src={obj.avatar} className={styles.doggyProfilePicture} />
                        </div>
                        <p className={styles.text1} style={{ color: colors.BLACK }}>{obj.name}</p>
                        <p className={styles.addedKm}>{`+ ${obj.addedKms}kms`}</p>
                    </div>
                    {i !== keys.length - 1 ?
                        <div className={styles.sharedLine}></div>
                        : <></>}
                </div>
            );
        }
        return (
            <div className={styles.cont}>
                <div className={styles.container} id={styles.ud1}>
                    <div className={styles.ud1}>
                        <p className={styles.title} style={{ color: colors.WHITE }}>Promos</p>
                        <p className={styles.text} style={{ color: colors.WHITE }}>
                            Want free rides? Share your invite code with friends and family, and when they book their first ride, you get free kilometers!
                        </p>
                        <div className={styles.iC_Cont}>
                            <p className={styles.text} style={{ color: colors.WHITE, fontFamily: 'Gilroy-Semibold', margin: '0px', marginRight: '15px', width: 'initial' }}>
                                Invite Code
                            </p>
                            <div className={styles.copyBox}>
                                <p className={styles.text} id={styles.iC_link} >{this.state.userDetails?.shareCode}</p>
                                <MdContentCopy className={styles.copy} color={colors.WHITE} onClick={this.copyToClipboard} />
                            </div>
                        </div>
                    </div>
                    <img src="/giftBox.svg" alt="Perch Carpool" className={styles.giftBox} />
                </div>

                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px' }}>
                    <p className={styles.title} style={{ color: colors.BLACK }}>Platform links</p>
                    <p className={styles.text} style={{ color: colors.GREY }}>
                        At the moment, getting rides with Perch is only available on the mobile app for iOS and android devices.
                    </p>
                    <div style={{ display: 'flex', width: '90%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <div className={styles.downloadCont}>
                            <img src="/downloadAppStore.svg" alt="Download Perch on App store" className={styles.downloadApp} />
                            <img src="/downloadGooglePlay.svg" alt="Download Perch on App store" className={styles.downloadApp} />
                        </div>
                    </div>
                </div>

                <div className={styles.container} style={{ backgroundColor: colors.WHITE, marginTop: '20px', marginBottom: '150px' }}>
                    <p className={styles.title} style={{ color: colors.BLACK }}>
                        Riders who signed up with your share link
                    </p>
                    <p className={styles.text} style={{ color: colors.GREY }}>
                        {
                            this.state.peopleWhoUsedReferralCodes ?
                                'Here are a list of the users who used your invite links along with the kilometers you got credited.' :
                                'When you share your code with friends and they use it to book their first ride, you would see their name here along with the kilometers you got from sharing it. Right now, no one has used your code to book a ride.'
                        }
                    </p>
                    {sharedLinks.length !== 0 && sharedLinks}
                </div>
            </div>
        )

    }
};