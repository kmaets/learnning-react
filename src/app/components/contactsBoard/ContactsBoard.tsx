import React from 'react';
import HeaderTitle from "../mainContent/HeaderTitle";
import ContactCard from './contactCard/ContactCard'
import styles from './ContactsBoard.module.css'

import contactData from '../../../data/contacts/contacts.json'

function ContactsBoard() {
    console.log(contactData);
    return (
        <div>
            <HeaderTitle title='This is contacts board header' />
            <div className={styles.contacts_board}>
                <ContactCard
                    {...contactData.contactOne}
                />
                <ContactCard
                    {...contactData.contactTwo}
                    /* contact={{ 
                        name: 'Nice Kitten Two',
                        imgUrl: 'http://placekitten.com/200/200',
                        phone: '+48 555-Two',
                        email: 'kitthen-niceone@meow.com'
                    }} */
                />
                {/* <ContactCard
                    name='Nice Kitten Two'
                    imgUrl='http://placekitten.com/200/200'
                    phone='+48 555-Two'
                    email='kitthen-niceone@meow.com'
                /> */}
            </div>
        </div>
    )
}

export default ContactsBoard;