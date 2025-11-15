// src/components/userflow/Cultures/MudCrab.tsx
import CulturePage from "./CulturePage";
import type { CultureCardData } from "./CulturePage";
import mudCrabImg from "../../../assets/cultures/mudcrab.png";

const MudCrab = () => {
  const cards: CultureCardData[] = [
    {
      title: "Introduction",
      smallDesc:
        "High-value crustacean farmed mainly for fattening and exports.",
      largeDesc:
        "Mud Crab (Scylla serrata) is a high-value crustacean species highly prized in international markets, particularly in Asia. Known for its sweet, succulent meat, mud crabs are primarily farmed for fattening operations and export markets. The species is well-suited for both extensive and intensive farming systems.",
    },
    {
      title: "Ideal Water Conditions",
      smallDesc:
        "Brackish water preferred; temperature 25-32°C with good shelter.",
      largeDesc:
        "Mud crabs prefer brackish water environments with salinity levels between 10-25 ppt. Optimal temperature range is 25-32°C, though they can tolerate temperatures from 20-35°C. The species requires good water quality with dissolved oxygen levels above 4 mg/L and pH between 7.0-8.5. Mud crabs need shelter and hiding places, which can be provided through artificial structures or natural vegetation.",
    },
    {
      title: "Stocking And Breeding",
      smallDesc: "Wild-caught juveniles; hatchery production still developing.",
      largeDesc:
        "Mud crab farming primarily relies on wild-caught juveniles, though hatchery production is developing. Juveniles are typically collected from natural habitats and stocked at 1-2 months of age. Broodstock selection is crucial for breeding programs, with mature crabs showing good reproductive characteristics being preferred. Hatchery techniques are still being refined for commercial production.",
    },
    {
      title: "Feeding And Management",
      smallDesc:
        "Carnivorous diet; accepts various feeds including trash fish and pellets.",
      largeDesc:
        "Mud crabs are carnivorous and accept a variety of feeds including trash fish, mollusks, and commercial pellets. Feeding frequency depends on crab size and water temperature, generally 1-2 times daily. Feed conversion ratios vary but typically range from 3:1 to 5:1. Regular monitoring of growth, molting patterns, and water quality is essential for successful farming.",
    },
    {
      title: "Disease Control",
      smallDesc:
        "Generally hardy; proper water quality prevents most health issues.",
      largeDesc:
        "Mud crabs are relatively hardy but can be affected by bacterial infections, parasitic infestations, and shell diseases. Preventive measures include maintaining optimal water quality, proper stocking densities, and regular health monitoring. Molting periods are critical times when crabs are most vulnerable to disease. Good pond management practices help prevent most health issues.",
    },
    {
      title: "Market Reach",
      smallDesc:
        "High export value; strong demand in Asian and international markets.",
      largeDesc:
        "Mud crabs command premium prices in international markets, particularly in Asia (Singapore, Hong Kong, China) and Australia. The species is highly valued for its meat quality and is suitable for live export markets. Domestic markets also show strong demand, especially in coastal regions. Export opportunities are significant, with the species often fetching 3-5 times the price of other cultured species.",
    },
  ];

  return (
    <CulturePage
      title="Mud Crab"
      subtitle="A Guide to Farming the Popular Marine Carnivore"
      headerImg={mudCrabImg}
      cards={cards}
    />
  );
};

export default MudCrab;
