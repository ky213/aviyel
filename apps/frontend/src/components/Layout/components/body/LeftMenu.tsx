import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IRootState } from 'apps/frontend/src/store';
import { getAllInvoices } from 'apps/frontend/src/store/reducers/invoice.reducer';
import SearchIcon from 'apps/frontend/src/assets/search-icon.png';

const LeftMenuStyled = styled.div`
  width: 25%;
  height: 100%;
  padding: 10px 10px;
  background-color: #2f3740;
  text-align: center;
`;

const Search = styled.div`
  width: 100%;
  position: relative;
  & input {
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 5px 5px 5px 35px;
    border: 0;
    border-radius: 20px;
    background: #353e48;
    color: #828d9a;
    font-weight: lighter;
    font-size: 14px;
  }

  & img {
    position: absolute;
    top: 11px;
    left: 10px;
  }
`;

export interface ILeftMenuProps extends StateProps, DispatchProps {}

function LeftMenu(props: ILeftMenuProps) {
  useEffect(() => {
    props.getAllInvoices();
  }, []);

  return (
    <LeftMenuStyled>
      <Search>
        <input type="text" placeholder="search..." />
        <img src={SearchIcon} />
      </Search>
    </LeftMenuStyled>
  );
}

const mapStateToProps = (state: IRootState) => ({
  currentInvoice: state.invoice.currentInvoice,
});

const mapDispatchToProps = { getAllInvoices };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
