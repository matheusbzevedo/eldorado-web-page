import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};

    &:hover {
      color: ${props => props.theme.colors.secondary};
      text-decoration: underline;
    }
  }
`;
