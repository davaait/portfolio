import React from 'react';
import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            Contacts
            <div className={styles.contactsWrapper}>
                <form className={styles.form}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button>Submit</button>
            </div>
        </div>
    );
};
