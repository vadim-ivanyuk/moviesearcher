import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onChangeFilters } from "../../redux";

export const Pagination = () => {
  const filters = useSelector((store) => store.filters);
  const dispatch = useDispatch();

  const handleChange = (page) => () => {
    dispatch(onChangeFilters({ name: "page", value: page }));
  };

  return (
    <div className="pagination form-group col-12 d-flex justify-content-center p-0">
      <button
        type="button"
        className="btn btn-light col-4"
        onClick={handleChange(+filters.page - 1)}
        disabled={filters.page === 1}
      >
        Назад
      </button>
      <div className="col-4 total-pages d-flex align-items-center justify-content-center p-0">{`${filters.page} из ${filters.total_pages}`}</div>
      <button
        type="button"
        className="btn btn-light col-4"
        onClick={handleChange(+filters.page + 1)}
        disabled={Number(filters.page === filters.total_pages) || false}
      >
        Вперед
      </button>
    </div>
  );
};
