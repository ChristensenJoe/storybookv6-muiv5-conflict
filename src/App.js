import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'
// import Button from '@material-ui/core/Button'
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import { orange } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: orange
  }
});


function App() {


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained">Hello</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
