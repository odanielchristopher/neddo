import { CollisionPriority } from '@dnd-kit/abstract';
import { useDroppable } from '@dnd-kit/react';
import { PlusIcon } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import type React from 'react';

import { cn } from '@app/lib/utils';
import { Button } from '@views/components/ui/Button';

export function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { isDropTarget, ref } = useDroppable({
    id: title,
    type: 'column',
    accept: 'task',
    collisionPriority: CollisionPriority.Low,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'bg-card h-full max-w-[300px] flex-1 rounded-xl border p-4 transition-all',
        isDropTarget && 'border-primary',
      )}
    >
      <header className="flex items-center justify-between">
        <strong>{title}</strong>

        <Button type="button" variant="ghost" className="size-9">
          <PlusIcon />
        </Button>
      </header>

      <div className="mt-10 space-y-3">
        <AnimatePresence>{children}</AnimatePresence>
      </div>
    </div>
  );
}
