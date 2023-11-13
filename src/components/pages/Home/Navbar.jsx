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

const pages = ["Home", "Why Chirrpy", "Use Case", "Features"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  border: "none",
  position: "sticky",
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
          <StyledToolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#fff" }}
            >
              News
            </Typography>

            <Stack direction="row">
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
