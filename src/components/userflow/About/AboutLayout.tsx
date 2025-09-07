import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import aboutSideFish from "../../../assets/about_us/about_sidefish.png";
import useAboutStyles from "./aboutStyles";
import ContactBox from "../Shared/ContactBox";
import AboutHero from "./AboutHero";
import {
  ABOUT_FISH_INITIAL,
  ABOUT_FISH_ANIMATE,
  ABOUT_FISH_TRANSITION,
} from "../Shared/animations";

const sidebarItems = [
  { label: "Who We Are", path: "/about" },
  { label: "Our History", path: "/about/our-history" },
  { label: "Our Directors & Advisors", path: "/about/our-team" },
  { label: "Sustainable Development", path: "/about/sustainable-development" },
  { label: "Careers", path: "/about/careers" },
  { label: "Milestones", path: "/about/milestones" },
  { label: "Testimonials", path: "/about/testimonials" },
];

const AboutLayout = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useAboutStyles();

  const currentLabel =
    sidebarItems.find((item) =>
      item.path === "/about"
        ? location.pathname === "/about"
        : location.pathname.startsWith(item.path)
    )?.label || "";

  return (
    <Grid container className={classes.aboutLayoutRoot} direction="column">
      <Grid size={{ xs: 12 }}>
        <AboutHero currentLabel={currentLabel} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container className={classes.aboutMainRow} wrap="nowrap">
          {!isMobile && (
            <Grid size={{ xs: 3 }} className={classes.aboutSidebarWrapper}>
              <Box className={classes.aboutSidebar}>
                <Box className={classes.aboutSidebarNavTitle}>About Us</Box>
                {sidebarItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    style={{ textDecoration: "none" }}
                    className={() =>
                      cx(classes.aboutSidebarNavItem, {
                        active: location.pathname === item.path,
                      })
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </Box>
              <ContactBox />
              <Box className={classes.aboutSidebarFish}>
                <motion.img
                  src={aboutSideFish}
                  alt="Fish"
                  initial={ABOUT_FISH_INITIAL}
                  animate={ABOUT_FISH_ANIMATE}
                  transition={ABOUT_FISH_TRANSITION}
                />
              </Box>
            </Grid>
          )}
          {isMobile && <ContactBox />}
          <Grid size={{ xs: 12, md: 10 }} className={classes.aboutMainContent}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutLayout;
