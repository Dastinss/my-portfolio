import React from 'react';
import styles from './Main.module.scss'
import { ParticlesContainer } from "./particles/ParticleBackground";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            {/*<ParticlesContainer className={styles.particles}/>*/}

            <Fade top>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <span>Hi There</span>
                        <span>I am <span>Sergiy Daragan</span></span> {/*3 добавили второй спан для подчеркивания синей полоской*/}
                        {/*<h1>Frontend Developer</h1>*/}
                            <ReactTypingEffect
                                text='Frontend Developer'
                                // speed='500'
                            /> {/*3 "печатающийся текст"*/}
                    </div>
                   <Tilt > {/*3 эффект для фото - вращение*/}
                        <div className={styles.photo}>
                            <div className={styles.image}>

                            </div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
};

export default Main;