"use client";

import React from "react";
import Login from "./auth/page";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <React.Fragment>
      <Login />
      <ToastContainer />
    </React.Fragment>
  );
};
export default Home;
