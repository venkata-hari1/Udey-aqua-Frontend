import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0463EE',
      dark:"#0A4FA4FA",
      contrastText: '#fff',
      light:"#F7FAFC",
    }
  },
  typography:{
    fontFamily:"Poppins",
    
  }
});

export default theme;
