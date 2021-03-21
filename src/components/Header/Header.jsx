import React from "react";
import { Link } from "react-router-dom";
import { Authorization } from "../Authorization";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderSubTitle,
  HeaderWithMovieDbApi,
  HeaderAuthorizationWrapper,
} from "./Header.style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTitleContainer>
          <Link to="/">
            <HeaderTitle>
              Movie<HeaderSubTitle>searcher</HeaderSubTitle>
            </HeaderTitle>
          </Link>
          <HeaderWithMovieDbApi
            href="https://www.themoviedb.org/"
            rel="nofollow"
            target="blank"
          >
            with TMDB Api
          </HeaderWithMovieDbApi>
        </HeaderTitleContainer>
        <HeaderAuthorizationWrapper>
          <Authorization />
        </HeaderAuthorizationWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
