import React from "react";
import "./SwipeButtons.css";
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import CancelIcon from '@mui/icons-material/Cancel';
import StarsIcon from '@mui/icons-material/Stars';
import RecommendIcon from '@mui/icons-material/Recommend';
import IconButton from "@mui/material/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayCircleFilledIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__left">
        <CancelIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__star">
        <StarsIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__right">
        <RecommendIcon fontSize="large" />
      </IconButton>

    </div>
  );
}

export default SwipeButtons;