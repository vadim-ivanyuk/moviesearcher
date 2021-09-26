import styled from "styled-components";
import { theme } from "../../../theme";

export const FlexWrapper = styled.div`
  display: flex;

  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const CurrentTrailerWrapper = styled.div`
  width: ${(props) =>
    props.trailersLength > 1 ? "calc(100% - 300px)" : "100%"};
  height: 450px;

  @media (max-width: 830px) {
    width: 100%;
  }
`;

export const TrailersList = styled.div`
  width: 300px;
  height: 450px;
  overflow-y: auto;

  @media (max-width: 830px) {
    display: flex;
    width: 100%;
    height: 200px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export const IframeListItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  @media (max-width: 830px) {
    width: 300px;
  }
`;

export const IframeListItem = styled.iframe`
  width: 100%;
  height: 100%;

  @media (max-width: 830px) {
    width: 300px;
  }
`;

export const IrameListItemOverBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const LoadMore = styled.button`
  position: relative;
  width: 100%;
  height: 43px;
  color: ${theme.colorOrange};
  border: none;
  font-weight: 500;
  background: ${theme.colorDark};
  letter-spacing: 1px;

  @media (max-width: 830px) {
    height: 200px;
    padding: 0px 5px;
  }
`;
