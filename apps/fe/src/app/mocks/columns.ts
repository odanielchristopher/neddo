import type { FormData } from '@views/pages/Dashboard/schema';

export const todos: FormData['columns'] = {
  'A Fazer': [
    { id: '1', title: 'Title 1' },
    { id: '4', title: 'Title 2' },
  ],
  Fazendo: [{ id: '2', title: 'Titulo 3' }],
  Concluído: [{ id: '3', title: 'Titulo 4' }],
};
