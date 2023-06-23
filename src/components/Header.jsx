import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='my-container'>
            <div className=''>
                <div className='flex items-center justify-between w-3/4 mx-auto'>
                <div>
                    <h1 className='jobworld'>JobWorld</h1>
                </div>
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
                    <button className='btn'>Star Applying</button>
                </div>
                </div>
                
                 {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
            </div>
        </div>
    );
};

export default Header;