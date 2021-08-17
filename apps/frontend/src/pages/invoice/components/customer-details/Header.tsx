import React from 'react';
import styled from 'styled-components';

import SkipIcon from 'apps/frontend/src/assets/skip-icon.png';

const Container = styled.div``;

const Head = styled.div`
  border-bottom: 1px solid light grey;
`;

const Title = styled.h3``;

const SkipButton = styled.button``;

export default function Header() {
  return (
    <Container>
      <Head>
        <Title>Cutomer details</Title>
        <SkipButton>
          <span>Skip</span>
          <img src={SkipIcon} alt="skip-icon" />
        </SkipButton>
      </Head>
    </Container>
  );
}
