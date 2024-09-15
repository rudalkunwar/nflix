import React, { useEffect, useState } from "react";
import fetchMovies from "../services/MovieServices";
import endpoints from "../services/Endpoints";
import Navbar from "./Navbar";
import Loader from "./Loader";
import Play from "./Play";
import Footer from "./Footer";
import TvItems from "./TvItems";
import HomeCover from "./HomeCover";
function TvShows() {
  const [tv, setTv] = useState([]);
  const [loading, SetLoading] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [play, setPlay] = useState(false);
  const [playMovie, setPlayMovie] = useState({});
  useEffect(() => {
    const getTvList = async () => {
      SetLoading(true);
      const params = {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: Math.floor(Math.random()*100),
        sort_by: "popularity.desc",
        with_genres: selectedGenre,
      };
      try {
        const [tvList, genreslist] = await Promise.all([
          fetchMovies(endpoints.tv, params),
          fetchMovies(endpoints.tvgenre),
        ]);
        setGenresList(genreslist.genres);
        let allTvlist = [...tvList];

        for (let i = 3; i < 7; i++) {
          const newarams = {
            ...params,
            page: i,
          };
          const additionalTvList = await fetchMovies(endpoints.tv, newarams);
          allTvlist.push(...additionalTvList);
        }
        const uniqueTvList = [...new Set(allTvlist)];
        setTv(uniqueTvList);
        SetLoading(false);
      } catch (e) {
        SetLoading(false);
        console.log(e);
      }
    };
    getTvList();
  }, [selectedGenre]);
  const handlePlay = (mov) => {
    setPlay(true);
    setPlayMovie(mov);
  };
  const handleGenres = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div className="bg-black">
      <Navbar />
      <HomeCover movie={tv[Math.floor(Math.random()*20)]} />
      <div className="relative">
        <div className="flex flex-col items-center justify-center mx-8 md:gap-4 py-2 md:justify-start md:flex-row">
          <h1 className="text-white px-5 py-2 ">Filter Tv Shows By</h1>
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
            tv.map((tv, index) => (
              <TvItems key={index} tv={tv} play={handlePlay} />
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

export default TvShows;
