import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import EnterIcon from 'apps/frontend/src/assets/enter-icon.png';
import { TextField, FieldError } from '../common/Styles';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  padding: 10px 0px;
  border-bottom: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 2px 5px;
  margin-right: auto;
  border: 1px solid lightgray;
  border-radius: 4px;
  outline: 0;
  font-size: 16px;
  &:focus {
    border: 2px solid #66a7ff;
  }
`;

const SubmitButton = styled.button`
  border: 2px solid #66a7ff;
  border-radius: 4px;
  background: white;
  width: 40px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background: rgba(25, 118, 210, 0.04);
  }
`;

function ProductForm() {
  const formik = useFormik({
    initialValues: {
      productName: '',
      quantity: '',
      price: '',
    },
    validationSchema: Yup.object().shape({
      productName: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('required'),
      price: Yup.number().required('number required'),
      quantity: Yup.number().required('number required'),
    }),
    onSubmit(values, { resetForm }) {
      console.log(formik.touched, formik.errors);
      resetForm({
        values: {
          productName: '',
          quantity: '',
          price: '',
        },
      });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} noValidate>
      <TextField width="60%">
        <Input
          type="text"
          name="productName"
          placeholder="Please enter item name"
          onChange={formik.handleChange}
          value={formik.values.productName}
        />
        <FieldError>
          {formik.touched.productName && formik.errors.productName}
        </FieldError>
      </TextField>
      <TextField width="10%">
        <Input
          type="number"
          name="quantity"
          placeholder="0.00"
          onChange={formik.handleChange}
          value={formik.values.quantity}
        />
        <FieldError>
          {formik.touched.quantity && formik.errors.quantity}
        </FieldError>
      </TextField>
      <TextField width="10%">
        <Input
          type="number"
          name="price"
          placeholder="0.00"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <FieldError>{formik.touched.price && formik.errors.price}</FieldError>
      </TextField>
      <SubmitButton type="submit">
        <img src={EnterIcon} alt="submit" />
      </SubmitButton>
    </Form>
  );
}

export default ProductForm;
