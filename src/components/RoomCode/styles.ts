import styled from 'styled-components';

export const Container = styled.button`
  height: 4rem;
  border-radius: 0.8rem;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.text};

  background: ${({ theme }) => theme.colors.lightBody};
  border: 0.1rem solid #835afd;
  cursor: pointer;

  display: flex;

  > div {
    height: 100%;
    background: #835afd;
    padding: 0 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 23rem;
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
