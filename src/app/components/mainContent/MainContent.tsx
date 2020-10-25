import React from 'react';
import styles from './MainContent.module.css'

function Main() {
    const lineStyle = {
        color: '#83A009',
        backgroundColor: 'lightgray'
    }

    return (
        <main className={styles.content} style={lineStyle}>This is main section with ToDo list:</main>
    )
}

export default Main;