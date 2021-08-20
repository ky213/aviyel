import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { phoneRegExp } from 'libs/globals/constants';
import Header from './Header';
import CustomerForm from './CustomerForm';
import Footer from './Footer';
import { setCustomer } from 'apps/frontend/src/store/reducers/invoice.reducer';
import { IRootState } from 'apps/frontend/src/store';

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export interface ICustomerDetailsProps extends StateProps, DispatchProps {
  next: (step: 'customer' | 'product') => void;
}

function Index(props: ICustomerDetailsProps) {
  const formik = useFormik({
    initialValues: {
      fullName: props.customer?.fullName || '',
      address: props.customer?.address || '',
      phone: props.customer?.phone || '',
      email: props.customer?.email || '',
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
      props.setCustomer(values);
      props.next('product');
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

const mapStateToProps = (state: IRootState) => ({
  customer: state.invoice.currentInvoice?.customer,
});

const mapDispatchToProps = { setCustomer };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
