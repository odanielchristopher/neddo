import { ClipboardListIcon, MailIcon, UsersIcon } from 'lucide-react';
import { Link, Outlet, useParams } from 'react-router';

import { useOrganization } from '@app/hooks/useOrganization';
import type { Params } from '@app/Router/params';
import { routes } from '@app/Router/routes';
import { capitalizeFirstLetter } from '@app/utils/capitalizeFirstLetter';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@views/components/ui/Avatar';
import { Button } from '@views/components/ui/Button';
import { Skeleton } from '@views/components/ui/Skeleton';

export function OrgNavigationLayout() {
  const { organizationName } = useParams<Params>();
  const { organization, isLoading } = useOrganization({
    pathname: organizationName,
  });

  if (!organizationName) return null;

  return (
    <div>
      <header className="flex h-20 w-full items-center gap-4 border-b p-6">
        {isLoading && !organization && (
          <>
            <Skeleton className="size-12 rounded-full" />

            <Skeleton className="h-10 w-[200px]" />
          </>
        )}

        {!isLoading && organization && (
          <>
            <Avatar className="size-12">
              <AvatarImage
                className="object-cover"
                src={organization.imagePath}
              />
              <AvatarFallback className="size-12 bg-transparent">
                {organization.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <h1 className="text-2xl font-bold">
              {capitalizeFirstLetter(organization.name)}
            </h1>
          </>
        )}
      </header>

      <div className="mt-6 flex h-full w-full items-start px-4 max-md:flex-col md:px-6">
        <aside className="border-border-muted min-h-[260px] flex-shrink-0 rounded-2xl max-md:mb-6 md:sticky md:top-4 md:mr-6 md:w-80 md:border md:p-5">
          <span className="text-muted-foreground font-medium">Páginas</span>
          <div className="bg-border my-4 h-px w-8"></div>

          <div className="flex gap-2 overflow-visible md:flex-col">
            {isLoading && !organization && (
              <>
                <Skeleton className="h-12 w-full rounded-md" />
                <Skeleton className="h-12 w-full rounded-md" />
                <Skeleton className="h-12 w-full rounded-md" />
              </>
            )}

            {!isLoading && organization && (
              <>
                <Button
                  type="button"
                  variant="outline"
                  className="justify-start rounded-md"
                  asChild
                >
                  <Link to={`${organizationName}${routes.boards}`}>
                    <ClipboardListIcon className="size-5" />
                    Projetos
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="justify-start rounded-md"
                  asChild
                >
                  <Link to={`${organizationName}${routes.members}`}>
                    <UsersIcon className="size-5" />
                    Membros
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="justify-start rounded-md"
                  asChild
                >
                  <Link to={`${organizationName}${routes.invites}`}>
                    <MailIcon className="size-5" />
                    Convites
                  </Link>
                </Button>
              </>
            )}
          </div>
        </aside>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
