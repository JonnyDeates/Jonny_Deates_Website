import React from 'react';
import './Footer.css';

interface State {
    runAnimation: boolean
}

class Footer extends React.Component <{},State> {

    constructor(props: any) {
        super(props);
        this.state = {
            runAnimation: false
        };
    }
    render() {
        const links = [{
            link: 'https://github.com/JonnyDeates',
            name: 'Github'
        }, {
            link: 'https://koifoundation.com',
            name: 'Koi Foundation LLC'
        }, {
            link: 'https://www.linkedin.com/in/jonnydeates/',
            name: 'LinkedIn'
        }];
        return (

                <div className={'footer-wrapper'}>
                    <div className='footer'  >
                        {links.map((link, i) => <div key={i} style={{animation: (this.state.runAnimation) ? ((i*0.25)+0.25)+'s slideInDown forwards' : ''}} className={'footer-links'}
                                                     onClick={() => window.open(link.link)}>{link.name}</div>)}
                    </div>
                    <p style={{animation: (this.state.runAnimation) ? '1s slideInDown forwards' : ''}}>© {new Date().getFullYear()} Jonny Deates. All rights reserved.</p>
                </div>

        );
    }
}

export default Footer;
