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

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.textareaBackground};
        color: ${({ theme }) => theme.colors.text};
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 13rem;
      }

      .form-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 16px;

        .user-info {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 50%;
          }

          span {
            font-weight: 500;
            font-size: 1.4rem;
            margin-left: 8px;
            color: ${({ theme }) => theme.colors.text};
          }
        }

        > span {
          font-size: 1.4rem;
          color: #737380;
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: #835afd;
            text-decoration: underline;
            font-size: 1.4rem;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .questions-list {
      margin-top: 32px;
    }

    .empty-questions {
      margin-top: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 16px;

      h2 {
        font-family: 'Poppins', sans-serif;
      }

      p {
        font-family: 'Roboto', sans-serif;
      }
    }
  }

  @media (max-width: 850px) {
    main {
      padding: 0 3.2rem;
    }
  }

  @media (max-width: 425px) {
    header .content {
      display: flex;
      flex-direction: column;
      gap: 16px;

      > div {
        div.switcher {
          display: none !important;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .form-footer {
      flex-direction: column;
      justify-content: center;
      gap: 16px;
    }
  }
`;
