import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import PricingCard from "./PricingCard";
import pricingImg1 from "../../../assets/pricing/pricing_img_1.png";
import pricingImg2 from "../../../assets/pricing/pricing_img_2.png";
import pricingImg3 from "../../../assets/pricing/pricing_img_3.png";
import pricingTopImg from "../../../assets/home/pricing_image.png";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";
import useHomeStyles from "./homeStyles";
import {
  PARTNERS_FISH_INITIAL,
  PARTNERS_FISH_ANIMATE,
  PARTNERS_FISH_TRANSITION,
} from "../Shared/animations";

const pricingData = [
  {
    image: pricingImg1,
    title: "Sea Bass",
    features: [
      "Cost-effective practices for small-scale farms",
      "End-to-end sea bass farm setup guidance",
      "Guidance: hatchery & nursery management",
      "Full-cycle farm operations with live video & export potential",
      "Value addition & export support",
    ],
  },
  {
    image: pricingImg2,
    title: "Sea Bass",
    features: [
      "Cost-effective practices for small-scale farms",
      "End-to-end sea bass farm setup guidance",
      "Guidance: hatchery & nursery management",
      "Full-cycle farm operations with live video & export potential",
      "Value addition & export support",
    ],
  },
  {
    image: pricingImg3,
    title: "Sea Bass",
    features: [
      "Cost-effective practices for small-scale farms",
      "End-to-end sea bass farm setup guidance",
      "Guidance: hatchery & nursery management",
      "Full-cycle farm operations with live video & export potential",
      "Value addition & export support",
    ],
  },
];

const Pricing = () => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box className={classes.pricingRoot}>
      <motion.img
        src={pricingTopImg}
        alt="Pricing Fishes"
        className={classes.pricingTopImgBase}
        initial={PARTNERS_FISH_INITIAL}
        animate={PARTNERS_FISH_ANIMATE}
        transition={PARTNERS_FISH_TRANSITION}
      />
      <SectionTitle title="Pricing" />
      <Box
        ref={scrollRef}
        className={
          classes.pricingScroll +
          (isOverflowing ? " " + classes.pricingScrollFlexStart : "")
        }
      >
        {isOverflowing && <Box style={{ marginLeft: -72 }} />}
        {pricingData.map((item, idx) => (
          <Box key={idx} className={classes.pricingCardOuter}>
            <Box className={classes.pricingCardInner}>
              <PricingCard {...item} />
            </Box>
          </Box>
        ))}
        {isOverflowing && <Box />}
      </Box>
    </Box>
  );
};

export default Pricing;
