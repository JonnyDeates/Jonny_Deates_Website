import React from 'react';
import './Home.css';
import Introduction from "./components/Introduction/Introduction";
import HOME_DATA from "./data/HomeData";
import Section from "./components/Section/Section";

const Home = () => {
  const minWidth = window.innerWidth < 767;
  const {sectionList} = HOME_DATA;
  return (
    <>
      <Introduction/>
      <div className='TextStuffWrapper'>
        <div className="TextStuff">
          <p>TS</p>
          <p>ReactJS</p>
          <p>NextJs</p>
          <p>ExpressJs</p>
        </div>
      </div>
      <div className={"FrontendStuff"}>
        <h2>Frontend Expert</h2>
      </div>
      {/*{sectionList.map((section, i) =>*/}
      {/*  <Section key={'section-type-' + i} section={section}*/}
      {/*           isFlipped={i % 2 === 1 || minWidth}/>)*/}
      {/*}*/}
    </>
  );
};

export default Home;
