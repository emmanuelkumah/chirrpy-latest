import React from "react";

import { Typography, Box, Grid, Button, styled } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useCase1 from "../../../../assets/images/usecase1.png";
import { theme } from "../../../../theme";

const UseCase1 = () => {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.charcoal,
    fontFamily: theme.typography.heading.font,
    fontSize: "1.5rem",
    lineHeight: "1.5",
    paddingBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
      paddingTop: "0.5rem",
    },
  }));

  const StyledDescription = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
      paddingTop: "0.5rem",
      lineHeight: "1.5",
    },
  }));
  const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: "2rem",
    paddingBottom: "1rem",

    [theme.breakpoints.up("md")]: {
      marginTop: "2rem",
      paddingBottom: "2rem",
    },
  }));
  return (
    <StyledBox>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledTypography>
              Hands-free communication and writing
            </StyledTypography>
            <StyledDescription>
              Chirrpy eliminates the need for typing or handwriting, allowing
              individuals with physical disabilities that affect their hand
              movements to communicate and write more easily. This can be
              particularly beneficial for those with conditions like arthritis,
              carpal tunnel syndrome, or spinal cord injuries.
            </StyledDescription>
            <Button
              variant="text"
              sx={{
                color: theme.palette.primary.brickRed,
                textTransform: "capitalize",
                paddingLeft: "0px",
                marginTop: "1.5rem",
                fontSize: "1rem",
              }}
              endIcon={<ChevronRightIcon />}
            >
              Try it for free
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={useCase1} alt="usecase1" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default UseCase1;
