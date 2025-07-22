import { AppBar, Toolbar, Box, Typography, InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../../assets/logo.png";
import colorLogo from "../../../assets/logo_color.png"
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import sidebarIcon from "../../../assets/home/sidebar_btn.svg";
import { useLocation, Link } from "react-router-dom";
import useSharedStyles from "./sharedStyles";
import clsx from "clsx";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  { label: "Cultures", link: "/" },
  { label: "Training Programs", link: "/" },
  { label: "Technologies", link: "/" },
  { label: "News & Events", link: "/" },
  { label: "Contact Us", link: "/" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeNav, setActiveNav] = useState(navItems[0].label);
  const [trigger, setTrigger] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const { classes } = useSharedStyles();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 20) {
        setTrigger(false);
      }else if(currentScrollY > 20){
        setTrigger(true)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      className={clsx(classes.appBar, trigger ? classes.appBarTrigger : classes.appBarNoTrigger)}
    >
      {isMobile ? (
        <>
          <Box className={classes.mobileTopBar}>
            <Box className={classes.mobileContact}>
              <MailOutlineIcon className={classes.mobileFont} fontSize="small" />
              <Typography variant="body2"  className={classes.mobileFont} >info@Uday.com</Typography>
            </Box>
            <Box className={classes.mobileDivider} />
            <Box className={classes.mobileContact}>
              <PhoneIcon className={classes.mobileFont} fontSize="small" />
              <Typography variant="body2" className={classes.mobileFont} >+91 97911 99909</Typography>
            </Box>
            <Box className={classes.mobileDivider} />
            <Box className={classes.mobileContact}>
              <LocationOnIcon className={classes.mobileFont} fontSize="small" />
              <Typography variant="body2" className={classes.mobileFont} >Hyderabad</Typography>
            </Box>
          </Box>
          <Box className={classes.mobileHeaderBar}>
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              className={classes.mobileSidebarBtn}
            >
              <img src={sidebarIcon} alt="sidebar" className={classes.mobileSidebarIcon} />
            </IconButton>
          </Box>
        </>
      ) : (
        <>
          <Box className={clsx(classes.desktopTopBar, (trigger || !isHome) ? classes.desktopTopBarTrigger : classes.desktopTopBarNoTrigger)}>
            <Box className={classes.desktopContact}>
              <Box className={classes.desktopContact}>
                <MailOutlineIcon fontSize="small" />
                <Typography variant="body2" >info@Uday.com</Typography>
              </Box>
              <Box className={clsx(classes.desktopDivider, !(trigger || !isHome) && classes.desktopDividerNoTrigger)} />
              <Box className={classes.desktopContact}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+91 97911 99909</Typography>
              </Box>
              <Box className={clsx(classes.desktopDivider, !(trigger || !isHome) && classes.desktopDividerNoTrigger)} />
              <Box className={classes.desktopContact}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">Hyderabad</Typography>
              </Box>
            </Box>
            <Paper
              component="form"
              className={clsx(classes.desktopSearchPaper, (trigger || !isHome) && classes.desktopSearchPaperTrigger)}
            >
              <IconButton className={classes.desktopSearchIcon}>
                <SearchIcon className={classes.headerSearchIcon} />
              </IconButton>
              <InputBase
                className={classes.desktopSearchInput}
                placeholder="Search Here....."
                inputProps={{ "aria-label": "search", style: { color: '#000' } }}
              />
            </Paper>
          </Box>
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
                  navClass += ' ' + (activeNav === navItem.label ? classes.desktopNavItemActiveTrigger : classes.desktopNavItemInactiveTrigger);
                } else {
                  navClass += ' ' + (activeNav === navItem.label ? classes.desktopNavItemActiveNoTrigger : classes.desktopNavItemInactiveNoTrigger);
                }
                return (
                  <Link to={navItem.link} style={{ textDecoration: 'none' }} key={navItem.label}>
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
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", p: 2, gap: 2 }}>
          {navItems.map((navItem) => (
            <Link to={navItem.link} style={{ textDecoration: 'none' }} key={navItem.label}>
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