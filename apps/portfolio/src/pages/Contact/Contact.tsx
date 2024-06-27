import React from 'react';
import BusinessCard from "./BusinessCard/BusinessCard";
import Header from "../../components/Header/Header";

const Contact = () => {

  return (
    <Header isSplitBackground={false} height={"80vh"}>
          <BusinessCard/>
    </Header>
  );
}

export default Contact;
