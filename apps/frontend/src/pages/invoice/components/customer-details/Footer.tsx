import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { DialogActions } from '@material-ui/core';

const Container = styled(DialogActions)`
  position: relative;
  background: red;
`;

const Background = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  width: 100%;
  margin: 0 !important;
  padding: 0px 50px;
  background: #eef0f2;
  postition: absolute;
  bottom: 0;
`;

const Button: StyledComponent<any, any> = styled.button`
  border: 1px solid #66a7ff;
  border-radius: 4px;
  background: ${({ primary }: any) => (primary ? '#66a7ff' : 'white')};
  color: white;
  width: 135px;
  height: 40px;
  padding: 5px;
  cursor: pointer;
  &: hover {
    background: #4391fb;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Background>
        <Button type="submit" primary>
          Proceed
        </Button>
      </Background>
    </Container>
  );
}
