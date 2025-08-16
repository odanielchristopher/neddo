// DraggableCard.tsx
import { useDraggable } from '@dnd-kit/react';
import { GripVerticalIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '@app/lib/utils';

import { Button } from '../ui/Button';

interface IDraggableCardProps {
  title: string;
  id: string;
  columnIndex: number;
}

export function DraggableCard({ id, title, columnIndex }: IDraggableCardProps) {
  const { ref, handleRef, isDragging, isDragSource } = useDraggable({
    id,
    data: {
      columnIndex,
      title,
      id,
    },
  });

  return (
    <motion.div
      ref={ref}
      // layout
      // initial={{ opacity: 0, y: -10, scale: 0.95 }}
      // animate={{ opacity: 1, y: 0, scale: 1 }}
      // exit={{ opacity: 0, y: 10, scale: 0.95 }}
      // transition={{ duration: 0.2 }}
      className={cn(
        'bg-accent relative flex items-center gap-1 rounded-lg border p-3 pl-8 text-sm shadow-sm transition-all',
        isDragSource && 'border-primary z-10 scale-105 shadow',
      )}
    >
      <Button
        type="button"
        ref={handleRef}
        variant="ghost"
        className={cn(
          'absolute left-1 size-fit cursor-grab rounded-none !p-0 text-gray-200/50',
          isDragging && 'cursor-grabbing',
        )}
      >
        <GripVerticalIcon className="size-5" />
      </Button>

      {title}
    </motion.div>
  );
}
