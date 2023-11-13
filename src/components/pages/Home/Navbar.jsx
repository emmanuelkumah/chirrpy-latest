import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  styled,
  Container,
} from "@mui/material";
import * as React from "react";

import { theme } from "../../../theme";
import { Link } from "react-router-dom";
import logoIcon from "../../../assets/images/logoIcon.png";

const pages = ["Home", "Why Chirrpy", "Use Case", "Features"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  border: "none",
  position: "sticky",
}));

const StyledBranding = styled(Typography)(({ theme }) => ({
  fontFamily: "Titan One",
  fontSize: "2rem",
  color: theme.palette.primary.brickRed,
}));
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: 0,
  paddingRight: 0,
}));

const StyledBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
}));

function ResponsiveAppBar({ onStart }) {
  return (
    <Box sx={{ backgroundColor: "#F9E0AE" }}>
      <Container>
        <StyledAppBar variant="outlined">
          <StyledToolbar disableGutters>
            <Box sx={{ display: "flex" }}>
              <img src={logoIcon} alt="logo" style={{ width: "10%" }} />
              <StyledBranding
                variant="h2"
                component="h1"
                // sx={{ flexGrow: 1, color: "#fff" }}
              >
                Chirrpy
              </StyledBranding>
            </Box>

            <Stack
              direction="row"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Button onClick={onStart} sx={{ backgroundColor: "green" }}>
                <Typography>Start</Typography>
              </Button>
              <Box>
                {pages.map((page) => (
                  <Button>
                    <Link
                      to={page}
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        textTransform: "capitalize",
                        fontSize: "18px",
                      }}
                    >
                      {page}
                    </Link>
                  </Button>
                ))}
              </Box>
              <Box>
                <StyledBtn>
                  <Link
                    to="/app"
                    style={{
                      textDecoration: "none",
                      textTransform: "capitalize",
                      color: "#fff",
                    }}
                  >
                    App
                  </Link>
                </StyledBtn>
              </Box>
            </Stack>
          </StyledToolbar>
        </StyledAppBar>
      </Container>
    </Box>
  );
}
export default ResponsiveAppBar;
