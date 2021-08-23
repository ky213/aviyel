import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TopBarStyled = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #336399;
`;

const Title = styled(NavLink)`
  margin-left: 2%;
  color: white;
  font-size: 25px;
  font-family: sans-serif;
  font-weight: lighter;
  letter-spacing: 1px;
`;

const RoundedButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40px;
  right: 50px;
  border: 0;
  border-radius: 50%;
  color: white;
  background-color: #ff64a4;
  font-size: 40px;
  font-weight: bold;
  font-family: monospace;
  cursor: pointer;
  &:hover {
    background: #f1498e;
  }
`;

function TopBar() {
  return (
    <TopBarStyled className="no-print">
      <Title to="/">Dashboard</Title>
      <NavLink to="/invoice/create">
        <RoundedButton title="create invoice">+</RoundedButton>
      </NavLink>
    </TopBarStyled>
  );
}

export default TopBar;
