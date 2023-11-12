import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import React from "react";

//import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ display: "flex", gap: "4rem" }}>
          <Box>
            <Typography variant="h6" component="div">
              Chirrpy
            </Typography>
          </Box>
          <Box>
            <Typography>This is another one</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
