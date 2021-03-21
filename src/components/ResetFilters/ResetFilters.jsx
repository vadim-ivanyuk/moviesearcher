import React from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux";

export const ResetFilters = () => {
  const dispatch = useDispatch();

  const handelResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <button
      className="btn btn-light col-12 mt-3 reset-filters"
      onClick={handelResetFilters}
    >
      Сбросить фильтры
    </button>
  );
};
