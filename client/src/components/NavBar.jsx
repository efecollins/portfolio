import React from 'react';
import data from '../data';
import TechTermsSearchBox from './TechTermsSearchBox';
import _ from 'lodash';
import Socials from './Socials';
// import { BrowserRouter } from 'react-router-dom';

export const NavList = ({ name }) => {
    return (
        <li className="mr-4"><a href={'/' + _.lowerCase(name)}>{name}</a></li>
    )
}

const NavBar = () => {
    return (
        <nav className="flex p-4 pl-6 text-sm leading-normal text-[#ffffffb3] bg-[#161b22] items-center">
            <a href='/'><img src={data.avatar} alt="Home Button" className='w-10 h-10 hover:opacity-50 rounded-full mr-8'></img></a>
            <TechTermsSearchBox />
            <ul className="list-none flex-row flex font-semibold text-[#ffffff]">
                <NavList name='Portfolio' />
                <NavList name='About' />
                <NavList name='Blog' />
                <NavList name='Contact' />
                <NavList name='Mathematics' />
            </ul>
            <Socials />
        </nav>
    )
}

export default NavBar;