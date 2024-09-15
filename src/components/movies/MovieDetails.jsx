import React from "react";
import { CreateImageUrl } from "../services/Endpoints";
import Genre from "./Genre";
import Info from "./Info";
import Cast from "./Cast";

const MovieDetails = ({ movie, credits }) => {
  if (!movie || !credits) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-gray-900 text-white p-6 shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={CreateImageUrl(movie.poster_path, "w500")}
            alt={movie.title}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
          <p className="text-lg mb-4">{movie.overview}</p>
          <div className="flex flex-wrap items-center mb-4">
            <span className="mr-4">
              <strong>Release Date:</strong> {movie.release_date}
            </span>
            <span className="mr-4">
              <strong>Runtime:</strong> {movie.runtime} minutes
            </span>
            <span className="mr-4">
              <strong>IMDb Rating:</strong> {movie.vote_average}
            </span>
          </div>
          <p className="mb-4">{movie.tagline}</p>
          <a href={movie.homepage} className="text-blue-400 hover:underline">
            Visit Homepage
          </a>
          <Genre movie={movie} />
          {/* <Info movie={movie} /> */}
          <Cast cast={credits} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
