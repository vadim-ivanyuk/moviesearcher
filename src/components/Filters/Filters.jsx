import React from 'react';

import { Sort } from '../Sort';
import { Pagination } from '../Pagination';
import { ReleaseYear } from '../ReleaseYear';
import { GenresList } from '../Genres';
import { ResetFilters } from '../ResetFilters';

import { FiltersWrapper } from './Filters.style';

export const Filters = () => {
  return (
    <FiltersWrapper>
      <form>
        <Sort />
        <Pagination />
        <div className='sort form-group mt-4'>
          <label className='filters-label' htmlFor='sort_by'>
            Фильтровать
          </label>
          <ReleaseYear />
          <GenresList />
          <ResetFilters />
        </div>
      </form>
    </FiltersWrapper>
  );
};
