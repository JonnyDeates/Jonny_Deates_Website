import React, {useState} from 'react';
import './BusinessCard.css';
import backOfCard from "./assets/business_card_template_back.png"
import frontOfCard from "./assets/business_card_template_front.png"
import openNewTabWindow from "../../../../utils/openNewTabWindow";
import Chibi from "../../../../components/Chibi/Chibi";
import HOME_DATA from "../../../Home/data/HomeData";
import CONTACT_DATA from "../../data/ContactData";

const BusinessCard = () => {
    const {introduction: {header, subHeader}} = HOME_DATA;
    const contactdata = CONTACT_DATA;

    const [isFlipped, setIsFlipped] = useState(false)
    return (
        <div className='BusinessCard' onClick={() => setIsFlipped(!isFlipped)}>
            <div className="FlippableImageWrapper" >
                <div className="FlippableImage">
                    <div className='FrontSide' style={{backgroundImage: `url(${frontOfCard})`}}>
                        <Chibi />
                        <div className='FrontSideText'>
                            <h2>{header}</h2>
                            <h3>{subHeader}</h3>
                        </div>

                    </div>
                    <div className='BackSide' style={{backgroundImage: `url(${backOfCard})`}}>
                        <div className={"Outlinks"}>
                            <div className={"Block"}/>
                            {contactdata.map(({link, name, src}) =>
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
