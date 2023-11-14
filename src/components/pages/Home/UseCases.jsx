import React from "react";

import {
  Typography,
  Box,
  Grid,
  Button,
  Container,
  styled,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { theme } from "../../../theme";
import useCase1 from "../../../assets/images/usecase1.png";
import useCase2 from "../../../assets/images/usecase2.png";
import useCase3 from "../../../assets/images/usecase3.png";

const UseCases = () => {
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

  return (
    <StyledBox>
      <Container>
        <StyledTypography>Use Cases</StyledTypography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <StyledUseCase>
                  Hands-free communication and writing
                </StyledUseCase>
                <StyledUseCaseDesc>
                  Chirrpy eliminates the need for typing or handwriting,
                  allowing individuals with physical disabilities that affect
                  their hand movements to communicate and write more easily.
                </StyledUseCaseDesc>
                <StyledUseCaseDesc>
                  This can be particularly beneficial for those with conditions
                  like arthritis, carpal tunnel syndrome, or spinal cord
                  injuries.
                </StyledUseCaseDesc>
                <Button
                  variant="text"
                  sx={{
                    color: theme.palette.primary.brickRed,
                    textTransform: "capitalize",
                    paddingLeft: "0px",
                  }}
                  endIcon={<ChevronRightIcon />}
                >
                  Try it for free
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Img component="img" alt="useCase1" src={useCase1} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <StyledUseCase>Dictating scripts and blog posts </StyledUseCase>
                <StyledUseCaseDesc>
                  Chirrpy can be used to dictate scripts for videos, podcasts,
                  and other audio-visual content.
                </StyledUseCaseDesc>
                <StyledUseCaseDesc>
                  This can save content creators a significant amount of time,
                  as they can simply speak their ideas into the app and have
                  them transcribed into text.
                </StyledUseCaseDesc>
                <Button
                  variant="text"
                  sx={{
                    color: theme.palette.primary.brickRed,
                    textTransform: "capitalize",
                    paddingLeft: "0px",
                  }}
                  endIcon={<ChevronRightIcon />}
                >
                  Try it for free
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Img component="img" alt="useCase2" src={useCase2} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <StyledUseCase>Increased note-taking speed </StyledUseCase>
                <StyledUseCaseDesc>
                  Chirrpy can significantly increase the speed at which
                  note-takers can capture information. This is because speech is
                  typically faster than typing, allowing note-takers to record
                  more details and keep up with the flow of the speaker's
                  remarks.
                </StyledUseCaseDesc>
                <StyledUseCaseDesc>
                  It improves the accuracy of note-taking by reducing the risk
                  of transcription errors.
                </StyledUseCaseDesc>
                <Button
                  variant="text"
                  sx={{
                    color: theme.palette.primary.brickRed,
                    textTransform: "capitalize",
                    paddingLeft: "0px",
                  }}
                  endIcon={<ChevronRightIcon />}
                >
                  Try it for free
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Img component="img" alt="useCase3" src={useCase3} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default UseCases;
