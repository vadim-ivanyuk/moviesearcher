import React from 'react';

import { Filters } from '../../components/Filters';
import { MoviesList } from '../../components/Movies';
import { Search } from '../../components/Search/Search';

import { Wrapper, FlexContainer, MoviesListWrapper } from './MoviesPage.style';

export const MoviesPage = () => {
  return (
    <Wrapper>
      <Search />
      <FlexContainer>
        <Filters />
        <MoviesListWrapper>
          <MoviesList />
        </MoviesListWrapper>
      </FlexContainer>
    </Wrapper>
  );
};
