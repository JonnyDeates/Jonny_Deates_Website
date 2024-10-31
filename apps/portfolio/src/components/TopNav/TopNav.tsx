import React from 'react';
import {NavLink} from 'react-router-dom'
import './TopNav.css';

type TopNavProps = {
    links: { to: string, name: string }[];
}

const TopNav = ({links}: TopNavProps) => {

    return (
        <div className='nav'>
            {links.map((link, index) =>
                <div key={index} onClick={() => window.scrollTo(0, 0)}>
                    <NavLink to={link.to} className={({isActive}: any) => isActive ? 'active' : ''}>
                        {link.name}
                    </NavLink>
                </div>)
            }
        </div>
    );
};

export default TopNav;
