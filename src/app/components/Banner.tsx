import React from 'react';
import styles from './styles/banner.module.css'
import snowboard from '../../assets/images/snowboard.jpg'

function Main() {
    return (
        <div className={styles.banner_container}>
            <img className={styles.banner} src={snowboard} />
        </div>
    )
}

export default Main;