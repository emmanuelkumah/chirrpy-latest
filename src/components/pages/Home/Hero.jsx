import {
  Typography,
  Box,
  Container,
  Grid,
  Stack,
  Button,
  styled,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../../../theme";

import React from "react";
import Navbar from "./Navbar";
import heroImg from "../../../assets/images/heroImage.png";
import playIcon from "../../../assets/images/play.png";

const Hero = () => {
  const HeroBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(4),
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    //   alignItems: "center",
    //   textAlign: "center",
    // },
  }));
  const Heading = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.heading.size,
    fontFamily: theme.typography.heading.Patua,
    color: theme.palette.primary.contrastText,
    // marginTop: theme.spacing(8),
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

  return (
    <>
      {/* <CssBaseline /> */}
      <Box sx={{ backgroundColor: "#F9E0AE", minHeight: "80vh" }}>
        <Container>
          <Navbar />
          <HeroBox>
            <Box sx={{ flex: "1" }}>
              <Heading>Expand Accessibility </Heading>
              <Heading>Improve Productivity </Heading>

              <Description>
                Embrace the convenience of hands-free communication and
                effortlessly transcribe your thoughts and ideas into written
                form.
              </Description>
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
                  <Typography sx={{ fontFamily: "Patua One" }}>
                    Note Takers
                  </Typography>
                  <Typography sx={{ fontFamily: "Patua One" }}>
                    People with typing disabilities
                  </Typography>
                  <Typography sx={{ fontFamily: "Patua One" }}>
                    Content Creators
                  </Typography>
                </UsersBox>
              </Box>
              <Stack direction="row" spacing={8}>
                <CustomBtn>Try it now</CustomBtn>
                <img src={playIcon} alt="heroImg" sx={{ maxWidth: "100%" }} />
              </Stack>
            </Box>
            <Box sx={{ flex: "1" }}>
              <Box>
                <img src={heroImg} alt="heroImg" style={{ maxWidth: "100%" }} />
              </Box>
            </Box>
          </HeroBox>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
