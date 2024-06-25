import {Image} from "../../data/HomeData";
import React, {CSSProperties} from "react";
import openNewTabWindow from "../../../../utils/openNewTabWindow";
import "./ImageList.css"
import {Button, IconButton} from "koi-pool";
import openIcon from '../../assets/open.svg'
type ImageListProps = {
  imageList: Image[],
  wrapperStyle?: CSSProperties
}

const ImageList = ({imageList, wrapperStyle = {}}: ImageListProps) => {


  const animationSquare = (index: number) => imageList.length === 4
    ? `6s slideInCircle${index} linear infinite`
    : '';

  return <div className='ImageList' style={...wrapperStyle}>
    {imageList.map((image, i) => {
      const linkTitle = `Goto ${image.link}`;

      return (
      <>
        <img key={image.name + i} src={image.src} alt={image.name} title={linkTitle}
           style={{
             ...image.style,
             animation: animationSquare(i),
           }}
           onClick={() => image.link && openNewTabWindow(image.link)}/>
        {image.hasOpenButton && image.link && <IconButton className={'Button'} variant={'accept'} onClick={()=> openNewTabWindow(image.link)}
                                                   src={openIcon as string} title={linkTitle}/>}
      </>
    )
    })
    }
  </div>
};
export default ImageList;