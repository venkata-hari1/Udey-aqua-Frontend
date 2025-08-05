import { Box, Typography } from "@mui/material";
import AboutHero from "./AboutHero";
import useAboutStyles from "./aboutStyles";
import fishSvg from "../../../assets/icons/fish.svg";
import img2019 from "../../../assets/about_us/milestone_2019.png";
import img2020 from "../../../assets/about_us/milestone_2019.png";
import img2021 from "../../../assets/about_us/milestone_2019.png";

const milestonesData = [
  {
    year: "2019: The Beginning",
    image: img2019,
    items: [
      "1. Uday Aqua Connects was established with a vision to integrate Sustainable Aquaculture with farming practices.",
      "2. Mission: Empower farmers through innovation, training, and circular farming systems.",
    ],
  },
  {
    year: "2020: Infrastructure & Innovation",
    image: img2020,
    items: [
      "1. Established an Advanced High-Capacity RAS (Recirculatory Aquaculture System) Unit with 12 Lakh Liters capacity.",
      "2. Set up a dedicated R&D Unit on a 2-acre campus for continuous technology development and trials.",
    ],
  },
  {
    year: "2021: Strategic Expansion",
    image: img2021,
    items: [
      "1. Expanded operations across various districts in TELANGANA via the NH-44 Corridor.",
    ],
  },
];

const Milestones = () => {
  const { classes } = useAboutStyles();

  return (
    <>
      <AboutHero />
      <Typography className={classes.mileStoneHeader}>Milestone</Typography>
      <Typography className={classes.mileStoneSubtitle}>
        Our Journey in Aquaculture Innovation
      </Typography>
      <Box className={classes.milestoneContainer}>
        <Box className={classes.dottedLine} />
        {milestonesData.map((milestone, index) => {
          const isEven = index % 2 === 0;
          return (
            <Box
              key={index}
              className={classes.milestoneItem}
              sx={{ flexDirection: isEven ? "row" : "row-reverse" }}
            >
              <Box
                component="img"
                src={milestone.image}
                className={classes.milestoneImg}
              />

              <Box className={classes.milestoneText}>
                <Typography className={classes.milestoneYear}>
                  {milestone.year}
                </Typography>
                {milestone.items.map((item, i) => (
                  <Typography key={i}>{item}</Typography>
                ))}
              </Box>

              <Box
                component="img"
                src={fishSvg}
                className={`${classes.milestoneDot} ${
                  isEven ? classes.rotate180 : ""
                }`}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Milestones;
