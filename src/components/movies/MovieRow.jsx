import React, { useEffect, useState } from "react";
import fetchMovies from "../services/MovieServices";
import MovieItem from "./MovieItem";
import Play from "./Play";
import { toast } from "react-toastify";
import Slider from '../slider/Slider';

function MovieRow({ title, url }) {
  const [movies, setMovies] = useState([]);
  const [play, setPlay] = useState(false);
  const [playMovie, setPlayMovie] = useState({});
  const [shiftValue, setShiftValue] = useState(0);

  const handlePlay = (movie) => {
    setPlay(true);
    setPlayMovie(movie);
  };

  const handleLikeMovies = (movie) => {
    toast.error("Service not available", {
      theme: "colored",
    });
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const params = {
          include_adult: false,
          include_video: true,
          language: "en-US",
          page: Math.ceil(Math.random() * 100),
          sort_by: "popularity.desc",
        };
        const movieData = await fetchMovies(url, params);
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getMovies();
  }, [url]);

  return (
    <>
      <h1 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h1>
      <div className="relative flex items-center overflow-hidden">
        <div className="flex items-center space-x-4 p-4">
          <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hidden">
            {movies.slice(shiftValue, shiftValue + 8).map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                play={handlePlay}
                liked={handleLikeMovies}
              />
            ))}
          </div>
          <Slider shiftval={shiftValue} onShiftChange={setShiftValue} maxShift={movies.length - 5} step={1} />
        </div>
      </div>
      {play && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <Play movie={playMovie} onClose={() => setPlay(false)} />
        </div>
      )}
    </>
  );
}

export default MovieRow;
