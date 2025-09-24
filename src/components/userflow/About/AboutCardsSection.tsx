import { Box, Grid } from "@mui/material";
import AboutHeader from "./AboutHeader";
import AboutInfoCard from "./AboutInfoCard";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAboutStyles from "./aboutStyles";
import { useScrollWithOffset250 } from "../NewsEvents/hooks";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef<number>(0);
  const location = useLocation();
  const { ref: scrollRef, scrollTo } = useScrollWithOffset250();

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
    if (idx >= 0) setOpenIndex(idx);

    // Give the route a moment to settle and the card to expand, then scroll.
    // Also retry a couple of times if the element isn't ready yet.
    let attempts = 0;
    const maxAttempts = 5;
    const tryScroll = () => {
      const el = document.getElementById(`card-${slug}`);
      if (el) {
        (scrollRef as unknown as { current: HTMLElement | null }).current =
          el as HTMLElement;
        scrollTo();
      } else if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(tryScroll, 150);
      }
    };

    const timeoutId = setTimeout(tryScroll, 350);
    return () => clearTimeout(timeoutId);
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
              expanded={openIndex === idx}
              onExpand={() => {
                setOpenIndex((prev) => {
                  const isClosing = prev === idx;
                  if (isClosing) {
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
                    return null;
                  }
                  try {
                    lastScrollYRef.current = window.scrollY;
                  } catch {}
                  return idx;
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
