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
            <Section backgroundColor={'rgb(153,224,255)'} outsideSectionColor={'aliceblue'} isFlipped={false}
                     section={sectionList[0]}/>
            <Section backgroundColor={'#99ADFF'} outsideSectionColor={'rgb(153,224,255)'} isFlipped={true}
                     section={sectionList[1]}/>
            <Section backgroundColor={"#99FFEB"} outsideSectionColor={'#99ADFF'} isFlipped={false} section={sectionList[2]}/>
            {/*{sectionList.map((section, i) =>*/}
            {/*  <Section key={'section-type-' + i} section={section}*/}
            {/*           isFlipped={i % 2 === 1 || minWidth}/>)*/}
            {/*}*/}
        </>
    );
};

export default Home;
