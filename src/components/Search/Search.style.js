import styled from 'styled-components';
import { theme } from '../../theme';

export const SearchWrapper = styled.form`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 2px 5px;
  margin-right: 5px;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  color: ${theme.colorOrange};
  border: 1px solid ${theme.colorOrange};
  font-weight: bold;
  font-size: 14px;
  background: transparent;
  padding: 0.28rem 0.75rem;
  transition: all 0.3s;

  &:hover {
    background: ${theme.colorOrange};
    color: ${theme.colorDark};
  }
`;
