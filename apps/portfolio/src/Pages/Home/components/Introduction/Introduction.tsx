import React, {useState} from 'react';
import './Introduction.css';
import logo from "../../../../Assets/logos/yinyangyexin.png";
import TrackVisibility from "../../../../Components/utils/TrackVisibility";
import HomeData from "../../data/HomeData";

const Introduction = () => {
    const [isRotating, setIsRotating] = useState<boolean>();
    const [runAnimation, setRunAnimation] = useState<boolean>();

    const {introduction: {intro, description}} = HomeData;

    let rotate: string = '2s 1s linear rotate infinite';



    const koiFoundationLink: string = 'https://koifoundation.com';
    const companyHeader: string = "The Koi Foundation LLC";
    const companyInfo: string = "We strive to show a path that gives foundational knowledge and teachings as well as \n" +
        "to expand the world's access too needed informed, factual information. Currently with three webservices \n" +
        "available and more on the way, it will be the goto place for resources and self-improvement for all.";

    return (
        <div className='introduction'>
            <h2>{intro}</h2>
            <p>{description}</p>

            <TrackVisibility onVisible={() => setRunAnimation(true)}>
                <img src={logo}
                     alt='Yin Yang Yexin' style={{
                    animation: runAnimation ? isRotating ? rotate : '1s .5s expandIn forwards' : '',
                    opacity: isRotating ? 1 : 0
                }} onAnimationEnd={() => setIsRotating(true)}
                     onClick={() => window.open(koiFoundationLink)}
                     title="Click to Goto The Koi Foundation"
                />
                <h1 style={{animation: runAnimation ? '1s fadeIn forwards' : ''}}>{companyHeader}</h1>
                <p style={{animation: runAnimation ? '1.5s slideInDown forwards' : ''}}> {companyInfo}</p>
            </TrackVisibility>
        </div>
    );
}

export default Introduction;
