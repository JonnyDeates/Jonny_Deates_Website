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
                {}
                {this.props.links.map((link, index) => <Link key={index} to={link.to}
                                                             className={(link.to === this.props.currentActive.pathname)
                                                                 ? 'active' : ''}>{link.name}</Link>)}
            </div>
        );
    }
}

export default TopNav;