import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IRootState } from 'apps/frontend/src/store';
import { getAllInvoices } from 'apps/frontend/src/store/reducers/invoice.reducer';
import SearchIcon from 'apps/frontend/src/assets/search-icon.png';

const LeftMenuStyled = styled.div`
  width: 25%;
  height: 100%;
  padding: 20px 0;
  background-color: #2f3740;
  text-align: center;
`;

const Search = styled.div`
  width: 95%;
  margin: auto;
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

const InvoiceCount = styled.div`
  width: 100%;
  color: #828c98;
  text-align: left;
  margin: 20px 0 7px 0;
  padding: 10px 10px;
`;

const InvoiceList = styled.div`
  width: 100%;
  height: 78%;
  max-height: 100%;
  overflow-y: auto;
`;

const InvoiceBrick = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px 20px;
  cursor: pointer;
  & div {
    display: flex;
    justify-content: space-between;
    maring-bottom: 5px;
  }
  &:hover {
    background: #404b57;
  }
`;

const P = styled.p`
  margin: 5px 0;
  color: #8e98ab;
  font-weight: lighter !important;
  font-size: 14px;
`;

const InvoiceNumber = styled(P)``;
const InvoiceDate = styled(P)``;
const NumberOfItems = styled(P)`
  text-align: left;
`;
const CustomerName = styled(P)`
  color: #5d93db;
`;
const GrandTotal = styled(P)`
  color: white;
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
      <InvoiceCount>Invoices: {props.totalNumberOfRecords}</InvoiceCount>
      <InvoiceList>
        <InvoiceBrick>
          <div>
            <InvoiceNumber>INV.#-1222</InvoiceNumber>
            <InvoiceDate>{new Date().toDateString()}</InvoiceDate>
          </div>
          <div>
            <NumberOfItems>Items - 05</NumberOfItems>
          </div>
          <div>
            <CustomerName>cutomer name</CustomerName>
            <GrandTotal>$ 12145</GrandTotal>
          </div>
        </InvoiceBrick>
      </InvoiceList>
    </LeftMenuStyled>
  );
}

const mapStateToProps = (state: IRootState) => ({
  currentInvoice: state.invoice.currentInvoice,
  totalNumberOfRecords: state.invoice.totalNumberOfRecords,
});

const mapDispatchToProps = { getAllInvoices };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
