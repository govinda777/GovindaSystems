"use client";

import { PrivyProvider } from '@privy-io/react-auth';
import { ThemeProvider } from '../context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

export default function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!appId) {
    return (
      <ThemeProvider>
        {children}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <PrivyProvider
        appId={appId}
        config={{
          loginMethods: ['email'],
          appearance: {
            theme: 'dark',
            accentColor: '#676FFF',
          },
          embeddedWallets: {
            ethereum: {
              createOnLogin: 'users-without-wallets',
            },
          },
        }}
      >
        {children}
      </PrivyProvider>
    </ThemeProvider>
  );
}
