import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 60%;
  margin-right: 2.4rem;
  padding-block: 1.6rem;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.0rem;

  h3 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  button {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: .4rem;
    color: ${({ theme }) => theme.colors.primary.main};
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: 500;
    padding: .4rem 1.0rem;
    transition: all ease-in 200ms;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;
