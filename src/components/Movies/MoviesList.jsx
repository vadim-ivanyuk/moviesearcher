import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL, API_KEY_MOVIE_DB_V3 } from "../../utils/apies";
import { MovieItem } from "./MovieItem";

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const filters = useSelector((store) => store.filters);

  useEffect(() => {
    axios
      .get(
        `${API_URL}/discover/movie?api_key=${API_KEY_MOVIE_DB_V3}&language=${filters.language}&sort_by=${filters.sort_by}&primary_release_year=${filters.primary_release_year}&with_genres=${filters.with_genres}&page=${filters.page}`
      )
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, [
    filters.language,
    filters.page,
    filters.primary_release_year,
    filters.sort_by,
    filters.with_genres,
  ]);

  return (
    <div className="movies-container d-flex flex-wrap justify-content-center align-items-center">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
