import React from 'react';
import { SnackbarProvider } from '..';
import Loader from '../Loader/Loader';

import { Container, TopBar, Body } from './components/';

export const MainLayout = (props: any) => {
  return (
    <Container>
      <SnackbarProvider />
      <TopBar />
      <Body>{props.children}</Body>
      <Loader />
    </Container>
  );
};

export default MainLayout;
