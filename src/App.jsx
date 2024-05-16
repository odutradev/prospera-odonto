import {  ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import MuiTheme from './styles/theme/mui';
import config from './assets/config';
import Router from './routes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <title>{config?.pageTitle}</title>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;