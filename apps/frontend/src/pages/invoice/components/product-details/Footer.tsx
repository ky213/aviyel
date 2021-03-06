import React, { ReactEventHandler, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import styled, { StyledComponent } from 'styled-components';
import { Alert, DialogActions, Snackbar } from '@material-ui/core';
import * as Yup from 'yup';

import { Input } from './ProductItemForm';
import { TextField, FieldError } from '../common/Styles';
import { IRootState } from 'apps/frontend/src/store';
import {
  setTaxes,
  createInvoice,
} from 'apps/frontend/src/store/reducers/invoice.reducer';
import { calculateShares } from 'apps/frontend/src/utils/calculations';

const Form = styled.form``;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  alignt-items: center;
  padding: 10px;
  width: 94%;
  border-top: 1px solid lightgray;
  margin: auto;
  padding: 10px;
`;

const InputWithIcon = styled.span`
  position: relative;
  & span {
    position: absolute;
    right: 10px;
    top: 2px;
  }
`;

const Taxes = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;

const SubTotal = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  margin-right: 5%;
  font-weight: bold;
  & :nth-child(1) {
    color: gray;
  }
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  margin: 0 !important;
  padding: 5px 50px;
  background: #eef0f2;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 25%;
  }

  & > div:nth-child(2) {
    width: 35%;
  }

  & p {
    margin: 0;
    paddgin: 0;
    font-wight: lighter;
    font-size: 16px;
  }

  & > div > div p:nth-child(2) {
    margin-top: 5px;
    color: grey;
  }

  & > div:nth-child(2) p:nth-child(2) {
    margin-top: 3px;
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
`;

const Button: StyledComponent<any, any> = styled.button`
  border: 1px solid #66a7ff;
  border-radius: 4px;
  background: ${({ primary }: any) => (primary ? '#66a7ff' : 'white')};
  color: white;
  width: 135px;
  height: 40px;
  padding: 5px;
  cursor: pointer;
  &: hover {
    background: #4391fb;
  }
`;

export interface IFooterProps extends StateProps, DispatchProps {}

function Footer(props: IFooterProps) {
  const [alertError, setAlertError] = useState(false);

  const [subTotal, discountAmount, taxAmount, grandTotal] = calculateShares(
    props.currentInvoice
  );

  const formik = useFormik({
    initialValues: {
      tax: '',
      discount: '',
    },
    validationSchema: Yup.object().shape({
      tax: Yup.number().required('number required'),
      discount: Yup.number().required('number required'),
    }),
    onSubmit(values) {
      const products = props.currentInvoice?.products;
      const invoiceNumber = 'INV00' + (props.totalNumberOfRecords + 1);
      if (products) {
        if (products.length > 0) {
          props.createInvoice(props.currentInvoice, invoiceNumber);
          return;
        }
      }
      setAlertError(true);
    },
  });

  useEffect(() => {
    props.setTaxes(formik.values);
  }, [formik.values]);

  return (
    <>
      <DialogActions>
        <Form onSubmit={formik.handleSubmit} noValidate>
          <Total>
            <Taxes>
              <TextField width="30%" style={{ marginRight: '5px' }}>
                <InputWithIcon>
                  <Input
                    type="number"
                    name="tax"
                    placeholder="Tax"
                    onChange={formik.handleChange}
                  />
                  <span>%</span>
                </InputWithIcon>
                <FieldError>
                  {formik.touched.tax && formik.errors.tax}
                </FieldError>
              </TextField>
              <TextField width="30%">
                <InputWithIcon>
                  <Input
                    type="number"
                    name="discount"
                    placeholder="Discount"
                    onChange={formik.handleChange}
                  />
                  <span>%</span>
                </InputWithIcon>
                <FieldError>
                  {formik.touched.discount && formik.errors.discount}
                </FieldError>
              </TextField>
            </Taxes>
            <SubTotal>
              <span>Sub Total</span>
              <span>$ {subTotal?.toFixed(2)}</span>
            </SubTotal>
          </Total>
          <Result>
            <div>
              <div>
                <p>Tax</p>
                <p>$ {taxAmount.toFixed(2)}</p>
              </div>
              <div>
                <p>Discount</p>
                <p>$ {discountAmount.toFixed(2)}</p>
              </div>
            </div>
            <div>
              <div>
                <p>Grand Total</p>
                <p>$ {grandTotal.toFixed(2)}</p>
              </div>
              <div>
                <Button type="submit" primary>
                  Save
                </Button>
              </div>
            </div>
          </Result>
        </Form>
      </DialogActions>
      <Snackbar
        open={alertError}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        style={{ width: '60%' }}
      >
        <Alert onClose={() => setAlertError(false)} color="error">
          Please, add at least one product.
        </Alert>
      </Snackbar>
    </>
  );
}

const mapStateToProps = (state: IRootState) => ({
  currentInvoice: state.invoice.currentInvoice,
  totalNumberOfRecords: state.invoice.totalNumberOfRecords,
});

const mapDispatchToProps = { setTaxes, createInvoice };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
