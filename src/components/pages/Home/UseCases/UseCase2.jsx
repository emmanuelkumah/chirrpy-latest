import React from "react";
import { Typography, Box, Grid, Button, styled } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useCase2 from "../../../../assets/images/usecase2.png";
import { theme } from "../../../../theme";
const UseCase2 = () => {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.charcoal,
    fontFamily: theme.typography.heading.font,
    fontSize: "1.5rem",
    paddingTop: "2rem",
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
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
  }));
  return (
    <StyledBox>
      <Grid container direction="row-reverse" spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledTypography>
              Dictating scripts and blog posts{" "}
            </StyledTypography>
            <StyledDescription>
              Chirrpy can be used to dictate scripts for videos, podcasts, and
              other audio-visual content. This can save content creators a
              significant amount of time, as they can simply speak their ideas
              into the app and have them transcribed into text.
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
          <img src={useCase2} alt="usecase2" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default UseCase2;
