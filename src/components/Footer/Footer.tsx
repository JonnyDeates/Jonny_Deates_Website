import React from 'react';
import './Footer.css';

interface State {
    links: string[]
}

class Footer extends React.Component<{}> {
    render() {
        return (
            <div className={'footer-wrapper'}>
                Footer
            </div>
        );
    }
}

export default Footer;
