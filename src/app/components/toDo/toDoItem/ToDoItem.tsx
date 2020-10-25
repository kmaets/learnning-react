import React from 'react';
import styles from './ToDoItem.module.css'

function ToDoList() {
    const dominicanaStyles = {
        color: 'darkgray',
        textShadow: 'rgba(50, 40, 0, 0.35) 1px 1px 2px'
    }

    return (
        <form className={styles.form}>
            <input type="checkbox" value="" />
            <p>Placeholder</p>
            <label style={dominicanaStyles}>
                <input type="checkbox" value="" />
                <span>Livigno</span>
            </label><br />
        </form>
    )
}

export default ToDoList;