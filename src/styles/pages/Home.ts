import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 5.4rem;
    color: ${props => props.theme.colors.primary};
  }

  .Banners {
    img {
      width: 100%;
    }
  }

  .Sponsors {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 36px 0;
    .Sponsor {
      display: flex;
      align-items: center;
      img {
        width: 80px;
      }
      &:not(:last-of-type) {
        &::after {
          content: '';
          display: inline;
          border-left: 1px solid #fff;
          height: 30px;
          margin: 0 20px;
        }
      }
    }
  }

  .Blog {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    max-width: 862px;
    width: 100%;
    margin-bottom: 46px;
    .Left .Title,
    .Right .Title {
      text-transform: uppercase;
      font-size: 18px;
      text-align: center;
      padding: 36px 0 20px 0;
    }
    .Left,
    .Right {
      display: flex;
      flex-direction: column;
      .Image {
        width: 345px;
        height: 225px;
        background: #c4c4c4;
      }
    }
  }

  .SectionSeparator {
    margin: 0 auto;
    height: 5px;
    border-width: 0;
    color: rgba(251, 163, 32, 0.7);
    background-color: rgba(251, 163, 32, 0.7);
    max-width: 862px;
    width: 100%;
  }
`;
