import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';
// import img1 form "./Screenshot(330).png"
// import Grid from '@mui/icons-material/Grid';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left" >
        <img
          className="footer__albumLogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xo_YT-7kEvzRIrsfJMP6DjSOeJb0y5zWHA&usqp=CAU" />
        <div className="footer__songInfo">
          <h4>Hello</h4>
          <p> Yash </p>
        </div>
      </div>
      <div className="footer__center" >
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right" >
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer