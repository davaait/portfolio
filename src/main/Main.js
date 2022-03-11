import React from 'react';
import styles from './Main.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.innerMain}>
                <div className={styles.greeting}>
                    <span>Hi there</span>
                    <h1>I'm David Ait</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={styles.mainImage}></div>
            </div>
        </div>
    );
};
