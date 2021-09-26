import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

import {
  API_URL,
  API_KEY_MOVIE_DB_V3,
  API_IMG_URL,
} from "../../../utils/apies";
import { Title } from "../../../elements";
import { defaultPoster } from "../../../img";

import {
  Wrapper,
  Cotainer,
  Image,
  FillingBLock,
  Description,
  Rate,
  Name,
  Character,
} from "./Actors.style";

SwiperCore.use([Virtual, EffectCoverflow, Pagination]);

export const Actors = ({ movie_id }) => {
  const [actors, setActors] = useState([]);
  const filters = useSelector((store) => store.filters);

  useEffect(() => {
    if (movie_id) {
      axios
        .get(
          `${API_URL}/movie/${movie_id}/credits?api_key=${API_KEY_MOVIE_DB_V3}&language=${filters.language}`
        )
        .then(({ data }) => {
          setActors(data.cast);
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [movie_id]);

  return (
    <>
      <Title title="Actors"></Title>
      <Wrapper>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {actors.map((actor, index) => {
            return (
              <SwiperSlide key={actor.id} virtualIndex={index}>
                <Cotainer>
                  <Image
                    src={
                      actor.profile_path
                        ? `${API_IMG_URL}${actor.profile_path}`
                        : defaultPoster
                    }
                  ></Image>
                  <FillingBLock>
                    <Rate vote_avarage={actor.popularity}>
                      {String(actor.popularity).slice(0, 4)}
                    </Rate>
                    <Description>
                      <Name>{actor.name}</Name>
                      <Character>Роль - {actor.character}</Character>
                    </Description>
                  </FillingBLock>
                </Cotainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Wrapper>
    </>
  );
};

Actors.propTypes = {
  movie_id: PropTypes.number,
};
