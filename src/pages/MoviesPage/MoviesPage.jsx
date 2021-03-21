import React from "react";
import { Filters } from "../../components/Filters";
import { MoviesList } from "../../components/Movies";

export const MoviesPage = () => {
  return (
    <div className="container d-flex mt-5 p-0 flex-md-row flex-column">
      <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0 p-0">
        <Filters />
      </div>
      <div className="col-12 col-md-8 col-lg-9 p-1">
        <MoviesList />
      </div>
    </div>
  );
};
