import { Outlet, useParams } from 'react-router';

import { useOrganization } from '@app/hooks/useOrganization';
import type { Params } from '@app/Router/params';
import { capitalizeFirstLetter } from '@app/utils/capitalizeFirstLetter';
import { Navigation } from '@views/components/app/Navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@views/components/ui/Avatar';
import { Skeleton } from '@views/components/ui/Skeleton';

export function OrgNavigationLayout() {
  const { organizationSlug } = useParams<Params>();
  const { organization, role, isLoading } = useOrganization({
    slug: organizationSlug,
  });

  if (!organizationSlug) return null;

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
                src={organization.avatarPath}
              />
              <AvatarFallback className="bg-primary size-12">
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
        <Navigation
          organization={organization}
          role={role}
          isLoading={isLoading}
        />

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
