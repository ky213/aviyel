import React from 'react';
import styled, { StyledComponent } from 'styled-components';

const Container = styled.form`
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
  color: lightgray;
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
  color: lightgray;
  &:focus {
    border: 2px solid #66a7ff;
  }
`;

export default function CustomerForm() {
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
            required
          />
        </TextField>
        <TextField>
          <Label htmlFor="address">Address</Label>
          <TextArea
            rows={7}
            name="address"
            id="address"
            placeholder="complete address"
            required
          />
        </TextField>
      </FirstSection>
      <SecondSection>
        <TextField>
          <Label htmlFor="phone">
            Phone Number <span>*</span>
          </Label>
          <Input type="text" name="phone" id="phone" required />
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
            required
          />
        </TextField>
        <TextField style={{ position: 'absolute', bottom: 0, width: '50%' }}>
          <Label htmlFor="pincode">Pincode</Label>
          <Input
            type="number"
            name="pincode"
            id="pincode"
            placeholder="560067"
            required
          />
        </TextField>
      </SecondSection>
    </Container>
  );
}
