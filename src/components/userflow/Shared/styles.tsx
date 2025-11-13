// src/components/userflow/Shared/styles.tsx
import type { Theme } from "@mui/material";
import type { CSSObject } from "tss-react";

export const COLORS = {
  PRIMARY_BLUE: "#0A4FA4",
  SECONDARY_BLUE: "#0463EE",
  WHITE: "#fff",
  LIGHTWHITE: "#ffffffbb",
  WHITE_GRAY: "#F7FAFC",
  DARK: "#222",
  GRAY: "#333",
  LGRAY: "#BCBCBC",
  LIGHT_GRAY: "#e0e7ef",
  TRANSPARENT_GRAY: "#E0E2E3C2",
  PRIMARY_DARK: "#041E3E",
  BLUE_GRAY: "#F7FAFC",
  MEDIUM_GRAY: "#9A9EA5",
  LIGHT_BLUE: "#2B7BFF",
  SHADOW_LIGHT: "#0463EE66",
  SHADOW_DARK: "#0A4FA422",
  HERO_BLUE: "#1758B4",
  DARK_BLUE: "#0A264E",
  TRANSPARENT_BLUE: "rgba(4,99,238,0.08)",
  TRANSPARENT_DARK_BLUE: "rgba(10,79,164,0.7)",
  DARKER_BLUE: "rgba(10,79,164,0.85)",
  WHITE_TRANSLUCENT: "#FFFFFF7D",
  DARK_SHADOW: "rgba(0,0,0,0.18)",
  BBB: "#bbb",
  MUI_BLUE: "#1976d2",
  DARK_BLUE_TRANSLUCENT: "rgba(4,30,62,0.75)",
  BLACK_TRANSLUCENT: "rgba(0,0,0,0.05)",
};

export const SHADOWS = {
  CARD: `0 2px 10px 0 ${COLORS.SHADOW_LIGHT}`,
  ELEVATED: `0 4px 24px 0 ${COLORS.SHADOW_DARK}`,
  SUBTLE: `0 2px 12px 0 ${COLORS.LIGHT_GRAY}`,
  DARK_CARD: `0 4px 24px 0 #00000022`,
  DARK_TEXT: `0px 4px 24px ${COLORS.DARK_SHADOW}`,
  LIGHT_CARD: `0 2px 10px 0 ${COLORS.SECONDARY_BLUE}33`,
  MEDIUM: `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`,
  SIDEBAR: `0.5px 2px 14px 0.5px ${COLORS.PRIMARY_BLUE}63`,
  LARGE: `0 2px 10px 0 #0463EE80`,
};

export const FONTS = {
  DM_SERIF_DISPLAY: "'DM Serif Display', serif",
  INTER: "'Inter', sans-serif",
  POPPINS: "'Poppins', sans-serif",
  SPACEGROTESK:"'Space Grotesk'"
};

export const TYPOGRAPHY = {
  body1: (theme: Theme): CSSObject => ({
    fontSize: 16,
    fontWeight: 400,
    [theme.breakpoints.down("md")]: { fontSize: 14 },
  }),
  body2: (theme: Theme): CSSObject => ({
    fontSize: 15,
    fontWeight: 400,
    [theme.breakpoints.down("md")]: { fontSize: 12 },
  }),
  subtitle1: (theme: Theme): CSSObject => ({
    fontSize: 18,
    fontWeight: 700,
    [theme.breakpoints.down("md")]: { fontSize: 15 },
  }),
  heroTitle: (theme: Theme): CSSObject => ({
    fontWeight: 700,
    fontSize: 60,
    lineHeight: "80px",
    letterSpacing: 0,
    textShadow: SHADOWS.DARK_TEXT,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      lineHeight: "26px",
      letterSpacing: 1,
    },
  }),
  sectionTitle: (theme: Theme): CSSObject => ({
    color: theme.palette.primary.main,
    fontSize: 40,
    fontWeight: 400,
    fontFamily: "DM Serif Display, serif",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      padding: theme.spacing(0, 1),
    },
  }),
};

export const baseStyles = {
  button: (theme: Theme): CSSObject => ({
    borderRadius: 999,
    fontWeight: 600,
    padding: theme.spacing(1, 3),
    textTransform: "none" as const,
    boxShadow: "none",
    transition: "all 0.2s",
  }),
  card: (): CSSObject => ({
    background: COLORS.WHITE,
    borderRadius: 3,
    boxShadow: SHADOWS.SUBTLE,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
  }),
  scrollContainer: (): CSSObject => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": { display: "none" },
  }),
};
