import React, {useEffect, useState} from 'react';
import {ProjectType} from "../../data/ProjectData";
import './ProjectCard.css'
import OpenLinkButton from "../../../../components/OpenLinkButton/OpenLinkButton";

type CarouselItemProps = {
    project: ProjectType,
    zIndexLookUp: number[],
    index: number,
    active: number,
    setProgress: (int: number) => void
}


const ProjectCard = ({
                         active,
                         index,
                         project: {image, title, description, link, role},
                         zIndexLookUp,
                         setProgress
                     }: CarouselItemProps) => {

    const [isFlipped, setIsFlipped] = useState<boolean>(false)
    let projectsCount = zIndexLookUp.length;
    const zIndex = zIndexLookUp[index]
    const activeIndex = (index - active) / projectsCount;
    const x = `calc(${activeIndex} * 700% - 50%)`;
    const y = active <= index ? `calc(${activeIndex} * 250% - 50%)` : `calc(${activeIndex} * 250% * -1 - 50%)`;

    const rotation = `calc(${activeIndex} * 160deg)`;
    const opacity = active === index ? 1 : `calc(${zIndex} / ${projectsCount} * 3 - 1.75)`;

    useEffect(() => {
        setIsFlipped(false)
    }, [active]);

    const handleDoubleClick = () => {
        setIsFlipped(!isFlipped)
    }
    const handleProgress = () => {
        setProgress((index / projectsCount) * 100 + 10)
    }

    return (
        <div
            className='ProjectCard'
            style={{
                zIndex,
                opacity,
                transform: `translate(${x}, ${y}) rotate(${rotation})`,
            }}
            onClick={()=> active === index ? handleDoubleClick() : handleProgress() }
        >
            <div className="ProjectCardContent" style={{transform: `rotateY(${isFlipped ? 180 : 0}deg)`}}>
                <div className="Front">
                    <h2>{title}</h2>
                    <img src={image} alt={`${title} Image`}/>
                </div>
                <div className={'Back'} style={{animationDelay: `${index * -2}s`}}>
                    <h2>{title}</h2>
                    <h3>{role}</h3>
                    <p>{description}</p>
                    <OpenLinkButton link={link}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;