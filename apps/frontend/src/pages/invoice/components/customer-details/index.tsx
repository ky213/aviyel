import React from 'react';

import Header from './Header';
import CustomerForm from './CustomerForm';
import Footer from './Footer';

export default function index(props: any) {
  return (
    <>
      <Header next={props.next} />
      <CustomerForm />
      <Footer />
    </>
  );
}
