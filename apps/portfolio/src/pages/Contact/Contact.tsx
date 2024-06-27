import React from 'react';
import './Contact.css';
import BusinessCard from "./BusinessCard/BusinessCard";
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import bg from "../../assets/backgrounds/Yin.png";
import bg2 from "../../assets/backgrounds/Yang.png";

const Contact = () => {

  return (
    <ParallaxBanner className="header" style={{minHeight: "80vh", maxHeight: "80vh"}}>
      <ParallaxBannerLayer image={bg} speed={30}/>
      <ParallaxBannerLayer image={bg2} speed={-30}/>
      {
        <ParallaxBannerLayer speed={5}>
          <BusinessCard/>
        </ParallaxBannerLayer>
      }
    </ParallaxBanner>
  );
}

export default Contact;
