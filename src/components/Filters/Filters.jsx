import React from "react";
import { Sort } from "./Sort";
import { Pagination } from "./Pagination";
import { ReleaseYear } from "./ReleaseYear";
import { GenresList } from "./Genres/GenresList";
import { ResetFilters } from "./ResetFilters";

export const Filters = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
