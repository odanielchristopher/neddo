import { useSortable } from '@dnd-kit/react/sortable';
import { GripVerticalIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '@app/lib/utils';
import { Button } from '@views/components/ui/Button';

export function Task({
  id,
  title,
  group,
  index,
}: {
  title: string;
  id: string;
  index: number;
  group: string;
}) {
  const { handleRef, ref, isDragging } = useSortable({
    id,
    index,
    type: 'task',
    accept: 'task',
    group,
    data: {
      id,
      title,
      group,
    },
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        'bg-accent relative flex items-center gap-1 rounded-lg border p-3 pl-8 text-sm shadow-sm transition-all',
        isDragging && 'border-primary scale-105',
      )}
    >
      <div>
        <Button
          ref={handleRef}
          type="button"
          variant="ghost"
          className={cn(
            'absolute left-1 size-fit cursor-grab rounded-none !p-0 text-gray-200/50',
            isDragging && 'cursor-grabbing',
          )}
        >
          <GripVerticalIcon className="size-5" />
        </Button>

        {title}
      </div>
    </motion.div>
  );
}
