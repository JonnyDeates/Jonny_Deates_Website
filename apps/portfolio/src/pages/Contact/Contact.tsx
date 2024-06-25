import React from 'react';
import './Contact.css';
import lInLogo from '../../assets/logos/linkedin.svg'
import gLogo from '../../assets/logos/github.svg'
// import eLogo from '../../Assets/logos/gmail.svg'
import tLogo from '../../assets/logos/twitter.svg'
import iLogo from '../../assets/logos/instagram.svg'
import Card from "./Card/Card";
import BusinessCard from "../../components/Header/components/BusinessCard/BusinessCard";

class Contact extends React.Component<{}> {
    render() {
        const minWidth = window.innerWidth < 767;
        const programming = [{
            image: lInLogo,
            name: "LinkedIn",
            link: 'https://www.linkedin.com/in/jonnydeates/',
            descr: "I am an active user of LinkedIn, if you are a recruiter or a start-up, reach out there! I would be \n" +
                "more than glad to have a discussion and perhaps I would be a valuable member of your team!"
        },
            {
                image: gLogo,
                name: "Github",
                link: 'https://github.com/JonnyDeates',
                descr: "I usually post most of my projects on github. I do like giving out some of the smaller projects\n"+
                    " code for MIT license, or available free of copywrite. Also a place to see what I am currently working on."
            },
            // {
            //     image: eLogo,
            //     name: "Gmail",
            //     link: 'mailto:jonnydeates<contato@gmail.com>',
            //     descr: "If you want to hire me, or would like to discuss a project you think I would be great to be \n" +
            //         " contracted too, then shoot me an email!"
            // }
        ];
        const socialMedia = [{
            image: tLogo,
            name: "Twitter",
            link: 'https://twitter.com/jonnydeates',
            descr: "Although I don't use it much, I am on twitter. I don't mind having a discussion about \n" +
                "different topics, and if twitter is the best place for you to reach out please do. I will \n" +
                "make sure to respond!"
        },
            {
                image: iLogo,
                name: "Instagram",
                link: 'https://www.instagram.com/jonnydeates/',
                descr: "If you want to see more of my personal life or what I look like, then check out my Instagram!"
            }
        ];
        return (
            <>
                {/*<BusinessCard/>*/}
                {/*<h1 className="body-header">Programming Inquiries</h1>*/}
                {/*{programming.map((obj, i) => <Card key={'programming' + i} name={obj.name} descr={obj.descr}*/}
                {/*                                   image={obj.image} link={obj.link} flipped={(i % 2 === 0 || minWidth)}/>)}*/}
                {/*<h1 className="body-header">Social Media</h1>*/}
                {/*{socialMedia.map((obj, i) => <Card key={'socialMedia' + i} name={obj.name} descr={obj.descr}*/}
                {/*                                   image={obj.image} link={obj.link} flipped={(i % 2 === 0 || minWidth)}/>)}*/}
            </>
        );
    }
}

export default Contact;
