import React from 'react';
import style from './Hire.module.css'
import styleContainer from "../common/styles/Container.module.css";
import { HomeSvgSelector } from "../skills/HomeSvgSelector";

const Hire = ( ) => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I Am Available For Freelancer</h2>
                <a href = '' className={style.hireBtn}>HIRE ME</a>
            </div>
        </div>
    );
};

export default Hire;