import './Page404.css'
import React from "react";
import {Link} from "react-router-dom";
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import bg from "../../components/Header/assets/Yin.png";
import bg2 from "../../components/Header/assets/Yang.png";
import Chibi from "../../components/Chibi/Chibi";


const Page404 = () => {
    return <main className={'Page404'}>
        <ParallaxBanner className="Header" style={{minHeight: "30vh", maxHeight: "30vh"}}>
            <ParallaxBannerLayer image={bg} speed={30}/>
            <ParallaxBannerLayer image={bg2} speed={-30}/>
            {
                <ParallaxBannerLayer speed={5}>
                    <Chibi/>
                </ParallaxBannerLayer>
            }
        </ParallaxBanner>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to='/'>Return to Home</Link>
    </main>
};
export default Page404;