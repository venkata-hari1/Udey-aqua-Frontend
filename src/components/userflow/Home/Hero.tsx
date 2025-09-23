// src/components/userflow/Home/Hero.tsx
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import heroImg from "../../../assets/home/hero_img.png";
import useHomeStyles from "./homeStyles";
import ParticlesBackground from "./ParticlesBackground";
import {
  CULTURES_FISH_INITIAL,
  CULTURES_FISH_ANIMATE,
  CULTURES_FISH_TRANSITION,
} from "../Shared/animations";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useHomeStyles();

  return (
    <Box className={classes.heroRoot}>
      {/* <Box className={classes.heroLeftArrowBox}>
        <IconButton className={classes.heroArrowBtn}>
          <ArrowBackIosNewIcon className={classes.heroArrowBackIcon} />
        </IconButton>
      </Box> */}
      <Box className={classes.heroMain}>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <ParticlesBackground />
        </Box>
        <Box className={classes.heroImgBox}>
          <motion.img
            src={heroImg}
            alt="Hero"
            className={classes.heroImg}
            initial={CULTURES_FISH_INITIAL}
            animate={CULTURES_FISH_ANIMATE}
            transition={CULTURES_FISH_TRANSITION}
          />
        </Box>
        <Box className={classes.heroTextBoxWrap}>
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
      {/* <Box className={classes.heroRightArrowBox}>
        <IconButton className={classes.heroArrowBtnRight}>
          <ArrowForwardIosIcon className={classes.heroArrowForwardIcon} />
        </IconButton>
      </Box> */}
    </Box>
  );
};

export default Hero;
