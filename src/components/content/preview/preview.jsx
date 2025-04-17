import React from "react";
import styles from "./Preview.module.css";
import {PREVIEW} from "../../../static/index.js";

const Preview = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Preview what's coming</h2>
            <div className={styles.grid}>
                {PREVIEW?.map((item, index) => (
                    <div key={item.title} className={styles.card}>
                        <div className={styles.card}>
                            <img src={item.image} alt="The next phase of gaming" className={styles.image}/>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>
                                {item.subtitle}
                            </p>
                            <button className={styles.button}>Pre-order now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Preview;
