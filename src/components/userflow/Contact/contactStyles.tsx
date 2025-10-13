// src/components/userflow/Contact/contactStyles.tsx
import { makeStyles } from "tss-react/mui";
import type { Theme } from "@mui/material";
import { COLORS, FONTS } from "../Shared/styles";

const useContactStyles = makeStyles()((theme: Theme) => ({
  contactLayoutRoot: {
    width: "100%",
    minHeight: "100vh",
    background: COLORS.BLUE_GRAY,
  },
  contactMainRow: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    marginBottom: 48,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 16,
    },
  },
  contact:{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "100%"
  },
  // Content styles
  contactContent: {
    width: "100%",
  },

  contactHero: {
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
  contactHeroImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  contactHeroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: COLORS.BLACK_TRANSLUCENT,
    zIndex: 2,
  },
  contactHeroContent: {
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
  contactHeroTitle: {
    color: COLORS.WHITE,
    fontWeight: 400,
    fontSize: 48,
    fontFamily: FONTS.DM_SERIF_DISPLAY,
    margin: theme.spacing(2, 0, 0, 0),
    textAlign: "center",
    letterSpacing: 1,
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      fontSize: 32,
      margin: theme.spacing(1, 0),
      marginTop: theme.spacing(4),
    },
  },
  contactHeroSubtitle: {
    color: COLORS.WHITE,
    fontWeight: 700,
    fontSize: 18,
    fontFamily: FONTS.INTER,
    textAlign: "center",
    margin: theme.spacing(1, 0),

    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      margin: theme.spacing(0.5, 0),
    },
  },

  // Contact Information Section
  contactInfoSection: {
    padding: theme.spacing(6, 0),
    background: COLORS.WHITE,
  },
  contactInfoContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: theme.spacing(0, 3),
  },
  contactInfoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  contactInfoCard: {
    background: COLORS.WHITE,
    padding: theme.spacing(2),
    border: "none",
    boxShadow: "none",
  },
  contactInfoContent: {
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(3.5),
  },
  contactInfoIcon: {
    flexShrink: 0,
    width: 100,
    height: 100,
    paddingTop: "10px",
    background: "transparent",
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contactInfoSvg: {
    width: 100,
    height: 100,
    filter: "none",
  },
  contactInfoTextContent: {
    flex: 1,
  },
  contactInfoTitle: {
    fontSize: 22,
    fontWeight: 400,
    color: COLORS.PRIMARY_BLUE,
    fontFamily: FONTS.DM_SERIF_DISPLAY,
  },
  contactInfoBigTitle: {
    fontSize: 28,
  },
  contactInfoText: {
    fontSize: 13,
    fontFamily: FONTS.INTER,
    fontWeight: 600,
    marginTop: 10,
    lineHeight: 2,
    maxWidth: "340px",
    color: COLORS.GRAY,
    marginBottom: theme.spacing(1),
  },
  contactInfoRow: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  boldText: {
    color: COLORS.PRIMARY_BLUE,
    fontSize: 12,
  },
  contactInfoLink: {
    fontFamily: FONTS.INTER,
    fontWeight: 700,
    fontSize: 12,
    color: COLORS.PRIMARY_BLUE,
    textDecoration: "underline",
  },
  contactInfoIconSmall: {
    fontSize: 16,
    marginRight: theme.spacing(1),
    color: COLORS.PRIMARY_BLUE,
  },

  // Contact Fish Section
  contactFishSection: {
    padding: "10px 0",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  contactFishContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: theme.spacing(0, 3),
  },
  contactFishContent: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contactFishImageWrapper: {
    maxWidth: 300,
  },
  contactFishImage: {
    width: "380px",
    height: "auto",
    position: "absolute",
    right: "0%",
    objectFit: "contain",
  },

  // Contact Form Section
  contactFormSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: theme.spacing(8, 0),
  },
  contactFormContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
}));

export default useContactStyles;
