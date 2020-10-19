import React from 'react';
import styles from './styles/todo-list.module.css'

function ToDoList() {
    return (
        <form className={styles.form}>
            <input type="checkbox" value="" />
            <span>Test</span><br />
            <label>
                <input type="checkbox" value="" />
                <span>Livigno</span>
            </label><br />
            <label>
                <input type="checkbox" value="" />
                <span>New Zeland</span>
            </label><br />
            <label>
                <input type="checkbox" value="" />
                <span>Dominicana</span>
            </label><br />
        </form>
    )
}

export default ToDoList;