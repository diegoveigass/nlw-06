import styled from 'styled-components';

export const Container = styled.button`
  height: 5rem;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  img {
    margin-right: 8px;
  }

  transition: filter 0.2s;

  &.outlined {
    border: 0.1rem solid #835afd;
    background-color: ${({ theme }) => theme.colors.lightBody};
    color: ${({ theme }) => theme.colors.buttonTextColorOutlined};
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
