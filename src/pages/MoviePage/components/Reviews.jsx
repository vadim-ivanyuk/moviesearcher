import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

import { Title } from "../../../elements";
import {
  API_URL,
  API_KEY_MOVIE_DB_V3,
  API_IMG_URL,
} from "../../../utils/apies";

export const Reviews = ({ movie_id }) => {
  const [reviews, setReviews] = useState([]);
  const filters = useSelector((store) => store.filters);

  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `${API_URL}/movie/${movie_id}/reviews?api_key=${API_KEY_MOVIE_DB_V3}&language=${filters.language}`
        )
        .then(({ data }) => {
          setReviews(data.results);
          console.log(data)
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [movie_id]);

  return (
    <>
      <Title title="Reviews"></Title>
      {!reviews.length && (
        <p>
          На данный момент отзывов о фильме нет, напишите свой отзыв на{" "}
          <a href="https://www.themoviedb.org/" rel="nofollow" target="_">
            https://www.themoviedb.org/
          </a>
        </p>
      )}
    </>
  );
};

Reviews.propTypes = {
  movie_id: PropTypes.number,
};
