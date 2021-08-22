import styled, { StyledComponent } from 'styled-components';

export const FieldError = styled.span`
  color: red;
  font-size: 12px;
`;

export const TextField: StyledComponent<any, any> = styled.div`
  width: ${({ width }: any) => width};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  height: 40px;
  padding: 1px 20px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  color: lightgray;
`;

export const Tr = styled.tr`
  height: 50px;
  border-bottom: 1px solid lightgrey;
`;

export const Th: StyledComponent<any, any> = styled.th`
  width: ${({ left }: any) => (left ? '60%' : '20%')};
  text-align: ${({ left }: any) => (left ? 'left' : 'center')};
  padding-left: ${({ left }: any) => (left ? '20px' : '0px')};
  padding-right: ${({ right }: any) => (right ? '20px' : '0px')};
`;

export const Td: StyledComponent<any, any> = styled.td`
  width: ${({ left }: any) => (left ? '60%' : '20%')};
  text-align: ${({ left }: any) => (left ? 'left' : 'center')};
  padding-left: ${({ left }: any) => (left ? '20px' : '0px')};
  padding-right: ${({ right }: any) => (right ? '20px' : '0px')};
`;

export const Tbody = styled.tbody``;
