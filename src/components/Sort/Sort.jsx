import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeFilters } from "../../redux";

const sortByOptions = [
  {
    label: "Популярные (убывание)",
    value: "popularity.desc",
  },
  {
    label: "Популярные (возростание)",
    value: "popularity.asc",
  },
  {
    label: "Рейтинг (убывание)",
    value: "vote_average.desc",
  },
  {
    label: "Рейтинг (возростание)",
    value: "vote_average.asc",
  },
];

export const Sort = () => {
  const filters = useSelector((store) => store.filters);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(onChangeFilters({ name, value }));
  };

  return (
    <div className="sort form-group">
      <label className="filters-label" htmlFor="sort_by">
        Сортировать
      </label>
      <select
        className="form-control cursor-pointer"
        name="sort_by"
        id="sort_by"
        onChange={handleChange}
        value={filters.sort_by}
      >
        {sortByOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
