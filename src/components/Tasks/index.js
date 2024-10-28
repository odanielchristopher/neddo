import Task from './Task';
import { Container, Header } from './styles';

export default function Tasks() {
  return (
    <Container>
      <Header>
        <h3>3 tarefas</h3>

        <button type="button">Nova tarefa</button>
      </Header>
      <Task />
      <Task />
      <Task />
    </Container>
  );
}
