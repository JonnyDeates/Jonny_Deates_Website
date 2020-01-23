import React from 'react';
import {Link} from 'react-router-dom'
import './TopNav.css';

interface Props {
    links: { to: string, name: string }[];
    currentActive: any;
}

class TopNav extends React.Component<Props, {}> {

    render() {
        return (
            <div className='nav'>
                {[{to:'', name: 'Nav 1'},{to:'projects', name: 'Nav 2'},{to:'contact', name: 'Nav 3'}].map((link, index) => <div key={index} onClick={() =>
                    window.scrollTo(0, 0)}><Link to={link.to}
                                                 className={(link.to === this.props.currentActive.pathname)
                                                     ? 'active' : ''}>{link.name}</Link></div>)}
            </div>
        );
    }
}

export default TopNav;
