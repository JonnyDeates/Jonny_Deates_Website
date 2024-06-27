import React, {useState} from 'react';
import './BusinessCard.css';
import HOME_DATA from "../../Home/data/HomeData";
import backOfCard from "./assets/business_card_template_back.png"
import frontOfCard from "./assets/business_card_template_front.png"
import openNewTabWindow from "../../../utils/openNewTabWindow";
import ContactData from "../data/ContactData";
import Chibi from "../../../components/Chibi/Chibi";

const BusinessCard = () => {
    const {header, description, images} = ContactData;

    const [isFlipped, setIsFlipped] = useState(false)
    return (
        <div className='BusinessCard'>
            <div className="FlippableImageWrapper" onClick={() => setIsFlipped(!isFlipped)}>
                <div className="FlippableImage">
                    <div className='FrontSide' style={{backgroundImage: `url(${frontOfCard})`}}>
                        <Chibi frameAttributes={{style: {position: "relative", top: 'unset', left: 'unset',
                                filter: "grayscale(100%) opacity(80%)", margin: 0}}} />
                        <div className='FrontSideText'>
                            <h2>{header}</h2>
                            <h3>{description}</h3>
                        </div>

                    </div>
                    <div className='BackSide' style={{backgroundImage: `url(${backOfCard})`}}>
                        <div className={"Outlinks"}>
                            <div className={"Block"}/>
                            {images.map(({link, name, src}) =>
                                <div key={name} onClick={() => openNewTabWindow(link)}>
                                    <img src={src} alt={name}/>
                                    <span>{name}</span>
                                </div>
                            )}
                        </div>
                        <p className={"Tab"}>Jon D.</p>
                    </div>
                    <div className={'shadow'}/>
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;
