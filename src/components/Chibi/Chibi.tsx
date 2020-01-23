import React from 'react';
import './Chibi.css';
import {Link} from "react-router-dom";
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
                outfit = require('../../assets/chibi/chibi-floral1.gif');
                break;
            case 1:
                outfit = require('../../assets/chibi/Chibi-floral2.gif');
                break;
            case 2:
                outfit = require('../../assets/chibi/Chibi-floral3.gif');
                break;
            case 3:
                outfit = require('../../assets/chibi/Chibi-pattern1.gif');
                break;
            case 4:
                outfit = require('../../assets/chibi/Chibi-pattern2.gif');
                break;
            case 5:
                outfit = require('../../assets/chibi/Chibi-pattern3.gif');
                break;
            default:
                outfit = require('../../assets/chibi/Chibi-pattern1.gif');
                break;
        }
        return outfit;
    };
    randomOutfit = () => {
        let rand: number = Math.floor(Math.random() * this.outfits);
        let outfit: any;
        switch (rand) {
            case 0:
                outfit = require('../../assets/chibi/Chibi-floral-1.jpg');
                break;
            case 1:
                outfit = require('../../assets/chibi/Chibi-floral-2.jpg');
                break;
            case 2:
                outfit = require('../../assets/chibi/Chibi-floral-3.jpg');
                break;
            case 3:
                outfit = require('../../assets/chibi/Chibi-pattern-1.jpg');
                break;
            case 4:
                outfit = require('../../assets/chibi/Chibi-pattern-2.jpg');
                break;
            case 5:
                outfit = require('../../assets/chibi/Chibi-pattern-3.jpg');
                break;
            default:
                outfit = require('../../assets/chibi/Chibi-pattern-1.jpg');
                break;
        }
        return outfit;
    };

    render() {
        return (
            <div className='chibi-frame'>
                {(this.props.isWaving) ? <img className='chibi' src={''} /> :
                    <img className='chibi'  src={''}/>}
            </div>
        );
    }
}

export default Chibi;
