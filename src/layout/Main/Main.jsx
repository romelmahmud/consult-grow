import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const Main = () => {
  return (
    <div className="bg-slate-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
