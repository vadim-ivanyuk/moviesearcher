import React from "react";
import { API_IMG_URL } from "../../utils/apies";
import defaultPoster from "../../img/not-found-poster.png";

export const MovieItem = (props) => {
  const { movie } = props;

  const getReleaseDate = () => {
    let date = new Date(movie.release_date);
    date.setDate(date.getDate());

    return String(date);
  };

  return (
    <div className="movie-item ml-1 mr-1">
      <div className="poster-image">
        <img
          className="image"
          src={
            movie.poster_path
              ? `${API_IMG_URL}${movie.poster_path}`
              : defaultPoster
          }
          alt=""
        />
      </div>
      <div className="desc">
        <p className="vote-avarage">
          {String(movie.vote_average).substr(0, 3)}
        </p>
        <p className="title">{movie.title}</p>
        <p className="release-date">{getReleaseDate().substr(4, 11)}</p>
      </div>
    </div>
  );
};
