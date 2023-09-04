import React from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="src/header/nav/Nav">Home</a>
            <a href="src/header/nav/Nav">About</a>
            <a href="src/header/nav/Nav">Skills</a>
            <a href="src/header/nav/Nav">Portfolio</a>
            <a href="src/header/nav/Nav">Contact</a>
        </div>
    );
};

export default Nav;