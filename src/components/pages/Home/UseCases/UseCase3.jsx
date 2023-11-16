import React from "react";
import { Typography, Box, Grid, Button, styled } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useCase3 from "../../../../assets/images/usecase3.png";
import { theme } from "../../../../theme";

const UseCase3 = () => {
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
      paddingBottom: "3.5rem",
    },
  }));
  return (
    <StyledBox>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledTypography>Increased note-taking speed </StyledTypography>
            <StyledDescription>
              Chirrpy can significantly increase the speed at which note-takers
              can capture information. This is because speech is typically
              faster than typing, allowing note-takers to record more details
              and keep up with the flow of the speaker's remarks. It improves
              the accuracy of note-taking by reducing the risk of transcription
              errors.
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
          <img src={useCase3} alt="usecase3" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default UseCase3;
