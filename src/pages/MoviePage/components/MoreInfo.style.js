import styled from "styled-components";

import { theme } from "../../../theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 20px;
  background: ${theme.colorDark};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0px 20px;
`;

export const BlockTitle = styled.p`
  color: ${theme.colorWhite};
  font-size: 22px;
  margin-bottom: 12px;
  font-weight: bold;
  text-decoration: underline;
`;

export const Budget = styled.div`
  width: 400px;
  height: 200px;
  padding: 0px 5px;
`;

export const Keywords = styled.div`
  width: 400px;
  height: 200px;
  padding: 0px 5px;
`;

export const KeywordsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const KeywordsListItem = styled.div`
  height: 25px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${theme.colorBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  padding: 4px 10px;
  color: ${theme.colorOrange};
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
`;

export const Social = styled.div`
  width: 400px;
  height: 200px;
  padding: 0px 5px;
`;

export const SocialLinks = styled.div`
  display: flex;
`;

export const SocialLinksItem = styled.div`
  margin: 4px;

  & img {
    width: 27px;
    height: 27px;
    cursor: pointer;
    filter: brightness(70%);
    transition: all 0.2s;

    &:hover {
      filter: brightness(100%);
    }
  }
`;

export const Paragraph = styled.div`
  margin-bottom: 3px;
  color: ${theme.colorWhite};

  & strong {
    color: ${theme.colorOrange};
  }
`;
