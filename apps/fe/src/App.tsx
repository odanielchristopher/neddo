import { ThemeProvider } from '@app/contexts/ThemeProvider';
import { Form } from '@views/components/app/Form';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="neddo:ui-theme">
      <Form />
    </ThemeProvider>
  );
}
