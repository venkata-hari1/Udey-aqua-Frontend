import TechnologiesCardsSection from "./TechnologiesCardsSection";
import type { TechnologyPageProps } from "./types";
import React from "react";
import fishHatcheryHeaderImage from "../../../assets/technologies/fishhatchery.png";

const FishHatchery: React.FC = () => {
  const headerTitle = "Fish Hatchery";
  const headerSubtitle =
    "Advanced breeding and hatchery systems for producing high-quality fish seed and fingerlings";
  const headerImg = fishHatcheryHeaderImage;

  const cards: TechnologyPageProps["cards"] = [
    {
      title: "Broodstock Management",
      smallDesc:
        "Comprehensive broodstock selection, breeding, and management systems for genetic improvement.",
      largeDesc: [
        "Our fish hatchery technology includes advanced broodstock management systems that ensure genetic diversity and quality improvement.",
        "We implement selective breeding programs that focus on growth rate, disease resistance, and other desirable traits for commercial production.",
        "Broodstock facilities feature optimal environmental conditions, specialized feeding programs, and health monitoring systems.",
      ],
      img: undefined,
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
      img: undefined,
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
      img: undefined,
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
      img: undefined,
    },
  ];

  return (
    <TechnologiesCardsSection
      headerTitle={headerTitle}
      headerSubtitle={headerSubtitle}
      headerImg={headerImg}
      cards={cards}
    />
  );
};

export default FishHatchery;
