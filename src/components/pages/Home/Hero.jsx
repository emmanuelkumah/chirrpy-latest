import {
  Typography,
  Box,
  Container,
  Stack,
  Button,
  styled,
  Paper,
} from "@mui/material";
import { theme } from "../../../theme";

import React from "react";
import heroImg from "../../../assets/images/heroImage.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Hero = () => {
  const StyleDiv = styled("div")({
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "30%",
      right: "-70%",
      width: "250px",
      height: "250px",
      background: "#881600",
      borderRadius: "50%",
      filter: "blur(90px)",
    },
  });

  const HeroWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    marginTop: "2rem",
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      marginTop: "4.5rem",
      minHeight: "80vh",
    },
  }));
  const HeroBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: theme.spacing(5),
    },
  }));

  const HeadingChar = styled(Typography)(({ theme }) => ({
    fontSize: "1.7rem",
    fontFamily: theme.typography.heading.font,
    color: theme.palette.primary.charcoal,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.heading.size,
      fontWeight: theme.typography.heading.weight,
      fontFamily: theme.typography.heading.font,
      color: theme.palette.primary.charcoal,
    },
  }));
  const HeadingRed = styled(Typography)(({ theme }) => ({
    fontSize: "1.7rem",
    fontFamily: theme.typography.heading.font,
    color: theme.palette.primary.brickRed,

    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.heading.size,
      fontWeight: theme.typography.heading.weight,
      fontFamily: theme.typography.heading.font,
      color: theme.palette.primary.altHeadingText,
    },
  }));

  const Description = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.paragraph.size,
    fontFamily: theme.typography.paragraph.font,
    color: theme.palette.primary.body,
    marginTop: theme.spacing(2),
    fontWeight: 100,
  }));
  const StyledBtnContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      gap: "2rem",
      paddingTop: "2rem",
    },
  }));
  const UsersBox = styled(Box)(({ theme }) => ({
    borderColor: "#881600",
    borderLeft: "4px solid #881600",
    paddingLeft: "10px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-evenly",
      borderLeft: "solid 3px #881600",
      borderRight: "solid 3px #881600",
    },
  }));

  const TryBtn = styled(Button)(({ theme }) => ({
    backgroundColor: "#881600",
    "&:hover": {
      backgroundColor: "#2B0504",
    },
    color: "#fff",
    textTransform: "capitalize",
    padding: "10px 15px",
    fontSize: "1rem",
  }));
  const DemoBtn = styled(Button)(({ theme }) => ({
    color: "#881600",
    border: "1px solid #881600",
    textTransform: "capitalize",
    fontFamily: "Poppins",

    "&:hover": {
      backgroundColor: "#881600",
      color: "#fff",
    },
  }));
  const StyledStats1 = styled(Paper)(() => ({
    height: "80px",
    width: "300px",
    padding: "10px 10px",
    position: "absolute",
    top: "55%",
    right: "1%",
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "82%",
      right: "-10%",
    },
  }));
  const StyledStats2 = styled(Paper)(() => ({
    height: "80px",
    width: "300px",
    lineHeight: "60px",
    padding: "10px 10px",
    position: "absolute",
    top: "1%",
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
      top: "12%",
    },
  }));
  const ImageBox = styled(Box)(({ theme }) => ({
    width: "100%",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      position: "relative",
      top: "20%",
    },
  }));
  return (
    <>
      <HeroWrapper>
        <Container>
          <HeroBox>
            <Box sx={{ flex: "1", marginTop: "3rem", position: "relative" }}>
              <StyleDiv></StyleDiv>

              <Stack direction="row" spacing={2}>
                <HeadingChar>Expand</HeadingChar>
                <HeadingRed>Accessibility</HeadingRed>
              </Stack>
              <Stack direction="row" spacing={2}>
                <HeadingChar>Improve</HeadingChar>
                <HeadingRed>Productivity</HeadingRed>
              </Stack>
              <Description>
                Embrace the convenience of hands-free communication and
                effortlessly transcribe your thoughts and ideas into written
                form.
              </Description>
              <Box sx={{ marginTop: "1rem", marginBottom: "2rem" }}>
                <Typography
                  sx={{
                    fontFamily: "Passions Conflict",
                    fontSize: "35px",
                    color: "#881600",
                  }}
                >
                  Crafted for
                </Typography>
                <UsersBox>
                  <Typography sx={{ fontFamily: "Roboto" }}>
                    Note Takers
                  </Typography>
                  <Typography sx={{ fontFamily: "Roboto" }}>
                    People with typing disabilities
                  </Typography>
                  <Typography sx={{ fontFamily: "Roboto" }}>
                    Content Creators
                  </Typography>
                </UsersBox>
              </Box>
              <StyledBtnContainer>
                <Box>
                  <TryBtn>Try it now</TryBtn>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <DemoBtn
                    variant="outlined"
                    startIcon={<PlayCircleOutlineIcon />}
                  >
                    Watch Demo
                  </DemoBtn>
                </Box>
              </StyledBtnContainer>
            </Box>
            <Box sx={{ flex: 1, position: "relative" }}>
              <ImageBox component="img" src={heroImg} alt="heroImg" />

              <StyledStats1 elevation={0}>
                <Stack direction="row" spacing={1}>
                  <Typography
                    sx={{
                      color: "#881600",
                      fontSize: "2.5rem",
                      fontFamily: "Roboto",
                      fontWeight: 500,
                    }}
                  >
                    10%
                  </Typography>
                  <Typography
                    sx={{
                      padding: "10px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Of the world’s population has dyslexia
                  </Typography>
                </Stack>
              </StyledStats1>
              <StyledStats2 elevation={0}>
                <Stack direction="row" spacing={1}>
                  <Typography
                    sx={{
                      color: "#881600",
                      fontSize: "2.5rem",
                      fontFamily: "Roboto",
                      fontWeight: 500,
                    }}
                  >
                    15%
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "10px",
                      paddingBottom: "8px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Of the world’s population has physical disability
                  </Typography>
                </Stack>
              </StyledStats2>
            </Box>
          </HeroBox>
        </Container>
      </HeroWrapper>
    </>
  );
};

export default Hero;
