import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import { Title } from '../../../elements';
import { MovieItem } from '../../../components/Movies';
import { API_URL, API_KEY_MOVIE_DB_V3 } from '../../../utils/apies';

SwiperCore.use([Pagination]);

export const SimilarMovies = ({ movie_id }) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const filters = useSelector((store) => store.filters);

  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `${API_URL}/movie/${movie_id}/similar?api_key=${API_KEY_MOVIE_DB_V3}&language=${filters.language}`
        )
        .then(({ data }) => {
          setSimilarMovies(data.results);
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [movie_id, filters.language]);

  return (
    <>
      <Title title='Similar movies'></Title>
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 5,
          },
        }}
        className='mySwiper'
      >
        {similarMovies.map((similarMovie, index) => (
          <SwiperSlide key={similarMovie.id} virtualIndex={index}>
            <MovieItem movie={similarMovie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

SimilarMovies.propTypes = {
  movie_id: PropTypes.number,
};
