import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Job = ({job}) => {
    const {logo, title, jobs} = job
    return (
        <div>       
            <FontAwesomeIcon className='h-10 w-10 lg:mb-7 md:mb-4' icon={faEnvelope} />
            <h4 className='font-bold text-xl'> {title}</h4>
            <p className='text-gray-500'>{jobs}</p>
        </div>
    );
};

export default Job;