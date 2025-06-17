import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check login status when navbar mounts
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/profile", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <nav className="text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold">SwiftHire</h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
            <li className="hover:text-[#57c785] cursor-pointer">About Us</li>
            <li className="hover:text-[#57c785] cursor-pointer">Contact Us</li>
          </ul>

          <div className="flex gap-3">
            {!isAuthenticated ? (
              <>
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
              </>
            ) : (
              <>
                <Link to="/profile">
                  <button className="bg-[#1E4633] text-white rounded-full px-5 py-2 hover:bg-[#20362c] transition cursor-pointer">
                    Profile
                  </button>
                </Link>
                <Link to="/signout">
                  <button className="bg-red-600 text-white rounded-full px-5 py-2 hover:bg-red-700 transition cursor-pointer">
                    Sign Out
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

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

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col gap-2 font-medium">
            <li className="hover:text-[#57c785] cursor-pointer">About Us</li>
            <li className="hover:text-[#57c785] cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex flex-col gap-3">
            {!isAuthenticated ? (
              <>
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
              </>
            ) : (
              <>
                <Link to="/profile">
                  <button className="bg-[#1E4633] text-white rounded-full px-5 py-2 hover:bg-[#20362c] transition cursor-pointer">
                    Profile
                  </button>
                </Link>
                <Link to="/signout">
                  <button className="bg-red-600 text-white rounded-full px-5 py-2 hover:bg-red-700 transition cursor-pointer">
                    Sign Out
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
