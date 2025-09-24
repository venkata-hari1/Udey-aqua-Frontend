import whoarewe from "../../../assets/about_us/who_are_we.jpg";
import whoareweSide from "../../../assets/about_us/who_we_are.png";
import missionImg from "../../../assets/about_us/mission.jpg";
import motto1 from "../../../assets/motto/card_1.png";
import motto2 from "../../../assets/motto/card_2.png";
import motto3 from "../../../assets/motto/card_3.png";
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
  {
    title: "NH-44",
    smallDesc:
      "Creating a Fresh Water Aqua Corridor along India’s longest highway, enabling inland clusters with training, seed access and market linkages.",
    largeDesc:
      "NH-44 spans diverse agro‑climatic zones. Our corridor model brings: (1) hands‑on training on pond preparation, seed selection and feed protocols; (2) water‑quality monitoring toolkits; (3) hatchery and nursery tie‑ups for assured supply; (4) biosecurity SOPs for disease risk reduction; and (5) buy‑back and logistics partners to stabilize prices. By clustering farmers within 50–80 km nodes, we lower input costs, share extension services, and accelerate adoption of sustainable freshwater species like murrel and tilapia.",
    img: motto1,
  },
  {
    title: "NH-16",
    smallDesc:
      "A Coastal Aqua Corridor from AP to Odisha that supports sea‑based technologies, coastal SHGs and MSMEs with end‑to‑end enablement.",
    largeDesc:
      "Along NH‑16, we focus on seabass, pearlspot and seaweed value chains with: site selection and salinity profiling, cage/pen designs for different creeks and backwaters, eco‑friendly feed strategies, and harvest-to-market cold‑chain pilots. The program onboards youth and women SHGs, formalizes FPOs for inputs and credit, and runs seasonal biosecurity campaigns. Our aim is to grow blue‑economy jobs while protecting mangroves, estuaries and near‑shore ecosystems.",
    img: motto2,
  },
  {
    title: "99 Acres",
    smallDesc:
      "Our flagship integrated campus for demonstrations, certifications and rapid pilots across RAS, ponds, hatchery and value‑addition.",
    largeDesc:
      "The 99‑acre facility hosts: (1) modular RAS units for intensive grow‑out with energy‑efficient aeration; (2) earthen and lined ponds to compare CAPEX/OPEX across species; (3) a learning hatchery for broodstock, larval rearing and nursery phases; (4) a quality lab for water, feed and pathogen screening; and (5) a small value‑addition line (filleting, chilling, MAP). Visitors can follow a full cycle from seed to sale, benchmark KPIs, and receive competency‑based certifications for employment or entrepreneurship.",
    img: motto3,
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
