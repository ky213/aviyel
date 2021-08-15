import React from 'react';
import styled from 'styled-components';

const LeftMenuStyled = styled.div`
  width: 25%;
  height: 100%;
  background-color: #2f3740;
`;

export default (props: any) => {
  return <LeftMenuStyled>{props.children}</LeftMenuStyled>;
};
