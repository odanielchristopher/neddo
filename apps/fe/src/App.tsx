import { ThemeProvider } from '@app/contexts/ThemeProvider';
import { Button } from '@views/components/ui/Button';
import { Input } from '@views/components/ui/Input';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="neddo:ui-theme">
      <div className="grid h-full w-full place-items-center">
        <div className="bg-card rounded-2xl border p-4 shadow">
          <div className="flex flex-col gap-3">
            <Input placeholder="Nome" />
            <Input placeholder="Sobrenome" />
          </div>
          <Button type="button" className="mt-6 w-full">
            Submit
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
