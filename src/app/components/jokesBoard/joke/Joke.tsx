import React from 'react';
import styles from './Joke.module.css'

type JokePropsType = {
    joke: {
        question: string,
        answer: string
    }
}

function Joke(props: JokePropsType) {
    return (
        <div className={styles.joke}>
            <p style={{display: props.joke.question ? "block" : "none"}}><span>Question:</span> {props.joke.question}</p>
            <p><span>Answer:</span> {props.joke.answer}</p>
            <hr/>
        </div> 
    )
}

export default Joke;