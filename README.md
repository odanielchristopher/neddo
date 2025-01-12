# Neddo

Neddo é uma aplicação desenvolvida em Ruby on Rails para gestão de listas personalizadas. Com uma interface intuitiva e ferramentas ágeis, o Neddo ajuda os usuários a criarem, organizarem e gerenciarem suas listas de maneira eficiente.

---

## Funcionalidades Principais

- **Criação de Listas**: Os usuários podem criar listas personalizadas com títulos e cores diferenciadas.
- **Edição e Exclusão de listas**: É possível editar as informações das listas ou excluí-las completamente.
- **Dropdowns Dinâmicos**: Sistema de seleção intuitivo com validação de erros em tempo real.
- **Integração com Banco de Dados**: Utiliza PostgreSQL configurado via Docker Compose para armazenamento das informações.
- **Criação da Tarefas:** Os usuários podem criar tarefas associadas as listas já cadastradas.
- **Edição e Exclusão de tarefas:** É possível editar as informações das tarefas ou excluí-las.
- **Marcar tarefa completada:** É possível marcar a tarefa como feita.
- **Associar uma tarefa a uma categoria:** Personalize suas tarefas diferenciando-as em categorias.

---

## Tecnologias Utilizadas

- **Backend**: Ruby on Rails (versão 8)
- **Banco de Dados**: PostgreSQL, configurado com Docker Compose
- **Front-end**: Views Rails com JavaScript para dinamicidade

---

## Como Executar o Projeto Localmente

### Requisitos

- Ruby 3.2+
- Node.js 20.18+
- Yarn
- Docker e Docker Compose
- PostgreSQL (se não for usar Docker)

### Passos

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/neddo.git
   cd neddo
   ```

2. **Instale as Dependências**

   ```bash
   bundle install
   yarn install
   ```

3. **Configure o Banco de Dados**
   Se estiver usando Docker Compose:

   ```bash
   docker compose up -d
   ```

   Se estiver configurando manualmente, atualize as credenciais no arquivo `config/database.yml` e execute:

   ```bash
   rails db:create db:migrate db:seed
   ```

4. **Inicie o Servidor**

   ```bash
   rails server
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

