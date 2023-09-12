'use client';

import { ThemeProvider } from 'next-themes';

type ProviderProps = {
  children: React.ReactNode;
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' enableSystem={false}>
      {children}
    </ThemeProvider>
  );
};

export default Provider;
