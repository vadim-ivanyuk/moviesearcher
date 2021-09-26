import styled from "styled-components";
import { theme } from "../../../theme";
import { addBorderForVoteAvarage } from "../../../utils/helpers";

export const ActorsTitle = styled.h2`
  width: 100%;
  margin: 15px 0px;
  font-size: 30px;
`;

export const ActorsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ActorCotainer = styled.div`
  position: relative;
  width: 370px;
  height: 450px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ActorImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: top;
`;

export const FillingBLock = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
  background: rgba(0, 0, 0, 0.2);
`;

export const Rate = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  color: ${theme.colorWhite};
  border: 3px inset
    ${({ vote_avarage }) => addBorderForVoteAvarage(vote_avarage)};
`;

export const Name = styled.h5`
  width: 100%;
  text-align: center;
  margin: 10px 0px;
  padding: 0px 10px;
  color: ${theme.colorWhite};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Character = styled.p`
  width: 100%;
  text-align: center;
  margin: 10px 0px;
  padding: 0px 20px;
  color: ${theme.colorWhite};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
