import { useDispatch } from "react-redux";
import { addPUpcomingMovies } from "../utils/moviesSlice";
import { API_CONSTANTS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_CONSTANTS
    );
    const data = await response.json();
    console.log("useucomingMovies");
    console.log(data.results);
    dispatch(addPUpcomingMovies(data?.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
