import React from "react";

import { Typography, Box, Container, styled } from "@mui/material";
import UseCase1 from "./useCase1";
import { theme } from "../../../../theme";
import UseCase2 from "./useCase2";
import UseCase3 from "./useCase3";

const UseCases = () => {
  const StyledHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.brickRed,
    fontFamily: theme.typography.heading.font,
    fontSize: "1.5rem",
    paddingTop: "2rem",
    paddingBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
      textAlign: "center",
    },
  }));
  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Container>
        <StyledHeading>Use Cases</StyledHeading>
        <UseCase1 />
        <UseCase2 />
        <UseCase3 />
      </Container>
    </Box>
  );
};

export default UseCases;
