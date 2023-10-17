import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Projects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from './../assets/image/todolists-v2.jpg'
import socialImage from './../assets/image/social-network-v2.jpg'

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})` ,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})` ,
    };

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text = {'Projects'}/>
                <div className={style.projects}>
                    <Project style = {social} title={'Social Network'} description={'some text about Social Network'}/>
                    <Project style = {todolist} title={'TodoList'} description={'some text about TodoList'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;