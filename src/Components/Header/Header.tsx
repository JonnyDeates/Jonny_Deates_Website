import React from 'react';
import './Header.css';
import {ParallaxBanner} from "react-scroll-parallax/cjs";
import bg from '../../Assets/backgrounds/Yin.png';
import bg2 from '../../Assets/backgrounds/Yang.png';

interface Props {
    height: string,
    parallaxSpeed: number,
    isShown?: boolean
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
                {this.props.isShown && <header className='header-title'>
                        <h1>I'm Jonny Deates</h1>
                        <h4>Software Engineer</h4>
                </header>}
            </ParallaxBanner>
        );
    }
}

export default Header;


