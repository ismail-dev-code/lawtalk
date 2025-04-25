import React from "react";
import logoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLink = [
    { name: "Home", path: "/" },
    { name: "My Booking", path: "/booking" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink.map((nav) => (
              <li key={nav.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 bg-blue-100" : "text-gray-600"
                  }
                  to={nav.path}
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <img src={logoImg} alt="logo image" />
        <Link to="/" className="text-xl font-bold">
          LawTalk
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink.map((nav) => (
            <li key={nav.name}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600 bg-blue-100" : "text-gray-600"
                }
                to={nav.path}
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact Now</a>
      </div>
    </div>
  );
};

export default Navbar;
