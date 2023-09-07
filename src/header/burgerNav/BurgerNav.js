import React, { useState } from 'react';
import style from './BurgerNav.module.scss'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpenMenu] = useState(false);

    let onBurgerBtnClick = () => {
        setMenuIsOpenMenu (
            !menuIsOpen
        )
        // menuIsOpen = !menuIsOpen
        console.log(menuIsOpen)
    };

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <a href="src/header/nav/Nav">Home</a>
                {/*<a href="src/header/nav/Nav">About</a>*/}
                <a href="src/header/nav/Nav">Skills</a>
                {/*<a href='#projects'>Projects</a>*/}
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    // hashSpy={true}
                    offset={1} // при нажатии на ссылку немного не доезжала страница
                    duration={500}
                    // delay={1000}
                    // isDynamic={true}
                    // onSetActive={this.handleSetActive}
                    // onSetInactive={this.handleSetInactive}
                    // ignoreCancelEvents={false}
                    // spyThrottle={500}
                >Projects</Link> {/* // 3 ссылка на страницу */}
                <a href="src/header/nav/Nav">Contact</a>
            </div>
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}>

            </div>
        </div>
    );
};

export default BurgerNav;