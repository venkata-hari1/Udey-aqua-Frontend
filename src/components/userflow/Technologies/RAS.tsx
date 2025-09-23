// src/components/userflow/Technologies/RAS.tsx
import TechnologiesCardsSection from "./TechnologiesCardsSection";
import type { TechnologyPageProps } from "./types";
import React from "react";
import rasHeaderImage from "../../../assets/technologies/rac.png";
import rasCardImage from "../../../assets/cultures/pdf_water.png";
import cardImg from "../../../assets/technologies/card.jpg";

// Static data moved outside component for performance and consistency
const HEADER_TITLE = "Recirculating Aquaculture System (RAS)";
const HEADER_SUBTITLE =
  "Sustainable, space-efficient, and tech-driven aquaculture for the future.";
const HEADER_IMG = rasHeaderImage;

const RAS_CARDS: TechnologyPageProps["cards"] = [
  {
    title: "Water Filtration",
    smallDesc:
      "Advanced filtration systems that maintain optimal water conditions for fish health and growth.",
    largeDesc: [
      "In Recirculating Aquaculture Systems, water filtration is the core process that ensures a clean and healthy environment for aquatic life. The system uses a combination of mechanical and biological filters to remove solid waste, uneaten feed, and toxic compounds such as ammonia and nitrites.",
      "By continuously treating and reusing water, RAS significantly reduces water consumption while maintaining optimal water quality. This not only promotes better fish health and growth but also contributes to sustainable aquaculture by minimizing environmental discharge.",
    ],
    img: cardImg,
  },
  {
    title: "Energy Efficiency",
    smallDesc:
      "Optimized energy consumption through smart pump systems and heat recovery technology.",
    largeDesc: [
      "Modern RAS systems are designed with energy efficiency in mind. We use variable speed pumps that adjust flow rates based on system demands, reducing energy consumption by up to 40%.",
      "Heat recovery systems capture waste heat from water treatment processes and reuse it to maintain optimal water temperatures, further reducing energy costs.",
    ],
  },
  {
    title: "System Monitoring & Control",
    smallDesc:
      "Real-time monitoring and automated control systems for optimal operation.",
    largeDesc: [
      "Our RAS systems feature comprehensive monitoring and control capabilities. IoT sensors continuously track system performance, water quality parameters, and fish behavior.",
      "The automated control system can adjust feeding schedules, water flow rates, and treatment processes based on real-time data.",
      "Remote monitoring capabilities allow operators to manage systems from anywhere, ensuring 24/7 oversight.",
    ],
    img: rasCardImage,
  },
  {
    title: "Scalability & Flexibility",
    smallDesc:
      "Modular design that can be scaled from small operations to large commercial facilities.",
    largeDesc: [
      "RAS technology offers unparalleled scalability and flexibility. Systems can start small and expand as operations grow.",
      "The modular design allows for easy integration of additional components and capacity.",
      "Whether you're starting with a 10-ton annual production facility or scaling up to 100+ tons, our RAS systems can accommodate your needs.",
      "The technology also supports multiple species and can be adapted for different production goals.",
    ],
  },
];

const RAS: React.FC = () => {
  return (
    <TechnologiesCardsSection
      headerTitle={HEADER_TITLE}
      headerSubtitle={HEADER_SUBTITLE}
      headerImg={HEADER_IMG}
      cards={RAS_CARDS}
    />
  );
};

export default RAS;
