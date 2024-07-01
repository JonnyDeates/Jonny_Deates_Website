import React, {HTMLAttributes, ReactNode} from 'react';
import './ProjectCard.css'
type ProjectCardProps = {children?: ReactNode, image: string, isDisabled?: boolean} & HTMLAttributes<HTMLDivElement>

const ProjectCard = ({children, className = '', image, isDisabled = false,style, ...props}: ProjectCardProps) => {


    return (
        <div className={`ProjectCard ${className}`}
             style={{...style, backgroundImage: `url(${image})`, cursor: isDisabled ? 'not-allowed' : 'pointer'}}
             {...props}
        >
            {children}
        </div>
    );
};

export default ProjectCard;