import React from 'react';
import ToDoList from '../toDo/ToDoList';
import ContactBoard from '../contactBoard/ContactBoard'
import styles from './MainContent.module.css'

function MainContent() {
    const lineStyle = {
        color: 'white',
        backgroundColor: 'darkgray'
    }

    return (
        // <main className={styles.content} style={lineStyle}>This is main section with ToDo list:</main>
        <main>
            <ToDoList />
            <ContactBoard />
        </main>
    )
}

export default MainContent;