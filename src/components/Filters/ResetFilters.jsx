import React from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filters/filters.actions";

export const ResetFilters = () => {
  const dispatch = useDispatch();

  const handelClick = () => {
    dispatch(resetFilters());
  };

  return (
    <button className="btn btn-light col-12 mt-3 reset-filters" onClick={handelClick}>
      Сбросить фильтры
    </button>
  );
};
