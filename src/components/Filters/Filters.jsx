import React from "react";
import { Sort } from "../Sort";
import { Pagination } from "../Pagination";
import { ReleaseYear } from "../ReleaseYear";
import { GenresList } from "../Genres";
import { ResetFilters } from "../ResetFilters";

const handleSubmit = (e) => {
  e.preventDefault();
};

export const Filters = () => {
  return (
    <div className="filters">
      <form onSubmit={handleSubmit}>
        <Sort />
        <Pagination />
        <div className="sort form-group mt-4">
          <label className="filters-label" htmlFor="sort_by">
            Фильтровать
          </label>
          <ReleaseYear />
          <GenresList />
          <ResetFilters />
        </div>
      </form>
    </div>
  );
};
