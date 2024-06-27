import React from 'react';
import './Home.css';
import HOME_DATA from "./data/HomeData";
import Section from "./components/Section/Section";
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import yinLeft1 from "../../components/Header/assets/yin_left_1.png";
import yinLeft2 from "../../components/Header/assets/yin_left_2.png";
import yangLeft1 from "../../components/Header/assets/yang_left_1.png";
import yangLeft2 from "../../components/Header/assets/yang_left_2.png";
import yinRight1 from "../../components/Header/assets/yin_right_1.png";
import yinRight2 from "../../components/Header/assets/yin_right_2.png";
import yangRight1 from "../../components/Header/assets/yang_right_1.png";
import yangRight2 from "../../components/Header/assets/yang_right_2.png";
import Chibi from "../../components/Chibi/Chibi";
import Header from "../../components/Header/Header";

const Home = () => {
    const {sectionList, introduction: {header, subHeader}} = HOME_DATA;

    return (
        <>
            <Header isSplitBackground={true} height={'100vh'}>
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
            </Header>

            {sectionList.map((section, i) =>
              <Section key={'section-type-' + i} section={section}
                       outsideSectionColor={i === 0 ? "transparent" : sectionList[i - 1].backgroundColor}
                       isFlipped={i % 2 === 1}/>)
            }
        </>
    );
};

export default Home;
