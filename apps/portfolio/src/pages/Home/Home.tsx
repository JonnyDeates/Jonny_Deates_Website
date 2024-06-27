import React from 'react';
import './Home.css';
import HOME_DATA from "./data/HomeData";
import Section from "./components/Section/Section";
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import yinLeft1 from "./assets/yin_left_1.png";
import yinLeft2 from "./assets/yin_left_2.png";
import yangLeft1 from "./assets/yang_left_1.png";
import yangLeft2 from "./assets/yang_left_2.png";
import yinRight1 from "./assets/yin_right_1.png";
import yinRight2 from "./assets/yin_right_2.png";
import yangRight1 from "./assets/yang_right_1.png";
import yangRight2 from "./assets/yang_right_2.png";
import Chibi from "../../components/Chibi/Chibi";

const Home = () => {
    const {sectionList, introduction: {header, subHeader}} = HOME_DATA;

    return (
        <>
            <ParallaxBanner className="header" style={{minHeight: "100vh", maxHeight: "100vh"}}>
                <ParallaxBannerLayer image={yinLeft1} speed={-21}/>
                <ParallaxBannerLayer image={yinLeft2} speed={15}/>
                <ParallaxBannerLayer image={yangLeft1} speed={-18}/>
                <ParallaxBannerLayer image={yangLeft2} speed={21}/>
                <ParallaxBannerLayer image={yinRight1} speed={30}/>
                <ParallaxBannerLayer image={yinRight2} speed={-15}/>
                <ParallaxBannerLayer image={yangRight1} speed={-30}/>
                <ParallaxBannerLayer image={yangRight2} speed={-9}/>
                <ParallaxBannerLayer speed={5}>
                    <div className="HeaderBox">
                        <Chibi frameAttributes={{style: {position: "relative", top: 'unset', left: 'unset'}}}/>
                        <div>
                            <h1>
                                {header}
                            </h1>
                            <h2>
                                {subHeader}
                            </h2>
                        </div>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
            {sectionList.map((section, i) =>
              <Section key={'section-type-' + i} section={section}
                       outsideSectionColor={i === 0 ? "transparent" : sectionList[i - 1].backgroundColor}
                       isFlipped={i % 2 === 1}/>)
            }
        </>
    );
};

export default Home;
