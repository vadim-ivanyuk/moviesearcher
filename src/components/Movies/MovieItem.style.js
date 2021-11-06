import styled from "styled-components";

import { theme } from "../../theme";
import { addBorderForVoteAvarage } from "../../utils/helpers";

export const MovieItemWrapper = styled.div`
  width: 200px;
  height: 375px;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  margin: 10px;
  margin-bottom: 20px;
  border-radius: 0 0 5px 5px;
  background: ${theme.colorWhite};

  @media (max-width: 200px) {
    width: 100%;
  }
`;

export const Poster = styled.div``;

export const PosterImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px 5px 0px 0px;
`;

export const Description = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
  padding: 0 10px;
`;

export const RateMovie = styled.p`
  position: absolute;
  margin: 0;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  top: -22px;
  left: 17px;
  color: ${theme.colorWhite};
  box-sizing: border-box;
  padding: 0;
  border-radius: 100%;
  border: 3px inset
    ${({ vote_average }) => addBorderForVoteAvarage(vote_average)};
  background: ${theme.colorDark};
  font-size: 15px;
`;

export const MovieTitle = styled.p`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
  padding-top: 15px;
  margin-bottom: 0;
`;

export const Release = styled.p`
  position: relative;
  width: 100%;
  font-size: 15px;
`;
