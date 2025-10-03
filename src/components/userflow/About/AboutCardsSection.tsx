// src/components/userflow/About/AboutCardsSection.tsx
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import AboutHeader from "./AboutHeader";
import AboutInfoCard from "./AboutInfoCard";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAboutStyles from "./aboutStyles";
import { useScrollWithOffset } from "../NewsEvents/hooks";

export interface CardData {
  title: string;
  smallDesc: string;
  largeDesc: string;
  img?: string;
}

// slug util not used after scroll behavior change

interface Props {
  headerTitle: string;
  headerSubtitle: string;
  headerImg: string;
  headerImgSide: string;
  cards: CardData[];
}

const AboutCardsSection = ({
  headerTitle,
  headerSubtitle,
  headerImg,
  headerImgSide,
  cards,
}: Props) => {
  const { classes } = useAboutStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef<number>(0);
  const location = useLocation();
  const { ref: scrollRef, scrollTo } = useScrollWithOffset(isMobile ? 0 : 270);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cardTitle = params.get("card");
    if (!cardTitle) return;
  
    const slug = cardTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  
    const idx = cards.findIndex(
      (c) => c.title.toLowerCase() === cardTitle.toLowerCase()
    );
  
    if (idx >= 0) {
      setOpenSet((prev) => new Set(prev).add(idx));
      // Align precisely to the title after expansion/layout
      requestAnimationFrame(() => {
        const el =
          document.getElementById(`card-${slug}-title`) ||
          document.getElementById(`card-${slug}`);
        if (el) {
          (scrollRef as unknown as { current: HTMLElement | null }).current =
            el as HTMLElement;
          scrollTo();
        }
      });
    }
  }, [location.pathname, location.search, cards, scrollRef, scrollTo]);
  

  return (
    <Box>
      <AboutHeader
        title={headerTitle}
        subtitle={headerSubtitle}
        img={headerImg}
        aboutImg={headerImgSide}
      />
      <Grid className={classes.aboutCardsGrid} ref={containerRef}>
        {cards.map((card, idx) => (
          <Box key={idx}>
            <AboutInfoCard
              {...card}
              expanded={openSet.has(idx)}
              onExpand={() => {
                setOpenSet((prev) => {
                  const next = new Set(prev);
                  if (next.has(idx)) {
                    // close this card only
                    next.delete(idx);
                    try {
                      const openTitle = cards[idx]?.title || "";
                      const slug = openTitle
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "");
                      const el = document.getElementById(`card-${slug}`);
                      if (el) {
                        (
                          scrollRef as unknown as {
                            current: HTMLElement | null;
                          }
                        ).current = el as HTMLElement;
                        scrollTo();
                      }
                    } catch {}
                  } else {
                    try {
                      lastScrollYRef.current = window.scrollY;
                    } catch {}
                    next.add(idx);
                  }
                  return next;
                });
              }}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutCardsSection;
