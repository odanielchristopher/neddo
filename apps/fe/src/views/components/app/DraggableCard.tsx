// DraggableCard.tsx
import { useDraggable } from '@dnd-kit/core';
import { GripVerticalIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface IDraggableCardProps {
  title: string;
  identifier: string;
  columnIndex: number;
}

export function DraggableCard({
  identifier,
  title,
  columnIndex,
}: IDraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: identifier,
    data: {
      columnIndex,
    },
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      layout
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="bg-accent relative flex items-center gap-1 rounded-lg border p-3 pl-6 text-sm shadow-sm"
    >
      <GripVerticalIcon className="absolute left-1 cursor-grab text-gray-200/50" />
      {title}
    </motion.div>
  );
}
