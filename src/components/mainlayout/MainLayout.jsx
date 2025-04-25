import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(80vh)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
