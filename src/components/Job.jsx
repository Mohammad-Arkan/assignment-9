import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleDollarToSlot, faLocationDot,  } from '@fortawesome/free-solid-svg-icons'

const Job = ({job}) => {
    const jobs = useLoaderData()
    console.log(jobs)
    const {img, title, salary, location, category1, category2, id, company} = job
    return (
        <div className='flex items-start mb-5 border border-gray-500 p-10 rounded-lg'>
            <div className='w-30% ml-20'> 
                 <img className='h-16 w-60 mx-auto block' src={img} alt="company image"/>
                 <h3 className='block text-2xl font-bold lg:mt-5 sm:mt:3'>{title}</h3>
                 <h5 className='text-xl font-semibold text-gray-500 mb-4'>{company}</h5>
                 <h5><span className='category'>{category1}</span> <span className='category'>{category2}</span></h5>
                <div className='inline-flex items-center justify-center mt-4'>
                <FontAwesomeIcon className='mr-2' icon={faLocationDot} />
                <span className='mr-2'>{location}</span>
             
                <FontAwesomeIcon className='p-2' icon={faCircleDollarToSlot} />
                Salary: {salary}
                </div>
            </div>
            
           
    
        </div>
    );
};

export default Job;