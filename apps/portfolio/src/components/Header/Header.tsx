import React, {ReactNode} from 'react';
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import bg from "./assets/Yin.png";
import bg2 from "./assets/Yang.png";
import yinLeft1 from "./assets/yin_left_1.png";
import yinLeft2 from "./assets/yin_left_2.png";
import yangLeft1 from "./assets/yang_left_1.png";
import yangLeft2 from "./assets/yang_left_2.png";
import yinRight1 from "./assets/yin_right_1.png";
import yinRight2 from "./assets/yin_right_2.png";
import yangRight1 from "./assets/yang_right_1.png";
import yangRight2 from "./assets/yang_right_2.png";
import './Header.css'

type HeaderProps = {
  children: ReactNode,
  isSplitBackground: boolean,
  height: string
}

const Header = ({children, isSplitBackground = false, height = "80vh"}:HeaderProps) => {
  if(isSplitBackground){
    return             <ParallaxBanner className="header" style={{minHeight: height, maxHeight: height}}>
      <ParallaxBannerLayer image={yinLeft1} speed={-21}/>
      <ParallaxBannerLayer image={yinLeft2} speed={15}/>
      <ParallaxBannerLayer image={yangLeft1} speed={-18}/>
      <ParallaxBannerLayer image={yangLeft2} speed={21}/>
      <ParallaxBannerLayer image={yinRight1} speed={30}/>
      <ParallaxBannerLayer image={yinRight2} speed={-15}/>
      <ParallaxBannerLayer image={yangRight1} speed={-30}/>
      <ParallaxBannerLayer image={yangRight2} speed={-9}/>
      <ParallaxBannerLayer speed={5}>
        {children}
      </ParallaxBannerLayer>
    </ParallaxBanner>
  }
  return (
    <ParallaxBanner className="header" style={{minHeight: height, maxHeight: height}}>
      <ParallaxBannerLayer image={bg} speed={30}/>
      <ParallaxBannerLayer image={bg2} speed={-30}/>
        <ParallaxBannerLayer speed={5}>
          {children}
        </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Header;