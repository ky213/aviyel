import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { DialogContent } from '@material-ui/core';
import { useSelector } from 'react-redux';

import ProductItemForm from './ProductItemForm';
import { IRootState } from 'apps/frontend/src/store';
import { Table, Thead, Tbody, Td, Th, Tr } from '../common/Styles';

function Body() {
  const { currentInvoice } = useSelector((state: IRootState) => state.invoice);

  return (
    <DialogContent>
      <Table>
        <Thead>
          <tr>
            <Th left>Item</Th>
            <Th right>Quantity</Th>
            <Th right>Price - $</Th>
          </tr>
        </Thead>
        <Tbody>
          {currentInvoice?.products?.map((product, index) => (
            <Tr key={index}>
              <Td left>{product.productName}</Td>
              <Td>{product.quantity}</Td>
              <Td>{product.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <ProductItemForm />
    </DialogContent>
  );
}

export default Body;
