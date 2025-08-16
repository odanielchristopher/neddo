import { move } from '@dnd-kit/helpers';
import { DragDropProvider } from '@dnd-kit/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@views/components/ui/Button';

import { Column } from './components/Column';
import { Task } from './components/Task';
import { schema, type FormData } from './schema';

export function Dashboard() {
  const form = useForm<FormData>({
    defaultValues: {
      todos: {
        'A Fazer': [{ id: '1', title: 'Config kanban' }],
        Fazendo: [{ id: '2', title: 'Melhorar PC' }],
        Concluído: [{ id: '3', title: 'Feito já PC' }],
      },
    },
    resolver: zodResolver(schema),
  });

  const todos = form.getValues('todos');
  const handleSubmit = form.handleSubmit((data) => console.log(data));
  console.log('render');

  return (
    <div className="flex h-full flex-col">
      <header className="flex h-20 w-full items-center justify-between border-b p-6">
        <h1 className="text-xl font-semibold">Projeto Neddo</h1>
        <Button type="button" size="sm" className="rounded-full !px-4">
          <PlusIcon />
          Nova Coluna
        </Button>
      </header>

      <DragDropProvider
        onDragOver={(event) => {
          const { source, target } = event.operation;

          if (!source || !target) return;

          if (target.type === 'column') {
            return;
          }

          form.setValue('todos', move(form.getValues('todos'), event));
        }}
        onDragEnd={(event) => {
          const { source, target } = event.operation;

          if (!source || !target) return;
          const title = target.id as string;
          const origin = source.data.group as string;

          if (target.type === 'column' && title !== origin) {
            const data = source.data as FormData['todos'][string][number];

            form.setValue(`todos.${title}`, [
              ...form.getValues(`todos.${title}`),
              data,
            ]);

            form.setValue(
              `todos.${origin}`,
              form
                .getValues(`todos.${origin}`)
                .filter((task) => task.id !== data.id),
            );
          }

          handleSubmit();
        }}
      >
        <FormProvider {...form}>
          <form onSubmit={handleSubmit} className="flex flex-1 gap-3 p-6">
            {Object.entries(todos).map(([key, tasks]) => (
              <Column key={key} title={key}>
                {tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    group={key}
                    index={index}
                  />
                ))}
              </Column>
            ))}
          </form>
        </FormProvider>
      </DragDropProvider>
    </div>
  );
}
