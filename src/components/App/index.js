import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Categories from '../Categories';
import Tasks from '../Tasks';

import { Container, Header, Main } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Container>
          <Header>
            <span>Need</span>
            do
          </Header>
          <Main>
            <Tasks />
            <Categories />
          </Main>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
