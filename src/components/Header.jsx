import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-container'>
            <div className='flex items-center justify-between'>
                <div>JobWorld</div>
                <div>
                    <ul className='flex items-center justify-center gap-5'>
                        <li>
                            <NavLink to="/" 
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" 
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/appliedjobs" 
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Applied Job</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" 
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Blog</NavLink>
                        </li>
                       
                    </ul>
                </div>
                <div>
                    <button>Star Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;