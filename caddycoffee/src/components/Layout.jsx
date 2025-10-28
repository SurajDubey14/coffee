import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="flex-1 p-4">
        <Outlet /> {/* Renders the current page here */}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;
