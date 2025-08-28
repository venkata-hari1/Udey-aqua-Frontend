import { makeStyles } from "tss-react/mui";
import type { Theme } from "@mui/material";
import { COLORS, FONTS, SHADOWS } from "../Shared/styles";

const useTechnologiesStyles = makeStyles()((theme: Theme) => ({
  // Layout styles
  technologiesLayoutRoot: {
    width: "100%",
    minHeight: "100vh",
    background: COLORS.BLUE_GRAY,
  },
  technologiesMainRow: {
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
  technologiesMainContent: {
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

  // Hero styles
  technologiesHero: {
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
  technologiesHeroImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  technologiesHeroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: COLORS.BLACK_TRANSLUCENT,
    zIndex: 2,
  },
  technologiesHeroContent: {
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
  technologiesHeroTitle: {
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
  technologiesHeroSubtitle: {
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
  technologiesHeroBreadcrumb: {
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

  // Sidebar styles
  technologiesSidebarWrapper: {
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
  technologiesSidebar: {
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
  technologiesSidebarNavTitle: {
    fontWeight: 700,
    fontSize: 36,
    margin: theme.spacing(1),
  },
  sideFish: {
    position: "absolute",
    top: "-30px",
    right: "60px",
  },
  technologiesSidebarNavItem: {
    fontWeight: 500,
    fontSize: 18,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 16,
    cursor: "pointer",
    fontFamily: "Roboto",
    background: "transparent",
    color: COLORS.WHITE,
    transition: "300ms ease",
    "&.active": {
      background: COLORS.WHITE,
      color: COLORS.PRIMARY_BLUE,
      fontWeight: 600,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  technologiesSidebarFish: {
    marginTop: theme.spacing(4),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& img": {
      width: "80%",
      objectFit: "contain",
      opacity: 0.7,
    },
  },

  // Header styles
  technologiesHeaderTitle: {
    color: theme.palette.primary.dark,
    fontWeight: 500,
    fontFamily: FONTS.DM_SERIF_DISPLAY,
    fontSize: 38,
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
      maxWidth: "fit-content",
      margin: "auto",
      textAlign: "center",
      marginTop: "-10px",
      marginBottom: "15px",
      padding: "0.5px 60px",
      borderRadius: 999,
      color: COLORS.WHITE,
      background: `linear-gradient(180deg, ${COLORS.PRIMARY_BLUE} 0%, ${COLORS.PRIMARY_DARK} 100%)`,
    },
  },
  technologiesHeaderSubtitle: {
    color: COLORS.PRIMARY_BLUE,
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 1.3,
    marginTop: 0,

    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      marginTop: theme.spacing(1),
    },
  },
  technologiesHeaderImg: {
    width: "100%",
    marginTop: theme.spacing(5),
    borderRadius: 12,
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
    },
  },

  // Card styles
  technologiesCard: {
    background: COLORS.WHITE_GRAY,
    borderRadius: 12,
    boxShadow: SHADOWS.LARGE,
    padding: theme.spacing(4),
    marginBottom: theme.spacing(8),
    position: "relative",
    transition: "box-shadow 0.2s",
    minWidth: 0,
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(6),
    },
  },
  technologiesCardTitle: {
    color: COLORS.PRIMARY_BLUE,
    fontFamily: FONTS.DM_SERIF_DISPLAY,
    fontWeight: 400,
    marginBottom: theme.spacing(2),
    fontSize: 32,
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
      marginBottom: theme.spacing(1.5),
    },
  },
  technologiesCardDesc: {
    fontSize: 20,
    fontWeight: 500,
    color: COLORS.DARK,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      marginBottom: theme.spacing(4),
    },
  },
  technologiesCardImg: {
    width: "100%",
    borderRadius: 8,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    display: "block",
  },
  technologiesCardLargeDesc: {
    fontSize: 18,
    fontWeight: 400,
    color: COLORS.DARK,
    lineHeight: 1.6,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      marginBottom: theme.spacing(1.5),
    },
  },
  technologiesCardExpandBtn: {
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(2),
    color: COLORS.SECONDARY_BLUE,
    background: COLORS.WHITE,
    [theme.breakpoints.down("md")]: {
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
  },
  technologiesUpIcon: {
    color: COLORS.PRIMARY_BLUE,
    fontSize: 32,
    transition: "transform 0.3s ease",
  },
  technologiesDownIcon: {
    transform: "rotate(180deg)",
  },
}));

export default useTechnologiesStyles;
