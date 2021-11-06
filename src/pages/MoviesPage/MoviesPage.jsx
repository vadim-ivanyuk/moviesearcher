import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Filters } from '../../components/Filters';
import { MoviesList } from '../../components/Movies';
import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search/Search';

import { setSearchParams } from '../../redux/filters/filters.actions';
import { getMovies } from '../../redux/movies/movies.thunks';

import { Wrapper, FlexContainer, MoviesListWrapper } from './MoviesPage.style';

export const MoviesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchParams());
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Wrapper>
      <Search />
      <FlexContainer>
        <Filters />
        <MoviesListWrapper>
          <MoviesList />
          <Pagination />
        </MoviesListWrapper>
      </FlexContainer>
    </Wrapper>
  );
};
