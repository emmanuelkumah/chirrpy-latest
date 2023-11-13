import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  styled,
  Container,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../../theme";
// import { Link } from "react-router-dom";
import logoIcon from "../../../assets/images/logoIcon.png";

const pages = ["Home", "Why Chirrpy", "Use Case", "Features"];

function ResponsiveAppBar({ onStart }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log("icon clicked");
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const StyledBranding = styled(Typography)(({ theme }) => ({
    fontFamily: "Titan One",
    fontSize: "2rem",
    color: theme.palette.primary.brickRed,
  }));
  /*
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
*/

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={logoIcon} alt="logo" style={{ width: "10%" }} />
          <StyledBranding variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chirrpy
          </StyledBranding>
          {/* menus */}
          <Box>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: "#EADBC8",
                    width: "100vw",
                    paddingTop: "0px",
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    /*
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
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
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
    */
  );
}
export default ResponsiveAppBar;
