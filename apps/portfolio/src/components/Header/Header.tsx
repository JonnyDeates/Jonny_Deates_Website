import React, {useEffect, useState} from 'react';
import './Header.css';
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import bg from '../../assets/backgrounds/Yin.png';
import bg2 from '../../assets/backgrounds/Yang.png';
import {useLocation} from "react-router-dom";
import BusinessCard from "./components/BusinessCard/BusinessCard";


const Header = () => {

    const [height, setHeight] = useState('50vh');
    const location = useLocation();
    const isOnHomePage = location.pathname === '/';
    useEffect(() => {
        if (isOnHomePage) {
            setHeight('100vh')
        } else {
            setHeight('30vh')
        }
    });


    return (
        <ParallaxBanner className="header" style={{minHeight: height, maxHeight: height}}>
            <ParallaxBannerLayer image={bg} speed={30}/>
            <ParallaxBannerLayer image={bg2} speed={-30}/>
            {isOnHomePage
                ?
            <ParallaxBannerLayer speed={5}>
                <BusinessCard/>
            </ParallaxBannerLayer>
            : <></>
            }
        </ParallaxBanner>
    );
}

export default Header;


