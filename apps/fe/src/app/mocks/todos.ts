import type { BoardData } from '@views/pages/Board/schema';

export const todos: BoardData['todos'] = [
  {
    id: 'todo',
    title: 'A Fazer',
    cards: [
      { id: '0', title: 'Configurar API' },
      { id: '1', title: 'Criar Login' },
      { id: '2', title: 'Montar ERD' },
    ],
  },
  {
    id: 'doing',
    title: 'Em Progresso',
    cards: [
      { id: '3', title: 'Tela de Projetos' },
      { id: '4', title: 'Config Kanban' },
    ],
  },
  {
    id: 'end',
    title: 'Concluído',
    cards: [{ id: '5', title: 'Setup Monorepo' }],
  },
];
