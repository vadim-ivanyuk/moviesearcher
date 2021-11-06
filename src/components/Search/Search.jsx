import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useInput } from '../../hooks';

import { setSearchParams, setFirstPage } from '../../redux/filters/filters.actions';
import { useFilters } from '../../redux/selectors';

import { SearchWrapper, Input, SearchButton } from './Search.style';

export const Search = () => {
  const filters = useSelector(useFilters);
  const search = useInput();
  const dispatch = useDispatch();
  const history = useHistory();
  const { value, isFirstRender } = search;

  useEffect(() => {
    search.setValue(filters.searchParams);
  }, [filters.searchParams]);

  useEffect(() => {
    if (!value.length && !isFirstRender.current) {
      dispatch(setFirstPage());
      dispatch(setSearchParams(''));

      history.push('/');
    }
  }, [value, dispatch, isFirstRender, history]);

  const searching = (e) => {
    e.preventDefault();

    dispatch(setFirstPage());
    dispatch(setSearchParams(value));

    history.push(`/${value}`);
  };

  return (
    <SearchWrapper onSubmit={searching}>
      <Input {...search} placeholder='Search film...' />
      <SearchButton type='submit'>Search</SearchButton>
    </SearchWrapper>
  );
};
