import React, {ReactNode, useEffect, useState} from 'react';
import './Header.css';
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import bg from '../../assets/backgrounds/Yin.png';
import bg2 from '../../assets/backgrounds/Yang.png';

import yangLeft1 from './assets/yang_left_1.png'
import yangLeft2 from './assets/yang_left_2.png'
import yangRight1 from './assets/yang_right_1.png'
import yangRight2 from './assets/yang_right_2.png'
import yinLeft1 from './assets/yin_left_1.png'
import yinLeft2 from './assets/yin_left_2.png'
import yinRight1 from './assets/yin_right_1.png'
import yinRight2 from './assets/yin_right_2.png'
import {useLocation} from "react-router-dom";
import Chibi from "../Chibi/Chibi";

type HeaderBoxProps = { children: ReactNode }

const HeaderBox = ({children}: HeaderBoxProps) => {
    return <div className="HeaderBox">
        {children}
        <div>
            <h1>
                Jon Deates
            </h1>
            <h2>
                Senior Software Developer
            </h2>
        </div>
    </div>
}


const Header = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return (
            <ParallaxBanner className="header" style={{minHeight: "100vh", maxHeight: "100vh"}}>
                <ParallaxBannerLayer image={yinLeft1} speed={-21}/>
                {/*<ParallaxBannerLayer image={yinLeft2} speed={15}/>*/}
                {/*<ParallaxBannerLayer image={yangLeft1} speed={-18}/>*/}
                <ParallaxBannerLayer image={yangLeft2} speed={21}/>
                <ParallaxBannerLayer image={yinRight1} speed={30}/>
                {/*<ParallaxBannerLayer image={yinRight2} speed={-15}/>*/}
                <ParallaxBannerLayer image={yangRight1} speed={-30}/>
                {/*<ParallaxBannerLayer image={yangRight2} speed={-9}/>*/}
                <ParallaxBannerLayer speed={5}>
                    <HeaderBox>
                        <Chibi frameAttributes={{style: {position: "relative", top: 'unset', left: 'unset'}}}/>
                    </HeaderBox>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        )
    } else {
        return (
            <ParallaxBanner className="header" style={{minHeight: "30vh", maxHeight: "30vh"}}>
                <ParallaxBannerLayer image={bg} speed={30}/>
                <ParallaxBannerLayer image={bg2} speed={-30}/>
                {
                    <ParallaxBannerLayer speed={5}>
                        <Chibi/>
                    </ParallaxBannerLayer>
                }
            </ParallaxBanner>
        );
    }
}

export default Header;


