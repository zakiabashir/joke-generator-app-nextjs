"use client";
import { Link as ScrollLink } from 'react-scroll';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "About",
    path: "about",
  },
  
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 shadow-lg rounded-2xl bg-gradient-to-br from-pink-800 to-teal-600 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2  ">
      <ScrollLink to="home" smooth={true} duration={500} className="text-2xl md:text-2xl p-2 text-white font-semibold cursor-pointer shadow-lg rounded-2xl bg-gradient-to-br from-pink-400 to-teal-400" onClick={() => setNavbarOpen(false)}>
      😂Random Jokes😂
        </ScrollLink>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 shadow-lg rounded-2xl bg-gradient-to-br from-pink-400 to-teal-400">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className="text-white text-2xl p-2 hover:text-primary-500 cursor-pointer shadow-lg rounded-2xl bg-gradient-to-br from-pink-400 to-teal-400"
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />}
    </nav>
  );
};

export default Navbar;