import CulturePage from "./CulturePage";
import type { CultureCardData } from "./CulturePage";
import murrelImg from "../../../assets/cultures/murrel.png";

const Murrel = () => {
  const cards: CultureCardData[] = [
    {
      title: "Introduction",
      smallDesc:
        "Popular freshwater fish known for its air-breathing ability and hardiness.",
      largeDesc:
        "Murrel (Channa striata) is a popular freshwater fish species known for its air-breathing ability and hardiness. This predatory fish is highly valued for its taste and adaptability to various farming conditions. Murrel can survive in low-oxygen environments and is well-suited for both small-scale and commercial aquaculture operations.",
    },
    {
      title: "Ideal Water Conditions",
      smallDesc:
        "Freshwater species; can survive in low-oxygen conditions with shelter.",
      largeDesc:
        "Murrel is a freshwater species that can survive in various water conditions, including low-oxygen environments due to its air-breathing ability. Optimal temperature range is 25-32°C, though it can tolerate temperatures from 20-35°C. The fish prefers water with good shelter and vegetation. pH levels between 6.5-8.0 are suitable, and the species can adapt to both still and flowing water bodies.",
    },
    {
      title: "Stocking And Breeding",
      smallDesc:
        "Natural breeding in ponds; parental care exhibited by both parents.",
      largeDesc:
        "Murrel naturally breeds in ponds during the monsoon season. The species exhibits excellent parental care, with both parents guarding the eggs and fry. Broodstock selection is important, with mature fish (1-2 years old) being preferred. Fingerlings are typically stocked at 2-3 months of age. The species can be bred in captivity with proper environmental conditions.",
    },
    {
      title: "Feeding And Management",
      smallDesc:
        "Carnivorous diet; accepts live feed, pellets, and fish meat readily.",
      largeDesc:
        "Murrel is carnivorous and accepts a variety of feeds including live fish, fish meat, and commercial pellets. The species has good feed conversion efficiency and can be fed 1-2 times daily. Juvenile murrels prefer live feed, while adults accept both live and artificial feeds. Regular monitoring of growth and health is essential for optimal production.",
    },
    {
      title: "Disease Control",
      smallDesc:
        "Very hardy species; minimal disease issues with proper management.",
      largeDesc:
        "Murrel is one of the hardiest fish species with minimal disease issues when maintained in good conditions. The species is resistant to most common fish diseases due to its robust immune system. Preventive measures include maintaining good water quality and proper stocking densities. Regular health monitoring helps identify any potential issues early.",
    },
    {
      title: "Market Reach",
      smallDesc:
        "Strong local demand; popular in domestic markets and restaurants.",
      largeDesc:
        "Murrel enjoys strong demand in local markets, particularly in South and Southeast Asia where it's considered a delicacy. The fish commands good prices in restaurants and fish markets. Its distinctive taste and texture make it popular among consumers. The species is suitable for both live fish markets and processed products, offering good returns to farmers.",
    },
  ];

  return (
    <CulturePage
      title="Murrel"
      subtitle="A Guide To Farming The Hardy Air-Breathing Fish"
      headerImg={murrelImg}
      cards={cards}
    />
  );
};

export default Murrel;
