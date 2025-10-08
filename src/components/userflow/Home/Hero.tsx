// src/components/userflow/Home/Hero.tsx
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import heroImg from "../../../assets/home/hero_img.png";
import useHomeStyles from "./homeStyles";
import bluefish from '../../../assets/home/bluefish.gif'
// import sunfish from '../../../assets/home/sunfish.gif'
import clownfish from '../../../assets/home/clownfish.gif'
import angerfish from '../../../assets/home/angelfish.gif'
import {
  CULTURES_FISH_INITIAL,
  CULTURES_FISH_ANIMATE,
  CULTURES_FISH_TRANSITION,
} from "../Shared/animations";
import BubbleCanvas from "./BubbleCanvas";
import FishAnimation from "./SunFishAnimation";
import BlueFishAnimation from "./BlueFishAnimation";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useHomeStyles();

  return (
    <Box className={classes.heroRoot} sx={{position:'relative'}}>
    
      <Box className={classes.heroMain}>
      <Box className="herofish">
      <Box
      component="img"
      src={clownfish}
      className='fish2'
     alt='img'
    />
    <FishAnimation/>
    <BlueFishAnimation/>
   <Box
      component="img"
      src={angerfish}
      className='fish1'
     alt='img'
    />
       </Box>
        <Box className={classes.heroImgBox} sx={{position:'absolute',left:0}}>
       
          <motion.img
            src={heroImg}
            alt="Hero"
            className={classes.heroImg}
            initial={CULTURES_FISH_INITIAL}
            animate={CULTURES_FISH_ANIMATE}
            transition={CULTURES_FISH_TRANSITION}
          />
        </Box>
        <Box className={classes.heroTextBoxWrap} sx={{position:'absolute',left:0}}>
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
