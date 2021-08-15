import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../ErrorBoundary';

const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f2f3f5;
`;

function TopBar(props: any) {
  return (
    <ContainerStyled>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </ContainerStyled>
  );
}

export default TopBar;
