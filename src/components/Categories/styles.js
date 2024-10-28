import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 40%;
  padding-left: 2.4rem;
  border-left: 2px solid ${({ theme }) => theme.colors.gray[200]};
  margin-right: 2.4rem;
  padding-block: 1.6rem;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  h3 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  div {
    align-items: center;
    display: flex;
    gap: .6rem;

    button {
      background: transparent;
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      border-radius: 0.4rem;
      color: ${({ theme }) => theme.colors.primary.main};
      cursor: pointer;
      font-size: 3.6rem;
      font-weight: 400;
      padding: .3rem .4rem .2rem;
      transition: all ease-in 200ms;
      line-height: 2.4rem;


      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.main};
        color: #fff;
      }
    }

    img {
      width: 3.6rem;
      height: 100%;
    }
  }
`;
