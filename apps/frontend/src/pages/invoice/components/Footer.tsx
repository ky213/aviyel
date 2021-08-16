import React from 'react';
import styled from 'styled-components';
import { DialogActions } from '@material-ui/core';

import { Input } from './ProductForm';

const Container = styled(DialogActions)`
  text-align: left;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  alignt-items: center;
  height: 100px;
  width: 96%;
  border-top: 1px solid lightgray;
  margin: auto;
  padding: 10px;
`;

const InputWithIcon = styled.span`
  position: relative;
  margin: 2px 5px;
  & span {
    position: absolute;
    right: 10px;
    top: 2px;
  }
`;

const Taxes = styled.div`
  width: 60%;
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
  height: 100px;
  background: grey;
`;

function Footer() {
  return (
    <Container>
      <Total>
        <Taxes>
          <InputWithIcon>
            <Input type="number" placeholder="Tax" width="20%" />
            <span>%</span>
          </InputWithIcon>
          <InputWithIcon>
            <Input placeholder="Discount" width="23%" />
            <span>%</span>
          </InputWithIcon>
        </Taxes>
        <SubTotal>
          <span>Sub Total</span>
          <span>$ 45.00</span>
        </SubTotal>
      </Total>
    </Container>
  );
}

export default Footer;
