import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../templates/Sidenav";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative flex min-h-screen w-screen overflow-x-hidden bg-[#1f1e24]">
      {/* Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transition-all duration-300 ease-in-out md:relative ${isSidebarOpen
            ? "w-72 translate-x-0 md:w-[20%] md:min-w-[240px]"
            : "-translate-x-full overflow-hidden md:w-0 md:min-w-0"
          }`}
      >
        <Sidenav />
      </div>

      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        ></div>
      )}

      {/* Center Arrow Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-1/2 z-50 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-r-md border-y border-r border-zinc-700 bg-[#27272a] text-zinc-300 shadow-xl transition-all hover:bg-[#3f3f46] hover:text-white md:absolute"
        style={{
          left: isSidebarOpen ? "288px md:min(20%, 240px)" : "0px",
        }}
        title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        <i
          className={
            isSidebarOpen
              ? "ri-arrow-left-s-line text-xl"
              : "ri-arrow-right-s-line text-xl"
          }
        ></i>
      </button>

      
      <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto bg-[#1f1e24]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;