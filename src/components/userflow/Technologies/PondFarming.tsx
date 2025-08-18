import TechnologiesCardsSection from "./TechnologiesCardsSection";
import type { TechnologyPageProps } from "./types";
import React from "react";
import pondFarmingHeaderImage from "../../../assets/technologies/pondfarming.png";

const PondFarming: React.FC = () => {
  const headerTitle = "Pond Farming";
  const headerSubtitle =
    "Traditional and modern pond-based aquaculture systems for sustainable fish production";
  const headerImg = pondFarmingHeaderImage;

  const cards: TechnologyPageProps["cards"] = [
    {
      title: "Pond Design & Construction",
      smallDesc:
        "Expert pond design and construction techniques for optimal fish production and water management.",
      largeDesc: [
        "Our pond farming technology incorporates advanced design principles that optimize water flow, depth, and surface area for maximum fish production.",
        "Ponds are designed with proper slopes, drainage systems, and water control structures to ensure efficient water management and easy harvesting.",
        "We use modern construction techniques and materials to create durable, long-lasting pond systems that can withstand various environmental conditions.",
      ],
      img: undefined,
    },
    {
      title: "Water Quality Management",
      smallDesc:
        "Comprehensive water quality monitoring and management systems for healthy fish growth.",
      largeDesc: [
        "Pond farming systems include advanced water quality monitoring equipment that tracks dissolved oxygen, pH, temperature, and nutrient levels.",
        "Our management protocols ensure optimal water conditions through regular testing, aeration systems, and natural filtration methods.",
        "We implement sustainable practices that maintain water quality while minimizing environmental impact and resource consumption.",
      ],
      img: undefined,
    },
    {
      title: "Feeding & Nutrition",
      smallDesc:
        "Advanced feeding systems and nutrition management for optimal fish growth and health.",
      largeDesc: [
        "Our pond farming systems feature automated feeding systems that deliver precise amounts of high-quality feed at optimal times.",
        "Nutrition programs are customized for each species and growth stage, ensuring maximum feed conversion efficiency and healthy development.",
        "We incorporate natural feeding methods alongside formulated feeds to create a balanced and cost-effective nutrition strategy.",
      ],
    },
    {
      title: "Harvesting & Processing",
      smallDesc:
        "Efficient harvesting techniques and post-harvest processing for quality fish products.",
      largeDesc: [
        "Pond farming systems include specialized harvesting equipment and techniques that minimize stress on fish and maintain product quality.",
        "Our harvesting protocols ensure efficient collection while preserving fish health and reducing mortality rates.",
        "Post-harvest processing facilities are designed to maintain product freshness and meet international quality standards.",
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

export default PondFarming;
