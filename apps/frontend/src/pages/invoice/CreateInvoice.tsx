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

function CreateInvoice() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        scroll={'paper'}
      >
        <Header id="responsive-dialog-title">
          <span>Create New Invoice</span>
          <OrderSpan>ORDER NO: 1234</OrderSpan>
          <CloseButton aria-label="close" onClick={handleClose}>
            <Close />
          </CloseButton>
        </Header>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
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
    </div>
  );
}

export default CreateInvoice;
