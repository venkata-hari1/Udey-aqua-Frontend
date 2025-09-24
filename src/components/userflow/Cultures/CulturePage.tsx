import { Box, Grid } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { useScrollWithOffset } from "../NewsEvents/hooks";
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
  const { ref: scrollRef, scrollTo } = useScrollWithOffset(200);

  // Check if the current path contains "murrel"
  const isMurrelPage = location.pathname.includes("murrel");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      try {
        if (openIndex === null) return;
        const openTitle = cards[openIndex]?.title || "";
        const slug = openTitle
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        const openEl = document.getElementById(`card-${slug}`);
        if (openEl && !openEl.contains(e.target as Node)) {
          setOpenIndex(null);
        }
      } catch {}
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openIndex, cards]);

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
                try {
                  const openTitle = cards[idx]?.title || "";
                  const slug = openTitle
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                  const el = document.getElementById(`card-${slug}`);
                  if (el) {
                    (scrollRef as unknown as { current: HTMLElement | null }).current = el as HTMLElement;
                    scrollTo();
                  }
                } catch {}
                setOpenIndex(null);
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
