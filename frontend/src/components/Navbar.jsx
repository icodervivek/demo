import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" text-white px-6 py-4">
      {/* Top Row - Flex container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}

        
          <Link to="/">
          <h1 className="text-2xl font-bold">SwiftHire</h1>
          </Link>
        

        {/* Nav Links + Buttons (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
            <li className="hover:text-[#57c785] cursor-pointer">About Us</li>
            <li className="hover:text-[#57c785] cursor-pointer">Contact Us</li>
          </ul>

          <div className="flex gap-3">
              <Link to="/signup">
              <button className="bg-[#1E4633] text-white rounded-full px-5 py-2 hover:bg-[#20362c] transition cursor-pointer">
                Sign Up
              </button>
              </Link>
              <Link to="/signin">
              <button className="bg-[#73248b] text-white rounded-full px-5 py-2 hover:bg-[#402947] transition cursor-pointer">
                Sign In
              </button>
              </Link>
          </div>
        </div>

        {/* Hamburger (visible on small only) */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col gap-2 font-medium">
            <li className="hover:text-[#57c785] cursor-pointer">About Us</li>
            <li className="hover:text-[#57c785] cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex flex-col gap-3">
            <button className="bg-[#1E4633] text-white rounded-full px-5 py-2 hover:bg-[#20362c] transition cursor-pointer">
              Sign Up
            </button>
            <button className="bg-[#73248b] text-white rounded-full px-5 py-2 hover:bg-[#402947] transition cursor-pointer">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
