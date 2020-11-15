import React from 'react';
import ToDoList from '../toDo/ToDoList';
import ContactsBoard from '../contactsBoard/ContactsBoard'
import JokesBoard from '../jokesBoard/JokesBoard'

function MainContent() {
    const lineStyle = {
        color: 'white',
        backgroundColor: 'darkgray'
    }

    return (
        // <main className={styles.content} style={lineStyle}>This is main section with ToDo list:</main>
        <main >
            <ToDoList />
            <ContactsBoard />
            <JokesBoard />
        </main>
    )
}

export default MainContent;