import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.questionBackground};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background: ${({ theme }) => theme.colors.questionHighlight};
    border: 1px solid #835afd;

    footer .user-info span {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  &.answered {
    background: ${({ theme }) => theme.colors.questionAwnswered};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

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
        font-size: 1.4rem;
        margin-left: 8px;
        color: #737380;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;

        &.liked {
          color: #835afd;

          svg path {
            stroke: #835afd;
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }

  @media (max-width: 425px) {
    footer {
      > div {
        gap: 8px;
      }
    }
  }
`;
