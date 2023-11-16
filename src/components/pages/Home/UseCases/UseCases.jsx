import React from "react";

import { Typography, Box, Container, styled } from "@mui/material";
import UseCase1 from "./useCase1";
import { theme } from "../../../../theme";
import UseCase2 from "./useCase2";
import UseCase3 from "./useCase3";

const UseCases = () => {
  /*
  const StyledBox = styled(Box)(({ theme }) => ({
    // fontSize: theme.typography.heading.size,
    marginTop: "2rem",
    backgroundColor: theme.palette.secondary.main,
    fontFamily: theme.typography.paragraph.font,

    [theme.breakpoints.up("md")]: {},
  }));
  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.brickRed,
    fontFamily: theme.typography.heading.font,
    fontSize: "1.5rem",
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
      textAlign: "center",
    },
  }));
  const StyledUseCase = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.charcoal,
    fontFamily: theme.typography.heading.font,
    fontSize: "1.5rem",
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
      textAlign: "center",
    },
  }));

  const StyledUseCaseDesc = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    fontFamily: theme.typography.paragraph.font,
    fontSize: "1.13rem",
    paddingTop: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
  }));

  const Img = styled(Box)(() => ({
    width: "100%",
  }));
*/

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
