import { Box, Grid } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutInfoCard from "../About/AboutInfoCard";
import useCulturesStyles from "./culturesStyles";

export interface CultureCardData {
  title: string;
  smallDesc: string;
  largeDesc: string;
  img?: string;
}

interface CulturePageProps {
  title: string;
  subtitle: string;
  headerImg: string;
  cards: CultureCardData[];
}

const CulturePage = ({
  title,
  subtitle,
  headerImg,
  cards,
}: CulturePageProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef<number | null>(null);
  const location = useLocation();
  const { classes } = useCulturesStyles();

  // Check if the current path contains "murrel"
  const isMurrelPage = location.pathname.includes("murrel");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <Box>
      {/* Header Section */}
      <Box className={classes.culturePageHeader}>
        <Box className={classes.culturePageBanner}>
          <Box className={classes.culturePageIcon}>
            <img
              src={headerImg}
              alt={title}
              className={`${classes.culturePageIconImg} ${
                isMurrelPage
                  ? classes.culturePageIconRotated
                  : classes.culturePageIconNormal
              }`}
            />
          </Box>
          <Box className={classes.culturePageTextContent}>
            <h1 className={classes.culturePageTitle}>{title}</h1>
            <p className={classes.culturePageSubtitle}>{subtitle}</p>
          </Box>
        </Box>
      </Box>

      {/* Cards Section */}
      <Grid className={classes.culturePageCardsGrid} ref={containerRef}>
        {cards.map((card, idx) => (
          <AboutInfoCard
            key={idx}
            {...card}
            expanded={openIndex === idx}
            onExpand={() => {
              if (openIndex === idx) {
                setOpenIndex(null);
                if (lastScrollYRef.current !== null) {
                  const y = lastScrollYRef.current;
                  requestAnimationFrame(() => {
                    window.scrollTo({ top: y, behavior: "smooth" });
                  });
                }
                return;
              }
              lastScrollYRef.current = window.scrollY;
              setOpenIndex(idx);
            }}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CulturePage;
