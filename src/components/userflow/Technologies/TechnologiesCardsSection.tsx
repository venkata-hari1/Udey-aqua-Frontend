import { Box, Grid } from "@mui/material";
import TechnologiesHeader from "./TechnologiesHeader";
import TechnologiesCard from "./TechnologiesCard";
import { useState, useRef, useEffect } from "react";
import type { TechnologyCardsSectionProps, TechnologyCard } from "./types";
import useTechnologiesStyles from "./technologiesStyles";
import { useScrollWithOffset } from "../NewsEvents/hooks";

const TechnologiesCardsSection = ({
  headerTitle,
  headerSubtitle,
  headerImg,
  cards,
}: TechnologyCardsSectionProps) => {
  const { classes } = useTechnologiesStyles();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: scrollRef, scrollTo } = useScrollWithOffset(200);

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
      <TechnologiesHeader
        title={headerTitle}
        subtitle={headerSubtitle}
        img={headerImg}
      />
      <Grid className={classes.technologiesCardsGrid} ref={containerRef}>
        {cards.map((card: TechnologyCard, idx: number) => (
          <TechnologiesCard
            key={idx}
            {...card}
            expanded={openIndex === idx}
            onExpand={() => {
              if (openIndex === idx) {
                try {
                  const title = card.title || "";
                  const slug = title
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
              setOpenIndex(idx);
            }}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default TechnologiesCardsSection;
