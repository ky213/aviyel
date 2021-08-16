import React from 'react';
import styled from 'styled-components';

import EnterIcon from 'apps/frontend/src/assets/enter-icon.png';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  padding: 10px 0px;
  border-bottom: 1px solid lightgray;
`;

export const Input = styled.input`
  width: ${({ width }) => width};
  height: 30px;
  padding: 1px 5px;
  margin-right: auto;
  border: 1px solid lightgray;
  border-radius: 4px;
  font-size: 16px;
  color: lightgray;
  &:focus {
    border: 2px solid #66a7ff;
  }
`;

const SubmitButton = styled.button`
  border: 2px solid #66a7ff;
  border-radius: 4px;
  background: white;
  width: 40px;
  cursor: pointer;
  &:hover {
    background: rgba(25, 118, 210, 0.04);
  }
`;

function ProductForm() {
  return (
    <Form>
      <Input type="text" width="60%" placeholder="Please enter item name" />
      <Input type="number" width="10%" placeholder="0.00" />
      <Input type="number" width="10%" placeholder="0.00" />
      <SubmitButton type="submit">
        <img src={EnterIcon} alt="submit" />
      </SubmitButton>
    </Form>
  );
}

export default ProductForm;
