import { PlusIcon } from 'lucide-react';

import { useBoards } from '@app/hooks/useBoards';
import { Button } from '@views/components/ui/Button';

import { Form } from './components/Form';

export function Dashboard() {
  const { boards } = useBoards();

  return (
    <div className="flex h-full flex-col">
      <header className="flex h-20 w-full items-center justify-between border-b p-6">
        <h1 className="text-xl font-semibold">Projeto Neddo</h1>
        <Button type="button" size="sm" className="rounded-full !px-4">
          <PlusIcon />
          Nova Coluna
        </Button>
      </header>

      <Form board={boards} />
    </div>
  );
}
