import React, {useEffect, useState} from 'react';
import './Chibi.css';
import {Link, useLocation} from "react-router-dom";

import blazer from "./assets/webp/blazer.webp"
import blueWhiteGingham from "./assets/webp/blue_white_gingham.webp"
import darkGrayPolo from "./assets/webp/dark_gray_polo.webp"
import dressShirtSweater from "./assets/webp/dress_shirt_with_sweater.webp"
import floralPolo from "./assets/webp/flora_polo.webp"
import floralPolo2 from "./assets/webp/flora_polo_2.webp"
import grayGingham from "./assets/webp/gray_gingham.webp"
import grayPolo from "./assets/webp/gray_polo.webp"
import graySuit from "./assets/webp/gray_suit.webp"
import greenPolo from "./assets/webp/green_polo.webp"
import redGingham from "./assets/webp/red_gingham.webp"
import redPolo from "./assets/webp/red_polo.webp"
import whitePolo from "./assets/webp/white_polo_with_tie.webp"


const Chibi = () => {
    const outfitsWebp = [blazer, blueWhiteGingham, darkGrayPolo, dressShirtSweater, floralPolo, floralPolo2,
        grayGingham, grayPolo, graySuit, greenPolo, redGingham, redPolo, whitePolo]
    const [outfit, setOutfit] = useState<string>('');
    const location = useLocation();

    useEffect(() => {
        const isWaving = sessionStorage.getItem("chibi-has-waved");

        let randomIndex: number = Math.floor(Math.random() * outfitsWebp.length);
        if (isWaving === null) {

            sessionStorage.setItem("chibi-has-waved", "true")
        }

        setOutfit(outfitsWebp[randomIndex])
    }, [location.pathname]);

    return (
        <div className='chibi-frame'>
            <Link to={'/'}>
                <img className='chibi' alt='Jonnys Chibi' src={outfit}/>
            </Link>
        </div>
    );
};

export default Chibi;
