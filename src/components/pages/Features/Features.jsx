import React from "react";

import { Typography, Box, Stack, Grid, Container, styled } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SendIcon from "@mui/icons-material/Send";
import AbcIcon from "@mui/icons-material/Abc";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";

import { theme } from "../../../theme";
import FeatureLists from "./FeatureLists";

const Features = () => {
  const StyledHeading = styled(Typography)(({ theme }) => ({
    color: "#fff",
    fontFamily: theme.typography.heading.font,
    fontSize: "1.5rem",
    paddingTop: "2rem",
    paddingBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
      textAlign: "center",
    },
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.brickRed,
    paddingBottom: "5rem",
    [theme.breakpoints.up("md")]: {},
  }));

  const data = [
    { id: 1, item: "Download as PDF", icon: <PictureAsPdfIcon /> },

    { id: 2, item: "Send via Email", icon: <SendIcon /> },
    { id: 3, item: "Detect Emotions", icon: <TextSnippetIcon /> },
    { id: 4, item: "Download as Word", icon: <DownloadIcon /> },
    { id: 5, item: "Copy to Clipboard", icon: <ContentCopyIcon /> },
    { id: 6, item: "Correct Grammar", icon: <AbcIcon /> },
  ];
  return (
    <StyledBox>
      <Container>
        <StyledHeading>Features</StyledHeading>
        <Grid sx={{ flexGrow: 1, display: "flex" }} container spacing={2}>
          {data.map((feature) => (
            <Grid item md={4} xs={12} key={feature.id}>
              <FeatureLists item={feature.item} icon={feature.icon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Features;
