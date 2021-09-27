import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import queryString from "query-string";

import { API_URL, API_KEY_MOVIE_DB_V3 } from "../../../utils/apies";
import { facebook, instagram, twitter, imdb } from "../../../img";

import {
  Wrapper,
  Container,
  Budget,
  BlockTitle,
  Keywords,
  Social,
  Paragraph,
  KeywordsList,
  KeywordsListItem,
  SocialLinks,
  SocialLinksItem,
} from "./MoreInfo.style";

const getParams = (params) => ({
  api_key: API_KEY_MOVIE_DB_V3,
  language: params.language,
});

const numberWithCommas = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const MoreInfo = ({ movie }) => {
  const [keywords, setKeywords] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});
  const filters = useSelector((store) => store.filters);

  useEffect(() => {
    if (movie.id) {
      axios
        .all([
          axios.get(
            `${API_URL}/movie/${movie.id}/keywords?${queryString.stringify(
              getParams(filters)
            )}`
          ),
          axios.get(
            `${API_URL}/movie/${movie.id}/external_ids?${queryString.stringify(
              getParams(filters)
            )}`
          ),
        ])
        .then((data) => {
          setKeywords(data[0].data.keywords);
          console.log(data[1].data);
          setSocialLinks(data[1].data);
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [movie.id]);

  return (
    <Wrapper>
      <Container>
        <Budget>
          <BlockTitle>More Info</BlockTitle>
          <Paragraph>
            <strong>Бюджет:</strong> ${numberWithCommas(movie.budget || 0)}
          </Paragraph>
          <Paragraph>
            <strong>Сборы:</strong> ${numberWithCommas(movie.revenue || 0)}
          </Paragraph>
          <Paragraph>
            <strong>Продолжительность:</strong> {movie.runtime}m
          </Paragraph>
          <Paragraph>
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
              Посетить домашнюю страницу
            </a>
          </Paragraph>
        </Budget>
        <Keywords>
          <BlockTitle>Keywords</BlockTitle>
          <KeywordsList>
            {keywords.map((keyword) => (
              <KeywordsListItem key={keyword.id}>
                {keyword.name}
              </KeywordsListItem>
            ))}
          </KeywordsList>
        </Keywords>
        <Social>
          <BlockTitle>Social links</BlockTitle>
          <SocialLinks>
            <SocialLinksItem>
              <a
                href={`https://www.facebook.com/${socialLinks.facebook_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook icon" />
              </a>
            </SocialLinksItem>
            <SocialLinksItem>
              <a
                href={`https://www.instagram.com/${socialLinks.instagram_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="instagram icon" />
              </a>
            </SocialLinksItem>
            <SocialLinksItem>
              <a
                href={`https://twitter.com/${socialLinks.twitter_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twitter icon" />
              </a>
            </SocialLinksItem>
            <SocialLinksItem>
              <a
                href={`https://www.imdb.com/title/${socialLinks.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={imdb} alt="imdb icon" />
              </a>
            </SocialLinksItem>
          </SocialLinks>
        </Social>
      </Container>
    </Wrapper>
  );
};

MoreInfo.propTypes = {
  movie: PropTypes.object,
};
