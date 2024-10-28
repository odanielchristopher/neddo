import {
  ActionsContainer, Container, ContentContainer,
} from './styles';

import deleteSVG from '../../../assets/images/delete.svg';
import edit from '../../../assets/images/edit.svg';

export default function Task() {
  return (
    <Container>
      <ContentContainer>
        <header>
          <strong> Estudar o sistema ósseo - 14:30</strong>
          <span>Estudos</span>
        </header>
        <p>
          Estudar os caps. 1, 2 e 3
        </p>
      </ContentContainer>
      <ActionsContainer>
        <div className="checkbox"><span /></div>
        <img src={deleteSVG} alt="" />
        <img src={edit} alt="" />
      </ActionsContainer>
    </Container>
  );
}
