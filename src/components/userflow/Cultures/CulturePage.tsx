// src/components/userflow/Cultures/CulturePage.tsx
import { Box, Grid } from "@mui/material";
import { useState, useRef} from "react";
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
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef<number | null>(null);
  const location = useLocation();
  const { classes } = useCulturesStyles();
  const { ref: scrollRef, scrollTo } = useScrollWithOffset(200);

  // Check if the current path contains "murrel"
  const isMurrelPage = location.pathname.includes("murrel");

  // Outside clicks no longer close cards; only arrow toggles each card

  return (
    <Box sx={{}}>
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
            expanded={openSet.has(idx)}
            onExpand={() => {
              setOpenSet((prev) => {
                const next = new Set(prev);
                if (next.has(idx)) {
                  try {
                    const openTitle = cards[idx]?.title || "";
                    const slug = openTitle
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "");
                    const el = document.getElementById(`card-${slug}`);
                    if (el) {
                      (
                        scrollRef as unknown as { current: HTMLElement | null }
                      ).current = el as HTMLElement;
                      scrollTo();
                    }
                  } catch {}
                  next.delete(idx);
                } else {
                  lastScrollYRef.current = window.scrollY;
                  next.add(idx);
                }
                return next;
              });
            }}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CulturePage;
