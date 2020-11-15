import React from 'react';
import HeaderTitle from '../mainContent/HeaderTitle';
import ToDoItem from './toDoItem/ToDoItem';
import styles from './ToDoList.module.css'

function ToDoList() {
    const dominicanaStyles = {
        color: 'darkgray',
        textShadow: 'rgba(50, 40, 0, 0.35) 1px 1px 2px'
    }

    return (
        <div>
            <HeaderTitle title='This is ToDo list header' />
            <div className={styles.todo_list}>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem/>
            </div>
        </div>
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