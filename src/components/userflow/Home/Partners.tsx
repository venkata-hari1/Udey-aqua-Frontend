// src/components/userflow/Home/Partners.tsx
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import fishBg from "../../../assets/home/partners_img.png";

import ciba from "../../../assets/partners/ciba.png";
import cmfri from "../../../assets/partners/cmfri.png";
import nfdb from "../../../assets/partners/ngdb.png";
import nabard from "../../../assets/partners/nabard.png";
import icar from "../../../assets/partners/icar.png";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";
import useHomeStyles from "./homeStyles";
import {
  PARTNERS_FISH_INITIAL,
  PARTNERS_FISH_ANIMATE,
  PARTNERS_FISH_TRANSITION,
} from "../Shared/animations";

const partners = [
  { src: ciba, alt: "CIBA" },
  { src: cmfri, alt: "CMFRI" },
  { src: nfdb, alt: "NFDB" },
  { src: nabard, alt: "NABARD" },
  { src: icar, alt: "ICAR" },
];

const PartnersSection = () => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box className={classes.partnersRoot}>
      <SectionTitle title="Our Corporates" />
      <Box className={classes.partnersInner}>
        <Box
          ref={scrollRef}
          className={
            classes.partnersScroll +
            (isOverflowing ? " " + classes.partnersScrollFlexStart : "")
          }
        >
          {partners.map((p) => (
            <Box key={p.alt} className={classes.partnersCard}>
              <Box
                component="img"
                src={p.src}
                alt={p.alt}
                className={classes.partnersImg}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <motion.img
        src={fishBg}
        alt=""
        className={classes.partnersBgImg}
        initial={PARTNERS_FISH_INITIAL}
        animate={PARTNERS_FISH_ANIMATE}
        transition={PARTNERS_FISH_TRANSITION}
      />
    </Box>
  );
};

export default PartnersSection;
