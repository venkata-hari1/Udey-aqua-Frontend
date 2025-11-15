// src/components/userflow/Cultures/SeaBass.tsx
import CulturePage from "./CulturePage";
import type { CultureCardData } from "./CulturePage";
import seaBassImg from "../../../assets/cultures/seebass.png";

const SeaBass = () => {
  const cards: CultureCardData[] = [
    {
      title: "Introduction",
      smallDesc:
        "High-value marine fish farmed for premium markets and exports.",
      largeDesc:
        "Sea Bass (Lates calcarifer) is a premium marine fish species highly valued in aquaculture. Known for its excellent taste and firm white flesh, it's a favorite in high-end restaurants and export markets. The fish grows rapidly and adapts well to various farming conditions, making it an attractive option for commercial aquaculture operations.",
    },
    {
      title: "Ideal Water Conditions",
      smallDesc:
        "Thrives in brackish water; optimal temperature range 25-32°C.",
      largeDesc:
        "Sea Bass prefers brackish water environments with salinity levels between 10-30 ppt. The optimal temperature range is 25-32°C, though it can tolerate temperatures from 20-35°C. Water quality parameters should include dissolved oxygen levels above 5 mg/L, pH between 7.5-8.5, and ammonia levels below 0.1 mg/L. The species can be farmed in ponds, cages, and recirculating aquaculture systems.",
    },
    {
      title: "Stocking And Breeding",
      smallDesc:
        "Hatchery-produced fingerlings available; natural breeding in captivity.",
      largeDesc:
        "Sea Bass fingerlings are primarily produced in hatcheries through controlled breeding programs. Broodstock are selected based on size, health, and genetic quality. Spawning is induced through hormonal treatment or environmental manipulation. Larvae are reared in specialized hatchery facilities with careful attention to water quality and feeding protocols. Fingerlings are typically stocked at 2-3 months of age when they reach 2-3 inches in length.",
    },
    {
      title: "Feeding And Management",
      smallDesc:
        "Carnivorous diet; requires high-protein feed with efficient conversion.",
      largeDesc:
        "Sea Bass are carnivorous and require high-protein feeds (40-45% protein) for optimal growth. Commercial pelleted feeds are commonly used, though some farmers supplement with fresh fish or shrimp. Feed conversion ratios typically range from 1.2-1.8:1. Feeding frequency depends on fish size and water temperature, generally 2-3 times daily for juveniles and 1-2 times for adults. Regular monitoring of growth rates and feed consumption is essential for efficient management.",
    },
    {
      title: "Disease Control",
      smallDesc:
        "Generally hardy; proper management prevents most disease outbreaks.",
      largeDesc:
        "Sea Bass are relatively hardy fish, but they can be susceptible to bacterial infections (Vibriosis, Aeromonas), parasitic infestations (Ichthyophthirius, Trichodina), and viral diseases. Preventive measures include maintaining optimal water quality, proper stocking densities, and regular health monitoring. Vaccination programs are available for some diseases. Quarantine procedures for new stock and regular health checks are essential components of disease management.",
    },
    {
      title: "Market Reach",
      smallDesc:
        "Premium markets domestically and internationally; high export value.",
      largeDesc:
        "Sea Bass commands premium prices in both domestic and international markets. The fish is highly valued in Asian markets, particularly in Hong Kong, Singapore, and Japan. European markets also show strong demand. The species is suitable for live fish markets, fresh chilled, and frozen products. Export opportunities are significant, with the fish often fetching 2-3 times the price of other cultured species. Market demand is consistently strong due to its excellent taste and texture.",
    },
  ];

  return (
    <CulturePage
      title="Sea Bass"
      subtitle="A Guide to Farming the Popular Marine Carnivore"
      headerImg={seaBassImg}
      cards={cards}
    />
  );
};

export default SeaBass;
