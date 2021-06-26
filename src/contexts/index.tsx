import { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { ModalContextProvider } from './ModalContext';

type ContextProviderType = {
  children: ReactNode;
};

export function ContextProvider({ children }: ContextProviderType) {
  return (
    <AuthProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </AuthProvider>
  );
}
