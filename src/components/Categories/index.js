import { Container, Header } from './styles';

import editSVG from '../../assets/images/edit.svg';
import Category from './Category';

export default function Categories() {
  return (
    <Container>
      <Header>
        <h3>Categorias</h3>

        <div>
          <button type="button">+</button>
          <img src={editSVG} alt="" />
        </div>
      </Header>

      <Category />
      <Category />
      <Category />
    </Container>
  );
}
