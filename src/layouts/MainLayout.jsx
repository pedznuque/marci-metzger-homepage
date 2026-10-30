import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="main_container">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
