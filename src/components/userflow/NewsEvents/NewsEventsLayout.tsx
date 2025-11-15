// src/components/userflow/NewsEvents/NewsEventsLayout.tsx
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import useNewsEventsStyles from "./newsEventsStyles";
import ContactBox from "../Shared/ContactBox";
import Hero from "../../../components/userflow/common/Hero/Hero";
import SwimmingFish from "../../animations/SwimmingFish";

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

  

  return (
    <Grid container className={classes.newsEventsLayoutRoot} direction="column">
      <SwimmingFish  Position="absolute" Count={30} Height={isMobile?1000:2500}/>
      <Grid size={{ xs: 12 }}>
         <Hero
            page ="news"
            overlayColor="rgba(10,79,164,0.41)"
            fishCount={4}
            fishHeight={isMobile ? 500 : 500}
            
          />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container className={classes.newsEventsMainRow} wrap="nowrap">
          {!isMobile && (
            <Grid size={{ xs: 3 }} className={classes.newsEventsSidebarWrapper}>
              <Box className={classes.newsEventsSidebar} sx={{marginBottom:3}}>
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
          
            </Grid>
          )}
          {isMobile && <ContactBox />}
          <Grid
            size={{ xs: 12 }}
            className={classes.newsEventsMainContent}
          >
          
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewsEventsLayout;
