import React from "react";
import PropTypes from "prop-types";

import { API_IMG_URL, API_IMG_URL_W1920 } from "../../../utils/apies";
import { convertReleaseDate } from "../../../utils/helpers";
import { defaultPoster, defaultBackdropImage } from "../../../img";

import {
  Wrapper,
  Background,
  BackgroundImage,
  SingleBlock,
  Container,
  Poster,
  PosterImage,
  Description,
  Title,
  TagLine,
  VoteAvarageContainer,
  VoteAvarage,
  VoteAvarageText,
  Paragraph,
  BoldText,
  OverviewTitle,
  Overview,
} from "./MovieInfo.style";

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

  return `${API_IMG_URL_W1920}${movie.backdrop_path}`;
};

export const MovieInfo = (props) => {
  const { movie } = props;

  return (
    <Wrapper>
      <Background>
        <BackgroundImage src={getBackgropImage(movie)} alt="" />
      </Background>
      <SingleBlock>
        <Container>
          <Poster>
            <PosterImage
              src={
                movie.poster_path
                  ? `${API_IMG_URL}${movie.poster_path}`
                  : defaultPoster
              }
              alt=""
            />
          </Poster>
          <Description>
            <Title>{movie.title}</Title>
            {movie.tagline && <TagLine>{movie.tagline}</TagLine>}
            <VoteAvarageContainer>
              <VoteAvarage vote_avarage={movie.vote_average}>
                {String(movie.vote_average).length === 1
                  ? `${movie.vote_average}.0`
                  : movie.vote_average}
              </VoteAvarage>
              <VoteAvarageText>
                Пользовательский <br /> счёт
              </VoteAvarageText>
            </VoteAvarageContainer>
            <Paragraph>
              <BoldText>Статус</BoldText> - {movie.status}
            </Paragraph>
            <Paragraph>
              <BoldText>Дата выхода</BoldText> -{" "}
              {convertReleaseDate(movie.release_date).substr(0, 15)}
            </Paragraph>
            <Paragraph>
              <BoldText>Жанры</BoldText> -{" "}
              {getValueFromArray(movie.genres).join(", ")}
            </Paragraph>
            <Paragraph>
              <BoldText>Язык оригинала</BoldText> - {movie.original_language}
            </Paragraph>
            <Paragraph>
              <BoldText>Компания</BoldText> -{" "}
              {getValueFromArray(movie.production_companies).join(", ")}
            </Paragraph>
            <Paragraph>
              <BoldText>Страна</BoldText> -{" "}
              {getValueFromArray(movie.production_countries).join(", ")}
            </Paragraph>
            <OverviewTitle>Обзор</OverviewTitle>
            <Overview tagline={!!movie.tagline}>{movie.overview}</Overview>
          </Description>
        </Container>
      </SingleBlock>
    </Wrapper>
  );
};

MovieInfo.defaultProps = {
  movie: {},
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
