import React from 'react';
import './Footer.css';

interface State {
    links: string[]
}

class Footer extends React.Component<{}> {
    render() {
        const links=[{
            link: 'https://github.com/JonnyDeates',
            name: 'Github'
        }, {
            link: 'https://www.linkedin.com/in/jonnydeates/',
            name: 'LinkedIn'
        }, {
            link: 'https://twitter.com/jonnydeates',
            name: 'Twitter'
        }];
        return (
            <div className={'footer-wrapper'}>
                <div className='footer'>
                    {links.map((link,i)=> <div key={i} className={'footer-links'} onClick={() => window.open(link.link)}>{link.name}</div>)}
                </div>
                <p>© 2019 Jonny Deates. All rights reserved.</p>

            </div>
        );
    }
}

export default Footer;
