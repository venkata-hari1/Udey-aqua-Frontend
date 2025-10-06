// src/components/userflow/About/Milestones.tsx
import { Box, Grid, Typography,useMediaQuery,
  useTheme, } from "@mui/material";
import AboutHero from "./AboutHero";
import useAboutStyles from "./aboutStyles";
import fishSvg from "../../../assets/icons/fish.svg";
import img from "../../../assets/about_us/milestones.png";
import img2019 from "../../../assets/about_us/milestone_2019.png";
import img2020 from "../../../assets/about_us/milestone_2019.png";
import img2021 from "../../../assets/about_us/milestone_2019.png";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface MilestoneItem {
  year: string;
  image: string;
  items: string[];
}

const milestonesData: MilestoneItem[] = [
  {
    year: "2019: The Beginning",
    image: img2019,
    items: [
      "Uday Aqua Connects was established with a vision to integrate Sustainable Aquaculture with farming practices.",
      "Mission: Empower farmers through innovation, training, and circular farming systems.",
    ],
  },
  {
    year: "2020: Infrastructure & Innovation",
    image: img2020,
    items: [
      "Established an Advanced High-Capacity RAS (Recirculatory Aquaculture System) Unit with 12 Lakh Liters capacity.",
      "Set up a dedicated R&D Unit on a 2-acre campus for continuous technology development and trials.",
    ],
  },
  {
    year: "2021: Strategic Expansion",
    image: img2021,
    items: [
      "Expanded operations across various districts in TELANGANA via the NH-44 Corridor.",
    ],
  },
  {
    year: "2022: The Beginning",
    image: img2019,
    items: [
      "Uday Aqua Connects was established with a vision to integrate Sustainable Aquaculture with farming practices.",
      "Mission: Empower farmers through innovation, training, and circular farming systems.",
    ],
  },
  {
    year: "2023: Infrastructure & Innovation",
    image: img2020,
    items: [
      "Established an Advanced High-Capacity RAS (Recirculatory Aquaculture System) Unit with 12 Lakh Liters capacity.",
      "Set up a dedicated R&D Unit on a 2-acre campus for continuous technology development and trials.",
    ],
  },
];

const Milestones = () => {
  const { classes } = useAboutStyles();
  const navigate = useNavigate();

  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!isMobile&&<AboutHero currentLabel="Milestones" />}
      <Typography className={classes.mileStoneHeader}>Milestones</Typography>
      <Typography className={classes.mileStoneSubtitle}>
        Our Journey in Aquaculture Innovation
      </Typography>

      <Box component="img" src={img} className={classes.mileStoneImg} />

      <Box className={classes.milestoneScrollContainer}>
        <Box className={classes.milestoneContainer}>
          <Box className={classes.dottedLine} />

          {milestonesData.map((milestone: MilestoneItem, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <Box
                key={index}
                className={`${classes.milestoneItem} ${
                  isEven
                    ? classes.milestoneItemRow
                    : classes.milestoneItemRowReverse
                }`}
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

                  {milestone.items.map((item: string, i: number) => (
                    <Grid
                      className={classes.milestoneItemText}
                      container
                      spacing={1}
                      alignItems="flex-start"
                      key={i}
                    >
                      <Grid>
                        <Typography className={classes.milestoneDesc}>
                          {i + 1}.
                        </Typography>
                      </Grid>
                      <Grid className={classes.milestoneGridFlex}>
                        <Typography
                          className={`${classes.milestoneDesc} ${classes.milestoneTextJustify}`}
                        >
                          {item}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Box>

                <Box
                  component="img"
                  src={fishSvg}
                  className={`${classes.milestoneDot} ${
                    !isEven ? classes.rotate180 : ""
                  }`}
                />
              </Box>
            );
          })}
        </Box>
       
      </Box>
       <Box className={classes.backButtonWrapper} onClick={() => navigate(-1)}>
          <Box className={classes.backButton}>
            <ArrowBack />
          </Box>
        </Box>
    </>
  );
};

export default Milestones;
