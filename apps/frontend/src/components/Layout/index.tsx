import React from 'react';
import Loader from '../Loader/Loader';

import { Container, TopBar, Body } from './components/';

export const MainLayout = (props: any) => {
  return (
    <Container>
      <TopBar />
      <Body>{props.children}</Body>
      <Loader />
    </Container>
  );
};

export default MainLayout;
