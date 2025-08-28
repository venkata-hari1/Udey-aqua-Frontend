import { makeStyles } from "tss-react/mui";
import type { Theme } from "@mui/material";
import { COLORS, FONTS, SHADOWS } from "../Shared/styles";

const useNewsEventsStyles = makeStyles()((theme: Theme) => ({
  newsEventsLayoutRoot: {
    width: "100%",
    minHeight: "100vh",
    background: COLORS.BLUE_GRAY,
  },
  newsEventsMainRow: {
    display: "flex",
    width: "100%",
    marginLeft: 64,
    marginRight: 64,
    marginTop: 48,
    minHeight: "100vh",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 16,
    },
  },
  newsEventsMainContent: {
    flex: 1,
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(20),
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },

  newsEventsHero: {
    width: "100vw",
    minHeight: "60vh",
    height: "70vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: 0,
    margin: 0,
    [theme.breakpoints.down("md")]: {
      minHeight: "30vh",
      height: "30vh",
    },
  },
  newsEventsHeroImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  newsEventsHeroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: COLORS.BLACK_TRANSLUCENT,
    zIndex: 2,
  },
  newsEventsHeroColorOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#0A4FA469",
    opacity: 0.45,
    zIndex: 3,
  },
  newsEventsHeroContent: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(6),
    },
  },
  newsEventsHeroTitle: {
    color: COLORS.WHITE,
    fontWeight: 400,
    fontSize: 48,
    fontFamily: FONTS.DM_SERIF_DISPLAY,
    margin: theme.spacing(5, 0, 2, 0),
    textAlign: "center",
    letterSpacing: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: 28,
      margin: theme.spacing(1, 0),
    },
  },
  newsEventsHeroSubtitle: {
    color: COLORS.WHITE,
    fontFamily: FONTS.INTER,
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    maxWidth: 700,
    letterSpacing: 0.5,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
      maxWidth: 400,
    },
  },
  newsEventsHeroBreadcrumb: {
    color: COLORS.WHITE,
    fontWeight: 500,
    fontSize: 22,
    marginBottom: theme.spacing(1),
    textAlign: "center",
    letterSpacing: 0.5,
    opacity: 0.9,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
      marginTop: theme.spacing(2),
    },
  },

  newsEventsSidebarWrapper: {
    width: 240,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(3),
    margin: theme.spacing(3),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  newsEventsSidebar: {
    width: "100%",
    background: `linear-gradient(180deg, ${COLORS.PRIMARY_BLUE} 0%, ${COLORS.PRIMARY_DARK} 100%)`,
    boxShadow: SHADOWS.SIDEBAR,
    color: COLORS.WHITE,
    padding: theme.spacing(2),
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  newsEventsSidebarNavTitle: {
    fontWeight: 400,
    fontSize: 32,
    fontFamily: FONTS.DM_SERIF_DISPLAY,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
  },
  newsEventsSidebarNavItem: {
    color: COLORS.WHITE,
    fontWeight: 600,
    fontFamily: FONTS.INTER,
    fontSize: 14,
    padding: theme.spacing(1.5, 2),
    borderRadius: 999,
    transition: "all 0.3s ease",
    textAlign: "left",
    cursor: "pointer",
    "&.active": {
      background: COLORS.WHITE,
      color: COLORS.PRIMARY_BLUE,
      fontWeight: 700,
    },
  },

  // Side image styles
  newsEventsSideImg: {
    position: "absolute",
    top: -30,
    right: 80,
    width: 120,
    height: "auto",
    opacity: 0.1,
    zIndex: 0,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  // Page styles
  newsEventsPageHeader: {
    marginBottom: theme.spacing(4),
  },
  newsEventsPageBanner: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
    padding: theme.spacing(3),
    background: COLORS.WHITE,
    borderRadius: 12,
    boxShadow: SHADOWS.CARD,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  newsEventsPageIcon: {
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: COLORS.PRIMARY_BLUE,
    borderRadius: "50%",
    flexShrink: 0,
    [theme.breakpoints.down("md")]: {
      width: 60,
      height: 60,
    },
  },
  newsEventsPageIconImg: {
    width: "60%",
    height: "60%",
    objectFit: "contain",
  },
  newsEventsPageTextContent: {
    flex: 1,
  },
  newsEventsPageTitle: {
    fontSize: 32,
    fontWeight: 700,
    color: COLORS.PRIMARY_DARK,
    marginBottom: theme.spacing(1),
    fontFamily: FONTS.DM_SERIF_DISPLAY,
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
  },
  newsEventsPageSubtitle: {
    fontSize: 16,
    color: COLORS.MEDIUM_GRAY,
    lineHeight: 1.6,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
}));

export default useNewsEventsStyles;
