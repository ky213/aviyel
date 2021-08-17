import React from 'react';
import styled from 'styled-components';
import { DialogTitle, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

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
    </>
  );
}

export default Header;
