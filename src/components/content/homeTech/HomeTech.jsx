import React from "react";
import styles from "./HomeTech.module.css";
import {CARDS, UNLOCK} from "../../../static/index.js";

const HomeTech = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
            {UNLOCK.map((item, index) => (

                <div key={item.index}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.subtitle}>
                        {item.subtitle}
                    </p>
                </div>

            ))}
            </div>
            <div className={styles.cardsSection}>
                {CARDS?.map((item, index) => (
                    <div className={styles.card}>
                        <img src={item.image} alt="Bespoke AI" className={styles.cardImage}/>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardText}>
                            {item.subtitle}
                        </p>
                        <button className={styles.button}>Pre-order now</button>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default HomeTech;
