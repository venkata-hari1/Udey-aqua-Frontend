import { Box, Grid } from "@mui/material";
import { useState, useRef, useEffect } from "react";
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
  const { classes } = useCulturesStyles();

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
              className={classes.culturePageIconImg}
            />
          </Box>
          <Box>
            <h1 className={classes.culturePageTitle}>{title}</h1>
            <p className={classes.culturePageSubtitle}>{subtitle}</p>
          </Box>
        </Box>
      </Box>

      {/* Cards Section */}
      <Grid sx={{ mt: 6 }} ref={containerRef}>
        {cards.map((card, idx) => (
          <AboutInfoCard
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

export default CulturePage;
