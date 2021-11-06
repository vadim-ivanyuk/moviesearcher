import styled from "styled-components";
import { theme } from "../../theme";

export const HeaderWrapper = styled.div`
  top: 0px;
  z-index: 999;
  position: sticky;
  width: 100%;
  color: ${theme.colorWhite};
  height: 70px;
  background: ${theme.colorDark};

  @media (max-width: 650px) {
    height: 110px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1250px;
  padding: 0px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const HeaderTitleContainer = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  align-items: baseline;

  @media (max-width: 650px) {
    justify-content: center;
    padding-top: 8px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0px;
`;

export const HeaderSubTitle = styled.span`
  color: ${theme.colorOrange};
  padding-left: 1px;
`;

export const HeaderWithMovieDbApi = styled.a`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-left: 8px;

  @media (max-width: 360px) {
      display: none;
  }
`;

export const HeaderAuthorizationWrapper = styled.div`
  width: 200px;
  height: max-content;
  display: flex;
  justify-content: space-space-around;
  align-items: center;
  padding: 5px 7px;

  @media (max-width: 650px) {
    width: 100%;
    justify-content: flex-end;
    padding: 5px 0px;
  }
`;
