import SectionTitle from "./SectionTitle";
import card1 from "../../../assets/motto/card_1.png";
import card2 from "../../../assets/motto/card_2.png";
import card3 from "../../../assets/motto/card_3.png";
import { Box } from "@mui/material";
import MottoCard from "./MottoCard";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";
import useHomeStyles from "./homeStyles";

const mottoData = [
  {
    img: card1,
    fishText: "NH-44",
    title: "Creating Fresh Water Aqua Corridor",
    button: true,
    buttonText: "LEARN MORE",
  },
  {
    img: card2,
    fishText: "NH-16",
    title: "Creating Coastal Aqua Corridor",
    button: true,
    buttonText: "LEARN MORE",
  },
  {
    img: card3,
    fishText: "99 acre",
    title: "Mulapolam, Srikakulam",
    button: true,
    buttonText: "LEARN MORE",
  },
];

const OurMotto = () => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box className={classes.ourMottoRoot}>
      <Box className={classes.ourMottoTitleWrap}>
        <Box className={classes.ourMottoTitle}>
        <SectionTitle title="Our Motto" />
        </Box>
      </Box>
      <Box
        ref={scrollRef}
        className={
          classes.ourMottoScrollWrap +
          (isOverflowing ? ' ' + classes.ourMottoScrollFlexStart : '')
        }
      >
        {isOverflowing && <Box className={classes.ourMottoOverflowBoxLeft}></Box>}
        {mottoData.map((card, idx) => (
          <Box key={idx}>
            <MottoCard {...card} />
          </Box>
        ))}
        {isOverflowing && <Box className={classes.ourMottoOverflowBoxRight}></Box>}
      </Box>
    </Box>
  );
};

export default OurMotto;