import { Box } from "@mui/material";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "./TestimonialCard";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";
import useHomeStyles from "./homeStyles";

import img1 from "../../../assets/testimonials/person_1.jpg";
import img2 from "../../../assets/testimonials/person_2.jpg";
import img3 from "../../../assets/testimonials/person_3.jpg";

const testimonials: Testimonial[] = [
  {
    name: "Ramesh",
    role: "Farmer",
    img: img1,
    quote: '“Uday Aqua transformed our aquaculture operations with their innovative and sustainable approach.”',
  },
  {
    name: "Laxmi",
    role: "Farmer",
    img: img2,
    quote: '“Uday Aqua transformed our aquaculture operations with their innovative and sustainable approach.”',
  },
  {
    name: "Mahesh",
    role: "Customer",
    img: img3,
    quote: '“Uday Aqua transformed our aquaculture operations with their innovative and sustainable approach.”',
  }
];

const Testimonials: React.FC = () => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box className={classes.testimonialsRoot}>
      <SectionTitle title="Testimonials" />
      <Box
        ref={scrollRef}
        className={
          classes.testimonialsScroll +
          (isOverflowing ? ' ' + classes.testimonialsScrollFlexStart : '')
        }
      >
        {isOverflowing && <Box />}
        {testimonials.map((t, idx) => (
          <Box key={idx} className={classes.testimonialsCardOuter}>
              <TestimonialCard testimonial={t} />
          </Box>
        ))}
        {isOverflowing && <Box />}
      </Box>
    </Box>
  );
};

export default Testimonials;