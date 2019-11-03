import React from 'react';
import './Header.css';
import {ParallaxBanner} from "react-scroll-parallax/cjs";
import bg from '../../assets/backgrounds/YinYangBg.png';

interface Props {
    height: string,
    parallaxSpeed: number
}

class Header extends React.Component<Props, {}> {
    render() {
        return (

            <ParallaxBanner className="header" layers={[{
                children: <></>,
                image: bg, amount: this.props.parallaxSpeed,expanded: true
            }]}
                            style={{minHeight: this.props.height, maxHeight: this.props.height}}>
                <h1>I'm Jonny Deates</h1>
                <h4>a front end-developer</h4>
            </ParallaxBanner>
        );
    }
}

export default Header;


