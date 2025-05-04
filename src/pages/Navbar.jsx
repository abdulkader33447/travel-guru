import React from "react";
import { NavLink } from "react-router";
import logo from '../assets/Frame.png'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar text-white sm:w-10/12 mx-auto montserrat-font">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-3 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content bg-[#c4c4c400] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink t0="/"><img className="sm:w-20 w-15 text-xl" src={logo} alt="" /></NavLink>
        <span className="relative lg:block hidden ml-28"><IoSearch className="absolute top-2 ml-1"/><input className=" outline-0 py-1 rounded-sm px-7 text-white bg-[#c4c4c4c5]" type="text" placeholder="Search your Destination..." /></span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu -mr-80 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#F9A51A]">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
