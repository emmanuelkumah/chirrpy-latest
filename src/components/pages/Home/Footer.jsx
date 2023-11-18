import React from "react";
import { Box, Container, Stack, Grid, Typography, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { theme } from "../../../theme";

const Footer = () => {
  const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: "2rem",
    paddingBottom: "2rem",
    [theme.breakpoints.up("md")]: {},
  }));

  const StyledStack = styled(Stack)(({ theme }) => ({
    direction: "row",
    [theme.breakpoints.up("md")]: {
      direction: "row",
    },
  }));
  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "100",
    [theme.breakpoints.up("md")]: {
      direction: "row",
    },
  }));

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.charcoal }}>
      <StyledContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <StyledTypography variant="h6">
              Copyright(c) All Rights Reserved
            </StyledTypography>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledTypography variant="h6">
              Crafted by E.F.Kumah
            </StyledTypography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={2} direction="row">
              <LinkedInIcon sx={{ color: "white" }} />
              <GitHubIcon sx={{ color: "white" }} />
            </Stack>
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  );
};

export default Footer;
