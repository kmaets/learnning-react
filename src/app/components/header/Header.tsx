import React, { ReactElement } from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div>
            <header className={styles.navbar1}>
                This is first header
            </header>
        </div>
    )
}

/* export const MyTest: React.FC = (): ReactElement => {
    return (
            <nav>
                <h1>Hello again</h1>
                <ul>
                    <li>Kamil i Magda</li>
                </ul>
            </nav>
    )
} */

export default Header;