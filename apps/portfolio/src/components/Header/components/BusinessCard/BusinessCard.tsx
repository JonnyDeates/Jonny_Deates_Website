import React, {useState} from 'react';
import './BusinessCard.css';
import HOME_DATA from "../../../../pages/Home/data/HomeData";
import backOfCard from "./assets/business_card_template_back.png"
import frontOfCard from "./assets/business_card_template_front.png"
import openNewTabWindow from "../../../../utils/openNewTabWindow";

const BusinessCard = () => {
    const {introduction: {header, description, images}} = HOME_DATA;

    const [isFlipped, setIsFlipped] = useState(false)
    return (
        <div className='BusinessCard'>
            <div className="FlippableImageWrapper" onClick={() => setIsFlipped(!isFlipped)}>
                <div className="FlippableImage">
                    <div className='FrontSide' style={{backgroundImage: `url(${frontOfCard})`}}>
                        <h2>{header}</h2>
                        <h3>{description}</h3>
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
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;
