import React from 'react';
import styles from './Header.module.css';
import {HEADER} from "../../static/index.js";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logo}>SAMSUNG</div>
                    <nav className={styles.nav}>
                        {HEADER?.map((item, index) => (
                            <a key={item.path} href={item.href || '#'}>
                                <span>{item.title}</span>
                            </a>
                        ))}
                    </nav>
                </div>
                <div className={styles.right}>
                    <div className={styles.searchBox}>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
