import { useQuery } from '@tanstack/react-query';

import { ORGS_QUERY_KEY } from '@app/config/constants';
import { organizationsService } from '@app/services/organizationsService';
import { minutes } from '@app/utils/minutes';

export function useOrganizations() {
  const { data, isFetching } = useQuery({
    queryKey: ORGS_QUERY_KEY(),
    queryFn: organizationsService.findUserOrgs,
    staleTime: minutes(10),
  });

  const organizations = data
    ? data.map(({ organization }) => organization)
    : [];

  return {
    organizations,
    isLoading: isFetching,
  };
}
