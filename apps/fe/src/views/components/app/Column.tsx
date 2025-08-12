// Column.tsx
import { useDroppable } from '@dnd-kit/react';
import { PlusIcon } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { cn } from '@app/lib/utils';
import type { DashboardData } from '@views/pages/Dashboard';

import { Button } from '../ui/Button';

import { DraggableCard } from './DraggableCard';

interface IColumnProps {
  title: string;
  columnIndex: number;
}

export function Column({ title, columnIndex }: IColumnProps) {
  const { control } = useFormContext<DashboardData>();

  const cards = useFieldArray({
    control,
    name: `columns.${columnIndex}.cards`,
  });

  const { ref, isDropTarget } = useDroppable({
    id: `col-${columnIndex}`,
    data: {
      id: columnIndex,
      title,
      cards: cards.fields,
    },
  });

  return (
    <div
      ref={ref}
      className={cn(
        'bg-card } flex flex-col rounded-2xl border shadow-sm transition-colors',
        isDropTarget && 'border-primary',
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="font-semibold">{title}</h2>
        <Button
          type="button"
          variant="ghost"
          className="size-8"
          onClick={() => cards.append({ title: 'Novo Card' })}
        >
          <PlusIcon />
        </Button>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 p-4">
        <AnimatePresence>
          {cards.fields.map((card) => (
            <DraggableCard key={card.id} columnIndex={columnIndex} {...card} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
