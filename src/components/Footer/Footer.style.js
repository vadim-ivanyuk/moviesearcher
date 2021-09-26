import styled from "styled-components";

import { theme } from "../../theme";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 30px;
  background: ${theme.colorDark};
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1140px;
  padding: 0px 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const Copyright = styled.p`
  margin: 0px;
  color: ${theme.colorWhite};
`;
