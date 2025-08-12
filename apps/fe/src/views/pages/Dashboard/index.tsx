// Dashboard.tsx
import { DragDropProvider } from '@dnd-kit/react';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';

import { Column } from '@views/components/app/Column';
import { Button } from '@views/components/ui/Button';

type CardData = {
  id?: string;
  title: string;
};

type GrabCard = CardData & { columnIndex: number; id: string };

type ColumnData = {
  title: string;
  cards: CardData[];
};

export type DashboardData = {
  columns: ColumnData[];
};

export function Dashboard() {
  const form = useForm<DashboardData>({
    defaultValues: {
      columns: [
        {
          title: 'A Fazer',
          cards: [
            { title: 'Configurar API' },
            { title: 'Criar Login' },
            { title: 'Montar ERD' },
          ],
        },
        {
          title: 'Em Progresso',
          cards: [{ title: 'Tela de Projetos' }, { title: 'Config Kanban' }],
        },
        {
          title: 'Concluído',
          cards: [{ title: 'Setup Monorepo' }],
        },
      ],
    },
  });
  const [dragOriginColumn, setDragOriginColumn] = useState<
    (ColumnData & { id: number }) | null
  >(null);
  const columns = useFieldArray({
    control: form.control,
    name: 'columns',
  });

  function handleColumns(
    card: GrabCard,
    toColumn?: ColumnData & { id: number },
  ) {
    console.log({ card, toColumn, dragOriginColumn });
    if (!toColumn || !dragOriginColumn) {
      setDragOriginColumn(null);
      return;
    }

    if (toColumn.id === dragOriginColumn?.id) return;

    const newToColumnCards = [...toColumn.cards, card];

    const newOriginColumnCards = dragOriginColumn.cards.filter(
      (c) => c.id !== card.id,
    );

    columns.update(dragOriginColumn.id, {
      ...dragOriginColumn,
      cards: newOriginColumnCards,
    });
    columns.update(toColumn.id, { ...toColumn, cards: newToColumnCards });

    setDragOriginColumn(null);
    handleSubmit();
  }

  const handleSubmit = form.handleSubmit((data) => {
    console.log('Final Data', data);
  });

  return (
    <div className="flex h-full w-full flex-col">
      {/* HEADER */}
      <header className="flex h-20 w-full items-center justify-between border-b p-6">
        <h1 className="text-xl font-semibold">Projeto Neddo</h1>
        <Button
          type="button"
          size="sm"
          className="rounded-full !px-4"
          onClick={() =>
            columns.append({
              title: 'Nova Coluna',
              cards: [],
            })
          }
        >
          <PlusIcon />
          Nova Coluna
        </Button>
      </header>

      {/* KANBAN */}
      <DragDropProvider
        onDragEnd={({ operation: { source, target } }) => {
          handleColumns(
            source?.data as GrabCard,
            target?.data as ColumnData & { id: number },
          );
        }}
        onDragStart={({ operation: { target } }) => {
          setDragOriginColumn(target?.data as ColumnData & { id: number });
        }}
      >
        <FormProvider {...form}>
          <form
            onSubmit={handleSubmit}
            className="scroll-custom grid w-full flex-1 auto-cols-[300px] grid-flow-col gap-6 overflow-x-auto p-6"
          >
            {columns.fields.map((col, colIndex) => (
              <Column key={col.id} columnIndex={colIndex} {...col} />
            ))}
          </form>
        </FormProvider>
      </DragDropProvider>
    </div>
  );
}
