import { Navigate, Outlet, useParams } from 'react-router';

import {
  type OrganizationPermission,
  canAccess,
} from '@app/guards/permissions';
import { useOrganization } from '@app/hooks/useOrganization';
import { LaunchScreen } from '@views/components/app/LaunchScreen';

interface IOrganizationGuardProps {
  permission: OrganizationPermission;
}

export function OrganizationGuard({ permission }: IOrganizationGuardProps) {
  const { organizationSlug } = useParams();
  const { role, isLoading } = useOrganization({ slug: organizationSlug });

  if (!canAccess(role, permission) && !isLoading) {
    return <Navigate to={`/${organizationSlug}/boards`} replace />;
  }

  return (
    <>
      {/* Fazer um loading... */}
      <LaunchScreen isLoading={isLoading} />

      <Outlet />
    </>
  );
}
