import whoarewe from "../../../assets/about_us/who_are_we.jpg";
import whoareweSide from "../../../assets/about_us/who_we_are.png";
import missionImg from "../../../assets/about_us/mission.jpg";
import AboutCardsSection from "./AboutCardsSection";

const aboutCards = [
  {
    title: "Our Mission",
    smallDesc:
      "At Uday Aqua, our mission is to revolutionize the aquaculture industry by promoting sustainable, ethical, and innovative practices that benefit both the environment and coastal communities.",
    largeDesc:
      "We strive to empower fish farmers, entrepreneurs, and stakeholders with knowledge, training, and access to advanced technologies that ensure long-term productivity and ecological balance. Through responsible seafood farming and comprehensive capacity-building programs, we aim to reduce the environmental footprint of aquaculture while increasing income opportunities in rural and semi-urban regions.",
    img: missionImg,
  },
  {
    title: "Vision Statement",
    smallDesc:
      "To be a global leader in responsible aquaculture, enriching livelihoods while protecting aquatic ecosystems.. We strive to lead sustainable aquaculture practices in India,",
    largeDesc:
      "Our vision is to set the benchmark for sustainable aquaculture, ensuring food security, economic growth, and environmental stewardship for future generations.",
  },
  {
    title: "Core Values",
    smallDesc: "Integrity, Innovation, Sustainability, Community.",
    largeDesc:
      "We are committed to fostering a future where aquaculture is not only a source of livelihood but also a solution to global food security challenges. By integrating modern techniques with traditional wisdom, Uday Aqua focuses on resilience, traceability, and inclusivity in every phase of the aquaculture value chain.",
  },
];

const WhoWeAre = () => {
  return (
    <AboutCardsSection
      headerTitle="Who We Are"
      headerSubtitle="Empowering Coastal Communities Through Innovation In Aquaculture"
      headerImg={whoarewe}
      headerImgSide={whoareweSide}
      cards={aboutCards}
    />
  );
};
export default WhoWeAre;
