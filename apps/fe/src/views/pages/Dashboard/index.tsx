import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router';

import { useAuth } from '@app/hooks/useAuth';
import { boards } from '@app/mocks/boards';
import { routes } from '@app/Router/routes';
import { capitalizeFirstLetter } from '@app/utils/capitalizeFirstLetter';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@views/components/ui/Avatar';

export function Dashboard() {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();

  const currentOrg = searchParams.get('organization');

  const filteredBoards = useMemo(
    () =>
      boards.filter((board) =>
        currentOrg
          ? board.organization.name.toLowerCase() === currentOrg
          : board,
      ),
    [boards, currentOrg],
  );

  if (!user) return null;

  return (
    <div>
      <header className="flex h-20 w-full items-center justify-between border-b p-6">
        <h1 className="text-2xl font-bold">
          Bem-vindo(a), {capitalizeFirstLetter(user.name)}!
        </h1>
      </header>

      <main className="grid grid-cols-1 gap-3 p-4 min-[500px]:grid-cols-2 md:grid-cols-3 md:p-8 lg:grid-cols-4">
        {filteredBoards.map((board) => (
          <Link
            key={board.id}
            to={`/${board.organization.name.toLowerCase()}${routes.boards}/${board.id}`}
            className="bg-card hover:border-primary flex h-40 w-full flex-col rounded-2xl border transition-all hover:scale-[101%]"
          >
            <Avatar className="bg-primary size-full flex-1 rounded-none rounded-t-2xl">
              <AvatarImage className="object-cover" src={board.imagePath} />
              <AvatarFallback className="bg-primary mb-4">
                {board.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <strong className="block p-4 text-lg">
              {capitalizeFirstLetter(board.name)}
            </strong>
          </Link>
        ))}
      </main>
    </div>
  );
}
