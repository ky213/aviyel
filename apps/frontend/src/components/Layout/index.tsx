import React from 'react';

import ErrorBoundary from '../ErrorBoundary';

export interface MainLayoutProps extends React.PropsWithChildren<any> {}

export const MainLayout = (props: MainLayoutProps) => {
  return <ErrorBoundary>{props.children}</ErrorBoundary>;
};

export default MainLayout;
