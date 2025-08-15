import TechnologiesCardsSection from "./TechnologiesCardsSection";
import rasImage from "../../../assets/cultures/pdf_water.png"; // Using existing image for now

const RAS = () => {
  const headerTitle = "Recirculating Aquaculture System (RAS)";
  const headerSubtitle =
    "Advanced water treatment and recirculation technology for sustainable fish farming";
  const headerImg = rasImage;

  const cards = [
    {
      title: "Water Quality Management",
      smallDesc:
        "Advanced filtration systems that maintain optimal water conditions for fish health and growth.",
      largeDesc:
        "Our RAS technology incorporates state-of-the-art water treatment systems including mechanical filtration, biological filtration, and UV sterilization. This ensures that water quality remains consistently high, reducing stress on fish and promoting optimal growth rates. The system continuously monitors pH, ammonia, nitrite, and dissolved oxygen levels, automatically adjusting parameters as needed.",
      img: undefined,
    },
    {
      title: "Energy Efficiency",
      smallDesc:
        "Optimized energy consumption through smart pump systems and heat recovery technology.",
      largeDesc:
        "Modern RAS systems are designed with energy efficiency in mind. We use variable speed pumps that adjust flow rates based on system demands, reducing energy consumption by up to 40%. Heat recovery systems capture waste heat from water treatment processes and reuse it to maintain optimal water temperatures, further reducing energy costs.",
      img: undefined,
    },
    {
      title: "System Monitoring & Control",
      smallDesc:
        "Real-time monitoring and automated control systems for optimal operation.",
      largeDesc:
        "Our RAS systems feature comprehensive monitoring and control capabilities. IoT sensors continuously track system performance, water quality parameters, and fish behavior. The automated control system can adjust feeding schedules, water flow rates, and treatment processes based on real-time data. Remote monitoring capabilities allow operators to manage systems from anywhere, ensuring 24/7 oversight.",
      img: rasImage, // This card has an image as requested
    },
    {
      title: "Scalability & Flexibility",
      smallDesc:
        "Modular design that can be scaled from small operations to large commercial facilities.",
      largeDesc:
        "RAS technology offers unparalleled scalability and flexibility. Systems can start small and expand as operations grow. The modular design allows for easy integration of additional components and capacity. Whether you're starting with a 10-ton annual production facility or scaling up to 100+ tons, our RAS systems can accommodate your needs. The technology also supports multiple species and can be adapted for different production goals.",
      img: undefined,
    },
  ];

  return (
    <TechnologiesCardsSection
      headerTitle={headerTitle}
      headerSubtitle={headerSubtitle}
      headerImg={headerImg}
      cards={cards}
    />
  );
};

export default RAS;
