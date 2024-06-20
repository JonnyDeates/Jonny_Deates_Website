import React from 'react';
import './Home.css';
import Introduction from "./components/Introduction/Introduction";
import HOME_DATA from "./data/HomeData";
import Section from "./components/Section/Section";
import SlantedOutlinedHeader from "./components/SlantedOutlinedHeader/SlantedOutlinedHeader";

const Home = () => {
  const minWidth = window.innerWidth < 767;
  const {sectionList} = HOME_DATA;
  return (
    <>
      <Introduction/>
      <div className="WrapperText">
        <SlantedOutlinedHeader
          headerList={['TS','ReactJs', 'NextJs', 'CSS']}
          outlineWidth="5px"
          rotationAngle={-9}
          fontSize={80}
          backgroundColor={'rgb(153, 224, 255)'}
          outerBackgroundColor={'aliceblue'}
        />
      <div className={"FrontendStuff"}>
        <h2>Frontend Nerd</h2>
      </div>
      </div>
      <div >
        <SlantedOutlinedHeader headerList={['Java', 'Spring', 'ExpressJs']}
                               rotationAngle={9}
                               outlineWidth='5px'
                               outerBackgroundColor={'rgb(153,224,255)'}
                               backgroundColor={'green'}
                               fontSize={80}/>
        <div className={'FrontendGarbage'}>
          <h2>Backend Skillz</h2>
        </div>
      </div>
      {/*{sectionList.map((section, i) =>*/}
      {/*  <Section key={'section-type-' + i} section={section}*/}
      {/*           isFlipped={i % 2 === 1 || minWidth}/>)*/}
      {/*}*/}
    </>
  );
};

export default Home;
