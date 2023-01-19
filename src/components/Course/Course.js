import React from 'react';
import web from '../../images/web.jpg';
import app from '../../images/app.jpg';
import {Link} from 'react-router-dom'

const Course = () => {
    return (
        <div className='min-h-screen'>
            <div className='md:m-10 m-5 grid grid-cols-1 justify-items-center'>
                <div className='grid grid-cols-1 justify-items-center'>
                <img className='md:w-3/4 w-4/5 rounded-3xl shadow-xl' src={web} alt="" />
                </div>
                <div className='mt-5 grid grid-cols-1 justify-items-center'>
                    <p className='text-lime-400 font-semibold text-2xl font-sherif  md:p-2 '>Web Developement</p>
                    <Link to={'/courses/web'} className='border hover:border-lime-400 hover:shadow-lg pl-2 pr-2 rounded-md m-1 bg-gray-200'>Details</Link>
                </div>
            </div>
            <div className='md:m-10 m-5 grid grid-cols-1 justify-items-center'>
                <div className='grid grid-cols-1 justify-items-center'>
                <img className='md:w-3/4 w-4/5 rounded-3xl shadow-xl' src={app} alt="" />
                </div>
                <div className='mt-5 grid grid-cols-1 justify-items-center'>
                    <p className='text-lime-400 font-semibold text-2xl font-sherif  md:p-2 '>App Developement</p>
                    <Link to={'/courses/app'} className='border hover:border-lime-400 hover:shadow-lg pl-2 pr-2 rounded-md m-1 bg-gray-200'>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Course;