import React from 'react';
import styled from 'styled-components';
import { DialogTitle, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { IRootState } from 'apps/frontend/src/store';
import { useSelector } from 'react-redux';

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
  const totalNumberOfRecords = useSelector(
    (state: IRootState) => state.invoice.totalNumberOfRecords
  );

  return (
    <>
      <Title id="responsive-dialog-title">
        <span>Create New Invoice</span>
        <OrderSpan>ORDER NO: 00{totalNumberOfRecords + 1}</OrderSpan>
        <CloseButton aria-label="close" onClick={props.handleClose}>
          <Close />
        </CloseButton>
      </Title>
    </>
  );
}

export default Header;
