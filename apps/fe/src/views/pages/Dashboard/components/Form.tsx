import { move } from '@dnd-kit/helpers';
import { DragDropProvider } from '@dnd-kit/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { schema, type FormData } from '../schema';

import { Column } from './Column';
import { Task } from './Task';

export function Form({ board }: { board: FormData }) {
  const form = useForm<FormData>({
    values: board,
    resolver: zodResolver(schema),
  });
  const columns = form.watch('columns');
  const columnOrder = form.watch('order');

  const handleSubmit = form.handleSubmit((data) => console.log(data));

  return (
    <DragDropProvider
      onDragOver={(event) => {
        form.setValue('columns', move(form.getValues('columns'), event));
      }}
      onDragEnd={() => {
        handleSubmit();
      }}
    >
      <FormProvider {...form}>
        <form onSubmit={handleSubmit} className="flex flex-1 gap-3 p-6">
          {columnOrder?.map((column, columnIndex) => (
            <Column key={column} title={column} index={columnIndex}>
              {columns[column]?.map((task, id) => (
                <Task
                  key={task.id}
                  columnIndex={columnIndex}
                  group={column}
                  index={id}
                  {...task}
                />
              ))}
            </Column>
          ))}
        </form>
      </FormProvider>
    </DragDropProvider>
  );
}
