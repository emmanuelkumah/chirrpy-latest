import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  styled,
  Container,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { theme } from "../../../theme";
import { Link } from "react-router-dom";
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

  const StyledLogo = styled(Box)(({ theme }) => ({
    width: "10%",
    [theme.breakpoints.up("md")]: {
      width: "3%",
    },
  }));

  const MicTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 250,
      fontSize: theme.typography.pxToRem(12),
      // border: "1px solid #dadde9",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#F9E0AE" }}>
      <Container disableGutters sx={{ boxShadow: 0 }}>
        <AppBar position="sticky" sx={{ boxShadow: 0 }}>
          <Toolbar>
            <StyledLogo component="img" src={logoIcon} alt="logo"></StyledLogo>
            <StyledBranding variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Chirrpy
            </StyledBranding>
            {/* menus */}
            <Box sx={{ display: { md: "none" } }}>
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
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MicTooltip
                title={
                  <>
                    <Typography>
                      Navigate with your voice.
                      <em>
                        For instance say <b>app</b>
                      </em>
                    </Typography>
                  </>
                }
              >
                <IconButton
                  sx={{ position: "relative", top: "4%" }}
                  onClick={onStart}
                >
                  <KeyboardVoiceIcon />
                </IconButton>
              </MicTooltip>

              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#080708", display: "block" }}
                >
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
          </Toolbar>
        </AppBar>
      </Container>
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
