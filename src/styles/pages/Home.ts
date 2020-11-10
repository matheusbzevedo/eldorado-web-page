import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  main {
    display: flex;
    flex-direction: column;
    width: 100%;

    img {
      height: auto;
      width: 100%;
      border-bottom: .5rem solid rgba(251, 163, 32, 0.7);
    }

    .banner-mobile {
     display: none;
    }
  }

  @media screen and (max-width: 425px) {
    main {
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;

      img {
        border: none;
      }

      .banner {
        display: none;
      }

      .banner-mobile {
        display: block;
      }
    }
  }

`;
