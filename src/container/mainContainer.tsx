import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const MainContainer = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-1 flex-col bg-primaryBg">
      <Header />
      <div className="px-5 py-2 flex flex-1 pt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainer;
