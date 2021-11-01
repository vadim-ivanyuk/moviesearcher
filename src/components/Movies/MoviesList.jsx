import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieItem } from './MovieItem';
import { Loader } from '../../elements/Loader';

import { useMovies } from '../../redux/selectors';
import { getMovies } from '../../redux/movies/movies.thunks';

export const MoviesList = () => {
  const movies = useSelector(useMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className='movies-container d-flex flex-wrap justify-content-center align-items-center'>
      {movies.length ? (
        movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};
