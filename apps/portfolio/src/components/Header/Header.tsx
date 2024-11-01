import React, {ReactNode} from 'react';
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import bg from "./assets/YinYangBg.png";
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

const Header = ({children, isSplitBackground = false, height = "100vh"}:HeaderProps) => {
  if(isSplitBackground){
    return             <ParallaxBanner className="Header" style={{minHeight: height, maxHeight: height}}>
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
    <div className="Header" style={{minHeight: height, maxHeight: height, backgroundImage: `url(${bg})`, marginTop: 0}}>
          {children}
    </div>
  );
};

export default Header;