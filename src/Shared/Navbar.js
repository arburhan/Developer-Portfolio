import React from 'react';
import bannerImage from '../Assests/Images/webiconImage.png';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navTabs = <>
        <li> <NavLink to='/home'>Home</NavLink> </li>
        <li> <a href='#aboutMe'>About Me</a> </li>
        <li> <a href='#projects'>Projects</a> </li>
        <li> <NavLink to='/blog'>Blog</NavLink> </li>
        <li> <a href='#contactMe'>Contact Me</a> </li>
    </>
    return (
        <nav className='sticky top-0 bg-base-500 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navTabs}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-md"> <img width={30} src={bannerImage} alt="" />Borhan's Portfolio</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navTabs}
                    </ul>
                </div>
                {/*   <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;