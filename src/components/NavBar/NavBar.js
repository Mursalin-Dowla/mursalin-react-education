import React from 'react';
import logo from '../../images/logo.png'
import CustomLink from '../../utilities/CustomLink';

const NavBar = () => {
    return (
        <div className='md:flex m-10 md:justify-between grid grid-cols-1 justify-items-center'>
            <div className='md:ml-28'>
                <img className='w-8 h-8' src={logo} alt="" />
            </div>
            <div className='md:mr-28'>
                <ul className='flex justify-center'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/review'>Review</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;