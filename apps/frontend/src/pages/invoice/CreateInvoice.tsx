import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Dialog, useMediaQuery } from '@material-ui/core';

import { Header, Body, Footer } from './components';

import './styles/invoice.module.css';

function CreateInvoice() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      id="create-invoice-dialog"
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      scroll={'paper'}
      maxWidth={'lg'}
      style={{ maxWidth: '100% !important', width: '100% !important' }}
    >
      <Header handleClose={handleClose} />
      <Body />
      <Footer />
    </Dialog>
  );
}

export default CreateInvoice;
