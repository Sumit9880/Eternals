import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenus, setSubMenus] = useState({
        services: false,
        industries: false,
    });

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setSubMenus(false);
    };

    return (
        <header className=" sticky z-50 top-0 bg-white">
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="./eternalh.png"
                            className="mr-3 h-12 "
                            alt="Logo"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${menuOpen ? 'block' : 'hidden'
                            } w-full lg:flex lg:w-auto lg:order-1`}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:items-center">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className={({ isActive }) => ` font-bold ${isActive ? 'text-primary active' : 'text-gray-600'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setSubMenus({ industries: false, services: !subMenus.services })}
                                    className="font-bold flex items-center text-gray-600 block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0"
                                >
                                    Services <FaAngleDown className='ml-1.5 mt-1.5' />
                                </button>
                                {subMenus.services && (
                                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                        <li>
                                            <NavLink
                                                to="/videogallery"
                                                onClick={closeMenu}
                                                className={({ isActive }) => `block px-4 py-2 text-sm font-bold ${isActive ? 'text-primary active' : 'text-gray-600'} hover:bg-gray-50 hover:text-primary`}
                                            >
                                                Web Application Development
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/photogallery"
                                                onClick={closeMenu}
                                                className={({ isActive }) => `block px-4 py-2 text-sm font-bold ${isActive ? 'text-primary active' : 'text-gray-600'} hover:bg-gray-50 hover:text-primary`}
                                            >
                                                Mobile Application Development
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/photogallery"
                                                onClick={closeMenu}
                                                className={({ isActive }) => `block px-4 py-2 text-sm font-bold ${isActive ? 'text-primary active' : 'text-gray-600'} hover:bg-gray-50 hover:text-primary`}
                                            >
                                                Wordpress site Development
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setSubMenus({ services: false, industries: !subMenus.industries })}
                                    className="font-bold flex items-center text-gray-600 block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0"
                                >
                                    Industries <FaAngleDown className='ml-1.5 mt-1.5' />
                                </button>
                                {subMenus.industries && (
                                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                        <li>
                                            <NavLink
                                                to="/videogallery"
                                                onClick={closeMenu}
                                                className={({ isActive }) => `block px-4 py-2 text-sm font-bold ${isActive ? 'text-primary active' : 'text-gray-600'} hover:bg-gray-50 hover:text-primary`}
                                            >
                                                Web Application Development
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/photogallery"
                                                onClick={closeMenu}
                                                className={({ isActive }) => `block px-4 py-2 text-sm font-bold ${isActive ? 'text-primary active' : 'text-gray-600'} hover:bg-gray-50 hover:text-primary`}
                                            >
                                                Mobile Application Development
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/photogallery"
                                                onClick={closeMenu}
                                                className={({ isActive }) => `block px-4 py-2 text-sm font-bold ${isActive ? 'text-primary active' : 'text-gray-600'} hover:bg-gray-50 hover:text-primary`}
                                            >
                                                Wordpress site Development
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={closeMenu}
                                    className={({ isActive }) => ` font-bold ${isActive ? 'text-primary active' : 'text-gray-600'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0`}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/history"
                                    onClick={closeMenu}
                                    className={({ isActive }) => ` font-bold ${isActive ? 'bg-white text-primary' : 'bg-primary text-white'} block py-2 pr-4 pl-3 duration-200 border border-primary hover:bg-white hover:text-primary lg:py-2 lg:px-6 rounded-2xl`}
                                >
                                    Take a Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={closeMenu}
                                    className={({ isActive }) => ` font-bold ${isActive ? 'text-primary active' : 'text-gray-600'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0`}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
