import React from 'react';
import HeaderTitle from '../mainContent/HeaderTitle';
import Joke from './joke/Joke';
import styles from './JokesBoard.module.css'

import jokes from '../../../data/jokes/jokes.json'

function JokesBoard() {
    return (
        <div>
            <HeaderTitle title='This is jokes header' />
            <div className={styles.jokes_board}>
                <Joke  joke={jokes.rabit}/>
                <Joke  joke={jokes.fridge}/>
                <Joke  joke={jokes.lawyer}/>
            </div>
        </div> 
    )
}

export default JokesBoard;