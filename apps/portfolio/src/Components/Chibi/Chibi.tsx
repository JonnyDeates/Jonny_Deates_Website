import React, {useEffect, useState} from 'react';
import './Chibi.css';
import {Link, useLocation} from "react-router-dom";
import chibiFlora1G from "./assets/gif/chibi-floral-1.gif"
import chibiFlora2G from "./assets/gif/chibi-floral-2.gif"
import chibiFlora3G from "./assets/gif/chibi-floral-3.gif"
import chibiPattern1G from "./assets/gif/chibi-pattern-1.gif"
import chibiPattern2G from "./assets/gif/chibi-pattern-2.gif"
import chibiPattern3G from "./assets/gif/chibi-pattern-3.gif"
import chibiFlora1 from "./assets/jpg/chibi-floral-1.jpg"
import chibiFlora2 from "./assets/jpg/chibi-floral-2.jpg"
import chibiFlora3 from "./assets/jpg/chibi-floral-3.jpg"
import chibiPattern1 from "./assets/jpg/chibi-pattern-1.jpg"
import chibiPattern2 from "./assets/jpg/chibi-pattern-2.jpg"
import chibiPattern3 from "./assets/jpg/chibi-pattern-3.jpg"


const Chibi = () => {
    const outfitsGif = [chibiFlora1G, chibiFlora2G, chibiFlora3G, chibiPattern1G, chibiPattern2G, chibiPattern3G];
    const outfitsJpg = [chibiFlora1, chibiFlora2, chibiFlora3, chibiPattern1, chibiPattern2, chibiPattern3];
    const [outfit, setOutfit] = useState<string>('');
    const location = useLocation();

    useEffect(() => {
        const isWaving = sessionStorage.getItem("chibi-has-waved");

        if (isWaving === null) {
            let randomIndex: number = Math.floor(Math.random() * outfitsGif.length);

            setOutfit(outfitsGif[randomIndex]);
            sessionStorage.setItem("chibi-has-waved", randomIndex.toString())
        } else {
            let randomIndex: number = parseInt(isWaving);

            setOutfit(outfitsJpg[randomIndex])
        }
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
