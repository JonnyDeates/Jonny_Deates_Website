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
        return (

            <ParallaxBanner className="header" layers={[{
                children: <></>,
                image: bg, amount: this.props.parallaxSpeed * .8, expanded: true,
            }, {
                children: <></>,
                image: bg2, amount: this.props.parallaxSpeed * -.8, expanded: true
            }]}
                            style={{minHeight: this.props.height, maxHeight: this.props.height}}>
                <header className='header-title'>
                    <h1>I'm Jonny Deates</h1>
                    <h4>Full-Stack Developer</h4>
                </header>
            </ParallaxBanner>
        );
    }
}

export default Header;


