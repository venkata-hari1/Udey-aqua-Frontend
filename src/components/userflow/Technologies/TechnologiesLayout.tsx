import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import aboutSideFish from "../../../assets/about_us/about_sidefish.png";
import useTechnologiesStyles from "./technologiesStyles";
import ContactBox from "../Shared/ContactBox";
import TechnologiesHero from "./TechnologiesHero";

const sidebarItems = [
  { label: "RAS", path: "/technologies" },
  { label: "CAS", path: "/technologies/cas" },
  { label: "Pond Farming", path: "/technologies/pond-farming" },
  { label: "Fish Hatchery", path: "/technologies/fish-hatchery" },
  { label: "Cage Culture", path: "/technologies/cage-culture" },
];

const TechnologiesLayout = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useTechnologiesStyles();

  const currentLabel =
    sidebarItems.find((item) =>
      item.path === "/technologies"
        ? location.pathname === "/technologies"
        : location.pathname.startsWith(item.path)
    )?.label || "";

  return (
    <Grid
      container
      className={classes.technologiesLayoutRoot}
      direction="column"
    >
      <Grid size={{ xs: 12 }}>
        <TechnologiesHero currentLabel={currentLabel} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container className={classes.technologiesMainRow} wrap="nowrap">
          {!isMobile && (
            <Grid
              size={{ xs: 3 }}
              className={classes.technologiesSidebarWrapper}
            >
              <Box className={classes.technologiesSidebar}>
                <Box className={classes.technologiesSidebarNavTitle}>
                  Technologies
                </Box>
                {sidebarItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    style={{ textDecoration: "none" }}
                    className={() =>
                      cx(classes.technologiesSidebarNavItem, {
                        active: location.pathname === item.path,
                      })
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </Box>
              <ContactBox />
              <Box className={classes.technologiesSidebarFish}>
                <img src={aboutSideFish} alt="Fish" />
              </Box>
            </Grid>
          )}
          <Grid
            size={{ xs: 12, md: 10 }}
            className={classes.technologiesMainContent}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TechnologiesLayout;
