import React from 'react';
import ToDoItem from './toDoItem/ToDoItem'

function ToDoList() {
    const dominicanaStyles = {
        color: 'darkgray',
        textShadow: 'rgba(50, 40, 0, 0.35) 1px 1px 2px'
    }

    return (
        <ToDoItem />
    )
    /* return (
        <form className={styles.form}>
            <input type="checkbox" value="" />
            <p>Test 1</p>
            <span>Test</span><br />
            <label>
                <input type="checkbox" value="" />
                <span>Livigno</span>
            </label><br />
            <label>
                <input type="checkbox" value="" />
                <span>New Zeland</span>
            </label><br />
            <label style={dominicanaStyles}>
                <input type="checkbox" value="" />
                <span>Dominicana</span>
            </label><br />
        </form>
    ) */
}

export default ToDoList;