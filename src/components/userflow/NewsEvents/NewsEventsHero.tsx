import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import useNewsEventsStyles from "./newsEventsStyles.tsx";
import newsEventsImage from "../../../assets/news/main.png";

interface NewsEventsHeroProps {
  currentLabel?: string;
}

const NewsEventsHero = ({ currentLabel }: NewsEventsHeroProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useNewsEventsStyles();

  return (
    <div className={classes.newsEventsHero}>
      <Box
        component="img"
        src={newsEventsImage}
        alt="News Events Hero"
        className={classes.newsEventsHeroImg}
      />
      <Box className={classes.newsEventsHeroOverlay} />
      <Box className={classes.newsEventsHeroColorOverlay} />
      <Box className={classes.newsEventsHeroContent}>
        <Typography
          variant="h2"
          className={classes.newsEventsHeroTitle}
        >
          News & Events
        </Typography>
        <Typography variant="h5" className={classes.newsEventsHeroSubtitle}>
          Stay Updated with Latest Developments and Success Stories
        </Typography>
        {isMobile && (
          <Typography className={classes.newsEventsHeroBreadcrumb}>
            News & Events{currentLabel ? ` > ${currentLabel}` : ""}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default NewsEventsHero;
