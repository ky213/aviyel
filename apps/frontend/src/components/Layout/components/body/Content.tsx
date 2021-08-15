import React from 'react';
import styled from 'styled-components';

const ContentStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f2f3f5;
`;

export default (props: any) => {
  return <ContentStyled>{props.children}</ContentStyled>;
};
