import { useQuery } from '@tanstack/react-query';

import { ORGS_QUERY_KEY } from '@app/config/constants';
import {
  organizationsService,
  type OrganizationsService,
} from '@app/services/organizationsService';

export function useOrganization({
  id,
  pathname,
}: OrganizationsService.GetOneInput = {}) {
  const { data: organization, isLoading } = useQuery({
    queryKey: ORGS_QUERY_KEY({ pathname, id }),
    queryFn: () => organizationsService.getOne({ pathname }),
    enabled: !!pathname || !!id,
  });

  return {
    organization,
    isLoading,
  };
}
