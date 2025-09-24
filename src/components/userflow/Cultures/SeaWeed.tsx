import CulturePage from "./CulturePage";
import type { CultureCardData } from "./CulturePage";
import seaWeedImg from "../../../assets/cultures/seaweed.png";

const SeaWeed = () => {
  const cards: CultureCardData[] = [
    {
      title: "Introduction",
      smallDesc:
        "Marine algae cultivation for food, industrial, and pharmaceutical applications.",
      largeDesc:
        "Seaweed farming involves the cultivation of various marine algae species for multiple applications including food, industrial products, and pharmaceuticals. Seaweeds are rich in nutrients and bioactive compounds, making them valuable for both human consumption and industrial use. The farming of seaweeds is environmentally sustainable and requires minimal inputs.",
    },
    {
      title: "Ideal Water Conditions",
      smallDesc:
        "Marine environment; requires clean seawater with good nutrient availability.",
      largeDesc:
        "Seaweed farming requires clean marine environments with good water quality and nutrient availability. Optimal conditions include salinity levels between 30-35 ppt, temperatures between 20-30°C, and good water circulation. The species prefer areas with moderate wave action and good light penetration. Water quality parameters should include low levels of pollutants and adequate dissolved oxygen.",
    },
    {
      title: "Stocking And Breeding",
      smallDesc:
        "Vegetative propagation; seed material from natural populations or hatcheries.",
      largeDesc:
        "Seaweed farming primarily relies on vegetative propagation, where fragments of mature seaweed are used as seed material. These fragments are attached to ropes or nets and suspended in the water column. Some species can also be propagated through spores in specialized hatchery facilities. The selection of healthy, fast-growing parent material is crucial for successful farming.",
    },
    {
      title: "Feeding And Management",
      smallDesc:
        "Photosynthetic; requires sunlight and natural nutrients from seawater.",
      largeDesc:
        "Seaweeds are photosynthetic organisms that require sunlight and natural nutrients from seawater. They do not require artificial feeding but benefit from good water circulation and nutrient availability. Management practices include regular monitoring of growth rates, water quality, and potential fouling by other organisms. Harvesting is typically done when the seaweed reaches optimal size and quality.",
    },
    {
      title: "Disease Control",
      smallDesc:
        "Generally resistant; proper site selection prevents most issues.",
      largeDesc:
        "Seaweeds are generally resistant to diseases, but they can be affected by fouling organisms, epiphytes, and environmental stressors. Proper site selection, regular monitoring, and good farming practices help prevent most issues. The use of clean seed material and regular cleaning of farming structures helps maintain healthy crops.",
    },
    {
      title: "Market Reach",
      smallDesc:
        "Growing demand for food, cosmetics, and industrial applications globally.",
      largeDesc:
        "Seaweed markets are expanding rapidly with growing demand for food products, cosmetics, pharmaceuticals, and industrial applications. The global seaweed market is valued at billions of dollars annually. Seaweeds are used in various products including food additives, cosmetics, biofuels, and pharmaceutical compounds. Export opportunities are significant, particularly for high-quality, sustainably farmed seaweeds.",
    },
  ];

  return (
    <CulturePage
      title="Sea Weed"
      subtitle="A Guide To Farming Marine Algae"
      headerImg={seaWeedImg}
      cards={cards}
    />
  );
};

export default SeaWeed;
