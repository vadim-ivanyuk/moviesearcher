import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { API_URL, API_KEY_MOVIE_DB_V3 } from "../../utils/apies";

import { MovieInfo } from "./components/MovieInfo";
import { Trailers } from "./components/Trailers";
import { MoreInfo } from "./components/MoreInfo";
import { Actors } from "./components/Actors";
import { SimilarMovies } from "./components/SimilarMovies";
import { Reviews } from "./components/Reviews";

import { MoviePageWrapper, MoviePageContainer } from "./MoviePage.style";

export const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState({});
  const filters = useSelector((store) => store.filters);
  const { id } = match.params;

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
  }, [id]);

  return (
    <>
      <MovieInfo movie={movie} />
      <MoviePageWrapper>
        <MoviePageContainer>
          <Trailers movie_id={movie.id} />
        </MoviePageContainer>
      </MoviePageWrapper>
      <MoreInfo movie={movie} />
      <MoviePageWrapper>
        <MoviePageContainer>
          <Actors movie_id={movie.id} />
          <SimilarMovies movie_id={movie.id} />
          <Reviews movie_id={movie.id} />
        </MoviePageContainer>
      </MoviePageWrapper>
    </>
  );
};
