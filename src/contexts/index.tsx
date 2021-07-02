import { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { ModalContextProvider } from './ModalContext';
import { ThemeContextProvider } from './ThemeContext';

type ContextProviderType = {
  children: ReactNode;
};

export function ContextProvider({ children }: ContextProviderType) {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <ModalContextProvider>{children}</ModalContextProvider>
      </AuthProvider>
    </ThemeContextProvider>
  );
}
