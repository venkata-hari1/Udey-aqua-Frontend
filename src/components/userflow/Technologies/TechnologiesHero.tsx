// src/components/userflow/Technologies/TechnologiesHero.tsx
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import about_image from "../../../assets/technologies/hero.png";
import useTechnologiesStyles from "./technologiesStyles";
import SwimmingFish from "../../animations/SwimmingFish";
import BubbleCanvas from "../../animations/BubbleCanvas";

interface TechnologiesHeroProps {
  currentLabel?: string;
}

const TechnologiesHero = ({ currentLabel }: TechnologiesHeroProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useTechnologiesStyles();

  return (
    <div className={classes.technologiesHero}>
      <Box
        component="img"
        src={about_image}
        alt="Technologies Hero"
        className={classes.technologiesHeroImg}
      />
      <Box className={classes.technologiesHeroOverlay} />
      <Box className={classes.technologiesHeroContent}>
      <SwimmingFish  Position="relative" Count={4}  Height={isMobile?500:500} />
      <Box className={classes.technology}>
        <Typography
          variant="h2"
          className={classes.technologiesHeroTitle}
        >
          Technologies
        </Typography>
        <Typography variant="h5" className={classes.technologiesHeroSubtitle}>
          Advanced Aquaculture Systems and Innovative Solutions
        </Typography>
        </Box>
        <BubbleCanvas/>
        {isMobile && (
          <Typography className={classes.technologiesHeroBreadcrumb}>
            Technologies{currentLabel ? ` > ${currentLabel}` : ""}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default TechnologiesHero;
