import { Box, Grid } from "@mui/material";
import TechnologiesHeader from "./TechnologiesHeader";
import TechnologiesCard from "./TechnologiesCard";
import { useState, useRef, useEffect } from "react";
import type { TechnologyCardsSectionProps, TechnologyCard } from "./types";

const TechnologiesCardsSection = ({
  headerTitle,
  headerSubtitle,
  headerImg,
  cards,
}: TechnologyCardsSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      <Grid sx={{ mt: 6 }} ref={containerRef}>
        {cards.map((card: TechnologyCard, idx: number) => (
          <TechnologiesCard
            key={idx}
            {...card}
            expanded={openIndex === idx}
            onExpand={() => {
              if (openIndex === idx) {
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
