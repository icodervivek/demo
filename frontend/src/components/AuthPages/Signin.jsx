import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signin = () => {
 
  return (
    <>
      <Navbar />

        <div
        className="signup-section flex flex-col font-[linear] tracking-widest md:flex-row items-center justify-center px-6 py-12 "
      >
        {/* Left Section: Form */}
        <div className="form-section w-full md:w-1/2 max-w-md bg-[#4639728f] p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#fff]">
            Sign In
          </h2>
          <form className="flex flex-col gap-4">
           
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 cursor-pointer transition tracking-widest text-white py-3 rounded text-lg "
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Right Section: Image */}
        <div className="description-section w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src="/signin.svg" alt="Sign Up" className="w-80 md:w-96" />
        </div>
      </div>
   
      <Footer />
    </>
  );
};

export default Signin;
