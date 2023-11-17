import React from "react";

import {
  Stack,
  Box,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { theme } from "../../../theme";

const FeatureLists = ({ item, icon }) => {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontWeight: "200",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
      paddingTop: "0.5rem",
      lineHeight: "1.5",
    },
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    fontWeight: "200",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  }));

  const StyledStack = styled(Stack)(({ theme }) => ({
    direction: "column",
    [theme.breakpoints.up("md")]: {
      direction: "row",
    },
  }));
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <IconButton sx={{ color: "#fff" }}>{icon}</IconButton>
        <StyledTypography
          variant="h6"
          sx={{ color: "#fff", fontWeight: "100", fontFamily: "Poppins" }}
        >
          {item}
        </StyledTypography>
      </Box>
    </Box>
  );
};

export default FeatureLists;
