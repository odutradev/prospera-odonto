import { ThemeProvider } from 'styled-components';

import Router from './routes';
import {theme} from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import config from './assets/config';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <title>{config?.pageTitle}</title>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;