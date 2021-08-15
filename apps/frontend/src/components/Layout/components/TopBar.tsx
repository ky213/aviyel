import React from 'react';
import styled from 'styled-components';

const TopBarStyled = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #336399;
`;

const Title = styled.h3`
  margin-left: 2%;
  color: white;
  font-family: sans-serif;
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
  font-weight: bold;
  font-family: monospace;
  cursor: pointer;
  &:hover {
    background: #f1498e;
  }
`;

function TopBar() {
  return (
    <TopBarStyled>
      <Title>Dashboard</Title>
      <RoundedButton title="create invoice">
        <span>+</span>
      </RoundedButton>
    </TopBarStyled>
  );
}

export default TopBar;
