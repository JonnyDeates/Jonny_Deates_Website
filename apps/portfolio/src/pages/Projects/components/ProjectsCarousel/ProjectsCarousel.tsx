import React, {MouseEventHandler, TouchEventHandler, useEffect, useRef, useState, WheelEventHandler} from 'react';
import './ProjectsCarousel.css';
import ProjectsData from "../../data/ProjectData";
import ProjectCard from "../ProjectCard/ProjectCard";
import OpenLinkButton from "../../../../components/OpenLinkButton/OpenLinkButton";

const getZIndexLookUpArray = (arrayLength: number, activeIndex: number): number[] => (
    Array.from({length: arrayLength}).map((_, currentIndex) => (
        activeIndex === currentIndex
            ? arrayLength
            : arrayLength - Math.abs(activeIndex - currentIndex)
    ))
);

const ProjectsCarousel = () => {
    const projects = ProjectsData;
    const [progress, setProgress] = useState<number>(1);
    const [active, setActive] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);

    const speedWheel = 0.02;
    const speedDrag = -0.05;


    useEffect(() => {
        const newProgress = Math.max(0, Math.min(progress, 100));
        const newActive = Math.floor(newProgress / 100 * (projects.length - 1));
        setActive(newActive);
    }, [progress]);

    const handleStopDragging = () => setIsDragging(false)

    useEffect(() => {
        window.addEventListener('mouseup', handleStopDragging);
        window.addEventListener('mouseleave', handleStopDragging);

        return () => {
            window.removeEventListener('mouseup', handleStopDragging);
            window.removeEventListener('mouseleave', handleStopDragging);
        };
    }, []);

    const handleWheel: WheelEventHandler<HTMLDivElement> = (e) => {
        setProgress(prev => Math.max(0, Math.min(prev + e.deltaY * speedWheel, 100)));
    };
    const handleDrag = (clientX: number) => {
        if (!isDragging) return;
        setProgress(prev => Math.max(0, Math.min(prev + (clientX - startX) * speedDrag, 100)));
        setStartX(clientX);
    };

    const handleMouseMove: (MouseEventHandler<HTMLDivElement>) = (e) => {
        handleDrag(e.clientX || 0);
    };
    const handleTouchDrag: (TouchEventHandler<HTMLDivElement>) = (e) => {
        handleDrag(e.touches && e.touches[0].clientX || 0);
    };

    const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
        setIsDragging(true);
        setStartX(e.clientX || 0);
    };
    const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
        setIsDragging(true);
        setStartX((e.touches && e.touches[0].clientX) || 0);
    }

    const zIndexLookup = getZIndexLookUpArray(projects.length, active);

    return (
      <>

          <div
            className="ProjectCarousel"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleStopDragging}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchDrag}
            onTouchEnd={handleStopDragging}
          >
              {projects.map((project, index) => (
                <ProjectCard key={index} active={active} index={index} project={project}
                             setProgress={setProgress} zIndexLookUp={zIndexLookup}
                />
              ))}
          </div>

      </>
    );
};

export default ProjectsCarousel;
