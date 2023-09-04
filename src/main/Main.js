import React from 'react';
import styles from './Main.module.scss'
import ParticleBackground, { ParticlesContainer } from "./particles/ParticleBackground";
// import '../common/styles/sass/mixins.scss';
import Particles from "react-tsparticles";


const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <ParticlesContainer  />
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <span>I am <span>Sergiy Daragan</span></span>
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