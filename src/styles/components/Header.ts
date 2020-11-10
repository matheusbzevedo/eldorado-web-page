import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 12rem;
  background: url('/images/header_bar.svg') no-repeat center center;
  background-size: cover;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    max-width: 85%;
    height: 100%;
    margin: auto;

    .logo-social-box {
      display: flex;
      align-items: center;

      .social {
        margin-left: 3.5rem;
        display: flex;
        width: 14.4rem;
        height: 4.7rem;
        border: .2rem solid ${props => props.theme.colors.primary};
        box-sizing: border-box;
        border-radius: 1.1rem;
        align-items: center;
        justify-content: center;

        ul {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          list-style: none;

          li {
            display: inline-block;
          }
        }
      }
    }

    nav {
      width: 38vw;

      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        list-style: none;

        li {
          display: inline-block;

          a {
            text-transform: uppercase;
            line-height: 2.7rem;
            font-size: 1.8rem;
            color: ${props => props.theme.colors.text};
            transition: all 0.3s ease 0s;
            text-decoration: none;

            &:hover {
              color: ${props => props.theme.colors.primary};
            }
          }
        }
      }
    }
  }
`;
