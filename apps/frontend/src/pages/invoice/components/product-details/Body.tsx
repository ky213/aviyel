import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { DialogContent } from '@material-ui/core';

import ProductItemForm from './ProductItemForm';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  height: 40px;
  padding: 1px 20px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  color: lightgray;
`;

const Tr = styled.tr`
  height: 50px;
  border-bottom: 1px solid lightgrey;
`;

const Th: StyledComponent<any, any> = styled.th`
  width: ${({ left }: any) => (left ? '60%' : '20%')};
  text-align: ${({ left }: any) => (left ? 'left' : 'center')};
  padding-left: ${({ left }: any) => (left ? '20px' : '0px')};
  padding-right: ${({ right }: any) => (right ? '20px' : '0px')};
`;

const Td: StyledComponent<any, any> = styled.td`
  width: ${({ left }: any) => (left ? '60%' : '20%')};
  text-align: ${({ left }: any) => (left ? 'left' : 'center')};
  padding-left: ${({ left }: any) => (left ? '20px' : '0px')};
  padding-right: ${({ right }: any) => (right ? '20px' : '0px')};
`;

const Tbody = styled.tbody``;

function Body() {
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
          <Tr>
            <Td left>bidoun zit</Td>
            <Td right>2254</Td>
            <Td right>2</Td>
          </Tr>
        </Tbody>
      </Table>
      <ProductItemForm />
    </DialogContent>
  );
}

export default Body;
