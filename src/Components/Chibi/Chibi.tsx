import React from 'react';
import './Chibi.css';
import {Link} from "react-router-dom";
import chibiFlora1G from "../../Assets/chibi/chibi-floral1.gif"
import chibiFlora2G from "../../Assets/chibi/chibi-floral2.gif"
import chibiFlora3G from "../../Assets/chibi/chibi-floral3.gif"
import chibiFlora1 from "../../Assets/chibi/Chibi-floral-1.jpg"
import chibiFlora2 from "../../Assets/chibi/Chibi-floral-2.jpg"
import chibiFlora3 from "../../Assets/chibi/Chibi-floral-3.jpg"
import chibiPattern1G from "../../Assets/chibi/Chibi-pattern1.gif"
import chibiPattern2G from "../../Assets/chibi/Chibi-pattern2.gif"
import chibiPattern3G from "../../Assets/chibi/Chibi-pattern3.gif"
import chibiPattern1 from "../../Assets/chibi/Chibi-pattern-1.jpg"
import chibiPattern2 from "../../Assets/chibi/Chibi-pattern-2.jpg"
import chibiPattern3 from "../../Assets/chibi/Chibi-pattern-3.jpg"

interface Props {
    isWaving: boolean;
}

class Chibi extends React.Component<Props, {}> {

    outfits: number;

    constructor(props: Props) {
        super(props, {});
        this.outfits = 6;
    }

    randomWavingOutfit = () => {
        let rand: number = Math.floor(Math.random() * this.outfits);
        let outfit: any;
        switch (rand) {
            case 0:
                outfit = chibiFlora1G;
                break;
            case 1:
                outfit = chibiFlora2G;
                break;
            case 2:
                outfit = chibiFlora3G
                break;
            case 3:
                outfit = chibiPattern1G;
                break;
            case 4:
                outfit = chibiPattern2G;
                break;
            case 5:
                outfit = chibiPattern3G;
                break;
            default:
                outfit = chibiFlora1G;
                break;
        }
        return outfit;
    };
    randomOutfit = () => {
        let rand: number = Math.floor(Math.random() * this.outfits);
        let outfit: any;
        switch (rand) {
            case 0:
                outfit = chibiFlora1;
                break;
            case 1:
                outfit = chibiFlora2;
                break;
            case 2:
                outfit = chibiFlora3;
                break;
            case 3:
                outfit = chibiPattern1;
                break;
            case 4:
                outfit = chibiPattern2;
                break;
            case 5:
                outfit = chibiPattern3
                break;
            default:
                outfit = chibiFlora1
                break;
        }
        return outfit;
    };

    render() {
        return (
            <div className='chibi-frame'>
                <Link to={'/'}>
                {(this.props.isWaving) ? <img className='chibi' alt='Jonnys Chibi Waving' src={this.randomWavingOutfit()} /> :
                    <img className='chibi' alt='Jonnys Chibi' src={this.randomOutfit()}/>}</Link>
            </div>
        );
    }
}

export default Chibi;
