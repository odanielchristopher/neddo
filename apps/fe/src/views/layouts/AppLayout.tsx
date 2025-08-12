import { Power } from 'lucide-react';
import { Link, Outlet } from 'react-router';

import { Button } from '@views/components/ui/Button';
import { Logo } from '@views/components/ui/Logo';

export function AppLayout() {
  return (
    <main className="flex h-full w-full">
      <aside className="flex h-full flex-col items-center border-r p-4">
        <header className="border-b-2 pb-4">
          <Button type="button" className="size-12 rounded-full" asChild>
            <Link to="/dashboard">
              <Logo variant="short" />
            </Link>
          </Button>
        </header>

        <div className="scroll-hidden mt-6 space-y-2 overflow-y-auto">
          <div className="bg-primary-600 size-12 rounded-full" />
          <div className="bg-primary-600 size-12 rounded-full" />
          <div className="bg-primary-600 size-12 rounded-full" />
        </div>

        <div className="flex flex-1 pt-6">
          <Button type="button" className="size-12 self-end rounded-full">
            <Power className="size-6" />
          </Button>
        </div>
      </aside>

      <section className="flex-1 overflow-hidden">
        <Outlet />
      </section>
    </main>
  );
}
