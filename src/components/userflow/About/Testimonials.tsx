import testimonialImg from "../../../assets/about_us/testimonials.jpg";
import AboutCardsSection from "./AboutCardsSection";

const aboutCards = [
  {
    title: "Farmer Feedback",
    smallDesc:
      "“Thanks to Uday Aqua, our yields have doubled and our knowledge improved.”",
    largeDesc:
      "Their innovative approach and support helped us achieve record yields while maintaining sustainability.",
  },
  {
    title: " Training Feedback",
    smallDesc:
      "“The hands-on sessions were incredibly helpful. We can now monitor quality ourselves.”",
    largeDesc:
      "Uday Aqua’s training programs and expert guidance have been invaluable to our success.",
  },
  {
    title: "Industry Praise",
    smallDesc:
      "“Uday Aqua is one of the most ethical and innovative aquaculture firms in South India.”",
    largeDesc:
      "Uday Aqua’s training programs and expert guidance have been invaluable to our success.",
  },
];

const Testimonials = () => {
  return (
    <AboutCardsSection
      headerTitle="Testimonials"
      headerSubtitle="What Our Partners Say"
      headerImg={testimonialImg}
      headerImgSide={testimonialImg}
      cards={aboutCards}
    />
  );
};
export default Testimonials;
