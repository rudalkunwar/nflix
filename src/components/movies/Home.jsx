import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeCover from "./HomeCover";
import MovieRow from "./MovieRow";
import fetchMovies from "../services/MovieServices";
import endpoints from "../services/Endpoints";
import Loader from "./Loader";
import TvRow from "./TvRow";
import { ToastContainer } from "react-toastify";

function Home() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { discover } = endpoints;
  useEffect(() => {
    setLoading(true);
    const params = {
      include_adult: false,
      include_video: true,
      language: "en-US",
      page: Math.ceil(Math.random() * 100),
      sort_by: "popularity.desc",
    };
    const getMovies = async () => {
      try {
        const movieData = await fetchMovies(discover, params);
        setMovie(movieData[Math.floor(Math.random() * 20)]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };
    getMovies();
  }, [discover]); 

  return (
    <>
      <ToastContainer />
      <Navbar />
      {loading ? (
        <div className="bg-black h-[80vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <HomeCover movie={movie} />
          <div className="bg-black text-white">
            <MovieRow title="Top Movies" url={endpoints.topRated} />
            <MovieRow title="Trending" url={endpoints.trending} />
            <MovieRow title="Popular" url={endpoints.popular} />
            <TvRow title="Popular Tv Shows" url={endpoints.PopularTv} />
            <TvRow title="Top Rated Tv Shows" url={endpoints.TopRatedTv} />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default Home;
