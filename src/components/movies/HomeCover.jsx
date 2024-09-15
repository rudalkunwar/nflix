import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Play from "./Play";
import { CreateImageUrl } from "../services/Endpoints";
import { Link } from "react-router-dom";
import { toast} from "react-toastify";

function HomeCover({ movie }) {
  const [play, setPlay] = useState(false);

  const truncate = (text, len) => {
    if (!text) return "";
    return text.length > len ? text.substring(0, len) + "..." : text;
  };

  const handlePlay = () => {
    setPlay(true);
  };

  return (
    <>
      <div className="relative text-white">
        {movie && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-black opacity-70"></div>
            <img
              src={CreateImageUrl(movie.backdrop_path, "original")}
              className="w-full h-[70vh] md:h-[90vh] object-cover "
              alt={movie.title}
            />
            <div className="absolute w-full bottom-0 md:bottom-[8%] p-4 md:p-8">
              <h1 className="text-3xl md:text-6xl font-semibold">
                <Link className="hover:underline" to={`/movies/${movie.id}`}>
                  {movie.original_title}
                </Link>
              </h1>
              <div className="mt-4 md:flex ">
                <button
                  onClick={handlePlay}
                  className="flex px-5 py-2 bg-gray-300 text-black mr-4 hover:bg-gray-700 hover:text-white transition duration-300"
                >
                  <FaPlay className="text-2xl mr-2" />
                  <h3>Play</h3>
                </button>
                <button onClick={()=>toast.warn('Service not aviliable',{theme:"colored"})} className="flex my-2 sm:my-0 px-5 py-2 border-2 rounded-sm hover:bg-gray-400 hover:text-black transition duration-500 ease-in-out">
                  <IoMdAdd className="text-sm sm:text-xl mr-2" />
                  <h3>Watch Later</h3>
                </button>
              </div>
              <div className="hidden sm:block">
                <p className="mt-4 text-sm text-gray-400">
                  {movie.release_date}
                </p>
                <p className="mt-2  md:max-w-[70%] lg:max-w-[50%] xl:max-w[35%] text-gray-200">
                  {truncate(movie.overview, 250)}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      {play && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <Play movie={movie} onClose={() => setPlay(false)} />
        </div>
      )}
    </>
  );
}

export default HomeCover;
