import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import queryString from "query-string";

import { API_URL, API_KEY_MOVIE_DB_V3 } from "../../utils/apies";
import { MovieItem } from "./MovieItem";
import { Loader } from "../../elements/Loader";

const getMoviesParams = (params) => ({
  api_key: API_KEY_MOVIE_DB_V3,
  language: params.language,
  sort_by: params.sort_by,
  primary_release_year: params.primary_release_year,
  with_genres: params.with_genres,
  page: params.page,
});

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const filters = useSelector((store) => store.filters);

  useEffect(() => {
    axios
      .get(
        `${API_URL}/discover/movie?${queryString.stringify(
          getMoviesParams(filters)
        )}`
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
      {movies.length ? (
        movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};
