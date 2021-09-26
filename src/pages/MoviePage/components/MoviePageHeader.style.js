import styled from "styled-components";
import { theme } from "../../../theme";
import { addBorderForVoteAvarage } from "../../../utils/helpers";

export const MovieHeader = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  color: ${theme.colorWhite};
`;

export const MovieHeaderBackground = styled.div`
  position: relative;
  background-image: linear-gradient(
    90deg,
    ${theme.colorDark} 20%,
    rgba(48, 65, 78, 0.64)
  );
  text-align: right;
`;

export const MovieHeaderBackgroundImage = styled.img`
  position: relative;
  object-fit: cover;
  width: 80%;
  height: 512px;
  z-index: -2;

  @media (max-width: 830px) {
    height: 1024px;
  }
`;

export const MovieHeaderSingleBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const MovieHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  min-height: 512px;
  max-width: 1140px;
  margin: 0 auto;
`;

export const MovieHeaderPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 512px;

  @media (max-width: 830px) {
    width: 100%;
    height: 470px;
    justify-content: flex-start;
    padding: 0px 30px;
  }

  @media (max-width: 450px) {
    padding: 0px 20px;
    justify-content: center;
  }
`;

export const MovieHeaderPosterImage = styled.img`
  width: 290px;
  height: 435px;
  border-radius: 5px;

  @media (max-width: 350px) {
    width: 100%;
    object-fit: cover;
  }
`;

export const MovieHeaderDescription = styled.div`
  width: calc(100% - 380px);
  max-width: 760px;
  min-width: 450px;
  height: 512px;
  padding: 32px 10px;

  @media (max-width: 830px) {
    width: 100%;
    max-width: 100%;
    padding: 0px 30px;
  }

  @media (max-width: 450px) {
    min-width: auto;
    padding: 0px 20px;
  }
`;

export const MovieHeaderTitle = styled.h2`
  margin: 0px;
  font-size: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 450px) {
    font-size: 25px;
  }
`;

export const MovieHeaderTagLine = styled.p`
  font-size: 1em;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;
  margin: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MovieHeaderVoteAvarageContainer = styled.div`
  display: flex;
  margin: 16px 0px;
`;

export const MovieHeaderVoteAvarage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 36px;
  font-size: 14px;
  font-weight: 600;
  border: 3px inset
    ${({ vote_avarage }) => addBorderForVoteAvarage(vote_avarage)};
  border-radius: 50%;
  margin: 0px;
`;

export const MovieHeaderVoteAvarageText = styled.p`
  margin: 0px;
  padding-left: 11px;
  line-height: 18px;
`;

export const MovieHeaderParagraph = styled.p`
  margin-bottom: 0.5px;
`;

export const MovieHeaderBoldTest = styled.span`
  font-weight: bold;
`;

export const MovieHeaderOverviewTitle = styled.h4`
  margin-top: 18px;
  margin-bottom: 2px;
  font-size: 23px;

  @media (max-width: 450px) {
    font-size: 20px;
    text-decoration: underline;
  }
`;

export const MovieHeaderOverview = styled.div`
  width: 97%;
  padding-right: 5px;
  margin-bottom: 0px;
  max-height: ${({ tagline }) => (tagline ? "100px" : "150px")};
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 830px) {
    width: 100%;
    padding-right: 0px;
    max-height: fit-content;
    overflow-y: hidden;
  }

  @media (max-width: 450px) {
    max-height: ${({ tagline }) => (tagline ? "100px" : "150px")};
    overflow-y: auto;
    margin-top: 5px;
  }
`;
