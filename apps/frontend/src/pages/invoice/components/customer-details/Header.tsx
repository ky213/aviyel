import React from 'react';
import styled from 'styled-components';

import SkipIcon from 'apps/frontend/src/assets/skip-icon.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  margin: 0 auto;
  padding: 0 0 5px 0;
  border-bottom: 1px solid lightgrey;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: lighter;
`;

const SkipButton = styled.button`
  width: 90px;
  height: 40px;
  background: #eef0f2;
  color: #66a7ff;
  border: 1px solid #eef0f2;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #e2e9f0;
  }
`;

export default function Header() {
  return (
    <Container>
      <Title>Customer details</Title>
      <SkipButton>
        <span>SKIP </span>
        <img src={SkipIcon} alt="skip-icon" />
      </SkipButton>
    </Container>
  );
}
