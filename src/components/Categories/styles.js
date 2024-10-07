import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 40%;
  background-color: green;
  padding-left: 2.4rem;
  border-left: 2px solid ${({ theme }) => theme.colors.gray[200]};
`;
