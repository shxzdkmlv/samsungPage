import React from "react";
import styles from "./promoSection.module.css";
import {PROMOS} from "../../../static/index.js";

const PromoSection = () => {

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Only with Samsung</h2>
            <div className={styles.grid}>
                {PROMOS?.map((item, index) => (
                    <div className={styles.card} key={item.image}>
                        <img src={item.image} alt={item.title} className={styles.image} />
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                        <a href="#" className={styles.link}>Learn more</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromoSection;