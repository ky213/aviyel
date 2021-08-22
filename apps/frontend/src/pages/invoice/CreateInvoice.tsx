import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Dialog, useMediaQuery } from '@material-ui/core';

import { Header, Content } from './components';
import { IRootState } from '../../store';

export interface ICreateInvoiceProps extends StateProps, DispatchProps {}

function CreateInvoice(props: ICreateInvoiceProps) {
  const history = useHistory();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
    history.push('/invoice/view');
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
      <Content />
    </Dialog>
  );
}

const mapStateToProps = (state: IRootState) => ({
  currentInvoice: state.invoice.currentInvoice,
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CreateInvoice);
