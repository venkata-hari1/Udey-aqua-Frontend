import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  InputBase,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../../assets/logo.png";
import logo_mobile from "../../../assets/logo_mobile.png";
import colorLogo from "../../../assets/logo_color.png";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import sidebarIcon from "../../../assets/home/sidebar_btn.svg";
import { useLocation, Link } from "react-router-dom";
import useSharedStyles from "./sharedStyles";
import clsx from "clsx";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  { label: "Cultures", link: "/cultures" },
  { label: "Training Programs", link: "/" },
  { label: "Technologies", link: "/technologies" },
  { label: "News & Events", link: "/" },
  { label: "Contact Us", link: "/" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeNav, setActiveNav] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const { classes } = useSharedStyles();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActiveNav("Home");
    } else if (currentPath.startsWith("/about")) {
      setActiveNav("About Us");
    } else if (currentPath.startsWith("/cultures")) {
      setActiveNav("Cultures");
    } else if (currentPath.startsWith("/technologies")) {
      setActiveNav("Technologies");
    } else if (currentPath.startsWith("/training")) {
      setActiveNav("Training Programs");
    } else if (currentPath.startsWith("/news")) {
      setActiveNav("News & Events");
    } else if (currentPath.startsWith("/contact")) {
      setActiveNav("Contact Us");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      setTrigger(currentScrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      className={clsx(
        classes.appBar,
        trigger ? classes.appBarTrigger : classes.appBarNoTrigger
      )}
    >
      {isMobile ? (
        <>
          <Grid size={{ xs: 12 }} className={classes.mobileHeaderBar}>
            <Box className={classes.mobileFlex}>
              <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                className={classes.mobileSidebarBtn}
              >
                <img
                  src={sidebarIcon}
                  alt="sidebar"
                  className={classes.mobileSidebarIcon}
                />
              </IconButton>
              <img
                src={logo_mobile}
                className={classes.logo_mb}
                width={50}
                height={50}
              />
            </Box>
          </Grid>
        </>
      ) : (
        <>
          <Grid
            container
            spacing={2}
            className={clsx(
              classes.desktopTopBar,
              trigger || !isHome
                ? classes.desktopTopBarTrigger
                : classes.desktopTopBarNoTrigger
            )}
          >
            <Grid size={{ xs: 8 }} container spacing={1} alignItems="center">
              <Grid
                size={{ xs: 4 }}
                container
                alignItems="center"
                className={classes.desktopContact}
              >
                <MailIcon fontSize="small" />
                <Typography variant="body2">info@Uday.com</Typography>
              </Grid>
              <Grid
                size={{ xs: 1 }}
                className={clsx(
                  classes.desktopDivider,
                  !(trigger || !isHome) && classes.desktopDividerNoTrigger
                )}
              />
              <Grid
                size={{ xs: 4 }}
                container
                alignItems="center"
                className={classes.desktopContact}
              >
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+91 97911 99909</Typography>
              </Grid>
              <Grid
                size={{ xs: 1 }}
                className={clsx(
                  classes.desktopDivider,
                  !(trigger || !isHome) && classes.desktopDividerNoTrigger
                )}
              />
              <Grid
                size={{ xs: 2 }}
                container
                alignItems="center"
                className={classes.desktopContact}
              >
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">Hyderabad</Typography>
              </Grid>
            </Grid>
            <Grid size={{ xs: 4 }} container justifyContent="flex-end">
              <Paper
                component="form"
                className={clsx(
                  classes.desktopSearchPaper,
                  (trigger || !isHome) && classes.desktopSearchPaperTrigger
                )}
              >
                <IconButton className={classes.desktopSearchIcon}>
                  <SearchIcon
                    className={
                      trigger || !isHome
                        ? classes.headerSearchIconTrigger
                        : classes.headerSearchIcon
                    }
                  />
                </IconButton>
                <InputBase
                  className={classes.desktopSearchInput}
                  placeholder="Search Here....."
                  inputProps={{
                    "aria-label": "search",
                    style: { color: trigger || !isHome ? "#000" : "#fff" },
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
          <Toolbar className={classes.desktopToolbar}>
            <Box>
              <Box
                component="img"
                src={trigger ? colorLogo : logo}
                alt="Logo"
                className={classes.desktopLogo}
              />
            </Box>
            <Box className={classes.desktopNav}>
              {navItems.map((navItem) => {
                let navClass = classes.desktopNavItem;
                if (trigger) {
                  navClass +=
                    " " +
                    (activeNav === navItem.label
                      ? classes.desktopNavItemActiveTrigger
                      : classes.desktopNavItemInactiveTrigger);
                } else {
                  navClass +=
                    " " +
                    (activeNav === navItem.label
                      ? classes.desktopNavItemActiveNoTrigger
                      : classes.desktopNavItemInactiveNoTrigger);
                }
                return (
                  <Link
                    to={navItem.link}
                    style={{ textDecoration: "none" }}
                    key={navItem.label}
                  >
                    <Typography
                      variant="subtitle1"
                      onClick={() => setActiveNav(navItem.label)}
                      className={navClass}
                    >
                      {navItem.label}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          </Toolbar>
        </>
      )}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 2,
            gap: 2,
          }}
        >
          {navItems.map((navItem) => (
            <Link
              to={navItem.link}
              style={{ textDecoration: "none" }}
              key={navItem.label}
            >
              <Typography
                variant="subtitle1"
                onClick={() => {
                  setActiveNav(navItem.label);
                  setDrawerOpen(false);
                }}
                className={clsx(
                  classes.drawerNavItem,
                  activeNav === navItem.label && classes.drawerNavItemActive
                )}
              >
                {navItem.label}
              </Typography>
            </Link>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
