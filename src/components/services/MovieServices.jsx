import axios from "axios";

const fetchMovies = async (endpoint, params) => {


  // console.log("api key "+process.env.REACT_APP_TMDB_API_KEY)

  try {
    const response = await axios.get(endpoint, {
      params,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWMxOTEzYzRhYTNiNzg5MmY1ZjcwZTYxZGE4YjE3NyIsIm5iZiI6MTcyNjE5ODIxOC4xMDI5NjYsInN1YiI6IjY1ZjY5N2IwZTIxMDIzMDE2NWVkZDYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OBS23NltAzZyTFRtPaZAZORKvVuH7Glw4aKhYzlCh3A`,
        accept: "application/json",
      },
    });
    
    if(!response.data.results) return response.data;
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export default fetchMovies;
