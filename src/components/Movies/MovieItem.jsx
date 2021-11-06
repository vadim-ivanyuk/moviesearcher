import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { API_IMG_URL } from "../../utils/apies";
import { convertReleaseDate } from "../../utils/helpers";
import { defaultPoster } from "../../img";

import {
  MovieItemWrapper,
  Poster,
  PosterImage,
  Description,
  RateMovie,
  MovieTitle,
  Release,
} from "./MovieItem.style";

export const MovieItem = ({ movie, id = false }) => {
  return (
    <MovieItemWrapper id={id.toString()}>
      <Poster>
        <Link to={`/movie/${movie.id}`}>
          <PosterImage
            src={
              movie.poster_path
                ? `${API_IMG_URL}${movie.poster_path}`
                : defaultPoster
            }
            alt=""
          />
        </Link>
      </Poster>
      <Description>
        <RateMovie vote_average={movie.vote_average}>
          {String(movie.vote_average).substr(0, 3)}
        </RateMovie>
        <MovieTitle>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </MovieTitle>
        <Release>
          {convertReleaseDate(movie.release_date).substr(4, 11)}
        </Release>
      </Description>
    </MovieItemWrapper>
  );
};

MovieItem.defaultProps = {
  movie: {},
};

MovieItem.propTypes = {
  movie: PropTypes.object,
};
