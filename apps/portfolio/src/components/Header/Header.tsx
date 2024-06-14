import React, {useEffect, useState} from 'react';
import './Header.css';
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import bg from '../../assets/backgrounds/Yin.png';
import bg2 from '../../assets/backgrounds/Yang.png';
import {useLocation} from "react-router-dom";


const Header = () => {

    const [height, setHeight] = useState('50vh');
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setHeight('80vh')
        } else {
            setHeight('50vh')
        }
    });


    return (
        <ParallaxBanner className="header" style={{minHeight: height, maxHeight: height}}>
            <ParallaxBannerLayer image={bg} speed={10}/>
            <ParallaxBannerLayer image={bg2} speed={-10}/>
            <ParallaxBannerLayer speed={5}>
            <header className='header-title'>
                <h1>Jon Deates</h1>
                <h4>Senior Software Engineer</h4>
            </header>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
}

export default Header;


