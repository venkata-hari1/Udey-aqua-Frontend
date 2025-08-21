import TechnologiesCardsSection from "./TechnologiesCardsSection";
import type { TechnologyPageProps } from "./types";
import React from "react";
import cageCultureHeaderImage from "../../../assets/technologies/cagecultures.png";

// Static data outside the component for performance
const HEADER_TITLE = "Cage Culture";
const HEADER_SUBTITLE =
  "Innovative cage-based aquaculture systems for open water fish farming and marine production";
const HEADER_IMG = cageCultureHeaderImage;

const CAGE_CULTURE_CARDS: TechnologyPageProps["cards"] = [
  {
    title: "Cage Design & Engineering",
    smallDesc:
      "Advanced cage design and engineering solutions for optimal fish production in open water environments.",
    largeDesc: [
      "Our cage culture technology features innovative cage designs that maximize fish production while ensuring structural integrity in challenging marine environments.",
      "Cages are engineered with high-strength materials, anti-fouling coatings, and modular construction for easy maintenance and scalability.",
      "Advanced anchoring systems and mooring designs ensure stability in various weather conditions and water depths.",
    ],
  },
  {
    title: "Environmental Monitoring",
    smallDesc:
      "Comprehensive environmental monitoring and management systems for sustainable cage operations.",
    largeDesc: [
      "Cage culture systems include advanced environmental monitoring equipment that tracks water quality, currents, weather conditions, and fish behavior.",
      "Our monitoring protocols ensure compliance with environmental regulations while optimizing production conditions for fish health and growth.",
      "Real-time data collection and analysis systems provide early warning capabilities for adverse conditions and enable proactive management decisions.",
    ],
  },
  {
    title: "Feeding & Management",
    smallDesc:
      "Automated feeding systems and comprehensive management protocols for cage-based production.",
    largeDesc: [
      "Cage culture operations feature automated feeding systems that deliver precise amounts of feed based on fish behavior, environmental conditions, and growth requirements.",
      "Our management protocols include regular health monitoring, growth tracking, and feeding optimization to maximize production efficiency.",
      "Advanced camera systems and sensors monitor fish behavior and feeding patterns to ensure optimal nutrition and minimize feed waste.",
    ],
  },
  {
    title: "Harvesting & Logistics",
    smallDesc:
      "Efficient harvesting systems and logistics solutions for cage-based fish production.",
    largeDesc: [
      "Cage culture harvesting systems are designed for efficiency and fish welfare, featuring specialized equipment and protocols that minimize stress and maintain product quality.",
      "Our logistics solutions include on-site processing facilities, cold chain management, and transportation systems optimized for cage culture operations.",
      "Harvesting protocols ensure consistent product quality while maintaining high survival rates and meeting market specifications.",
    ],
  },
];

const CageCulture: React.FC = () => {
  return (
    <TechnologiesCardsSection
      headerTitle={HEADER_TITLE}
      headerSubtitle={HEADER_SUBTITLE}
      headerImg={HEADER_IMG}
      cards={CAGE_CULTURE_CARDS}
    />
  );
};

export default CageCulture;
