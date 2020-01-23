import React from 'react';
import './Header.css';
import {ParallaxBanner} from "react-scroll-parallax/cjs";
import bg from '../../assets/backgrounds/Yin.png';
import bg2 from '../../assets/backgrounds/Yang.png';

interface Props {
    height: string,
    parallaxSpeed: number
}

class Header extends React.Component<Props, {}> {
    render() {
        return (<header className='header-title'>Parrallaxing Banner</header>
        );
    }
}

export default Header;


