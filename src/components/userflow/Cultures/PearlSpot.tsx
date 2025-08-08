import CulturePage from "./CulturePage";
import type { CultureCardData } from "./CulturePage";
import pearlSpotImg from "../../../assets/cultures/pearlspot.png";

const PearlSpot = () => {
  const cards: CultureCardData[] = [
    {
      title: "Introduction",
      smallDesc:
        "Popular freshwater fish known for its distinctive pearl-like spots.",
      largeDesc:
        "Pearl Spot (Etroplus suratensis) is a popular freshwater fish species native to South India and Sri Lanka. Known for its distinctive pearl-like spots on its body, this fish is highly valued for its taste and adaptability to various farming conditions. It's an excellent choice for both small-scale and commercial aquaculture operations.",
    },
    {
      title: "Ideal Water Conditions",
      smallDesc:
        "Freshwater species; thrives in temperatures 25-30°C with good oxygen.",
      largeDesc:
        "Pearl Spot is a freshwater species that thrives in temperatures between 25-30°C. It prefers water with good dissolved oxygen levels (above 5 mg/L) and can tolerate a wide range of pH levels (6.5-8.5). The fish adapts well to various water bodies including ponds, tanks, and reservoirs. Regular water exchange and aeration help maintain optimal conditions for growth and health.",
    },
    {
      title: "Stocking And Breeding",
      smallDesc:
        "Natural breeding in ponds; fingerlings available from hatcheries.",
      largeDesc:
        "Pearl Spot naturally breeds in ponds during the monsoon season. Broodstock selection is crucial, with mature fish (1-2 years old) being preferred. The fish exhibits parental care, with both parents guarding the eggs and fry. Hatchery-produced fingerlings are also available and are typically stocked at 2-3 months of age. Stocking density depends on pond size and management practices.",
    },
    {
      title: "Feeding And Management",
      smallDesc:
        "Omnivorous diet; accepts both natural and artificial feeds readily.",
      largeDesc:
        "Pearl Spot is omnivorous and accepts a wide variety of feeds including natural food (algae, aquatic plants, small invertebrates) and artificial feeds. Commercial pelleted feeds with 25-30% protein content are commonly used. The fish has good feed conversion efficiency and can be fed 2-3 times daily. Regular monitoring of growth and health is essential for optimal production.",
    },
    {
      title: "Disease Control",
      smallDesc:
        "Generally hardy; good water quality prevents most health issues.",
      largeDesc:
        "Pearl Spot is relatively hardy and disease-resistant when maintained in good water quality conditions. Common health issues include parasitic infestations and bacterial infections, which can be prevented through proper pond management, regular water quality monitoring, and appropriate stocking densities. Quarantine procedures for new stock help prevent disease introduction.",
    },
    {
      title: "Market Reach",
      smallDesc:
        "Strong local demand; popular in South Indian markets and restaurants.",
      largeDesc:
        "Pearl Spot enjoys strong demand in local markets, particularly in South India where it's considered a delicacy. The fish commands premium prices in restaurants and fish markets. Its distinctive taste and texture make it popular among consumers. The species is suitable for both live fish markets and processed products, offering good returns to farmers.",
    },
  ];

  return (
    <CulturePage
      title="Pearl Spot"
      subtitle="A Guide To Farming The Popular Freshwater Fish"
      headerImg={pearlSpotImg}
      cards={cards}
    />
  );
};

export default PearlSpot;
