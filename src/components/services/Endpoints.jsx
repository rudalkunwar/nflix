const baseURL = "https://api.themoviedb.org/3";
const endpoints = {
  base:"https://api.themoviedb.org/3",
  discover: `${baseURL}/discover/movie`,
  popular: `${baseURL}/movie/popular`,
  topRated: `${baseURL}/movie/top_rated`,
  trending: `${baseURL}/trending/all/day`,
  comedy: `${baseURL}/discover/movie&with_genres=35`,
  upcoming: `${baseURL}/movie/upcoming`,
  moviegenre: `${baseURL}/genre/movie/list`,
  tv: `${baseURL}/discover/tv`,
  tvgenre: `${baseURL}/genre/tv/list`,
  AiringToday: `${baseURL}/tv/airing_today`,
  OnTheAir: `${baseURL}/tv/on_the_air`,
  PopularTv: `${baseURL}/tv/popular`,
  TopRatedTv: `${baseURL}/tv/top_rated`,
  TvVideos:``
};
export function CreateImageUrl(filename, size) {
  return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endpoints;