import React from 'react';
import HeaderTitle from '../mainContent/HeaderTitle';
import Joke from './joke/Joke';
import styles from './JokesBoard.module.css'

import jokes from '../../../data/jokes/jokes.json'

function JokesBoard() {

    const jokeComponents = jokes.data.map((singleJoke) => {
        return (
            <Joke key={singleJoke.id} joke={singleJoke} />
        )
    })

    return (
        <div>
            <HeaderTitle title='This is jokes header' />
            <div className={styles.jokes_board}>
                {/* <Joke  joke={jokes.data[0]}/> */}
                {/* <Joke  joke={jokes.data[1]}/> */}
                {/* <Joke  joke={jokes.data[2]}/> */}
                {jokeComponents}
            </div>
        </div>
    )
}

export default JokesBoard;