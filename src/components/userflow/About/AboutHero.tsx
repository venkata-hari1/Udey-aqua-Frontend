// src/components/userflow/About/AboutHero.tsx
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import about_image from "../../../assets/about_us/about_hero.png";
import useAboutStyles from "./aboutStyles";

import BubbleCanvas from "../../animations/BubbleCanvas";
// import Fish3DModel from "../../animations/Fish3DModel";
import SwimmingFish from "../../animations/SwimmingFish";
import KoiFishScene from "../../animations/KoiFishScene";


interface AboutHeroProps {
  currentLabel?: string;
}

const AboutHero = ({ currentLabel }: AboutHeroProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useAboutStyles();

  return (
    <div className={classes.aboutHero} style={{position:'relative'}}>
  
      <Box
        component="img"
        src={about_image}
        alt="About Us Hero"
        className={classes.aboutHeroImg}
      />
  

      <Box className={classes.aboutHeroOverlay} />
      <Box className={classes.aboutHeroContent} sx={{position:'relative'}}>
     
      <SwimmingFish  Position="relative" Count={4}  Height={isMobile?500:500} />
        <Box className={classes.About}>
        <Typography
          variant="h2"
          className={classes.aboutHeroTitle}
        >
          About Us
        </Typography>
        <Typography variant="h5" className={classes.aboutHeroSubtitle}>
          Empowering the Future of Aquaculture Through Knowledge
        </Typography>
        </Box>
        <KoiFishScene />
        <BubbleCanvas/>
        {isMobile && (
          <Typography className={classes.aboutHeroBreadcrumb}>
            About Us{currentLabel ? ` > ${currentLabel}` : ""}
          </Typography>
        )}
      </Box>
      
    </div>
  );
};

export default AboutHero;
