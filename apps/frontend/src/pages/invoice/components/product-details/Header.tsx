import React from 'react';
import styled from 'styled-components';

import EditIcon from 'apps/frontend/src/assets/edit.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0;
  padding: 0 30px;
`;

const Title = styled.h4`
  margin: 0;
  font-weight: lighter;
`;

const CustomerDetails = styled.div`
  font-family: sans-serif;
  text-align: right;
  p,
  h3 {
    margin: 0;
    padding: 0;
  }

  p {
    color: lightgray;
  }

  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  img {
    margin: 0 10px;
    padding: 5px;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      box-shadow: 0px 0px 5px grey;
      background-color: rgba(25, 118, 210, 0.04);
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <Title>Product Details</Title>
      <CustomerDetails>
        <div>
          <div>
            <p>Customer Details</p>
            <h3>Jhon Doe</h3>
            <p>jhondoe@gmail.com</p>
          </div>
          <img src={EditIcon} alt="edit" />
        </div>
      </CustomerDetails>
    </Container>
  );
}
