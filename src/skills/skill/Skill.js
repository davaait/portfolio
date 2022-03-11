import React from 'react';
import styles from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={styles.skillContainer}>
            <div className={styles.iconSkillContainer}>icon</div>
            <h3 className={styles.skillTitle}>{props.title}</h3>
            <span className={styles.skillDescription}>{props.description}</span>
        </div>
    );
};
