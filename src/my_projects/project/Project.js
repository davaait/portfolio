import React from 'react';
import styles from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={styles.projectWrapper}>
            <div className={styles.backWrapper}>
                <button>See details</button>
            </div>
            <div>
                project name
            </div>
            <div>
                description
            </div>
        </div>
    );
};
