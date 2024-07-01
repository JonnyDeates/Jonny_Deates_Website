import React from 'react';
import './Home.css';
import HOME_DATA from "./data/HomeData";
import Section from "./components/Section/Section";
import Header from "../../components/Header/Header";
import HeaderBox from "../../components/Header/components/HeaderBox/HeaderBox";

const Home = () => {
    const {sectionList, introduction: {header, subHeader}} = HOME_DATA;

    return (
        <>
            <Header isSplitBackground={true} height={'100vh'}>
                <HeaderBox header={header} subHeader={subHeader}/>
            </Header>

            {sectionList.map((section, i) =>
              <Section key={'section-type-' + i} section={section}
                       outsideSectionColor={i === 0 ? "transparent" : sectionList[i - 1].backgroundColor}
                       isFlipped={i % 2 === 1}/>)
            }
        </>
    );
};

export default Home;
