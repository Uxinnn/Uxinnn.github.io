import { createTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#498EA7',
    },
    secondary: {
      main: '#DEEBF7',
    },
    text: {
      primary: grey[800], 
    }, 
    divider: '#DEEBF7', 
    background: {
      paper: '#DEEBF7'
    }
  },
  typography: {
    fontFamily: "Roboto Mono"
  }
});

export default theme
