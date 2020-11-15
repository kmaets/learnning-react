import React from 'react';
import HeaderTitle from "../mainContent/HeaderTitle";
import ContactCard from './contactCard/ContactCard'
import styles from './ContactBoard.module.css'

import contactData from '../../../data/contacts/contacts.json'

function TempComp() {
    console.log(contactData);
    return (
        <div>
            <HeaderTitle title='This is contacts board header' />
            <div className={styles.kittens}>
                <ContactCard
                    {...contactData.contactOne}
                    /* contact={{ 
                        name: 'Kitten One',
                        imgUrl: 'http://placekitten.com/500/400',
                        phone: '+48 555-One',
                        email: 'kitthenone@meow.com'
                    }} */
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

export default TempComp;