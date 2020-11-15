import React from 'react';
import styles from './ContactCard.module.css'

type KittenPropsType = {
    name: string,
    imgUrl: string,
    phone: string,
    email: string,
}

interface KittenProps {
    name: string,
    imgUrl: string,
    phone: string,
    email: string,
}

// function KittenContactTest1(props: { name: string, imgUrl: string, phone: string, email: string }) {
function KittenContact(props: KittenPropsType) {
    return (
        <div className={styles.kitten_card}>
            {/* <img src="http://placekitten.com/300/300" /> */}
            {/* <h3>Mr. Kitten One</h3> */}
            {/* <p>Phone: +48 555-One</p> */}
            {/* <p>Email: kitthenone@meow.com</p> */}
            <img src={props.imgUrl} />
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div> 

    )
}

export const KittenContactTest2: React.FC<KittenProps> = (props) => {
    return (
        <div className={styles.kitten_card}>
            {/* <img src="http://placekitten.com/300/300" /> */}
            {/* <h3>Mr. Kitten One</h3> */}
            {/* <p>Phone: +48 555-One</p> */}
            {/* <p>Email: kitthenone@meow.com</p> */}
            <img src={props.imgUrl} />
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
            <p>Test: {props.children}</p>
        </div>

    )
}

export default KittenContact;