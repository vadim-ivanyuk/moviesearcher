import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onChangeFilters } from "../../redux";

const getYears = () => {
  const currentYear = new Date().getFullYear();

  return Array.from(new Array(70), (value, index) => currentYear + 2 - index);
};

const years = getYears();

export const ReleaseYear = () => {
  const filters = useSelector((store) => store.filters);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(onChangeFilters({ name, value }));
  };

  return (
    <>
      <label className="filters-second-label" htmlFor="primary_release_year">
        Дата выхода
      </label>
      <select
        className="form-control"
        name="primary_release_year"
        id="primary_release_year"
        value={filters.primary_release_year}
        onChange={handleChange}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};
