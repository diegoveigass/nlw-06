import styled from 'styled-components';

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #a8a8b3;

    .content {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 4.5rem;
      }

      > div {
        display: flex;
        align-items: center;
        gap: 16px;

        button {
          height: 4rem;
        }
      }
    }
  }

  main {
    width: 100%;
    max-width: 800px;
    margin: 8px auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.colors.text};
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 16px;
        padding: 8px 16px;
        color: #fff;
        font-size: 1.4rem;
      }
    }

    .question-list {
      margin-top: 32px;

      img {
        height: 2.4rem;
        width: 2.4rem;
      }
    }
  }

  @media (max-width: 850px) {
    main {
      padding: 0 3.2rem;
    }
  }

  @media (max-width: 600px) {
    header .content {
      display: flex;
      flex-direction: column;
      gap: 16px;

      > div {
        display: flex;
        flex-direction: column;
        gap: 16px;

        button {
          width: 100%;
        }

        div.switcher {
          display: none !important;
        }
      }
    }
  }
`;
