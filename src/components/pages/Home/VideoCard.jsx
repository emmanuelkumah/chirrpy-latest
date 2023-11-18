import React from "react";

import { Box, Card, CardMedia, styled } from "@mui/material";
import why from "../../../assets/images/why.png";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const VideoCard = () => {
  const StyledMedia = styled(CardMedia)(({ theme }) => ({
    height: "500px",

    [theme.breakpoints.up("md")]: {},
  }));

  const StyledIcon = styled(Box)(({ theme }) => ({
    position: "absolute",

    top: "170%",
    left: "40%",
    color: "white",
    [theme.breakpoints.up("md")]: {
      top: "125%",
      left: "50%",
    },
  }));
  return (
    <>
      <Card sx={{ marginBottom: "3rem" }} position="relative">
        <StyledMedia
          sx={{
            position: "relative",
            "& img": {
              filter: "brightness(50%)",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              opacity: 0.9,
              transition: "opacity 0.3s ease-in-out",
              "&:hover": {
                opacity: 0.5,
              },
            },
          }}
          image={why}
          title="icon"
        />
        <StyledIcon>
          <PlayCircleFilledWhiteIcon sx={{ fontSize: "100px" }} />
        </StyledIcon>
      </Card>
    </>
  );
};

export default VideoCard;
