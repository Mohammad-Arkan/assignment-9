import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <div>JobWorld</div>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/" 
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" 
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" 
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Applied Job</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" 
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Blog</NavLink>
                        </li>
                       
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;