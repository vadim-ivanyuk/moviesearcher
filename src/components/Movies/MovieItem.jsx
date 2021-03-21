import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { API_IMG_URL } from "../../utils/apies";
import { convertReleaseDate } from "../../utils/helpers";
import { defaultPoster } from "../../img";

export const MovieItem = (props) => {
  const { movie } = props;

  return (
    <div className="movie-item ml-1 mr-1">
      <div className="poster-image">
        <Link to={`/movie/${movie.id}`}>
          <img
            className="image"
            src={
              movie.poster_path
                ? `${API_IMG_URL}${movie.poster_path}`
                : defaultPoster
            }
            alt=""
          />
        </Link>
      </div>
      <div className="desc">
        <p className="vote-avarage">
          {String(movie.vote_average).substr(0, 3)}
        </p>
        <p className="title">
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </p>
        <p className="release-date">
          {convertReleaseDate(movie.release_date).substr(4, 11)}
        </p>
      </div>
    </div>
  );
};

MovieItem.defaultProps = {
  movie: {},
};

MovieItem.propTypes = {
  movie: PropTypes.object,
};
