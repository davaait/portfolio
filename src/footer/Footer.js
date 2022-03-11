import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footer}>
                <div>David Ait</div>
                <div className={styles.icons}>
                    <div className={styles.item}>1</div>
                    <div className={styles.item}>2</div>
                    <div className={styles.item}>3</div>
                    <div className={styles.item}>4</div>
                </div>
                <div>2022 All rights reserved</div>
            </div>
        </div>
    );
};
