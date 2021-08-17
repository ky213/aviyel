import React, { ComponentProps } from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export interface ProductDetailsProps extends ComponentProps<any> {
  next: () => void;
}

export default function ProductDetails(props: ProductDetailsProps) {
  return (
    <>
      <Header next={props.next} />
      <Body />
      <Footer />
    </>
  );
}
