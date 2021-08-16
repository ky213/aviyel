import React from 'react';
import styled from 'styled-components';
import { DialogTitle, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import EditIcon from 'apps/frontend/src/assets/edit.png';

const Title = styled(DialogTitle)`
  position: relative;
`;

const OrderSpan = styled.span`
  color: lightgrey;
  font-size: 14px;
  margin-left: 10%;
`;

const CloseButton = styled(IconButton)`
  position: absolute !important;
  top: 1px;
  right: 1px;
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

export interface IHeaderProps extends React.ComponentProps<any> {
  handleClose: () => void;
}

function Header(props: IHeaderProps) {
  return (
    <>
      <Title id="responsive-dialog-title">
        <span>Create New Invoice</span>
        <OrderSpan>ORDER NO: 1234</OrderSpan>
        <CloseButton aria-label="close" onClick={props.handleClose}>
          <Close />
        </CloseButton>
      </Title>
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
    </>
  );
}

export default Header;
