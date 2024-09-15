import React, { useState } from "react";
import { CreateImageUrl } from "../services/Endpoints";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function TvItems({ play, tv }) {
  const [isHovered, setIsHovered] = useState(false);
  const { title, backdrop_path, poster_path } = tv;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block rounded-md overflow-hidden m-2 text-white"
      >
        <img
          className="w-full h-40 block object-cover object-top"
          src={CreateImageUrl(backdrop_path ?? poster_path, "w500")}
          alt={title}
        />
        <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-80">
          <div className="whitespace-normal test-xs md:text-sm h-full flex flex-col gap-2 justify-center">
            <p className="text-center text-white">
              <Link className="hover:underline" to={`/tvshows/${tv.id}`}>{tv.name}</Link>
            </p>
            {isHovered&&
          <div className="flex justify-center gap-2 py-5 ">
          <AiFillPlayCircle
            size={50}
            className="hover:text-gray-600 cursor-pointer "
            onClick={() => play(tv)}
          />
          <IoIosAddCircle
            size={50}
            className="hover:text-gray-600 cursor-pointer "
            onClick={()=>toast.warn('Service not aviliable',{theme:"colored"})}
          />
          <AiFillHeart
            size={50}
            className="hover:text-red-600 cursor-pointer "
            onClick={()=>toast.warn('Service not aviliable',{theme:"colored"})}
          />
        </div>}
            
          </div>
        </div>
      </div>
    </>
  );
}
export default TvItems;
