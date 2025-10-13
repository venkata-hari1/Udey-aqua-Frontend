// src/components/userflow/Home/OurMotto.tsx
import SectionTitle from "./SectionTitle";
import card1 from "../../../assets/motto/card_1.png";
import card2 from "../../../assets/motto/card_2.png";
import card3 from "../../../assets/motto/card_3.png";
import { Box } from "@mui/material";
import MottoCard from "./MottoCard";
import useHomeStyles from "./homeStyles";
import { useEffect, useRef } from "react";
import {Zoom} from 'react-awesome-reveal'
const mottoData = [
  {
    img: card1,
    fishText: "NH-44",
    title: "Creating Fresh Water Aqua Corridor",
    button: true,
    buttonText: "LEARN MORE",
    aboutCard: "NH-44",
  },
  {
    img: card2,
    fishText: "NH-16",
    title: "Creating Coastal Aqua Corridor",
    button: true,
    buttonText: "LEARN MORE",
    aboutCard: "NH-16",
  },
  {
    img: card3,
    fishText: "99 acre",
    title: "Mulapolam, Srikakulam",
    button: true,
    buttonText: "LEARN MORE",
    aboutCard: "99 Acres",
  },
];

const OurMotto = () => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ left: 0, behavior: "auto" });
    }
  }, []);

  return (
    <Box className={classes.ourMottoRoot}>
      <Box className={classes.ourMottoTitleWrap}>
        <Box className={classes.ourMottoTitle}>
          <SectionTitle title="Our Motto" />
        </Box>
      </Box>

      <Box ref={scrollRef} className={classes.ourMottoScrollWrap}>
        {mottoData.map((card, idx) => (
          <Zoom>
          <Box key={idx} className={classes.mottoCardOuter}>
            <MottoCard {...card} />
          </Box>
          </Zoom>
        ))}
      </Box>
    </Box>
  );
};

export default OurMotto;
