import { PlusIcon, Power } from 'lucide-react';
import { Link, Outlet, useParams } from 'react-router';

import { useAuth } from '@app/hooks/useAuth';
import { cn } from '@app/lib/utils';
import { routes } from '@app/Router/routes';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@views/components/ui/Avatar';
import { Button } from '@views/components/ui/Button';
import { Logo } from '@views/components/ui/Logo';

export function AppLayout() {
  const { signout, user } = useAuth();
  const { organizationName } = useParams<{
    organizationName: string;
  }>();

  if (!user) return null;

  const currentOrg = organizationName;

  return (
    <main className="flex h-full w-full">
      <aside className="flex h-full flex-col items-center border-r p-4">
        <header className="border-b-2 pb-4">
          <Button type="button" className="size-12 rounded-full" asChild>
            <Link to={routes.dashboard}>
              <Logo
                variant="short"
                classNames={{
                  root: 'size-fit',
                }}
              />
            </Link>
          </Button>
        </header>

        <div className="scroll-hidden mt-6 flex-1 space-y-3 overflow-y-auto p-1">
          {user.organizations.map((org) => (
            <Button
              type="button"
              key={org.id}
              className={cn(
                'block cursor-pointer p-0',
                currentOrg === org.name.toLowerCase() && 'ring-2',
              )}
              asChild
            >
              <Link to={`${org.name.toLowerCase()}${routes.boards}`}>
                <Avatar className="size-12">
                  <AvatarImage className="object-cover" src={org.imagePath} />
                  <AvatarFallback className="size-12 bg-transparent">
                    {org.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-6">
          <Button
            type="button"
            className="size-12 rounded-md"
            variant="outline"
          >
            <PlusIcon className="size-6" />
          </Button>

          <Button
            type="button"
            className="size-12 rounded-full"
            onClick={signout}
          >
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
