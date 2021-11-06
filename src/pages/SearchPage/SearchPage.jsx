import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { MoviesList } from '../../components/Movies';
import { Pagination } from '../../components/Pagination';
import { BackLink } from '../../components/BackLink';

import { setSearchParams } from '../../redux/filters/filters.actions';
import { searchingMovies } from '../../redux/movies/movies.thunks';

import { SearchPageWrapper } from './SearchPage.style';

export const SearchPage = () => {
  const { searchParams } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchParams(searchParams));
    dispatch(searchingMovies(searchParams));
  }, [dispatch]);

  return (
    <SearchPageWrapper>
      <BackLink />
      <MoviesList />
      <Pagination />
    </SearchPageWrapper>
  );
};
