import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 87.0rem;
  margin: 0 auto;
  padding: 0 1.6rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[200]};
  font-size: 4rem;
  font-weight: 400;
  line-height: 5rem;
  margin-top: 7.4rem;
  padding-bottom: 3.2rem;
  text-align: center;
  width: 100%;

  span {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Main = styled.div`
  display: flex;
  margin-top: 2.4rem;
  width: 100%;
`;
