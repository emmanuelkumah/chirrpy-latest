import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import { theme } from "../../../theme";
import VideoCard from "./VideoCard";

const StyledHeading = styled(Typography)(({ theme }) => ({
  // fontSize: theme.typography.heading.size,
  color: theme.palette.primary.brickRed,
  fontFamily: theme.typography.heading.font,
  fontSize: "1.5rem",
  marginTop: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    textAlign: "center",
  },
}));

const StyledSubText = styled(Typography)(({ theme }) => ({
  // fontSize: theme.typography.heading.size,
  color: theme.palette.primary.charcoal,
  fontFamily: theme.typography.paragraph.font,
  fontSize: "1.13rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    fontSize: theme.typography.paragraph.size,
  },
}));

const IntroVid = () => {
  return (
    <Box>
      <Container>
        <Box>
          <StyledHeading>Why We Built Chirrpy</StyledHeading>
          <StyledSubText>
            Transform your spoken words into written text with unparalleled
            accuracy and ease.
          </StyledSubText>
        </Box>
        <VideoCard />
      </Container>
    </Box>
  );
};

export default IntroVid;
