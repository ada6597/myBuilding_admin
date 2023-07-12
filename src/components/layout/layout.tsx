"use client";

import React, { ReactElement } from "react";
import Navbar from "../navbar/Navbar";
import { useAppSelector } from "@/redux/store";
import { authState } from "../auth/auth.slice";
import Head from "next/head";

interface IProps {
  children: ReactElement;
}
const Layout: React.FC<IProps> = ({ children }) => {
  const { isUserLoggedIn } = useAppSelector(authState).auth;
  return (
    <React.Fragment>
      <Head>
        <title>admin_mybuilding</title>
      </Head>
      <div className={isUserLoggedIn ? "h-screen content bg-seashell" : ""}>
        {isUserLoggedIn && <Navbar />}
        <div className={isUserLoggedIn ? "bg-seashell p-5   break-words" : ""}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
