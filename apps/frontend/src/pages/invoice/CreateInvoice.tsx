import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';

import EditIcon from 'apps/frontend/src/assets/edit.png';

const Header = styled(DialogTitle)`
  position: relative;
`;

const OrderSpan = styled.span`
  color: gray;
  font-size: 14px;
  margin-left: 15%;
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
    color: gray;
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
    &:hover {
      box-shadow: 0px 0px 5px grey;
      background-color: rgba(25, 118, 210, 0.04);
      border-radius: 4px;
    }
  }
`;

function CreateInvoice() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => setOpen(false);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      scroll={'paper'}
      maxWidth={'md'}
    >
      <Header id="responsive-dialog-title">
        <span>Create New Invoice</span>
        <OrderSpan>ORDER NO: 1234</OrderSpan>
        <CloseButton aria-label="close" onClick={handleClose}>
          <Close />
        </CloseButton>
      </Header>
      <CustomerDetails>
        <div id="details">
          <div>
            <p>Customer Details</p>
            <h3>Jhon Doe</h3>
            <p>jhondoe@gmail.com</p>
          </div>
          <img src={EditIcon} alt="edit" />
        </div>
      </CustomerDetails>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateInvoice;
