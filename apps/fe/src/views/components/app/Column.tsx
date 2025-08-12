// Column.tsx
import { useDroppable } from '@dnd-kit/core';
import { PlusIcon } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import type { DashboardData } from '@views/pages/Dashboard';

import { Button } from '../ui/Button';

import { DraggableCard } from './DraggableCard';

interface IColumnProps {
  title: string;
  columnIndex: number;
}

export function Column({ title, columnIndex }: IColumnProps) {
  const { control } = useFormContext<DashboardData>();

  const { fields, append } = useFieldArray({
    control,
    name: `columns.${columnIndex}.cards`,
  });

  const { setNodeRef, isOver } = useDroppable({
    id: `col-${columnIndex}`,
    data: {
      columnIndex,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={`bg-card flex flex-col rounded-2xl border shadow-sm transition-colors ${
        isOver ? 'border-primary' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="font-semibold">{title}</h2>
        <Button
          type="button"
          variant="ghost"
          className="size-8"
          onClick={() =>
            append({ identifier: Date.now().toString(), title: 'Novo Card' })
          }
        >
          <PlusIcon />
        </Button>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 p-4">
        <AnimatePresence>
          {fields.map((card) => (
            <DraggableCard
              key={card.identifier}
              columnIndex={columnIndex}
              {...card}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
