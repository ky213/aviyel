import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { phoneRegExp } from 'libs/globals/constants';
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
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('required'),
      address: Yup.string().max(50, 'Must be 30 characters or less'),
      phone: Yup.string()
        .matches(phoneRegExp, 'Phone number not valid')
        .required('required'),
      email: Yup.string().email('Invalid email address').required('required'),
      pincode: Yup.string(),
    }),
    onSubmit(values) {
      console.log(formik.touched.fullName, formik.errors.fullName);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} noValidate>
      <Header next={props.next} />
      <CustomerForm
        onFieldChange={formik.handleChange}
        values={formik.values}
        touched={formik.touched}
        errors={formik.errors}
      />
      <Footer />
    </Form>
  );
}
