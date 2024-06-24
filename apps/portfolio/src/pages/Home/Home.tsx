import React from 'react';
import './Home.css';
import HOME_DATA from "./data/HomeData";
import Section from "./components/Section/Section";

const Home = () => {
    const {sectionList} = HOME_DATA;

    return (
        <>
            {sectionList.map((section, i) =>
              <Section key={'section-type-' + i} section={section}
                       outsideSectionColor={i === 0 ? "transparent" : sectionList[i-1].backgroundColor}
                       isFlipped={i % 2 === 1}/>)
            }
        </>
    );
};

export default Home;
