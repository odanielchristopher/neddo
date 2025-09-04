import { ClipboardListIcon, MailIcon, UsersIcon } from 'lucide-react';
import { Link } from 'react-router';

import type {
  IOrganization,
  OrganizationRole,
} from '@app/entities/Organization';
import { canAccess } from '@app/guards/permissions';
import { routes } from '@app/Router/routes';

import { Button } from '../ui/Button';
import { Skeleton } from '../ui/Skeleton';

interface INavigationProps {
  organization: IOrganization | undefined;
  role: OrganizationRole | undefined;
  isLoading?: boolean;
}

export function Navigation({
  role,
  organization,
  isLoading,
}: INavigationProps) {
  return (
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
            {canAccess(role, 'boards') && (
              <Button
                type="button"
                variant="outline"
                className="justify-start rounded-md"
                asChild
              >
                <Link to={routes.boards}>
                  <ClipboardListIcon className="size-5" />
                  Projetos
                </Link>
              </Button>
            )}

            {canAccess(role, 'members') && (
              <Button
                type="button"
                variant="outline"
                className="justify-start rounded-md"
                asChild
              >
                <Link to={routes.members}>
                  <UsersIcon className="size-5" />
                  Membros
                </Link>
              </Button>
            )}

            {canAccess(role, 'invites') && (
              <Button
                type="button"
                variant="outline"
                className="justify-start rounded-md"
                asChild
              >
                <Link to={routes.invitations}>
                  <MailIcon className="size-5" />
                  Convites
                </Link>
              </Button>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
