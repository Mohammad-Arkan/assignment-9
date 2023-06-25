import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Job = ({job}) => {
    const jobs = useLoaderData()
    console.log(jobs)
    const {img, title, Salary, location, category, id, company} = job
    return (
        <div className='grid gap-6 mb-8 lg:grid-cols-2 sm:grid-cols-1'>
            <div className='w-30% ml-20'> 
                 <img className='h-16 w-60 mx-auto block' src={img} alt="company image"/>
                 <h3 className='block text-2xl font-bold lg:mt-5 sm:mt:3'>{title}</h3>
                 <h5 className='text-xl font-semibold text-gray-500'>{company}</h5>
            </div>
            
           
    
        </div>
    );
};

export default Job;