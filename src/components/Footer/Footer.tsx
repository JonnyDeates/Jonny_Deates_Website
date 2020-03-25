import React from 'react';
import './Footer.css';
import TrackVisibility from "../utils/TrackVisibility";

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
            link: 'https://www.linkedin.com/in/jonnydeates/',
            name: 'LinkedIn'
        }, {
            link: 'https://twitter.com/jonnydeates',
            name: 'Twitter'
        }];
        return (

                <div className={'footer-wrapper'}>
                    <TrackVisibility onVisible={() => this.setState({runAnimation: true})}>
                    <div className='footer'  >
                        {links.map((link, i) => <div key={i} style={{animation: (this.state.runAnimation) ? ((i*0.25)+0.25)+'s slideInDown forwards' : ''}} className={'footer-links'}
                                                     onClick={() => window.open(link.link)}>{link.name}</div>)}
                    </div>
                    <p style={{animation: (this.state.runAnimation) ? '1s slideInDown forwards' : ''}}>© 2019 Jonny Deates. All rights reserved.</p>
                    </TrackVisibility>
                </div>

        );
    }
}

export default Footer;
