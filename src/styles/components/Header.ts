import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  /* height: 120px; */
  background: url('/images/header_bar.png') no-repeat center center;
  background-size: cover;
  .Menu {
    list-style: none;
    width: 100%;
    text-align: right;
    margin-right: 60px;
    .MenuOption {
      display: inline;
      padding: 20px;
      font-size: 18px;
      text-transform: uppercase;
      a {
        display: inherit;
        text-decoration: none;
        color: #fff;
      }
      &.Social {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: 189px;
        height: 63px;
        margin-left: 20px;
        border: 2px solid ${props => props.theme.colors.primary};
        border-radius: 11px;
        vertical-align: middle;
      }
    }
  }
`;
