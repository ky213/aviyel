import styled, { StyledComponent } from 'styled-components';

export const FieldError = styled.span`
  color: red;
  font-size: 12px;
`;

export const TextField: StyledComponent<any, any> = styled.div`
  width: ${({ width }: any) => width};
`;
