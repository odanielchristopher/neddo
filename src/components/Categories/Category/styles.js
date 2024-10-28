import styled from 'styled-components';

export const Container = styled.div`
  background: #2BC6D0;
  border-radius: .4rem;
  box-shadow: 0rem .4rem .8rem -.3rem rgba(0,0,0,0.2);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  font-weight: 500;

  h4 {
    font-weight: 500;
  }

  &+& {
    margin-top: 1.0rem;
  }
`;
