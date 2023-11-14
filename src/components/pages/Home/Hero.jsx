import {
  Typography,
  Box,
  Container,
  Stack,
  Button,
  styled,
  Paper,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../../../theme";

import React from "react";
import heroImg from "../../../assets/images/heroImage.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Hero = () => {
  const HeroWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
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
    // justifyContent: "space-between",
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      gap: "2rem",
      // justifyContent: "space-evenly",
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
  const StyledStack = styled(Stack)(() => ({
    marginBottom: "1rem",
    direction: "row",
  }));
  const TryBtn = styled(Button)(({ theme }) => ({
    backgroundColor: "#881600",
    color: "#fff",
    // width: "185px",
    textTransform: "capitalize",
    padding: "10px 15px",
    fontSize: "1rem",
  }));
  const StyledStats1 = styled(Paper)(() => ({
    height: "80px",
    width: "300px",
    padding: "10px 10px",
    position: "absolute",
    bottom: "1%",
    right: "5%",
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
      bottom: "-50%",
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
      top: "19%",
    },
  }));

  const StyledImg = styled(Box)(({ theme }) => ({
    width: "100%",

    [theme.breakpoints.up("md")]: {},
  }));
  return (
    <>
      <HeroWrapper>
        <Container>
          <HeroBox>
            <Box sx={{ flex: "1", marginTop: "3rem" }}>
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
                  <Button
                    variant="outlined"
                    startIcon={<PlayCircleOutlineIcon />}
                    sx={{
                      color: "#881600",
                      border: "1px solid #881600",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                    }}
                  >
                    Watch Demo
                  </Button>
                </Box>
              </StyledBtnContainer>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ position: "relative" }}>
                <StyledImg
                  component="img"
                  src={heroImg}
                  alt="heroImg"
                ></StyledImg>
                {/* <StyledImg src={heroImg} alt="heroImg" sx={{ position: {} }} /> */}
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
            </Box>
          </HeroBox>
        </Container>
      </HeroWrapper>
    </>
  );
};

export default Hero;
