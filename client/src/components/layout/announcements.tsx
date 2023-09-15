"use client"
import React from "react";
import DefaultNavbar from "../Navbar";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {

  return (
    <div>
      <DefaultNavbar />
      <main className="min-h-screen flex justify-center pt-6 px-36">
        {children}
      </main>
    </div>
  );

};

export default Layout;
