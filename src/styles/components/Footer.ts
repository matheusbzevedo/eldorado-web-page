import styled from 'styled-components';

export const Footer = styled.footer`
bottom: 0;
position: absolute;
  width: 100vw;
  height: 11.6rem;
  background: ${props => props.theme.colors.footer.background};
  border-top: .5rem solid ${props => props.theme.colors.footer.bar};

  .footer-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .address {

    }

    .contact {
      display: flex;

      ul {
        list-style-type: none;

        li {

          a {
            text-decoration: none;
            color: ${props => props.theme.colors.text};
            transition: all 0.3s ease 0s;

            &:hover {
              color: ${props => props.theme.colors.primary};
            }
          }

          &:first-child {
            text-transform: uppercase;
          }
        }
      }
    }

    .back-top {
      cursor: pointer;

      .circle {
        display: flex;
        background-color: rgba(255, 255, 255, 0.2);
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
