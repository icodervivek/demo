import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile", { withCredentials: true }) // if using cookies
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error("Not Authenticated:", err);
        navigate("/signin");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen tracking-widest flex items-center justify-center font-[linear]">
        {user ? (
          <div className="bg-black p-8 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
            <p className="text-lg">Email: {user.email}</p>
          </div>
        ) : (
          <p className="text-lg">Loading profile...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
