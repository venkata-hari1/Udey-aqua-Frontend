// src/components/userflow/About/SustainableDevelopment.tsx
import AboutCardsSection from "./AboutCardsSection";
import sustainImg from "../../../assets/about_us/sustainable.jpg";
import sustainSideImg from "../../../assets/about_us/sustainable.png";

const aboutCards = [
  {
    title: "Eco-Friendly Practices",
    smallDesc:
      "We strive to lead sustainable aquaculture practices in India, focusing on innovation, education, and community empowerment. We strive to lead sustainable aquaculture practices in India,",
    largeDesc:
      "Uday Aqua integrates sustainable practices in every aspect of our operations, from resource management to community engagement.",
    img: sustainImg,
  },
  {
    title: "Farmer Training Programs",
    smallDesc:
      "To be a global leader in responsible aquaculture, enriching livelihoods while protecting aquatic ecosystems.. We strive to lead sustainable aquaculture practices in India,",
    largeDesc:
      "We invest in research and technology to minimize our ecological footprint and promote biodiversity.",
  },
  {
    title: "Water & Resource Management",
    smallDesc:
      "To be a global leader in responsible aquaculture, enriching livelihoods while protecting aquatic ecosystems.. We strive to lead sustainable aquaculture practices in India,",
    largeDesc:
      "We invest in research and technology to minimize our ecological footprint and promote biodiversity.",
  },
];

const SustainableDevelopment = () => (
  <AboutCardsSection
    headerTitle="Sustainable Development"
    headerSubtitle="Building a Better Tomorrow with Eco-Conscious Aquaculture"
    headerImg={sustainImg}
    headerImgSide={sustainSideImg}
    cards={aboutCards}
  />
);

export default SustainableDevelopment;
