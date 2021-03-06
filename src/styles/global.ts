import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
}

body,
input,
button,
textarea {
  font: 400 1.6rem 'Roboto', sans-serif;
}

.react-modal-content {
  width: 100%;
  max-width: 57.6rem;
  background: ${({ theme }) => theme.colors.lightBody};
  padding: 3rem;

  position: relative;

  border-radius: 0.25rem;
}

.react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);

  position: fixed;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 500px) {
  .react-modal-content {
    width: 90%;
  }
}
`;
