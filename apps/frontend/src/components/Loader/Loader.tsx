import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { IRootState } from '../../store';

const Container = styled(Backdrop)`
  color: #fff;
`;

export default function Loader() {
  const invoice = useSelector((state: IRootState) => state.invoice);
  const [open, setOpen] = React.useState(false);

  return (
    <Container id="back-drop" open={invoice.loading}>
      <CircularProgress color="inherit" />
    </Container>
  );
}
