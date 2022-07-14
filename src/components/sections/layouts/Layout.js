import React from "react";
import Footer from "./Footer";
import Navbar from "./navbar";

//Layout is used for template ( navbar and footer) to be used in different pages
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
