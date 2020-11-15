import React from 'react';
import styles from './Banner.module.css'
import snowboard from '../../../assets/images/snowboard.jpg'

function Main() {
    return (
        <div className={styles.banner_container}>
            <img className={styles.banner_img} src={snowboard} />
        </div>
    )
}

export default Main;