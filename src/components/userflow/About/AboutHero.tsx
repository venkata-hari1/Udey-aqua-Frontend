import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import about_image from "../../../assets/about_us/about_hero.png";
import useAboutStyles from "./aboutStyles";

interface AboutHeroProps {
  currentLabel?: string;
}

const AboutHero = ({ currentLabel }: AboutHeroProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useAboutStyles();

  return (
    <div className={classes.aboutHero}>
      <Box
        component="img"
        src={about_image}
        alt="About Us Hero"
        className={classes.aboutHeroImg}
      />
      <Box className={classes.aboutHeroOverlay} />
      <Box className={classes.aboutHeroContent}>
        <Typography
          variant="h2"
          className={classes.aboutHeroTitle}
          style={{ fontSize: isMobile ? 28 : 64 }}
        >
          About Us
        </Typography>
        <Typography variant="h5" className={classes.aboutHeroSubtitle}>
          Empowering the Future of Aquaculture Through Knowledge
        </Typography>
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
