import React from "react";
import styles from "./LatestProducts.module.css";
import {PRODUCT_CATEGORIES, PRODUCTS} from "../../../static/index.js";

const LatestProducts = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Shop all latest products and innovations</h1>
            <a href="#" className={styles.offers}>View All Offers</a>


            <div className={styles.tabs}>
                {PRODUCT_CATEGORIES.map((item, index) => (
                    <div className={styles.tab}>{item.title}</div>
                ))}
            </div>

            <div className={styles.largeCard}>
                <img src="https://images.samsung.com/is/image/samsung/assets/us/home/04082025/SDSAC-9018-Frame-Pro-LS03F-HP-MM-LargeTile-DT-684x684.jpg?$684_684_JPG$" alt="" className={styles.image}/>
                <p className={styles.productTitle}>75" Class The Frame Pro</p>
            </div>
            <div className={styles.grid}>
                {PRODUCTS?.map((item, index) => (
                    <div key={item.image} className={styles.card}>
                        <img src={item.image} alt="Bespoke AI Jet™ Ultra Vacuum"
                             className={styles.image}/>
                        <p className={styles.productTitle}>{item.title}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default LatestProducts;