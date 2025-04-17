import React from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.title}>
                        Bespoke AI <span className={styles.sparkle}>✨</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Pre-order and save up to $1,200+ on new Bespoke AI appliances. <br />
                        Get up to $1,000 instantly and 3 years of Samsung Care+ for just $1 (up to $229.99 value), with installation and haul away on us.
                    </p>
                    <div className={styles.buttons}>
                        <a href="#" className={styles.linkBtn}>Shop all appliance deals</a>
                        <button className={styles.primaryBtn}>Pre-order now</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroBanner;
