import {Image} from "../../data/HomeData";
import React, {CSSProperties} from "react";
import openNewTabWindow from "../../../../utils/openNewTabWindow";
import "./ImageList.css"

type ImageListProps = {
  imageList: Image[],
  wrapperStyle?: CSSProperties
}

const ImageList = ({imageList, wrapperStyle = {}}: ImageListProps) => {


  const animationSquare = (index: number) => imageList.length === 4
    ? `6s slideInCircle${index} linear infinite`
    : '';

  return <div className='ImageList' style={...wrapperStyle}>
    {imageList.map((image, i) => (
      <img key={image.name + i} src={image.src} alt={image.name}
           style={{
             ...image.style,
             animation: animationSquare(i),
           }}
           onClick={() => image.link && openNewTabWindow(image.link)}/>
    ))}
  </div>
};
export default ImageList;