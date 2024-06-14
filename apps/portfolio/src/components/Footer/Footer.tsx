import React from 'react';
import './Footer.css';

const Footer = () => {
    const links = [
        {
            link: 'https://github.com/JonnyDeates',
            name: 'Github'
        },
        // {
        //     link: 'https://koifoundation.com',
        //     name: 'Koi Foundation LLC'
        // },
        {
            link: 'https://www.linkedin.com/in/jonnydeates/',
            name: 'LinkedIn'
        }
    ];

    const copyrightDate = new Date().getFullYear();

    return (

        <div className={'footer-wrapper'}>
            <div className='footer'>
                {links.map((link, i) =>
                    <div key={i} className={'footer-links'} onClick={() => window.open(link.link)}>
                        {link.name}
                    </div>
                )}
            </div>
            <p>© {copyrightDate} Jon Deates. All rights reserved.</p>
        </div>

    );
};

export default Footer;
