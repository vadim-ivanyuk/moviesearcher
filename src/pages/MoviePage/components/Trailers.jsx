import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  API_URL,
  API_YOUTUBE_EMBED_URL,
  API_KEY_MOVIE_DB_V3,
} from '../../../utils/apies';

import { Title } from '../../../elements';
import { Player } from './Player';

import {
  FlexWrapper,
  CurrentTrailerWrapper,
  TrailersList,
  IframeListItemWrapper,
  IframeListItem,
  IrameListItemOverBlock,
  LoadMore,
} from './Trailers.style';

export const Trailers = ({ movie_id }) => {
  const [trailers, setTrailers] = useState([]);
  const [activeTrailer, setActiveTrailer] = useState(0);
  const [availableTrailers, setavailableTrailers] = useState(4);
  const filters = useSelector((store) => store.filters);

  useEffect(() => {
    if (movie_id)
      axios
        .all([
          axios.get(
            `${API_URL}/movie/${movie_id}/videos?api_key=${API_KEY_MOVIE_DB_V3}&language=${filters.language}`
          ),
          axios.get(
            `${API_URL}/movie/${movie_id}/videos?api_key=${API_KEY_MOVIE_DB_V3}&language=en-EN`
          ),
        ])
        .then((data) => {
          setTrailers([...data[0].data.results, ...data[1].data.results]);
        })
        .catch((error) => {
          console.warn(error);
        });
  }, [movie_id, filters.language]);

  const changeActiveTrailer = (key) => () => {
    setActiveTrailer(key);
  };

  const changeAvailableTrailers = () => {
    setavailableTrailers(trailers.length);
  };

  const currentTrailer = trailers.map((trailer, index) => {
    return (
      <Fragment key={trailer.key}>
        {index === activeTrailer && (
          <Fragment>
            <Player id={trailer.key} autoplay={1} />
          </Fragment>
        )}
      </Fragment>
    );
  });

  const trailersList = trailers.map((trailer, index) => {
    return (
      <Fragment key={trailer.key}>
        {index !== activeTrailer && index < availableTrailers && (
          <IframeListItemWrapper>
            <IframeListItem
              src={`${API_YOUTUBE_EMBED_URL}${trailer.key}`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></IframeListItem>
            <IrameListItemOverBlock
              onClick={changeActiveTrailer(index)}
            ></IrameListItemOverBlock>
          </IframeListItemWrapper>
        )}
      </Fragment>
    );
  });

  return (
    <>
      {trailers.length > 0 && (
        <>
          <Title title='Trailers'></Title>
          <FlexWrapper>
            <CurrentTrailerWrapper trailersLength={trailers.length}>
              {currentTrailer}
            </CurrentTrailerWrapper>
            {trailers.length > 1 && (
              <TrailersList>
                {trailersList}
                {trailers.length > availableTrailers && (
                  <LoadMore onClick={changeAvailableTrailers}>
                    load more
                  </LoadMore>
                )}
              </TrailersList>
            )}
          </FlexWrapper>
        </>
      )}
    </>
  );
};

Trailers.propTypes = {
  movie_id: PropTypes.number,
};
