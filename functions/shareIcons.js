import styles from '../pages/s/articles/layout.module.css';
import React from 'react';

export default class index extends React.Component {

    render() {
        return (
            <div className={styles.shareIcon_C} style={{ margin: '0px' }}>
                <a href='https://www.facebook.com/Perch-101536275225240/' target="_blank"><img src="/facebook_share.svg" alt="Perch Facebook Page" className={styles.shareIcon} /></a>
                {/* <img src="/google_share.svg" alt="Perch Google Page" className={styles.shareIcon} /> */}
                <a href='https://www.instagram.com/perchrides/' target="_blank"><img src="/instagram_share.svg" alt="Perch Instagram Page" className={styles.shareIcon} /></a>
                <a href='https://twitter.com/perchrides' target="_blank"><img src="/twitter_share.svg" alt="Perch Twitter Page" className={styles.shareIcon} /></a>
            </div>
        );
    }
}