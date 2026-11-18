import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Trending from "./components/Trending";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
      </Route>
    </Routes>
  );
};

export default App;