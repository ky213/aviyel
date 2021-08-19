import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { ErrorMessage } from 'formik';

import { Customer } from 'libs/interfaces/invoice';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px auto;
  width: 94%;
`;

const FirstSection = styled.div`
  width: 45%;
`;

const SecondSection = styled.div`
  width: 45%;
  position: relative;
`;

const TextField = styled.div`
  width: 100%;
  margin: 15px auto;
  & textarea {
    height: 100% !important;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 3px;
  & span {
    color: red;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 1px 5px;
  margin-right: auto;
  border: 1px solid lightgray;
  border-radius: 4px;
  outline: 0;
  font-size: 16px;
  &:focus {
    border: 2px solid #66a7ff;
  }
`;

const TextArea = styled.textarea`
  width: 100% !important;
  outline: 0;
  resize: none;
  border: 1px solid lightgray;
  border-radius: 4px;
  outline: 0;
  font-size: 16px;
  &:focus {
    border: 2px solid #66a7ff;
  }
`;

const ErroMessage = styled.span`
  color: red;
  font-size: 12px;
`;

export interface ICustomerFormValues extends Customer {
  pincode: string | number | readonly string[] | undefined;
}

export interface ICustomerFormProps extends ComponentProps<any> {
  onFieldChange: (event: React.ChangeEvent<any>) => void;
  values: ICustomerFormValues;
}

export default function CustomerForm(props: ICustomerFormProps) {
  return (
    <Container>
      <FirstSection>
        <TextField>
          <Label htmlFor="fullName">
            Full Name <span>*</span>
          </Label>
          <Input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="customer name"
            value={props.values.fullName}
            onChange={props.onFieldChange}
          />
          <ErroMessage>
            {props.touched.fullName && props.errors.fullName}
          </ErroMessage>
        </TextField>
        <TextField>
          <Label htmlFor="address">Address</Label>
          <TextArea
            name="address"
            id="address"
            placeholder="complete address"
            rows={7}
            value={props.values.address}
            onChange={props.onFieldChange}
          />
          <ErroMessage>
            {props.touched.address && props.errors.address}
          </ErroMessage>
        </TextField>
      </FirstSection>
      <SecondSection>
        <TextField>
          <Label htmlFor="phone">
            Phone Number <span>*</span>
          </Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            value={props.values.phone}
            onChange={props.onFieldChange}
          />
          <ErroMessage>{props.touched.phone && props.errors.phone}</ErroMessage>
        </TextField>
        <TextField>
          <Label htmlFor="email">
            Email ID <span>*</span>
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="customer email address"
            value={props.values.email}
            onChange={props.onFieldChange}
          />
          <ErroMessage>{props.touched.email && props.errors.email}</ErroMessage>
        </TextField>
        <TextField style={{ position: 'absolute', bottom: 0, width: '50%' }}>
          <Label htmlFor="pincode">Pincode</Label>
          <Input
            type="number"
            name="pincode"
            id="pincode"
            placeholder="560067"
            value={props.values.pincode}
            onChange={props.onFieldChange}
          />
        </TextField>
      </SecondSection>
    </Container>
  );
}
