import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';

import { AuthProvider } from '@app/contexts/AuthContext';
import { ThemeProvider } from '@app/contexts/ThemeProvider';
import { queryClient } from '@app/lib/QueryClient';
import { Router } from '@app/Router';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="neddo:ui-theme">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
