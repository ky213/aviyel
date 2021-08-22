import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IRootState } from 'apps/frontend/src/store';
import { getAllInvoices } from 'apps/frontend/src/store/reducers/invoice.reducer';

const LeftMenuStyled = styled.div`
  width: 25%;
  height: 100%;
  background-color: #2f3740;
`;

export interface ILeftMenuProps extends StateProps, DispatchProps {}

function LeftMenu(props: ILeftMenuProps) {
  useEffect(() => {
    props.getAllInvoices();
  }, []);

  return <LeftMenuStyled></LeftMenuStyled>;
}

const mapStateToProps = (state: IRootState) => ({
  currentInvoice: state.invoice.currentInvoice,
});

const mapDispatchToProps = { getAllInvoices };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
