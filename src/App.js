import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { MdPayment } from 'react-icons/md';
import { FaBeer } from 'react-icons/fa';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Loading, Notify } from './view/components';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
  }
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}> 
      <Notify />
      <Loading />
      <Routes />  
    </ThemeProvider>
  </Provider>
)
export default App;