import React from 'react';
import style from './Skills.module.scss'
// import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsImage from './../assets/image/jsImage.svg'
import cssImage from './../assets/image/cssImage.svg'
import reactImage from './../assets/image/reactImage.svg'

const Skills = () => {
    const js = {
        iconImage: `url(${jsImage})` ,
    };

    const css = {
        iconImage: `url(${cssImage})` ,
    };

    const react = {
        iconImage: `url(${reactImage})` ,
    };



    return (
        <div id='skills' className={style.skillsBlock}>
            {/*<div className={`${styleContainer.container} ${style.skillsContainer}`}>*/}
            <div className={`${style.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'some text about JS'}/>
                    <Skill title={'CSS'} description={'some text about CSS'}/>
                    <Skill title={'React'} description={'some text about React'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;