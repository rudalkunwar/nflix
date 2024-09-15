import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import endpoints from "../services/Endpoints";
import fetchMovies from "../services/MovieServices";
import MovieItem from "./MovieItem";
import Play from "./Play";
import Loader from "./Loader";
import Footer from "./Footer";
import HomeCover from "./HomeCover";
import axios from "../api/axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [coverMovie, setCoverMovie] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [play, setPlay] = useState(false);
  const [playMovie, setPlayMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const handlePlay = (mov) => {
    setPlay(true);
    setPlayMovie(mov);
  };
  const handleGenres = (event) => {
    setSelectedGenre(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: Math.floor(Math.random()*100),
          sort_by: "popularity.desc",
          with_genres: selectedGenre,
        };
        const [movieslist, genreslist] = await Promise.all([
          fetchMovies(endpoints.discover, params),
          fetchMovies(endpoints.moviegenre),
        ]);
        let allMovies = [];
        allMovies.push(...movieslist);
        setCoverMovie(allMovies[[Math.floor(Math.random() * 20)]]);
        for (let i = 6; i < 9; i++) {
          const newParams = {
            ...params,
            page: i,
          };
          setMovies([]);
          const nexPageMovie = await fetchMovies(endpoints.discover, newParams);
          allMovies.push(...allMovies, ...nexPageMovie);
        }
        const uniqueMovies = [...new Set(allMovies)];
        setMovies(uniqueMovies);
        setGenresList(genreslist.genres);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedGenre]);
  const handleLikeMovies = async (movie) => {
    const userId = localStorage.getItem("userId");
    const movieId = movie.id;
    try {
      const response = await axios.post("/likemovie", {
        userId,
        movieId,
        movie,
      });
      if (response.status >= 200 && response.status < 300) {
        toast.success("Added to liked", {
          theme: "colored",
        });
      }  
      else  {
        toast.warn("Already Liked", {
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error adding to liked:", error);
      toast.error("Failed to add to liked", {
        theme: "colored",
      });
    }
  };
  return (
    <div className="bg-black">
      <ToastContainer />
      <Navbar />
      <HomeCover movie={coverMovie} />
      <div className="relative">
        <div className="flex flex-col items-center justify-center mx-8 md:gap-4 py-2 md:justify-start md:flex-row">
          <h1 className="text-white px-5 py-2 ">Filter Movies</h1>
          <select
            name=""
            id=""
            value={selectedGenre}
            onChange={handleGenres}
            className="px-5 py-2 bg-black text-white"
          >
            <option value="">Select Genre</option>
            {genresList &&
              genresList.map((genre, index) => (
                <option key={index} value={genre.id}>
                  {genre.name}
                </option>
              ))}
          </select>
        </div>

        <div className="w-full h-full text-center bg-black">
          {loading ? (
            <div className=" mt-20 h-[70vh]">
              <Loader />
            </div>
          ) : (
            movies.map((movie, index) => (
              <MovieItem
                key={index}
                movie={movie}
                play={handlePlay}
                liked={handleLikeMovies}
              />
            ))
          )}
        </div>
      </div>
      {play && (
        <div className="fixed top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <Play movie={playMovie} onClose={() => setPlay(false)} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Movies;
