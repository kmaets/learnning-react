import React, { ReactElement } from 'react';
import styles from './styles/header.module.css';
// import { navbar1 } from './styles/Header.module.css';
// import { navbar2 } from './styles/header.css';
// import './styles/Header.css';

function Header() {
    return (
        <div>
            <header className={styles.navbar1}>
                This is first header
            </header>
        </div>
            // <header className="navbar2" /* {navbar2} */>
            //     This is second header
            // </header>
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