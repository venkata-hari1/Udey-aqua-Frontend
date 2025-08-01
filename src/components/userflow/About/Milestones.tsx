import milestoneImg from "../../../assets/about_us/milestones.png";
import AboutCardsSection from "./AboutCardsSection";

const aboutCards = [
  {
    title: "2005 – Launch of First Hatchery",
    smallDesc:
      "We strive to lead sustainable aquaculture practices in India, focusing on innovation, education, and community empowerment. We strive to lead sustainable aquaculture practices in India,",
    largeDesc:
      "From launching our first project to expanding across India, each milestone marks a step forward in our journey.",
    img: milestoneImg,
  },
  {
    title: "2010 – Partnered with Coastal Farmers",
    smallDesc:
      "To be a global leader in responsible aquaculture, enriching livelihoods while protecting aquatic ecosystems.. We strive to lead sustainable aquaculture practices in India,",
    largeDesc:
      "Uday Aqua has received numerous awards for innovation, sustainability, and community impact.",
  },
  {
    title: "2022 – Introduced RAS Technology",
    smallDesc:
      "To be a global leader in responsible aquaculture, enriching livelihoods while protecting aquatic ecosystems.. We strive to lead sustainable aquaculture practices in India,",
    largeDesc:
      "Uday Aqua has received numerous awards for innovation, sustainability, and community impact.",
  },
];

const Milestones = () => {
  return (
    <AboutCardsSection
      headerTitle="Milestones"
      headerSubtitle="Our Journey of Achievements"
      headerImg={milestoneImg}
      headerImgSide={milestoneImg}
      cards={aboutCards}
    />
  );
};
export default Milestones;
