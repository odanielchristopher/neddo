import { SquareChartGanttIcon } from 'lucide-react';

import { cn } from '@app/lib/utils';

interface ILogoProps {
  classNames?: {
    root?: string;
    icon?: string;
    title?: string;
  };
}

export function Logo({ classNames }: ILogoProps) {
  return (
    <div className={cn('flex items-center gap-2', classNames?.root)}>
      <SquareChartGanttIcon className={cn('size-6', classNames?.icon)} />

      <span className={cn('text-xl font-semibold', classNames?.title)}>
        Neddo
      </span>
    </div>
  );
}
