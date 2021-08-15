import React from 'react';
import styled from 'styled-components';

import LeftMenu from './LeftMenu';
import Content from './Content';

const BodyStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default (props: any) => {
  return (
    <BodyStyled>
      <LeftMenu></LeftMenu>
      <Content>{props.children}</Content>
    </BodyStyled>
  );
};
