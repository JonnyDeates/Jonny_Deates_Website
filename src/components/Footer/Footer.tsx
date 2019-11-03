import React from 'react';
import './Footer.css';

class Footer extends React.Component<{}> {


    render() {
        return (
            <div className={'footer-wrapper'}>
                <div className='footer'>
                <a href={'https://giveawaysite.net'}>Github</a>
                <a href={'https://www.linkedin.com/in/jonnydeates/'}>Linked-in</a>
                <a href={'https://twitter.com/jonnydeates'}>Twitter</a>
                </div>
                <p>© 2019 Jonny Deates. All rights reserved.</p>

            </div>
        );
    }
}

export default Footer;