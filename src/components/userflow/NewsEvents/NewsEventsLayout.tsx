import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import useNewsEventsStyles from "./newsEventsStyles";
import ContactBox from "../Shared/ContactBox";
import NewsEventsHero from "./NewsEventsHero";
import {
  CULTURES_FISH_INITIAL,
  CULTURES_FISH_ANIMATE,
  CULTURES_FISH_TRANSITION,
  PARTNERS_FISH_INITIAL,
  PARTNERS_FISH_ANIMATE,
  PARTNERS_FISH_TRANSITION,
} from "../Shared/animations";
import NewsSideImg from "../../../assets/news/sideImg.png";
import NewsSideImgSide from "../../../assets/news/sideFishImg.png";

const sidebarItems = [
  { label: "Success Stories", path: "/news-events" },
  { label: "News", path: "/news-events/news" },
  { label: "Videos", path: "/news-events/videos" },
  { label: "Gallery", path: "/news-events/gallery" },
  { label: "Awards", path: "/news-events/awards" },
  { label: "Blog", path: "/news-events/blog" },
];

const NewsEventsLayout = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useNewsEventsStyles();

  const currentLabel =
    sidebarItems.find((item) =>
      item.path === "/news-events"
        ? location.pathname === "/news-events"
        : location.pathname.startsWith(item.path)
    )?.label || "";

  return (
    <Grid container className={classes.newsEventsLayoutRoot} direction="column">
      <Grid size={{ xs: 12 }}>
        <NewsEventsHero currentLabel={currentLabel} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container className={classes.newsEventsMainRow} wrap="nowrap">
          {!isMobile && (
            <Grid size={{ xs: 3 }} className={classes.newsEventsSidebarWrapper}>
              <Box className={classes.newsEventsSidebar}>
                <Box className={classes.newsEventsSidebarNavTitle}>
                  News & Events
                </Box>
                {sidebarItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={() =>
                      cx(classes.newsEventsSidebarNavItem, {
                        active: location.pathname === item.path,
                      })
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </Box>
              <ContactBox />
              <motion.img
                src={NewsSideImg}
                alt="News & Events"
                className={classes.newsEventsSidebarFish}
                initial={CULTURES_FISH_INITIAL}
                animate={CULTURES_FISH_ANIMATE}
                transition={CULTURES_FISH_TRANSITION}
              />
            </Grid>
          )}
          {isMobile && <ContactBox />}
          <Grid
            size={{ xs: 12, md: 10 }}
            className={classes.newsEventsMainContent}
          >
            {!isMobile && (
              <motion.img
                src={NewsSideImgSide}
                alt="News Side Fish"
                className={classes.newsEventsSideImg}
                initial={PARTNERS_FISH_INITIAL}
                animate={PARTNERS_FISH_ANIMATE}
                transition={PARTNERS_FISH_TRANSITION}
              />
            )}
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewsEventsLayout;
