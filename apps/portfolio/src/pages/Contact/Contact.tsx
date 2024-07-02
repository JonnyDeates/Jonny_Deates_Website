import React from 'react';
import BusinessCard from "./components/BusinessCard/BusinessCard";
import Header from "../../components/Header/Header";
import {SCREEN_WIDTH, useScreenWidth} from "../../utils/useScreenWidth";
import MobileContact from "./components/MobileContact/MobileContact";

const Contact = () => {
    const screenWidth = useScreenWidth();

    if (screenWidth <= SCREEN_WIDTH.tablet) {
        return <MobileContact/>
    }
    return (
        <Header isSplitBackground={false} height={"100vh"}>
            <BusinessCard/>
        </Header>
    );
}

export default Contact;
