import React from 'react';
import logo from '../assets/logo.jpeg'
import '../styles/Banner.css'

const Banner = () => {
    const title = 'GoMovie'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='GoMovie-logo' className='lmj-logo' />
            <h2 className='lmj-title'>{title}</h2>
        </div>
    )
};

export default Banner;