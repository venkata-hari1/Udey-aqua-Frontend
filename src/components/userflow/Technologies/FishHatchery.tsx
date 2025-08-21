import TechnologiesCardsSection from "./TechnologiesCardsSection";
import type { TechnologyPageProps } from "./types";
import React from "react";
import fishHatcheryHeaderImage from "../../../assets/technologies/fishhatchery.png";

// Static data outside the component for performance
const HEADER_TITLE = "Fish Hatchery";
const HEADER_SUBTITLE =
  "Advanced breeding and hatchery systems for producing high-quality fish seed and fingerlings";
const HEADER_IMG = fishHatcheryHeaderImage;

const FISH_HATCHERY_CARDS: TechnologyPageProps["cards"] = [
  {
    title: "Broodstock Management",
    smallDesc:
      "Comprehensive broodstock selection, breeding, and management systems for genetic improvement.",
    largeDesc: [
      "Our fish hatchery technology includes advanced broodstock management systems that ensure genetic diversity and quality improvement.",
      "We implement selective breeding programs that focus on growth rate, disease resistance, and other desirable traits for commercial production.",
      "Broodstock facilities feature optimal environmental conditions, specialized feeding programs, and health monitoring systems.",
    ],
  },
  {
    title: "Spawning & Incubation",
    smallDesc:
      "Controlled spawning techniques and advanced incubation systems for optimal egg development.",
    largeDesc: [
      "Fish hatchery systems utilize controlled spawning techniques that maximize fertilization rates and egg quality.",
      "Our incubation facilities maintain precise temperature, oxygen, and water quality parameters to ensure optimal embryo development.",
      "Advanced monitoring systems track development stages and automatically adjust conditions for maximum hatch success rates.",
    ],
  },
  {
    title: "Larval Rearing",
    smallDesc:
      "Specialized larval rearing systems and nutrition programs for healthy fry development.",
    largeDesc: [
      "Larval rearing facilities are designed with specialized tanks, lighting systems, and water circulation to create optimal conditions for fry development.",
      "Our nutrition programs include live feeds, microencapsulated diets, and automated feeding systems tailored to each developmental stage.",
      "Environmental control systems maintain stable conditions while monitoring growth rates and survival to optimize production efficiency.",
    ],
  },
  {
    title: "Fingerling Production",
    smallDesc:
      "Advanced fingerling production systems for healthy, disease-free fish seed.",
    largeDesc: [
      "Fingerling production facilities feature large-scale rearing systems with automated feeding, water quality management, and health monitoring.",
      "Our production protocols include disease prevention measures, vaccination programs, and quality control systems.",
      "Grading and sorting systems ensure uniform size distribution while maintaining high survival rates and optimal growth performance.",
    ],
  },
];

const FishHatchery: React.FC = () => {
  return (
    <TechnologiesCardsSection
      headerTitle={HEADER_TITLE}
      headerSubtitle={HEADER_SUBTITLE}
      headerImg={HEADER_IMG}
      cards={FISH_HATCHERY_CARDS}
    />
  );
};

export default FishHatchery;
