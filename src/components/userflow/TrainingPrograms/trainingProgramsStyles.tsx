import { makeStyles } from "tss-react/mui";
import type { Theme } from "@mui/material";
import { COLORS, FONTS, SHADOWS } from "../Shared/styles";

const useTrainingProgramsStyles = makeStyles()((theme: Theme) => ({
  // Layout styles
  trainingLayoutRoot: {
    width: "100%",
    minHeight: "100vh",
    background: COLORS.BLUE_GRAY,
  },
  trainingMainRow: {
    display: "flex",
    width: "100%",
    marginTop: 48,
    minHeight: "100vh",
    marginBottom: 48,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 16,
    },
  },

  // Content styles
  trainingContent: {
    width: "100%",
  },
  px3: {
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(3),
  },

  // Hero styles
  trainingHero: {
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
      minHeight: "40vh",
      height: "40vh",
    },
  },
  trainingHeroImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  trainingHeroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: COLORS.BLACK_TRANSLUCENT,
    zIndex: 2,
  },
  trainingHeroContent: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textAlign: "center",
  },
  trainingHeroTitle: {
    color: COLORS.WHITE,
    fontWeight: 400,
    fontSize: 48,
    fontFamily: FONTS.DM_SERIF_DISPLAY,
    margin: theme.spacing(2, 0),
    textAlign: "center",
    letterSpacing: 1,
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      fontSize: 32,
      margin: theme.spacing(1, 0),
      marginTop: theme.spacing(4),
    },
  },
  trainingHeroSubtitle: {
    color: COLORS.WHITE,
    fontWeight: 700,
    fontSize: 18,
    fontFamily: FONTS.INTER,
    textAlign: "center",
    maxWidth: 700,
    letterSpacing: 0.5,
    margin: 0,
    opacity: 0.95,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      maxWidth: 500,
    },
  },
  trainingHeroBreadcrumb: {
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

  // Section styles
  trainingSection: {
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
  },
  trainingSectionTitle: {
    display: "inline-block",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    background: `linear-gradient(135deg, ${COLORS.PRIMARY_BLUE} 0%, ${COLORS.PRIMARY_DARK} 100%)`,
    color: COLORS.WHITE,
    borderRadius: 999,
    fontWeight: 400,
    fontSize: 18,
    margin: "0 auto",
    marginBottom: theme.spacing(5),
    fontFamily: FONTS.DM_SERIF_DISPLAY,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  extension: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
  },
  flex: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  trainingGridCultures: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: theme.spacing(2),
    maxWidth: 1200,
    padding: "0 10px",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(1.5),
    },
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
    },
  },

  trainingGridTechnologies: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: theme.spacing(2),
    maxWidth: 1200,
    padding: "0 10px",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(1.5),
    },
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
    },
  },
  marginTopMore: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
  },

  seaBassCard: {
    gridColumn: "span 5",
    gridRow: "span 2",
    "& img": {
      height: "100%",
    },
  },
  pearlSpotCard: {
    gridColumn: "span 7",
    gridRow: "span 1",
    "& img": {
      height: "100%",
    },
  },
  mudCrabCard: {
    gridColumn: "span 7",
    gridRow: "span 1",
    "& img": {
      height: "100%",
    },
  },
  murrelCard: {
    gridColumn: "span 4",
    gridRow: "span 1",
    "& img": {
      height: "100%",
    },
  },
  tilapiaCard: {
    gridColumn: "span 4",
    gridRow: "span 1",
    "& img": {
      height: "100%",
    },
  },
  seaWeedCard: {
    gridColumn: "span 4",
    gridRow: "span 1",
    "& img": {
      height: "100%",
    },
  },

  rasCard: {
    gridColumn: "span 5",
    gridRow: "span 1",
    "& img": {
      height: "100%",
    },
  },
  casCard: {
    gridColumn: "span 7",
    gridRow: "span 1",
    "& img": {
      height: "100%",
    },
  },
  pondFarmingCard: {
    gridColumn: "span 6",
    gridRow: "span 1",
    "& img": {
      height: "100%",
    },
  },
  cageCultureCard: {
    gridColumn: "span 6",
    gridRow: "span 2",
    "& img": {
      height: "100%",
    },
  },
  fishHatcheryCard: {
    gridColumn: "span 6",
    gridRow: "span 1",
    "& img": {
      height: "100%",
    },
  },

  // Special card styles for uneven layouts (keeping for backward compatibility)
  trainingCardLarge: {
    gridRow: "span 2",
    "& img": {
      height: "100%",
    },
  },
  trainingCardTall: {
    gridRow: "span 2",
    "& img": {
      height: "100%",
    },
  },

  // Card styles
  trainingCard: {
    background: COLORS.WHITE,
    borderRadius: 12,
    boxShadow: SHADOWS.MEDIUM,
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: SHADOWS.LARGE,
    },
  },
  trainingCardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  trainingCardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "7%",
    maxHeight: "20px",
    background: "#0A4FA4BD",
    color: COLORS.WHITE,
    textAlign: "center",
    padding: theme.spacing(2),
    boxShadow: "0 4 10 0 #0463EE40",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  trainingCardTitle: {
    fontSize: 16,
    fontWeight: 600,
    margin: 0,
    fontFamily: "Inter, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },

  // Footer styles
  trainingFooter: {
    background: COLORS.PRIMARY_DARK,
    color: COLORS.WHITE,
    padding: theme.spacing(4, 0),
    textAlign: "center",
  },
  trainingFooterContent: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: theme.spacing(0, 4),
  },
  trainingFooterText: {
    fontSize: 14,
    opacity: 0.8,
    margin: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
}));

export default useTrainingProgramsStyles;
