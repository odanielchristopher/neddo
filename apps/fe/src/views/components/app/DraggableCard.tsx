// DraggableCard.tsx
import { useDraggable } from '@dnd-kit/react';
import { GripVerticalIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '@app/lib/utils';

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
      layout
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'bg-accent relative flex items-center gap-1 rounded-lg border p-3 pl-6 text-sm shadow-sm',
        isDragSource && 'border-primary',
      )}
    >
      <GripVerticalIcon
        ref={handleRef}
        className={cn(
          'absolute left-1 size-5 cursor-grab text-gray-200/50',
          isDragging && 'cursor-grabbing',
        )}
      />

      {title}
    </motion.div>
  );
}
