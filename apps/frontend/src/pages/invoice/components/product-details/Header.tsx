import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import EditIcon from 'apps/frontend/src/assets/edit.png';
import { IRootState } from 'apps/frontend/src/store';
import { useSelector } from 'react-redux';

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

export interface HeaderProps extends ComponentProps<any> {
  next: () => void;
}

export default function Header(props: HeaderProps) {
  const currentInvoice = useSelector(
    (state: IRootState) => state.invoice.currentInvoice
  );

  return (
    <Container>
      <Title>Product Details</Title>
      <CustomerDetails>
        <div>
          <div>
            <p>Customer Details</p>
            <h3>{currentInvoice?.customer?.fullName || 'N/A'}</h3>
            <p>{currentInvoice?.customer?.email || 'N/A'}</p>
          </div>
          <img src={EditIcon} alt="edit" onClick={props.next} />
        </div>
      </CustomerDetails>
    </Container>
  );
}
