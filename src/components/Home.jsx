import React from 'react'
// import Lottie from "lottie-react";
// import reader from '../assets/reader.json'
import hero from '../assets/img/hero-1.jpg'
import { Link } from 'react-router-dom'
import JobList from './JobList'

const Home = () => {
  return (
    <div className='my-container'>
    <div className=' flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          
          <h2 className='max-w-2xl mb-6 font-sans lg:text-6xl lg:font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
          One Step <br className='hidden md:block' /> Closer To Your{' '}
            <span className='inline-block text-blue-400'>  Dream Job</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <Link to='/books' className='btn md:w-auto md:mr-4'>
            <div className='inline-flex items-center justify-center w-full h-full'>
              <p className='mr-3'>Get Started</p>
            </div>
          </Link>
        
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 w-full'>
      
          <img className='ml-20' src={hero} alt="" />
    
      </div> 
      </div>
      
    </div>
      
  )
}

export default Home

// h-56  sm:h-96