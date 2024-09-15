import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Loader from "./Loader";
import fetchMovies from "../services/MovieServices";
function Play({ movie, onClose }) {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrailer = async () => {
      setLoading(true);
      try {
        const response = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`);
        const trailerVideo = response.find(
          (video) => video.type === "Trailer"
        );
        setTrailer(trailerVideo);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setLoading(false);
      }
    };
    fetchTrailer();
    return () => {
      setTrailer(null);
    };
  }, [movie.id]);
  return (
    <div className="relative inset-0 z-50 flex justify-center items-center bg-opacity-75 bg-gray-800">
      <button
        onClick={onClose}
        className="absolute top-0 right-0 m-2 text-white hover:text-gray-200 focus:outline-none"
      >
        <FaTimes size={30} />
      </button>
      {trailer && !loading ? (
        <div className="bg-white rounded-lg overflow-hidden">
          <div>
            <iframe
              className="h-56 w-full lg:w-[50rem]  lg:h-[50vh]"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen //
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="h-56 w-full lg:w-[50rem]  lg:h-[50vh]">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default Play;
