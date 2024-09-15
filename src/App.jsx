import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/movies/Home";
import Movies from "./components/movies/Movies";
import Movie from "./components/movies/Movie";
import Page404 from "./components/Page404";
import TvShows from "./components/movies/TvShows";
import Tv from "./components/movies/Tv";
import { ToastContainer } from "react-toastify";
import About from "./components/movies/About";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tvshows/:id" element={<Tv />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;