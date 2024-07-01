import React, { HTMLAttributes, useEffect, useState} from 'react';
import './Chibi.css';
import { useLocation} from "react-router-dom";

import blazer from "./assets/blazer.webp"
import blueWhiteGingham from "./assets/blue_white_gingham.webp"
import cowboy from "./assets/cowboy.webp"
import darkGrayPolo from "./assets/dark_gray_polo.webp"
import dressShirtSweater from "./assets/dress_shirt_with_sweater.webp"
import floralPolo from "./assets/flora_polo.webp"
import floralPolo2 from "./assets/flora_polo_2.webp"
import grayGingham from "./assets/gray_gingham.webp"
import grayPolo from "./assets/gray_polo.webp"
import graySuit from "./assets/gray_suit.webp"
import greenPolo from "./assets/green_polo.webp"
import redGingham from "./assets/red_gingham.webp"
import redPolo from "./assets/red_polo.webp"
import whitePolo from "./assets/white_polo_with_tie.webp"

type ChibiProps = {
    frameAttributes?: HTMLAttributes<HTMLDivElement>,
    chibiAttributes?: HTMLAttributes<HTMLImageElement>
}

const Chibi = ({frameAttributes = {}, chibiAttributes = {}}: ChibiProps) => {
    const outfitsWebp = [blazer, blueWhiteGingham, cowboy, darkGrayPolo, dressShirtSweater, floralPolo, floralPolo2,
        grayGingham, grayPolo, graySuit, greenPolo, redGingham, redPolo, whitePolo]
    const [outfit, setOutfit] = useState<string>('');
    const location = useLocation();

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("chibi-has-chosen-outfit");
        const setChibiOutfit = (): number => {
            let randomIndex: number = Math.floor(Math.random() * outfitsWebp.length);
            sessionStorage.setItem("chibi-has-chosen-outfit", randomIndex + '')

            return randomIndex;
        }

        let chibiOutfitIndex: number;
        if (hasVisited === null) {
            chibiOutfitIndex = setChibiOutfit();
        } else {
            chibiOutfitIndex = isNaN(Number(hasVisited)) ? setChibiOutfit() : Number(hasVisited);
        }

        setOutfit(outfitsWebp[chibiOutfitIndex])
    }, [location.pathname]);

    return (
        <div className='ChibiFrame' {...frameAttributes}>
            <img className='Chibi' alt='Jonnys Chibi' src={outfit} {...chibiAttributes}/>
        </div>
    );
};

export default Chibi;
