import React from 'react';
import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsContainer}>
            <h1 className={styles.h1}>My skills</h1>
            <div className={styles.innerSkillsContainer}>
                <Skill title="React" description="..."/>
                <Skill title="JS" description="..."/>
                <Skill title="HTML/CSS" description="..."/>
            </div>
        </div>
    );
};
