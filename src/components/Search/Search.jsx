import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInput } from '../../hooks';

import { getMovies, searchingMovies } from '../../redux/movies/movies.thunks';

import { SearchWrapper, Input, SearchButton } from './Search.style';

export const Search = () => {
  const search = useInput();
  const dispatch = useDispatch();
  const { value, isFirstRender } = search;

  useEffect(() => {
    if (!value.length && !isFirstRender.current) {
      dispatch(getMovies());
    }
  }, [value, dispatch, isFirstRender]);

  const searching = (e) => {
    e.preventDefault();

    dispatch(searchingMovies(value));
  };

  return (
    <SearchWrapper onSubmit={searching}>
      <Input {...search} placeholder='Search film...' />
      <SearchButton type='submit'>Search</SearchButton>
    </SearchWrapper>
  );
};
