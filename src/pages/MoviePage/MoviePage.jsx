import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import queryString from "query-string";
import axios from "axios";
import { API_URL, API_KEY_MOVIE_DB_V3 } from "../../utils/apies";
import { MoviePageHeader } from "./MoviePageHeader";
import { MoviePageTrailers } from "./MoviePageTrailers";

const getMovieParams = (params) => ({
  language: params.language,
  api_key: API_KEY_MOVIE_DB_V3,
});

export const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const filters = useSelector((store) => store.filters);

  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(
        `${API_URL}/movie/${id}?${queryString.stringify(
          getMovieParams(filters)
        )}`
      )
      .then(({ data }) => {
        setMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <MoviePageHeader movie={movie} />
      <MoviePageTrailers movie_id={movie.id} />
    </div>
  );
};
