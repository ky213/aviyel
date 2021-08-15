import React from 'react';

import { Container, TopBar, Body } from './components/';

export const MainLayout = (props: any) => {
  return (
    <Container>
      <TopBar />
      <Body>{props.children}</Body>
    </Container>
  );
};

export default MainLayout;
