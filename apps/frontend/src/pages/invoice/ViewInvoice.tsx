import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PrintIcon from 'apps/frontend/src/assets/printer-blue.png';
import { Table, Thead, Tbody, Td, Th, Tr } from './components/common/Styles';
import { IRootState } from '../../store';
import { calculateShares } from '../../utils/calculations';
import {
  getLastInvoice,
  resetInvoiceState,
} from '../../store/reducers/invoice.reducer';

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

const Footer = styled.div`
  width: 35%;
  margin: 20px 0 0 auto;
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 40px;
  }
`;

export interface IViewInvoiceProps extends StateProps, DispatchProps {}

function ViewInvoice(props: IViewInvoiceProps) {
  const [subTotal, discountAmount, taxAmount, grandTotal] = calculateShares(
    props.currentInvoice
  );

  useEffect(() => {
    props.getLastInvoice();
    return () => {
      props.resetInvoiceState();
    };
  }, []);

  return (
    <Container>
      <Title>Invoice Details</Title>
      <Invoice>
        <Header>
          <InvoiceNumber>
            <h3>Invoice</h3>
            <h4># {props.currentInvoice?.invoiceNumber}</h4>
            <small>11:12 AM - Today </small>
          </InvoiceNumber>
          <CustomerDetails>
            <p>Customer details</p>
            <h4>{props.currentInvoice?.customer?.fullName || 'N/A'}</h4>
            <p>{props.currentInvoice?.customer?.email || 'N/A'}</p>
          </CustomerDetails>
          <PrintButton>
            <span>Print </span>
            <img src={PrintIcon} />
          </PrintButton>
        </Header>
        <Table>
          <Thead>
            <tr>
              <Th left>Item</Th>
              <Th right>Quantity</Th>
              <Th right>Price - $</Th>
            </tr>
          </Thead>
          <Tbody>
            {props.currentInvoice?.products?.map((product, index) => (
              <Tr key={index}>
                <Td left>{product.productName}</Td>
                <Td>{product.quantity}</Td>
                <Td>{product.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Footer>
          <div>
            <p>Sub Total</p>
            <h4>$ {subTotal.toFixed(2) || '0.00'}</h4>
          </div>
          <div>
            <p>Tax({'%' + props.currentInvoice?.tax})</p>
            <h4>$ {taxAmount.toFixed(2) || '0.00'}</h4>
          </div>
          <div>
            <p>Discount({'%' + props.currentInvoice?.discount})</p>
            <h4>$ {discountAmount.toFixed(2) || '0.00'}</h4>
          </div>
          <div>
            <h4>Grand Total</h4>
            <h3>$ {grandTotal.toFixed(2) || '0.00'}</h3>
          </div>
        </Footer>
      </Invoice>
    </Container>
  );
}

const mapStateToProps = (state: IRootState) => ({
  currentInvoice: state.invoice.currentInvoice,
});

const mapDispatchToProps = { getLastInvoice, resetInvoiceState };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ViewInvoice);
