import React from 'react';
import styles from './ToDoItem.module.css'

function ToDoList() {
    return (
        <div className={styles.todo_item}>
            <input type="checkbox" />
            <p>Placeholder text here</p>
            {/* <span>Placeholder</span> */}
            {/* <label>
                <input type="checkbox" value="" />
                <span>Livigno</span>
            </label> */}
        </div>
    )
}

export default ToDoList;