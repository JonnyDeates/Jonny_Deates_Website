import React from 'react';
import './Introduction.css';
import HOME_DATA from "../../data/HomeData";

const Introduction = () => {
    const {introduction: {header, description}} = HOME_DATA;

    return (
        <div className='introduction'>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Introduction;
