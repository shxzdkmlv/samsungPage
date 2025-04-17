import React from 'react';
import styles from './hero2Banner.module.css';

const Hero2Banner = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h3 className={styles.title}>
                        Spring savings are <br />
                            in full bloom
                    </h3>
                    <p className={styles.subtitle}>
                        Check out the latest deals for all your tech needs
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.primaryBtn}>Pre-order now</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero2Banner;
