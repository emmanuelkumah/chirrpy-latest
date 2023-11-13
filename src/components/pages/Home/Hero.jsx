import {
  Typography,
  Box,
  Container,
  Grid,
  Stack,
  Button,
  styled,
  Paper,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../../../theme";

import React from "react";
import Navbar from "./Navbar";
import heroImg from "../../../assets/images/heroImage.png";
import playIcon from "../../../assets/images/play.png";
import ResponsiveAppBar from "./Navbar";

const Hero = () => {
  const HeroBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
  }));

  const HeadingOne = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.heading.size,
    fontWeight: theme.typography.heading.weight,
    fontFamily: theme.typography.heading.font,
    color: theme.palette.primary.altHeadingText,
  }));
  const HeadingTwo = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.heading.weight,
    fontSize: theme.typography.heading.size,
    fontFamily: theme.typography.heading.font,
    color: theme.palette.primary.contrastText,
  }));

  const Description = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.paragraph.size,
    fontFamily: theme.typography.paragraph.font,
    color: theme.palette.primary.body,
    marginTop: theme.spacing(7),
  }));
  const UsersBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    borderLeft: "solid 3px",
    borderRight: "solid 3px",

    borderColor: "#881600",
  }));
  const CustomBtn = styled(Button)(({ theme }) => ({
    backgroundColor: "#881600",
    color: "#fff",
    width: "185px",
    textTransform: "capitalize",
  }));
  const Item = styled(Paper)(({ theme }) => ({
    height: "100px",
    width: "300px",
    lineHeight: "60px",
    padding: "20px 10px",
    position: "absolute",
    bottom: "-15%",
    right: "-5%",
    borderRadius: "10px",
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    height: "100px",
    width: "300px",
    lineHeight: "60px",
    padding: "20px 10px",
    position: "absolute",
    top: "5%",
    borderRadius: "10px",
  }));
  const BlurBox = styled(Box)(() => ({
    width: "100px",
    height: "100px",
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  }));
  return (
    <>
      {/* <CssBaseline /> */}

      <Box sx={{ backgroundColor: "#F9E0AE", minHeight: "80vh" }}>
        <Container>
          <HeroBox>
            <Box sx={{ flex: "1" }}>
              <Stack direction="row" spacing={2}>
                <HeadingOne>Expand</HeadingOne>
                <HeadingTwo>Accessibility</HeadingTwo>
              </Stack>
              <Stack direction="row" spacing={2}>
                <HeadingOne>Improve</HeadingOne>
                <HeadingTwo>Productivity</HeadingTwo>
              </Stack>

              <Description>
                Embrace the convenience of hands-free communication and
                effortlessly transcribe your thoughts and ideas into written
                form.
              </Description>
              <BlurBox></BlurBox>
              <Box sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
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
              <Stack direction="row" spacing={8}>
                <CustomBtn>Try it now</CustomBtn>
                <img src={playIcon} alt="heroImg" sx={{ maxWidth: "100%" }} />
              </Stack>
            </Box>
            <Box sx={{ flex: "1", position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "5%",
                }}
              >
                <img src={heroImg} alt="heroImg" sx={{ maxWidth: "100%" }} />
              </Box>
              <Item>
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
              </Item>
              <Item2>
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
                      padding: "10px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Of the world’s population has physical disability
                  </Typography>
                </Stack>
              </Item2>
            </Box>
          </HeroBox>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
