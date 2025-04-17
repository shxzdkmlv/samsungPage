import React from "react";
import styles from "./mobileComputing.module.css";

const MobileComputing = ({backgroundUrl, title, subtitle, btn1, btn2, children}) => {
    console.log()
    return (
        <div className={styles.Mwrapper}>
            <div className={styles.Moverlay} style={{
                backgroundImage: `url("${backgroundUrl}")`}}>
                {children}
                <div className={styles.MtextBlock}>
                    <h2 className={styles.Mtitle}>{title}</h2>
                    <p className={styles.Msubtitle}><sup>{subtitle}</sup></p>
                    <div className={styles.Mbuttons}>
                        <button className={styles.MlearnMore}>{btn1}</button>
                        <button className={styles.MbuyNow}>{btn2}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileComputing;
