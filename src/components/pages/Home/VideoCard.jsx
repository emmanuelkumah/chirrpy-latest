import React from "react";
import YouTube from "react-youtube";

import { Card, CardMedia, styled } from "@mui/material";
const VideoCard = () => {
  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const videoId = "BX61XKNYvIY";

  return (
    <>
      <Card sx={{ marginBottom: "3rem" }}>
        <CardMedia>
          <YouTube videoId={videoId} opts={opts} />
        </CardMedia>
      </Card>
    </>
  );
};

export default VideoCard;
