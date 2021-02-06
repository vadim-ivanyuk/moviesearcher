import React from "react";
import { useSelector } from "react-redux";

export const GenresItem = (props) => {
  const { genre, handeChange } = props;
  const filters = useSelector((store) => store.filters);

  return (
    <div className="genres__item">
      <input
        type="checkbox"
        value={genre.id}
        checked={
          filters.with_genres.indexOf(String(genre.id)) === -1 ? false : true
        }
        className="checkbox"
        name="with_genres"
        id={genre.id}
        onChange={handeChange}
      />
      <label className="label" htmlFor={genre.id}>
        {genre.name}
      </label>
    </div>
  );
};
