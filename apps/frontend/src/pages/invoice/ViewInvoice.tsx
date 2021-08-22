import React from 'react';
import styled from 'styled-components';

import PrintIcon from 'apps/frontend/src/assets/printer-blue.png';

const Container = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
`;

const Title = styled.h2`
  color: lightgrey;
`;

const Invoice = styled.div`
  height: 100%;
  padding: 30px 50px;
  box-shadow: 0 0 10px lightgrey;
  background: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  alignt-items: center;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgrey;
  & + div {
    margin-right: auto;
  }
`;

const InvoiceNumber = styled.div`
  & h4 {
    font-weight: lighter;
    color: grey;
  }
  & small {
    color: lightgrey;
  }
  & * {
    margin: 0 0 7px 0;
  }
`;

const CustomerDetails = styled.div`
  text-align: right;
  margin-left: auto;
  & p {
    color: grey;
  }
  & * {
    margin: 0 0 5px 0;
  }
`;

const PrintButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 auto 30px;
  border: 1px solid #73afff;
  border-radius: 4px;
  height: 40px;
  width: 100px;
  background: white;
  color: #73afff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px lightgray;
  }
`;

function ViewInvoice() {
  return (
    <Container>
      <Title>Invoice Details</Title>
      <Invoice>
        <Header>
          <InvoiceNumber>
            <h3>Invoice</h3>
            <h4># INV12457</h4>
            <small>11:12 AM - Today </small>
          </InvoiceNumber>
          <CustomerDetails>
            <p>Customer details</p>
            <h4>Jhon Doe</h4>
            <p>Jhondoe@gmail.com</p>
          </CustomerDetails>
          <PrintButton>
            <span>Print </span>
            <img src={PrintIcon} />
          </PrintButton>
        </Header>
      </Invoice>
    </Container>
  );
}

export default ViewInvoice;
