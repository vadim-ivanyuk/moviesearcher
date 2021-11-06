import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { theme } from '../../theme';

const Back = styled.div`
  cursor: pointer;
  font-size: 18px;
  color: ${theme.colorOrange};
`;

export const BackLink = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return <Back onClick={handleClick}>{'< Back'}</Back>;
};
