import React from 'react';

import { Container, TopBar, Body } from './components/';

export const MainLayout = (props: any) => {
  return (
    <Container>
      <TopBar />
      <Body>
        <h1>heelo</h1>
      </Body>
    </Container>
  );
};

export default MainLayout;
