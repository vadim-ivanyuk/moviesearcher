import React from "react";
import PropTypes from "prop-types";
import { API_IMG_URL, API_IMG_URL_W1920 } from "../../utils/apies";
import { convertReleaseDate } from "../../utils/helpers";
import defaultBackdropImage from "../../img/not-found-backdrop.jpg";
import defaultPosterImage from "../../img/not-found-poster.jpg";
import {
  MovieHeader,
  MovieHeaderBackground,
  MovieHeaderBackgroundImage,
  MovieHeaderSingleBlock,
  MovieHeaderContainer,
  MovieHeaderPoster,
  MovieHeaderPosterImage,
  MovieHeaderDescription,
  MovieHeaderTitle,
  MovieHeaderTagLine,
  MovieHeaderVoteAvarageContainer,
  MovieHeaderVoteAvarage,
  MovieHeaderVoteAvarageText,
  MovieHeaderParagraph,
  MovieHeaderBoldTest,
  MovieHeaderOverviewTitle,
  MovieHeaderOverview,
} from "./MoviePageHeader.style";

const getValueFromArray = (arr = []) => {
  let resultArr = [];

  arr.forEach((item) => {
    resultArr.push(item.name);
  });

  return resultArr;
};

const getBackgropImage = (movie) => {
  if (!movie.backdrop_path) {
    return defaultBackdropImage;
  }

  const path = movie.belongs_to_collection
    ? movie.belongs_to_collection.backdrop_path
    : movie.backdrop_path;

  return `${API_IMG_URL_W1920}${path}`;
};

export const MoviePageHeader = (props) => {
  const { movie } = props;

  return (
    <MovieHeader>
      <MovieHeaderBackground>
        <MovieHeaderBackgroundImage src={getBackgropImage(movie)} alt="" />
      </MovieHeaderBackground>
      <MovieHeaderSingleBlock>
        <MovieHeaderContainer>
          <MovieHeaderPoster>
            <MovieHeaderPosterImage
              src={
                movie.poster_path
                  ? `${API_IMG_URL}${movie.poster_path}`
                  : defaultPosterImage
              }
              alt=""
            />
          </MovieHeaderPoster>
          <MovieHeaderDescription>
            <MovieHeaderTitle>{movie.title}</MovieHeaderTitle>
            {movie.tagline && (
              <MovieHeaderTagLine>{movie.tagline}</MovieHeaderTagLine>
            )}
            <MovieHeaderVoteAvarageContainer>
              <MovieHeaderVoteAvarage vote_avarage={movie.vote_average}>
                {String(movie.vote_average).length === 1
                  ? `${movie.vote_average}.0`
                  : movie.vote_average}
              </MovieHeaderVoteAvarage>
              <MovieHeaderVoteAvarageText>
                Пользовательский <br /> счёт
              </MovieHeaderVoteAvarageText>
            </MovieHeaderVoteAvarageContainer>
            <MovieHeaderParagraph>
              <MovieHeaderBoldTest>Статус</MovieHeaderBoldTest> - {movie.status}
            </MovieHeaderParagraph>
            <MovieHeaderParagraph>
              <MovieHeaderBoldTest>Дата выхода</MovieHeaderBoldTest> -{" "}
              {convertReleaseDate(movie.release_date).substr(0, 15)}
            </MovieHeaderParagraph>
            <MovieHeaderParagraph>
              <MovieHeaderBoldTest>Жанры</MovieHeaderBoldTest> -{" "}
              {getValueFromArray(movie.genres).join(", ")}
            </MovieHeaderParagraph>
            <MovieHeaderParagraph>
              <MovieHeaderBoldTest>Язык оригинала</MovieHeaderBoldTest> -{" "}
              {movie.original_language}
            </MovieHeaderParagraph>
            <MovieHeaderParagraph>
              <MovieHeaderBoldTest>Компания</MovieHeaderBoldTest> -{" "}
              {getValueFromArray(movie.production_companies).join(", ")}
            </MovieHeaderParagraph>
            <MovieHeaderParagraph>
              <MovieHeaderBoldTest>Страна</MovieHeaderBoldTest> -{" "}
              {getValueFromArray(movie.production_countries).join(", ")}
            </MovieHeaderParagraph>
            <MovieHeaderOverviewTitle>Обзор</MovieHeaderOverviewTitle>
            <MovieHeaderOverview tagline={!!movie.tagline}>
              {movie.overview}
            </MovieHeaderOverview>
          </MovieHeaderDescription>
        </MovieHeaderContainer>
      </MovieHeaderSingleBlock>
    </MovieHeader>
  );
};

MoviePageHeader.defaultProps = {
  movie: {},
};

MoviePageHeader.propTypes = {
  movie: PropTypes.object.isRequired,
};
