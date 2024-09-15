import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ReactPlayer from "react-player";
import fetchMovies from "../services/MovieServices";
import MovieDetails from "./MovieDetails";
import Footer from "./Footer";
import Loader from "./Loader";

function Movie() {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: Math.ceil(Math.random() * 100),
          sort_by: "popularity.desc",
        };
        const [
          trailerResponse,
          movieResponse,
          creditsResponse,
        ] = await Promise.all([
          fetchMovies(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            params
          ),
          fetchMovies(`https://api.themoviedb.org/3/movie/${id}`, params),
          fetchMovies(
            `https://api.themoviedb.org/3/movie/${id}/credits`,
            params
          ),
          fetchMovies(
            `https://api.themoviedb.org/3/movie/${id}/watch/providers`,
            params
          ),
        ]);
        setTrailer(trailerResponse.find((video) => video.type === "Trailer"));
        setMovie(movieResponse);
        setCredits(creditsResponse.cast);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => {
      setTrailer(null);
    };
  }, [id]);
  return (
    <>
      <Navbar />
      {loading ? (
        <div className="h-screen bg-black">
          <Loader />
        </div>
      ) : (
        <>
          {trailer && (
            <div className="bg-gray-400">
              <div className="text-center">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${trailer.key}`}
                  controls
                  width="100%"
                  height="100vh"
                />
              </div>
            </div>
          )}
          <div>
            <MovieDetails movie={movie} credits={credits} />
          </div>
        </>
      )}

      <Footer />
    </>
  );
}

export default Movie;
