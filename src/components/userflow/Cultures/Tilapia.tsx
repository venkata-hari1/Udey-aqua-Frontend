// src/components/userflow/Cultures/Tilapia.tsx
import CulturePage from "./CulturePage";
import type { CultureCardData } from "./CulturePage";
import tilapiaImg from "../../../assets/cultures/tilapia.png";

const Tilapia = () => {
  const cards: CultureCardData[] = [
    {
      title: "Introduction",
      smallDesc:
        "Fast-growing freshwater fish ideal for intensive farming systems.",
      largeDesc:
        "Tilapia (Oreochromis niloticus) is a fast-growing freshwater fish species that has become one of the most important cultured fish globally. Known for its rapid growth, adaptability, and omnivorous feeding habits, tilapia is ideal for intensive farming systems. The species is highly productive and can be farmed in various environments including ponds, cages, and recirculating systems.",
    },
    {
      title: "Ideal Water Conditions",
      smallDesc:
        "Freshwater species; thrives in temperatures 25-30°C with good oxygen.",
      largeDesc:
        "Tilapia thrives in freshwater environments with temperatures between 25-30°C, though it can tolerate temperatures from 20-35°C. The species prefers water with good dissolved oxygen levels (above 4 mg/L) and can tolerate a wide range of pH levels (6.5-8.5). Tilapia is highly adaptable and can be farmed in various water bodies including ponds, tanks, and cages.",
    },
    {
      title: "Stocking And Breeding",
      smallDesc:
        "Can breed in captivity; enables easy seed availability for farmers.",
      largeDesc:
        "Tilapia can breed readily in captivity, making seed production relatively easy. The species exhibits mouth-brooding behavior, with females carrying eggs and fry in their mouths. Monosex culture (all-male populations) is commonly practiced to prevent unwanted breeding and improve growth rates. Fingerlings are typically stocked at 1-2 months of age when they reach 1-2 inches in length.",
    },
    {
      title: "Feeding And Management",
      smallDesc:
        "Omnivorous diet; requires affordable pelleted feed with high feed conversion.",
      largeDesc:
        "Tilapia is omnivorous and accepts a wide variety of feeds including natural food (algae, aquatic plants) and artificial feeds. Commercial pelleted feeds with 25-30% protein content are commonly used. The species has excellent feed conversion efficiency (1.2-1.8:1) and can be fed 2-3 times daily. Regular monitoring of growth and water quality is essential for optimal production.",
    },
    {
      title: "Disease Control",
      smallDesc:
        "Hardy fish with minimal disease outbreaks under proper management.",
      largeDesc:
        "Tilapia is relatively hardy and disease-resistant when maintained in good water quality conditions. Common health issues include parasitic infestations and bacterial infections, which can be prevented through proper pond management and regular water quality monitoring. The species is resistant to most common fish diseases, making it suitable for intensive farming systems.",
    },
    {
      title: "Market Reach",
      smallDesc:
        "Widely accepted in Indian markets and export-friendly due to clean taste.",
      largeDesc:
        "Tilapia enjoys wide acceptance in domestic markets and is increasingly popular in international markets. The fish has a mild, clean taste that appeals to a broad range of consumers. It's suitable for various processing methods including fresh, frozen, and value-added products. Export opportunities are growing, particularly in markets that prefer white-fleshed fish with mild flavor profiles.",
    },
  ];

  return (
    <CulturePage
      title="Tilapia"
      subtitle="A Guide to Farming the Popular Marine Carnivore"
      headerImg={tilapiaImg}
      cards={cards}
    />
  );
};

export default Tilapia;
