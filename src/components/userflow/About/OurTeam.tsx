import teamImg from "../../../assets/about_us/team.jpg";
import AboutCardsSection from "./AboutCardsSection";

const aboutCards = [
  {
    title: "Our Leadership",
    smallDesc: "Meet the visionaries behind Uday Aqua.",
    largeDesc:
      "Our leadership team brings decades of experience in aquaculture, sustainability, and business management. Their guidance shapes our mission and drives our success.",
    img: teamImg,
  },
  {
    title: "Expert Team",
    smallDesc: "A diverse group of professionals dedicated to excellence.",
    largeDesc:
      "From scientists to field experts, our team is committed to delivering the best solutions for our partners and clients.",
  },
];

const OurTeam = () => {
  return (
    <AboutCardsSection
      headerTitle="Our Team"
      headerSubtitle="Meet the People Powering Uday Aqua"
      headerImg={teamImg}
      headerImgSide={teamImg}
      cards={aboutCards}
    />
  );
};
export default OurTeam;
