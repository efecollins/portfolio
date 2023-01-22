import React from 'react';
import data from '../data';
import TechTermsSearchBox from './TechTermsSearchBox';
// import { BrowserRouter } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex p-4 pl-6 text-sm leading-normal text-[#ffffffb3] bg-[#161b22] items-center">
        <a href='/'><img src={data.avatar} alt="Home Button" className='w-10 h-10 rounded-full mr-8'></img></a>
        <TechTermsSearchBox />
            <ul className="list-none">
                        {/* <li><a>Portfolio</a></li>
                        <li><a>About</a></a></li>
                        <li><a>Blog</a></a></li>
                        <li><a>Contact</a></a></li>
                        <li><a>Mathematics</a></a></li > */}
        {/* <li><a>LinkedIn</a></a></li >
            <li><a>Twitter</a></a></li >
                <li><a>Instagram</a></a></li > */}
            </ul>
        </nav>
    )
}

export default NavBar;