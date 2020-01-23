import React from 'react';
import './Contact.css';
import lInLogo from '../../assets/logos/linkedin.svg'
import gLogo from '../../assets/logos/github.svg'
import eLogo from '../../assets/logos/gmail.svg'
import tLogo from '../../assets/logos/twitter.svg'
import iLogo from '../../assets/logos/instagram.svg'
import Card from "./Card/Card";

class Contact extends React.Component<{}> {
    render() {
        const minWidth = window.innerWidth < 767;
        const programming = [
            {
                image: '',
                name: "Social Media 1",
                link: '',
                descr: ""
            },
            {
                image: '',
                name: "Social Media 2",
                link: '',
                descr: ""
            }
        ];
        const socialMedia = [{
            image: '',
            name: "Programming Link 1",
            link: '',
            descr: ""
        },
            {
                image: '',
                name: "Programming Link 1",
                link: '',
                descr: ""
            }
        ];
        return (
            <>
                <h1 className="body-header">Programming Inquiries</h1>
                {programming.map((obj, i) => <Card key={'programming' + i} name={obj.name} descr={obj.descr}
                                                   image={obj.image} link={obj.link} flipped={(i % 2 === 0 || minWidth)}/>)}
                <h1 className="body-header">Social Media</h1>
                {socialMedia.map((obj, i) => <Card key={'socialMedia' + i} name={obj.name} descr={obj.descr}
                                                   image={obj.image} link={obj.link} flipped={(i % 2 !== 0 || minWidth)}/>)}
            </>
        );
    }
}

export default Contact;
