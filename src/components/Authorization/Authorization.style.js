import styled from "styled-components";
import { theme } from "../../theme";

export const AuthButton = styled.button`
  cursor: pointer;
  color: ${theme.colorOrange};
  border: 1px solid ${theme.colorOrange};
  font-weight: 400;
  font-size: 14px;
  background: transparent;
  padding: 0.3rem 0.75rem;
  margin-right: ${(props) => props.right && "5px"};
  transition: all 0.3s;

  &:hover {
    background: ${theme.colorOrange};
    color: ${theme.colorDark};
  }
`;

export const AuthButtonLink = styled.a`
  color: inherit;

  &:hover {
    color: inherit;
  }
`;
