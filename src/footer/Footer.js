import React from 'react';
import styles from './Footer.module.scss'
import Title from "../common/components/title/Title";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title text={'Sergiy Daragan'}/>
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                        <a href=''>
                            {/*<img src={telegramIcon} alt={''}/>*/}
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href=''>
                            {/*<img src={facebookIcon} alt={''}/>*/}
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href=''>
                            {/*<img src={linkedInIcon} alt={''}/>*/}
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href=''>
                            {/*<img src={tweeterIcon} alt={''}/>*/}
                        </a>
                    </div>
                </div>
                <span className={styles.copyright}>© 2023, All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;