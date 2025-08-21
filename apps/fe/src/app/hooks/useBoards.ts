import { useQuery } from '@tanstack/react-query';

import { BOARDS_QUERY_KEY } from '@app/config/constants';
import { boardsService } from '@app/services/boardsService';

export function useBoards() {
  const { data, isLoading } = useQuery({
    queryKey: BOARDS_QUERY_KEY(),
    queryFn: () => boardsService.getAll(),
  });

  return {
    boards: data ?? { columns: {}, order: [] },
    isLoading,
  };
}
