import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const [unauthorized, setUnauthorized] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/workers", {
        withCredentials: true,
      })
      .then((res) => {
        setWorkers(res.data);
        setUnauthorized(false);
      })
      .catch((err) => {
        console.error("Error fetching workers: ", err);
        if (err.response && err.response.status === 401) {
          setUnauthorized(true);
        }
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-6 py-8 tracking-widest font-[linear]">
        <h1 className="text-4xl overflow-hidden font-bold text-center mb-8">
          Worker Profiles
        </h1>

        {unauthorized ? (
          <div className="worker-section py-20 rounded text-center m-20 text-[#fff] text-lg font-semibold">
            <p className="text-2xl">
              You must be logged in to view our worker profiles.
            </p>
            <div className="mt-5">
              <Link
                to="/signup"
                className="text-amber-500 hover:text-amber-700"
              >
                Click here to Sign Up or Sign In
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {workers.map((profile, index) => (
              <div
                key={index}
                className="bg-[#111] border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">Name:</span>{" "}
                  {profile.fullname}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">Email:</span>{" "}
                  {profile.email}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">Gender:</span>{" "}
                  {profile.gender}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">Age:</span>{" "}
                  {profile.age}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">DOB:</span>{" "}
                  {profile.dob}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">
                    Profession:
                  </span>{" "}
                  {profile.profession}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">
                    Experience:
                  </span>{" "}
                  {profile.experience}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">City:</span>{" "}
                  {profile.city}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">District:</span>{" "}
                  {profile.district}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">State:</span>{" "}
                  {profile.state}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Phone:</span>{" "}
                  {profile.phone}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Workers;
