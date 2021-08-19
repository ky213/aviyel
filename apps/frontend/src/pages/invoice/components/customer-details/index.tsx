import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import Header from './Header';
import CustomerForm from './CustomerForm';
import Footer from './Footer';

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function index(props: any) {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      phone: '',
      email: '',
      pincode: '',
    },
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} noValidate>
      <Header next={props.next} />
      <CustomerForm
        onFieldChange={formik.handleChange}
        values={formik.values}
      />
      <Footer />
    </Form>
  );
}
