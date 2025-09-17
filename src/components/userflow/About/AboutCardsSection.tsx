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
  const location = useLocation();
  const { ref: scrollRef, scrollTo } = useScrollWithOffset250();

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
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cardTitle = params.get("card");
    if (cardTitle) {
      const slug = cardTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const idx = cards.findIndex(
        (c) => c.title.toLowerCase() === cardTitle.toLowerCase()
      );
      if (idx >= 0) setOpenIndex(idx);

      // Wait for expand layout, then scroll with 300px offset
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(`card-${slug}`);
          if (el) {
            (scrollRef as unknown as { current: HTMLElement | null }).current = el as HTMLElement;
            scrollTo();
          }
        });
      });
    }
  }, [location.search, cards, scrollRef, scrollTo]);

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
          <AboutInfoCard
            key={idx}
            {...card}
            expanded={openIndex === idx}
            onExpand={() => {
              setOpenIndex((prev) => (prev === idx ? null : idx));
            }}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default AboutCardsSection;
