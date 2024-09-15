import React, { useEffect, useState } from "react";
import fetchMovies from "../services/MovieServices";
import TvItems from "./TvItems";
import PlayTv from "./PlayTv";
import Slider from '../slider/Slider'; // Import the Slider component

function TvRow({ title, url }) {
  const [tvs, setTV] = useState([]);
  const [play, setPlay] = useState(false);
  const [playTV, setplayTV] = useState({});
  const [shiftValue, setShiftValue] = useState(0); // State for the slider position

  const handlePlay = (tv) => {
    setPlay(true);
    setplayTV(tv);
  };
  useEffect(() => {
    const params = {
      include_adult: false,
      include_video: true,
      language: "en-US",
      page: Math.ceil(Math.random() * 100),
      sort_by: "popularity.desc",
    };
    const getTVShows = async () => {
      try {
        const tvData = await fetchMovies(url, params);
        setTV(tvData);
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      }
    };
    getTVShows();
  }, [url]);

  return (
    <>
      <h1 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h1>
      <div className="relative flex items-center overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hidden">
        <div className="flex items-center">
          {tvs.slice(shiftValue, shiftValue + 8).map((tv) => ( 
            <TvItems key={tv.id} tv={tv} play={handlePlay} />
          ))}
          <Slider 
            shiftval={shiftValue} 
            onShiftChange={setShiftValue} 
            maxShift={tvs.length - 5} 
            step={1}
          />
        </div>
      </div>
      {play && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <PlayTv tv={playTV} onClose={() => setPlay(false)} />
        </div>
      )}
    </>
  );
}

export default TvRow;
