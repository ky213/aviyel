import { PropsWithChildren, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Alert, AlertTitle, Snackbar } from '@material-ui/core';

import { IRootState } from '../../store';

export interface IProviderProps extends PropsWithChildren<StateProps> {}

const Provider = ({ loading, success, error }: IProviderProps) => {
  const [open, setOpen] = useState(false);
  const color = success ? 'success' : error ? 'error' : undefined;
  useEffect(() => {
    if (!loading && !open) {
      if (success || error) setOpen(true);
    }
  });

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={() => setOpen(false)}
    >
      <Alert color={color} severity={color}>
        {error && <AlertTitle>Error</AlertTitle>}
        {success ? 'Success' : error?.message}
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = (state: IRootState) => ({
  loading: state.invoice.loading,
  success: state.invoice.success,
  error: state.invoice.error,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Provider);
