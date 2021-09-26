import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import { defaultPoster } from "../../../img";

import {
  ActorsTitle,
  ActorsWrapper,
  ActorCotainer,
  ActorImage,
  FillingBLock,
  Description,
  Rate,
  Name,
  Character,
} from "./MoviePageActors.style";

SwiperCore.use([Virtual, EffectCoverflow, Pagination]);

export const MoviePageActors = ({ movie_id }) => {
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
      <ActorsTitle>Actors</ActorsTitle>
      <ActorsWrapper>
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
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetweenSlides: 0,
            },
            1000: {
              slidesPerView: 3,
              spaceBetweenSlides: 0,
            },
          }}
        >
          {actors.map((actor, index) => {
            return (
              <SwiperSlide key={actor.id} virtualIndex={index}>
                <ActorCotainer>
                  <ActorImage
                    src={
                      actor.profile_path
                        ? `${API_IMG_URL}${actor.profile_path}`
                        : defaultPoster
                    }
                  ></ActorImage>
                  <FillingBLock>
                    <Rate vote_avarage={actor.popularity}>
                      {String(actor.popularity).slice(0, 4)}
                    </Rate>
                    <Description>
                      <Name>{actor.name}</Name>
                      <Character>Роль - {actor.character}</Character>
                    </Description>
                  </FillingBLock>
                </ActorCotainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ActorsWrapper>
    </>
  );
};
