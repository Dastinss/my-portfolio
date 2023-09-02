import React from 'react';
import styles from './Main.module.scss'
// import '../common/styles/sass/mixins.sass';

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.greetings}>
                    <span>Hi There</span>
                    <span>I`m Sergiy <span>Daragan</span></span>
                    <h1>Frontend Developer</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;