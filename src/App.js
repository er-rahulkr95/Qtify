// import './App.css';
import QtifyHome from './pages/QtifyHome';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#34c94b',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <QtifyHome/>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
