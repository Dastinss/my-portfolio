import React from 'react';
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";

const Contacts = () => {
    return (
        <div id="contacts" className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'}/>
                <Fade left>
                    <form className={style.form}> {/*//3 делаем форму, значит должна быть форма, а не хэдер h1*/}
                        <input type='text' className={style.formArea} placeholder={'Name'}/>
                        <input type='text' className={style.formArea} placeholder={'e-mail'}/>
                        <textarea className={style.messageArea} placeholder={'Message'}/>
                        <button type='submit'>Send message</button>
                        {/*//3 если кнопка в форме, значит должна біть она в форме, чтобі она сабмитилась*/}
                    </form>
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;