import React from 'react';
import HeaderTitle from "../mainContent/HeaderTitle";
import styles from './JokesBoard.module.css'

function Joke() {
    return (
        <div>
            <HeaderTitle title='This is jokes header' />
            <div className={styles.jokes}>
                <p>Joke 1</p>
            </div>
        </div>
    )
}

export default Joke;