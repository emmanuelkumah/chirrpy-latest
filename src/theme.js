import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F9E0AE",
      light: "#EADBC8",
      contrastText: "#881600",
      body: "#000",
      altHeadingText: "#3A4454",
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
      size: 18,
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
