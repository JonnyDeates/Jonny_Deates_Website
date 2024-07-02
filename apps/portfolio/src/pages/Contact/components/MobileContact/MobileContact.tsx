import React from 'react';
import CONTACT_DATA from "../../data/ContactData";
import HeaderBox from "../../../../components/Header/components/HeaderBox/HeaderBox";
import './MobileContact.css'
import openNewTabWindow from "../../../../utils/openNewTabWindow";

const MobileContact = () => {
    const contactData = CONTACT_DATA;

    return (
        <div className={'MobileContact'}>
            <HeaderBox
                header={'Contact'}
                headerBoxStyle={{
                    color: "white",
                    textShadow: '0px 0px 4px black',
                    top: '12%'
                }}
            />
            <div className={'MobileContactContent'} >
                {contactData.map(({name, link, src}) => {
                    return <div key={name+link} onClick={()=> openNewTabWindow(link)} title={`Open ${link}`}>
                        <img src={src} width={50}/>
                        <span>{name}</span>
                    </div>
                })}
            </div>
        </div>
    )
};

export default MobileContact;