import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#F9F5F1] shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#5C3D2E]">Dwello</div>

      {/* Menu Links - Desktop */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li>
          <NavLink to='#'  className="hover:text-[#5C3D2E] transition">Home </NavLink>
        </li>
        <li>
          <NavLink to='#Features'  className="hover:text-[#5C3D2E] transition"> Service </NavLink>
        </li>
        <li>
            <NavLink to='#Testimonials'  className="hover:text-[#5C3D2E] transition">Agents</NavLink>
        </li>
          <li>
            <NavLink to='#Footer'  className="hover:text-[#5C3D2E] transition">Contact </NavLink>
        </li>
      </ul>

      {/* Auth Buttons - Desktop */}
      <div className="hidden md:flex space-x-4">
        <button className="px-5 py-2 border border-[#5C3D2E] text-[#5C3D2E] rounded-full font-medium hover:bg-[#5C3D2E] hover:text-white transition">
          Log in
        </button>
        <button className="px-5 py-2 bg-[#5C3D2E] text-white rounded-full font-medium hover:bg-[#43281E] transition">
          Sign up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-3xl text-[#5C3D2E] focus:outline-none">
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
