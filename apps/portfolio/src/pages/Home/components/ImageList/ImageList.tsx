import {Image} from "../../data/HomeData";
import React from "react";
import openNewTabWindow from "../../../../utils/openNewTabWindow";

type ImageListProps = {
  imageList: Image[],
  isFlipped: boolean,
  hasAnimationRan: boolean
}

const ImageList = ({imageList, isFlipped, hasAnimationRan}: ImageListProps) => {

  const animationDirection = isFlipped ? "slideInRight" : "slideInLeft";

  return <div className='logos'>
    {imageList.map((image, i) => (
      <img key={image.name + i} src={image.src} alt={image.name}
           style={{
             ...image.style,
             animation: hasAnimationRan ? `1s ${i * .25 + (.25)}s ${animationDirection} forwards`
               : '',
           }}
           onClick={() => image.link && openNewTabWindow(image.link)}/>
    ))}
  </div>
};
export default ImageList;