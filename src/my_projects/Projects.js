import React from 'react';
import styles from './Projects.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={styles.projectsWrapper}>
            <div className={styles.projectsBlock}>
                <Project/>
                <Project/>
            </div>
        </div>
    );
};
