import React from 'react';
import styles from './HeaderTitle.module.css'

function HeaderTitle(props: {title: string}) {
    const lineStyle = {
        color: 'white',
        backgroundColor: 'darkgray'
    }

    return (
        <div>
            <header className={styles.content} style={lineStyle}>
                {props.title}
            </header>
        </div>
    )
}

export default HeaderTitle;