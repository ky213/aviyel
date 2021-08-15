import React from 'react';

import ErrorBoundary from '../ErrorBoundary';
import { Container, TopBar } from './components/';

export const MainLayout = (props: any) => {
  return (
    <Container>
      <TopBar />
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </Container>
  );
};

export default MainLayout;
