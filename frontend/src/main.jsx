import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import Signup from "./components/AuthPages/Signup.jsx";
import Signin from "./components/AuthPages/Signin.jsx";
import Profile from "./components/AuthPages/Profile.jsx";
import Signout from "./components/AuthPages/Signout.jsx";
import Workers from "./components/AuthPages/Workers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signout" element={<Signout />}></Route>
        <Route path="/workers" element={<Workers />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);