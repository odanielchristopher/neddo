import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  &+& {
    margin-top: 1.6rem;
  }
`;

export const ContentContainer = styled.div`
  background-color: #fff;
  border-radius: .4rem;
  padding: 1.6rem;
  width: 46.0rem;

  header {
    strong {
      font-size: 1.6rem;
      font-weight: 600;
      margin-right: 1.0rem;
    }

    span {
      background: ${({ theme }) => theme.colors.primary.lighter};
      border-radius: .4rem;
      color: ${({ theme }) => theme.colors.primary.light};
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 700;
      padding: .2rem .6rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 1.4rem;
    margin-top: 1.2rem;
  }
`;

export const ActionsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 1fr;
  flex-direction: column;
  gap: .4rem;

  .checkbox {
    width: 1.8rem;
    height: 1.8rem;
    border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const Description = styled.div`

`;
