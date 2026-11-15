import React from "react";
import Sidenav from "../templates/Sidenav";
import TopNav from "../templates/TopNav";

const Home = () => {
  document.title = "Movies_Hub | Homepage";
  return (
    <>
      <Sidenav />
      <div className="h-full w-[80%]">
        <TopNav />
      </div>
    </>
  );
};

export default Home;
