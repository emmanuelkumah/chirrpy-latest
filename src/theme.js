import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F9E0AE",
      brickRed: "#881600",
      charcoal: "#3A4454",
    },
    secondary: {
      main: "#EADBC8",
      contrastText: "#080708",
    },
  },
  typography: {
    heading: {
      size: 50,
      weight: 500,
      font: "Montserrat",
    },
    paragraph: {
      font: "Poppins",
      size: 20,
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: "10px",
    width: "40%",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
