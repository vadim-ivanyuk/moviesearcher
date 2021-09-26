import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { API_URL, API_KEY_MOVIE_DB_V3 } from "../../utils/apies";

import { MoviePageHeader } from "./components/MoviePageHeader";
import { MoviePageTrailers } from "./components/MoviePageTrailers";
import { MoviePageActors } from "./components/MoviePageActors";

import { MoviePageWrapper, MoviePageContainer } from "./MoviePage.style";

export const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const filters = useSelector((store) => store.filters);

  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(
        `${API_URL}/movie/${id}?api_key=${API_KEY_MOVIE_DB_V3}&language=${filters.language}`
      )
      .then(({ data }) => {
        setMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <MoviePageHeader movie={movie} />
      <MoviePageWrapper>
        <MoviePageContainer>
          <MoviePageTrailers movie_id={movie.id} />
          <MoviePageActors movie_id={movie.id} />
        </MoviePageContainer>
      </MoviePageWrapper>
    </>
  );
};
