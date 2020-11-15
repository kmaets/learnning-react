import React from 'react';
import styles from './ContactCard.module.css'

type ContactPropsType = {
    name: string,
    imgUrl: string,
    phone: string,
    email: string,
}

interface ContactPropsInterface {
    name: string,
    imgUrl: string,
    phone: string,
    email: string,
}

// function KittenContactTest1(props: { name: string, imgUrl: string, phone: string, email: string }) {
function ContactCard(props: ContactPropsType) {
    return (
        <div className={styles.contact_card}>
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

export const ContactCardTest2: React.FC<ContactPropsInterface> = (props) => {
    return (
        <div className={styles.contact_card}>
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

export default ContactCard;