import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F9E0AE",
      light: "#EADBC8",
    },
    secondary: {
      main: "#EADBC8",
    },
    headingColors: {
      main: "#881600",
      paragraph: "#3A4454",
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
