import AboutCardsSection from "./AboutCardsSection";
import historyImg from "../../../assets/about_us/history.jpg";
import historySideImg from "../../../assets/about_us/history.png";

const aboutCards = [
  {
    title: "Early Beginnings (2001–2005)",
    smallDesc:
      "Started as a small hatchery initiative in Andhra Pradesh with a goal to improve seed quality and farming knowledge.",
    largeDesc:
      "Since our inception, we have focused on sustainable practices and empowering local communities. Our journey began with a small team passionate about making a difference in the aquaculture sector.",
    img: historyImg,
  },
  {
    title: "Growth Phase (2006–2015)",
    smallDesc:
      "Expanded to large-scale pond culture and began working with local farmers to improve yield and quality.",
    largeDesc:
      "Over the years, Uday Aqua has expanded its reach, impacting thousands of farmers and stakeholders. Our growth is a testament to our commitment to quality and innovation.",
  },
  {
    title: "Modernization (2016–Present)",
    smallDesc:
      "Integrated new technologies like RAS, digital training, and export-grade quality checks.Integrated new technologies like RAS, digital training, and export-grade quality checks.",
    largeDesc:
      "Over the years, Uday Aqua has expanded its reach, impacting thousands of farmers and stakeholders. Our growth is a testament to our commitment to quality and innovation.",
  },
];

const OurHistory = () => (
  <AboutCardsSection
    headerTitle="Our History"
    headerSubtitle="Decades of Excellence and Evolution in Aquaculture"
    headerImg={historyImg}
    headerImgSide={historySideImg}
    cards={aboutCards}
  />
);
export default OurHistory;
