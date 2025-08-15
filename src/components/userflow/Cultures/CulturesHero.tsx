import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import cultures_image from "../../../assets/cultures/main.jpg";
import useCulturesStyles from "./culturesStyles";

interface CulturesHeroProps {
  currentLabel?: string;
}

const CulturesHero = ({ currentLabel }: CulturesHeroProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useCulturesStyles();

  return (
    <div className={classes.culturesHero}>
      <Box
        component="img"
        src={cultures_image}
        alt="Cultures Hero"
        className={classes.culturesHeroImg}
      />
      <Box className={classes.culturesHeroOverlay} />
      <Box className={classes.culturesHeroColorOverlay} />
      <Box className={classes.culturesHeroContent}>
        <Typography
          variant="h2"
          className={classes.culturesHeroTitle}
          style={{ fontSize: isMobile ? 28 : 64 }}
        >
          Cultures
        </Typography>
        <Typography variant="h5" className={classes.culturesHeroSubtitle}>
          Exploring Diverse Aquaculture Practices and Innovations
        </Typography>
        {isMobile && (
          <Typography className={classes.culturesHeroBreadcrumb}>
            Cultures{currentLabel ? ` > ${currentLabel}` : ""}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default CulturesHero;
