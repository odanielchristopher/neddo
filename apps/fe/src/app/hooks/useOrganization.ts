import { useQuery } from '@tanstack/react-query';

import { ORGS_QUERY_KEY } from '@app/config/constants';
import {
  organizationsService,
  type OrganizationsService,
} from '@app/services/organizationsService';
import { minutes } from '@app/utils/minutes';

export function useOrganization({
  id,
  slug,
}: OrganizationsService.GetOneInput = {}) {
  const { data, isLoading } = useQuery({
    queryKey: ORGS_QUERY_KEY({ slug, id }),
    queryFn: () => organizationsService.getOne({ slug: slug }),
    enabled: !!slug || !!id,
    staleTime: minutes(10),
  });

  return {
    organization: data?.organization,
    role: data?.role,
    isLoading,
  };
}
