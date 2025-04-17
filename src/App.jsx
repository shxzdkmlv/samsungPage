import Header from "./components/header/header.jsx";
import HeroBanner from "./components/content/heroBanner/heroBanner.jsx";
import styles from "./App.module.css";
import Hero2Banner from "./components/content/hero2Banner/hero2Banner.jsx";
import LatestProducts from "./components/content/latestProducts/latestProducts.jsx";
import HomeTech from "./components/content/homeTech/HomeTech.jsx";
import Preview from "./components/content/preview/preview.jsx";
import MobileComputing from "./components/content/mobileComputing/mobileComputing.jsx";
import {MOBILE_COMPUTING} from "./static/index.js";
import React from "react";
import PromoSection from "./components/content/promoSecion/promoSection.jsx";
import Footer from "./components/footer/footer.jsx";


const App = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <HeroBanner/>
            <Hero2Banner/>
            <LatestProducts/>
            <HomeTech/>
            <Preview/>

            <MobileComputing title="Galaxy S25 Ultra" subtitle="Get up to $1,000 value with multiple offers."
                             btn1="Learn more" btn2="Buy Now"
                             backgroundUrl="https://images.samsung.com/is/image/samsung/assets/us/home/04032025/SDSAC-9145-S25U-Lifestyle-HP_LOB_FullBleed_DT_1440x810.jpg?$1440_810_JPG$">
                <div>
                    <nav className={styles.Mnav}>
                        {MOBILE_COMPUTING?.map((item, index) => (
                            <span className={styles.Mlink}>{item.mobile_items}</span>
                        ))}
                    </nav>
                </div>
            </MobileComputing>
            <MobileComputing title="Discover the 2025 TV lineup" subtitle="Get up to $1,000 value with multiple offers."
                             btn1="Learn more" btn2="Shop Now"
                             backgroundUrl="https://images.samsung.com/is/image/samsung/assets/us/home/04152025/Combined-LOB_1440x810.jpg?$1440_810_JPG$">
                <div>
                    <nav className={styles.Mnav}>
                        {MOBILE_COMPUTING?.map((item, index) => (
                            <span className={styles.Mlink}>{item.tv_items}</span>
                        ))}
                    </nav>
                </div>
            </MobileComputing>
            <MobileComputing title="New Bespoke AI Refrigerator" subtitle="Get up to $1,000 value with multiple offers."
                             btn1="Show all appliance details" btn2="Pre-order now"
                             backgroundUrl="https://images.samsung.com/is/image/samsung/assets/us/home/04072025/LOB_REF_DT.jpeg?$1440_810_JPG$">
                <div>
                    <nav className={styles.Mnav}>
                        {MOBILE_COMPUTING?.map((item, index) => (
                            <span className={styles.Mlink}>{item.monitor_items}</span>
                        ))}
                    </nav>
                </div>
            </MobileComputing>
            <MobileComputing title="Monitors & Memory" subtitle="Get up to $1,000 value with multiple offers."
                             btn1="Learn more" btn2="Shop Now"
                             backgroundUrl="https://images.samsung.com/is/image/samsung/assets/us/home/04072025/SDSAC-9060-LS49FG910ENXZA-KV-HP_LOB_FullBleed_DT_1440x810.jpg?$1440_810_JPG$">
                <div>
                    <nav className={styles.Mnav}>
                        {MOBILE_COMPUTING?.map((item, index) => (
                            <span className={styles.Mlink}>{item.monitor_items}</span>
                        ))}
                    </nav>
                </div>
            </MobileComputing>
            <PromoSection/>
            <Footer/>
        </div>
    )
}
export default App