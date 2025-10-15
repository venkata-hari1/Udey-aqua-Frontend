// src/components/userflow/Home/Hero.tsx
import { Box, Typography, useMediaQuery } from "@mui/material";
// import { motion } from "framer-motion";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import heroImg from "../../../assets/home/hero_img.png";
import useHomeStyles from "./homeStyles";
// import sunfish from '../../../assets/home/sunfish.gif'
// import giphyunscreen from '../../../assets/home/giphy-unscreen.gif'

import {
  CULTURES_FISH_INITIAL,
  CULTURES_FISH_ANIMATE,
  CULTURES_FISH_TRANSITION,
} from "../Shared/animations";
import BubbleCanvas from "../../animations/BubbleCanvas";
import KoiFishScene from "../../animations/KoiFishScene";
import Fish3DModel from "../../animations/Fish3DModel";
import SwimmingFish from "../../animations/SwimmingFish";
import { motion } from "framer-motion";


const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useHomeStyles();

  return (
    <Box className={classes.heroRoot} sx={{position:'relative'}}>
    <Box className="herofish">
    <SwimmingFish  Position="absolute" Count={10} Height={3000}/>


   {/* <Box
      component="img"
      src={angerfish}
      className='fish1'
     alt='img'
    /> */}
      {/* <Box
      component="img"
      src={giphyunscreen}
      className='fish2'
     alt='img'
    /> */}
    

       </Box>
      <Box className={classes.heroMain}>
      
        <Box className={classes.heroImgBox}>
       
          {/* <motion.img
            src={heroImg}
            alt="Hero"
            className={classes.heroImg}
            initial={CULTURES_FISH_INITIAL}
            animate={CULTURES_FISH_ANIMATE}
            transition={CULTURES_FISH_TRANSITION}
          /> */}
          <Fish3DModel/>
        </Box>
        <Box className={classes.heroTextBoxWrap} >
          <Box className={classes.heroTextBox}>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              className={classes.heroMainTitle}
            >
              UDAY AQUA
            </Typography>
            <Typography
              variant={isMobile ? "h5" : "h3"}
              className={classes.heroSubTitle}
            >
              – Advancing Aqua
            </Typography>
          </Box>
        </Box>
      </Box>
     <BubbleCanvas/>
    </Box>
  );
};

export default Hero;
