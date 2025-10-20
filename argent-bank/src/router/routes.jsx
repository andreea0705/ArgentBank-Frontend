import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
//import Login from "../pages/Login";
//import Profile from "../pages/Profile";
import Main from "../pages/Home";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path= "/" element= {<Main/>} />
      </Routes> 
    </>
  );
};

export default router;
