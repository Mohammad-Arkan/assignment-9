import React from 'react'
import hero from '../assets/img/hero-1.jpg'
import { Link, useLoaderData } from 'react-router-dom'
import Job from './Job'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookJournalWhills, faChartSimple, faFileInvoice,  } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
const Home = () => {
  const jobs = useLoaderData()
  console.log(jobs)
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
           <div> 
              <div className='w-60% mx-auto mt-24 text-center lg:mb-10 md:7'> 
                <h3 className='font-bold mb-4 text-4xl '>Job Category List</h3>
                <p className='text-base text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
              </div>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
              <div>
                  <FontAwesomeIcon className='h-10 w-10 lg:mb-5 md:mb-3' icon={faFileInvoice} />
                  <h4 className='font-bold text-xl text-gray-700 mb-1'>Account & Finance</h4>
                  <p className='text-gray-500'>300 Jobs Available</p>
              </div>
              <div>
              {/* faLightbulb */}
              <FontAwesomeIcon className='h-10 w-10 lg:mb-5 md:mb-3' icon={faLightbulb} /> 
                  <h4 className='font-bold text-xl text-gray-700 mb-1'>Account & Finance</h4>
                  <p className='text-gray-500'>300 Jobs Available</p>
              </div>
              <div>
              {/* faChartSimple */}
              <FontAwesomeIcon className='h-10 w-10 lg:mb-5 md:mb-3'icon={faChartSimple} />
                 
                  <h4 className='font-bold text-xl text-gray-700 mb-1'>Account & Finance</h4>
                  <p className='text-gray-500'>300 Jobs Available</p>
              </div>
              <div>
              {/* faBookJournalWhills */}
              <FontAwesomeIcon className='h-10 w-10 lg:mb-5 md:mb-3' icon={faBookJournalWhills} />
                  <h4 className='font-bold text-xl text-gray-700 mb-1'>Engineering Job</h4>
                  <p className='text-gray-500'>224 Jobs Available</p>
              </div>
            
            </div>
            </div>
            <div >
            <div className='w-60% mx-auto mt-24 text-center lg:mb-10 md:mb-7'> 
                <h3 className='font-bold mb-4 text-4xl '>Featured Jobs</h3>
                <p className='text-base text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
              </div>
                 <div className='grid gap-6 mb-8 lg:grid-cols-2 sm:grid-cols-1 lg:mb-16 mx-auto'>
                      {
                      jobs.map(job => <Job
                      key={job.id}
                      job={job}
                      ></Job>)
                      }
                 </div>
            
            </div>
    </div>
      
  )
}

export default Home

// h-56  sm:h-96