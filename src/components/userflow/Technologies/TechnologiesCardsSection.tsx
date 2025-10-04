// src/components/userflow/Technologies/TechnologiesCardsSection.tsx
import { Box, Grid } from "@mui/material";
import TechnologiesHeader from "./TechnologiesHeader";
import TechnologiesCard from "./TechnologiesCard";
import { useState, useRef } from "react";
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
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: scrollRef, scrollTo } = useScrollWithOffset(200);

  // Outside clicks no longer close cards; only arrow toggles each card

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
            expanded={openSet.has(idx)}
            onExpand={() => {
              setOpenSet((prev) => {
                const next = new Set(prev);
                if (next.has(idx)) {
                  // close this card only
                  try {
                    const title = card.title || "";
                    const slug = title
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

export default TechnologiesCardsSection;
