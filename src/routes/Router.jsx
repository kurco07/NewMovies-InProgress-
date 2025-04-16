import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesInfo from "../components/MoviesInfo";
import Landing from "../pages/Landing";
import Navbar from "../components/Navbar";
import Favoritos from "../pages/Favoritos";

const Router = () => {
  return (
    <>
      <div className="fullbody">
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/peliculas/:id" element={<MoviesInfo />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </div>
    </>
  );
};

export default Router;
