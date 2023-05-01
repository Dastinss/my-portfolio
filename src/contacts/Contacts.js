import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.contactForm}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea/>
                    <button type='submit' className={style.submitBtn}>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;