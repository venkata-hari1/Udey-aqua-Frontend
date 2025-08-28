import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import useNewsEventsStyles from "./newsEventsStyles";
import ContactBox from "../Shared/ContactBox";
import NewsEventsHero from "./NewsEventsHero";
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
                    style={{ textDecoration: "none" }}
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
              <Box
                component="img"
                src={NewsSideImg}
                alt="News & Events"
                style={{ width: "100%", marginTop: 16 }}
              />
            </Grid>
          )}
          <Grid
            size={{ xs: 12, md: 10 }}
            className={classes.newsEventsMainContent}
          >
            <img
              src={NewsSideImgSide}
              alt="News Side Fish"
              className={classes.newsEventsSideImg}
            />
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewsEventsLayout;
