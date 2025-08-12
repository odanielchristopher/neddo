// Dashboard.tsx
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { PlusIcon } from 'lucide-react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';

import { Column } from '@views/components/app/Column';
import { Button } from '@views/components/ui/Button';

export type DashboardData = {
  columns: {
    id: number;
    title: string;
    cards: {
      identifier: string;
      title: string;
    }[];
  }[];
};

export function Dashboard() {
  const form = useForm<DashboardData>({
    defaultValues: {
      columns: [
        {
          id: 0,
          title: 'A Fazer',
          cards: [
            { identifier: '1', title: 'Configurar API' },
            { identifier: '2', title: 'Criar Login' },
            { identifier: '3', title: 'Montar ERD' },
          ],
        },
        {
          id: 1,
          title: 'Em Progresso',
          cards: [
            { identifier: '4', title: 'Tela de Projetos' },
            { identifier: '5', title: 'Config Kanban' },
          ],
        },
        {
          id: 2,
          title: 'Concluído',
          cards: [{ identifier: '6', title: 'Setup Monorepo' }],
        },
      ],
    },
  });

  const columns = useFieldArray({
    control: form.control,
    name: 'columns',
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const fromColumnIndex = active.data.current?.columnIndex;
    const toColumnIndex = over.data.current?.columnIndex;

    const cardId = active.id as string;

    if (fromColumnIndex === undefined || toColumnIndex === undefined) return;

    // Estado mais atualizado do form
    const allColumns = form.getValues('columns');
    const fromColumn = allColumns[fromColumnIndex];
    const toColumn = allColumns[toColumnIndex];

    // Ache o card
    const cardIndex = fromColumn.cards.findIndex(
      (c) => c.identifier === cardId,
    );
    if (cardIndex === -1) return;

    const [movedCard] = fromColumn.cards.splice(cardIndex, 1);

    if (fromColumnIndex === toColumnIndex) {
      // reorder dentro da mesma coluna
      const overCardId = over.id as string;
      const overIndex = toColumn.cards.findIndex(
        (c) => c.identifier === overCardId,
      );

      // Se soltar fora de um card, joga no final
      const targetIndex = overIndex >= 0 ? overIndex : toColumn.cards.length;

      toColumn.cards.splice(targetIndex, 0, movedCard);
      columns.update(fromColumnIndex, { ...toColumn });
    } else {
      // move para outra coluna
      const overCardId = over.id as string;
      const overIndex = toColumn.cards.findIndex(
        (c) => c.identifier === overCardId,
      );
      const targetIndex = overIndex >= 0 ? overIndex : toColumn.cards.length;

      toColumn.cards.splice(targetIndex, 0, movedCard);

      columns.update(fromColumnIndex, { ...fromColumn });
      columns.update(toColumnIndex, { ...toColumn });
    }

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
              id: Date.now(),
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
      <DndContext onDragEnd={handleDragEnd}>
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
      </DndContext>
    </div>
  );
}
