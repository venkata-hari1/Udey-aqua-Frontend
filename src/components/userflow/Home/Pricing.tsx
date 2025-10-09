// src/components/userflow/Home/Pricing.tsx
import { Box } from "@mui/material";

import SectionTitle from "./SectionTitle";
import PricingCard from "./PricingCard";
import pricingImg1 from "../../../assets/pricing/pricing_img_1.png";
import pricingImg2 from "../../../assets/pricing/pricing_img_2.png";
import pricingImg3 from "../../../assets/pricing/pricing_img_3.png";
import pricingImg4 from "../../../assets/pricing/pricing_img_4.png";
import pricingImg5 from "../../../assets/pricing/pricing_img_5.png";
import pricingImg6 from "../../../assets/pricing/pricing_img_6.png";
import pricingTopImg from "../../../assets/home/pricing_image.png";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";
import useHomeStyles from "./homeStyles";
import anglesfish from '../../../assets/home/angelfish.gif'
import SunFishAnimation from "./SunFishAnimation";

const pricingData = [
  {
    image: pricingImg1,
    title: "Sea Bass",
    features: [
      "Cost-effective practices for small-scale farms",
      "End-to-end sea bass farm setup guidance",
      "Guidance: hatchery & nursery management",
      "Full-cycle farm operations with live video & export potential",
      "Value addition & export support","Premium markets domestically and internationally; high export value."
    ],
  },
  {
    image: pricingImg2,
    title: "Pearl Spot",
    features: [
      "Popular freshwater fish known for its distinctive pearl-like spots",
      "Freshwater species; thrives in temperatures 25-30°C with good oxygen",
      "Natural breeding in ponds; fingerlings available from hatcheries",
      "Omnivorous diet; accepts both natural and artificial feeds readily",
      "Generally hardy; good water quality prevents most health issues",
      "Strong local demand; popular in South Indian markets and restaurants",
    ],
  },
  {
    image: pricingImg3,
    title: "Mud Crab",
    features: [
      "High-value crustacean farmed mainly for fattening and exports.",
      "Fattening units include pens and bamboo cages for rapid weight gain.",
      "Fed with trash fish and organic waste; low feed costs, fast ROI.",
      "Usually 25–45 days of fattening is sufficient before marketing.l",
      "Requires clean saline water and regular monitoring for optimal growth.",
    ],
  },
  {
    image:pricingImg4,
    title:"Murrel",
    features:["Popular freshwater fish known for its air-breathing ability and hardiness.",
      "Freshwater species; can survive in low-oxygen conditions with shelter","Natural breeding in ponds; parental care exhibited by both parents",
      "Carnivorous diet; accepts live feed, pellets, and fish meat readily","Very hardy species; minimal disease issues with proper management","Strong local demand; popular in domestic markets and restaurants",
    ],
  },
  {
    image:pricingImg5,
    title:"Tilapia",
    features:["High-value crustacean farmed mainly for fattening and exports.",
      "Grows well in moderate temperatures; thrives in tanks and ponds.",
      "Can breed in captivity, enabling easy seed availability for farmers.","Omnivorous, requires affordable pelleted feed with high feed conversion","Hardy fish with minimal disease outbreaks under proper management",
    ],
  },
  {
    image:pricingImg6,
    title:"Sea Weed",
    features:["Grown for food, cosmetics, biofuels, and fertilizers with zero feed cost.",
      "Kappaphycus, Gracilaria, and Ulva are the most commonly farmed in India.",
      "Cultivated using rope rafts or monoline systems in shallow coastal waters.","Manual harvesting followed by solar drying to prepare for processing.",
      "Improves water quality and supports coastal biodiversity","Low investment, high returns"
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
      <SunFishAnimation Fish={anglesfish} Count={4} Zindex={0} />
      <SectionTitle title="Pricing" />
      <Box
        ref={scrollRef}
        className={
          classes.pricingScroll +
          (isOverflowing ? " " + classes.pricingScrollFlexStart : "")
        }
      >
        {pricingData.map((item, idx) => (
          <Box key={idx} className={classes.pricingCardOuter}>
            <Box className={classes.pricingCardInner}>
              <PricingCard {...item} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Pricing;
