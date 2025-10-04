// src/components/userflow/Shared/Header.tsx
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  InputBase,
  IconButton,
  Paper,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../assets/logo.png";
import logo_mobile from "../../../assets/logo_mobile.png";
import colorLogo from "../../../assets/logo_color.png";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import sidebarIcon from "../../../assets/home/sidebar_btn.svg";
import { useLocation, Link, useNavigate } from "react-router-dom";
import useSharedStyles from "./sharedStyles";
import clsx from "clsx";

type Subcategory = { label: string; link: string };
type NavItem = { label: string; link: string; subcategories?: Subcategory[] };

const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  {
    label: "About Us",
    link: "/about",
    subcategories: [
      { label: "WHO WE ARE", link: "/about" },
      { label: "OUR HISTORY", link: "/about/our-history" },
      { label: "OUR DIRECTORS & ADVISORS", link: "/about/our-team" },
      {
        label: "SUSTAINABLE DEVELOPMENT",
        link: "/about/sustainable-development",
      },
      { label: "CAREERS", link: "/about/careers" },
      { label: "MILESTONES", link: "/about/milestones" },
      { label: "TESTIMONIALS", link: "/about/testimonials" },
    ],
  },
  {
    label: "Cultures",
    link: "/cultures",
    subcategories: [
      { label: "SEA BASS", link: "/cultures/" },
      { label: "PEARL SPOT", link: "/cultures/pearl-spot" },
      { label: "MUD CRAB", link: "/cultures/mud-crab" },
      { label: "MURREL", link: "/cultures/murrel" },
      { label: "TILAPIA", link: "/cultures/tilapia" },
      { label: "SEA WEED", link: "/cultures/sea-weed" },
    ],
  },
  { label: "Training Programs", link: "/training-programs" },
  {
    label: "Technologies",
    link: "/technologies",
    subcategories: [
      { label: "RAS", link: "/technologies" },
      { label: "CAS", link: "/technologies/cas" },
      { label: "POND FARMING", link: "/technologies/pond-farming" },
      { label: "FISH HATCHERY", link: "/technologies/fish-hatchery" },
      { label: "CAGE CULTURE", link: "/technologies/cage-culture" },
    ],
  },
  {
    label: "News & Events",
    link: "/news-events",
    subcategories: [
      { label: "SUCCESS STORIES", link: "/news-events" },
      { label: "NEWS", link: "/news-events/news" },
      { label: "VIDEOS", link: "/news-events/videos" },
      { label: "GALLERY", link: "/news-events/gallery" },
      { label: "AWARDS", link: "/news-events/awards" },
      { label: "BLOG", link: "/news-events/blog" },
    ],
  },
  { label: "Contact Us", link: "/contact" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeNav, setActiveNav] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const { classes } = useSharedStyles();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActiveNav("Home");
    } else if (currentPath.startsWith("/about")) {
      setActiveNav("About Us");
      if (!expandedItems.includes("About Us")) {
        setExpandedItems((prev) => [...prev, "About Us"]);
      }
    } else if (currentPath.startsWith("/cultures")) {
      setActiveNav("Cultures");
      if (!expandedItems.includes("Cultures")) {
        setExpandedItems((prev) => [...prev, "Cultures"]);
      }
    } else if (currentPath.startsWith("/technologies")) {
      setActiveNav("Technologies");
      if (!expandedItems.includes("Technologies")) {
        setExpandedItems((prev) => [...prev, "Technologies"]);
      }
    } else if (currentPath.startsWith("/training-programs")) {
      setActiveNav("Training Programs");
    } else if (currentPath.startsWith("/news-events")) {
      setActiveNav("News & Events");
      if (!expandedItems.includes("News & Events")) {
        setExpandedItems((prev) => [...prev, "News & Events"]);
      }
    } else if (currentPath.startsWith("/contact")) {
      setActiveNav("Contact Us");
    }
  }, [location.pathname]);

  // Expand categories when the search term matches the category label OR any subcategory.
  useEffect(() => {
    if (!searchTerm) return;
    const lower = searchTerm.toLowerCase();
    const categoriesWithMatches = navItems
      .filter(
        (n) =>
          (n.label && n.label.toLowerCase().includes(lower)) ||
          (Array.isArray((n as any).subcategories) &&
            (n as any).subcategories.some((s: { label: string }) =>
              s.label.toLowerCase().includes(lower)
            ))
      )
      .map((n) => n.label);
    setExpandedItems(categoriesWithMatches);
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      setTrigger(currentScrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const toggleExpanded = (itemLabel: string): void => {
    setExpandedItems((prev) =>
      prev.includes(itemLabel)
        ? prev.filter((item) => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const isItemExpanded = (itemLabel: string): boolean =>
    expandedItems.includes(itemLabel);

  const flatSuggestions: Array<{ label: string; link: string }> = (() => {
    const items: Array<{ label: string; link: string }> = [];
    for (const n of navItems) {
      items.push({ label: n.label, link: n.link });
      if (Array.isArray((n as any).subcategories)) {
        for (const s of (n as any).subcategories) {
          items.push({ label: s.label, link: s.link });
        }
      }
    }
    return items;
  })();

  const filtered = (() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [] as Array<{ label: string; link: string }>;
    return flatSuggestions.filter((it) => it.label.toLowerCase().includes(q)).slice(0, 8);
  })();

  const submitSearch = (item?: { label: string; link: string }) => {
    const target = item || filtered[activeIndex] || null;
    if (!target) return;
    setShowSuggestions(false);
    setSearchTerm("");
    navigate(target.link);
  };

  const renderHighlighted = (text: string): ReactNode => text;

  const toTitleCase = (s: string) =>
    s
      .toLowerCase()
      .split(" ")
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ");

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
                className={`${classes.desktopContact} ${classes.headerContactLink}`}
                component="a"
                href="mailto:info@Uday.com"
              >
                <MailIcon fontSize="small" />
                <Typography variant="body2" className={classes.headerContactText}>info@Uday.com</Typography>
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
                className={`${classes.desktopContact} ${classes.headerContactLink}`}
                component="a"
                href="tel:+919791199909"
              >
                <PhoneIcon fontSize="small" />
                <Typography variant="body2" className={classes.headerContactText}>+91 97911 99909</Typography>
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
                className={`${classes.desktopContact} ${classes.headerContactLink}`}
                component="a"
                href="https://www.google.com/maps/search/?api=1&query=Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" className={classes.headerContactText}>Hyderabad</Typography>
              </Grid>
            </Grid>
            <Grid size={{ xs: 4 }} container justifyContent="flex-end">
              <Box className={classes.searchSuggestWrapper}>
                <Paper
                  component="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitSearch();
                  }}
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
                    value={searchTerm}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setShowSuggestions(!!e.target.value.trim());
                      setActiveIndex(0);
                    }}
                    onKeyDown={(e) => {
                      if (!filtered.length) return;
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setActiveIndex((i) => Math.min(filtered.length - 1, i + 1));
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        setActiveIndex((i) => Math.max(0, i - 1));
                      } else if (e.key === "Enter") {
                        e.preventDefault();
                        submitSearch();
                      }
                    }}
                  />
                </Paper>
                {showSuggestions && filtered.length > 0 && (
                  <Box className={classes.searchSuggestBox}>
                    {filtered.map((it, i) => (
                      <Box
                        key={`${it.label}-${i}`}
                        className={clsx(
                          classes.searchSuggestItem,
                          i === activeIndex && classes.searchSuggestActive
                        )}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => submitSearch(it)}
                      >
                        <Typography component="span" className={classes.searchSuggestText}>{toTitleCase(it.label)}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
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
                    className={classes.headerContactText}
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
      {isMobile && (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          classes={{ paper: classes.drawerPaper }}
        >
          <Box className={classes.sidebarContainer}>
            <Box className={classes.sidebarHeader}>
              <Box className={classes.sidebarLogoContainer}>
                <img
                  src={colorLogo}
                  alt="Logo"
                  className={classes.sidebarLogo}
                />
              </Box>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                className={classes.sidebarCloseButton}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box className={classes.sidebarSearchContainer}>
              <Paper className={classes.sidebarSearchPaper}>
                <SearchIcon className={classes.sidebarSearchIcon} />
                <InputBase
                  className={classes.sidebarSearchInput}
                  placeholder="Search Here......"
                  inputProps={{
                    "aria-label": "search",
                  }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Paper>
            </Box>
            <Box className={classes.sidebarNavContainer}>
              {navItems.map((navItem) => (
                <Box
                  key={navItem.label}
                  className={classes.sidebarNavItemContainer}
                >
                  {navItem.subcategories ? (
                    <>
                      <Box
                        className={clsx(
                          classes.sidebarNavItem,
                          activeNav === navItem.label &&
                            (isItemExpanded(navItem.label)
                              ? classes.sidebarNavItemActiveWithChildren
                              : classes.sidebarNavItemActive)
                        )}
                        onClick={() => toggleExpanded(navItem.label)}
                      >
                        <Typography className={classes.sidebarNavItemText}>
                          {renderHighlighted(navItem.label)}
                        </Typography>
                        {isItemExpanded(navItem.label) ? (
                          <ExpandMoreIcon
                            className={classes.sidebarExpandIcon}
                          />
                        ) : (
                          <ChevronRightIcon
                            className={classes.sidebarExpandIcon}
                          />
                        )}
                      </Box>
                      <Collapse in={isItemExpanded(navItem.label)}>
                        <List className={classes.sidebarSubcategoryList}>
                          {navItem.subcategories.map((subItem) => (
                            <ListItem
                              key={subItem.label}
                              className={classes.sidebarSubcategoryItem}
                            >
                              <Link
                                to={subItem.link}
                                className={classes.sidebarSubLink}
                                onClick={() => setDrawerOpen(false)}
                              >
                                <ListItemText
                                  primary={renderHighlighted(subItem.label)}
                                  className={clsx(
                                    classes.sidebarSubcategoryText,
                                    location.pathname === subItem.link &&
                                      classes.sidebarSubcategoryActive
                                  )}
                                />
                              </Link>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </>
                  ) : (
                    <Link
                      to={navItem.link}
                      className={classes.sidebarLinkReset}
                      onClick={() => {
                        setActiveNav(navItem.label);
                        setDrawerOpen(false);
                      }}
                    >
                      <Box
                        className={clsx(
                          classes.sidebarNavItem,
                          activeNav === navItem.label &&
                            classes.sidebarNavItemActive
                        )}
                      >
                        <Typography className={classes.sidebarNavItemText}>
                          {renderHighlighted(navItem.label)}
                        </Typography>
                      </Box>
                    </Link>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Drawer>
      )}
    </AppBar>
  );
};

export default Header;
