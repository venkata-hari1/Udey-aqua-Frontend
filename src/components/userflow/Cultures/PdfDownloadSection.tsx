import { Box, Typography, Button } from "@mui/material";
import useCulturesStyles from "./culturesStyles";
import seaBassImg from "../../../assets/cultures/pdf_fish/seabass.png";
import pearlSpotImg from "../../../assets/cultures/pdf_fish/pearlspot.png";
import mudCrabImg from "../../../assets/cultures/pdf_fish/mudcrab.png";
import murrelImg from "../../../assets/cultures/pdf_fish/murrel.png";
import tilapiaImg from "../../../assets/cultures/pdf_fish/tilapia.png";
import seaWeedImg from "../../../assets/cultures/pdf_fish/seaweed.png";
import pdfWaterBg from "../../../assets/cultures/pdf_water.png";
import PdfIcon from "../../../assets/icons/pdf.svg";

interface PdfDownloadSectionProps {
  currentLabel: string;
}

const getPdfContent = (label: string) => {
  const contentMap: {
    [key: string]: { image: string; title: string; description: string };
  } = {
    "Sea Bass": {
      image: seaBassImg,
      title: "Want to Master Sea Bass Farming?",
      description:
        "Download our complete Sea Bass Culture Guide (PDF) to explore best practices, feeding methods, health tips, and market insights.",
    },
    "Pearl Spot": {
      image: pearlSpotImg,
      title: "Unlock the Secrets of Pearl Spot Aquaculture",
      description:
        "Download our detailed Pearl Spot Farming Guide (PDF) to explore habitat preferences, feeding schedules, disease control, and growth cycles.",
    },
    "Mud Crab": {
      image: mudCrabImg,
      title: "Boost Your Profits with Sustainable Mud Crab Farming",
      description:
        "Get our expert Mud Crab Culture Handbook (PDF) for pond setup, fattening tips, disease prevention, and export readiness.",
    },
    Murrel: {
      image: murrelImg,
      title: "Master Murrel Cultivation with Proven Strategies",
      description:
        "Download the Murrel Farming Manual (PDF) to learn about breeding systems, water quality management, and nutrition planning.",
    },
    Tilapia: {
      image: tilapiaImg,
      title: "A Complete Guide to Profitable Tilapia Farming",
      description:
        "Grab the Tilapia Aquaculture Blueprint (PDF) with insights into polyculture techniques, feed-to-growth ratios, and sustainable practices.",
    },
    "Sea Weed": {
      image: seaWeedImg,
      title: "Explore the Future of Marine Farming with Sea Weed",
      description:
        "Grab the Tilapia Aquaculture Blueprint (PDF) with insights into polyculture techniques, feed-to-growth ratios, and sustainable practices.",
    },
  };

  return contentMap[label] || contentMap["Sea Bass"];
};

const PdfDownloadSection = ({ currentLabel }: PdfDownloadSectionProps) => {
  const { classes } = useCulturesStyles();
  const content = getPdfContent(currentLabel);

  return (
    <Box
      className={classes.pdfDownloadSection}
      style={{ backgroundImage: `url(${pdfWaterBg})` }}
    >
      <Box className={classes.pdfDownloadContainer}>
        <Box className={classes.pdfDownloadImageSection}>
          <img
            src={content.image}
            alt={currentLabel}
            className={classes.pdfDownloadFishImage}
          />
        </Box>
        <Box className={classes.pdfDownloadContent}>
          <Typography variant="h3" className={classes.pdfDownloadTitle}>
            {content.title}
          </Typography>
          <Typography className={classes.pdfDownloadDescription}>
            {content.description}
          </Typography>
          <Button variant="contained" className={classes.pdfDownloadButton}>
            <Box component="span" className={classes.pdfDownloadButtonIcon}>
              <Box component="img" src={PdfIcon} alt="PDF" />
            </Box>
            View PDF
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PdfDownloadSection;
