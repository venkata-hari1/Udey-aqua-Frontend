// src/components/userflow/Technologies/CAS.tsx
import TechnologiesCardsSection from "./TechnologiesCardsSection";
import type { TechnologyPageProps } from "./types";
import React from "react";
import casHeaderImage from "../../../assets/technologies/cas.png";
import casCardImage from "../../../assets/cultures/pdf_water.png";

const CAS: React.FC = () => {
  const headerTitle = "Circulating Aquaculture System (CAS)";
  const headerSubtitle =
    "Efficient and practical water flow systems designed for accessible, low-maintenance fish farming.";
  const headerImg = casHeaderImage;

  const cards: TechnologyPageProps["cards"] = [
    {
      title: "Water Circulation",
      smallDesc:
        "Advanced circulation systems that maintain optimal water flow and distribution throughout the facility.",
      largeDesc: [
        "Our CAS technology features sophisticated water circulation systems designed to ensure uniform water distribution across all culture units.",
        "The system utilizes energy-efficient pumps and strategically placed inlets and outlets to create optimal flow patterns that promote fish health and growth while maintaining water quality standards.",
      ],
      img: undefined,
    },
    {
      title: "Filtration Technology",
      smallDesc:
        "Multi-stage filtration systems for maintaining crystal clear water quality.",
      largeDesc: [
        "CAS systems incorporate advanced filtration technology including mechanical filters for removing solid waste, biological filters for converting harmful ammonia and nitrites, and chemical filters for removing dissolved contaminants.",
        "This comprehensive approach ensures water quality remains consistently high throughout the production cycle.",
      ],
      img: undefined,
    },
    {
      title: "System Integration",
      smallDesc:
        "Seamless integration of circulation, filtration, and monitoring systems.",
      largeDesc: [
        "Our CAS systems are designed with full integration in mind. All components work together seamlessly, from the circulation pumps to the monitoring sensors.",
        "The integrated control system allows operators to manage all aspects of the system from a single interface, ensuring optimal performance and easy troubleshooting.",
      ],
      img: casCardImage,
    },
    {
      title: "Cost Efficiency",
      smallDesc:
        "Optimized systems that reduce operational costs while maintaining high production standards.",
      largeDesc: [
        "CAS technology is designed with cost efficiency as a priority. The systems use energy-efficient components, require minimal maintenance, and can operate with reduced staffing requirements.",
        "Advanced automation features help reduce labor costs while maintaining consistent water quality and fish health.",
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

export default CAS;
