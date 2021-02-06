import React from "react";
import { Authorization } from "./Authorization/Authorization";

export const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex align-items-center justify-content-between h-100 flex-column-reverse flex-md-row">
        <div className="col-xl-4 col-md-6 col-12 pb-1 mt-3 mt-md-0 d-flex justify-content-center align-items-baseline">
          <a href="/" className="header__title">
            Movie<span className="header__sub-title">searcher</span>
          </a>
          <a
            href="https://www.themoviedb.org/"
            className="header__with-api ml-2"
            rel="nofollow"
            target="blank"
          >
            with TMDB Api
          </a>
        </div>
        <div className="col-12 mb-1 mt-2 mb-md-0 mt-md-0 col-md-3 d-flex justify-content-center">
          <Authorization />
        </div>
      </div>
    </div>
  );
};
