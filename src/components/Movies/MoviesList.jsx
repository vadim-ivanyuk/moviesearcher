import React from 'react';
import { useSelector } from 'react-redux';

import { Pagination } from '../Pagination';
import { MovieItem } from './MovieItem';
import { Loader } from '../../elements/Loader';

import { useMovies } from '../../redux/selectors';

export const MoviesList = () => {
  const movies = useSelector(useMovies);

  return (
    <div className='movies-container d-flex flex-wrap justify-content-center align-items-center'>
      {movies.length ? (
        movies.map((movie, i) => (
          <MovieItem id={i === 0 && 'firstCard'} movie={movie} key={movie.id} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};
