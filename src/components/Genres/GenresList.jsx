import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { API_URL, API_KEY_MOVIE_DB_V3 } from "../../utils/apies";
import { GenresItem } from "./GenresItem";
import { onChangeFilters } from "../../redux";

export const GenresList = () => {
  const [genres, setGenres] = useState([]);
  const filters = useSelector((store) => store.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `${API_URL}/genre/movie/list?api_key=${API_KEY_MOVIE_DB_V3}&language=${filters.language}`
      )
      .then(({ data }) => setGenres(data.genres))
      .catch((error) => console.log(error));
  }, [filters.language]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updateGenres =
      filters.with_genres.indexOf(String(value)) === -1
        ? [...filters.with_genres, value]
        : filters.with_genres.filter((genre) => genre !== value);

    dispatch(onChangeFilters({ name, value: updateGenres }));
  };

  return (
    <Fragment>
      <label className="filters-second-label mt-3" htmlFor="with_genres">
        Жанры
      </label>
      <div className="genres" id="with_genres">
        {genres.map((genre) => (
          <GenresItem
            genre={genre}
            key={genre.id}
            handleChange={handleChange}
          />
        ))}
      </div>
    </Fragment>
  );
};
