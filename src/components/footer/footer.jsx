import React from "react";
import "./footer.css";
import {FOOTERLINKS} from "../../static/index.js";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-grid">
                {FOOTERLINKS?.map((item, index) => (
                    <div key={index} className="footer-column">
                        <h4 className="footer-title">{item.title}</h4>
                        <ul className="footer-list">
                            {item.items.map((item, index) => (
                                <li key={index} className="footer-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
