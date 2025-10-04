// src/components/userflow/Cultures/PdfDownloadSection.tsx
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import useCulturesStyles from "./culturesStyles";
import PaymentModal from "../Shared/PaymentModal";
import seaBassImg from "../../../assets/cultures/pdf_fish/seabass.png";
import pearlSpotImg from "../../../assets/cultures/pdf_fish/pearlspot.png";
import mudCrabImg from "../../../assets/cultures/pdf_fish/mudcrab.png";
import murrelImg from "../../../assets/cultures/pdf_fish/murrel.png";
import tilapiaImg from "../../../assets/cultures/pdf_fish/tilapia.png";
import seaWeedImg from "../../../assets/cultures/pdf_fish/seaweed.png";
import PdfIcon from "../../../assets/icons/pdf.svg";
// Technology images
import rasImg from "../../../assets/technologies/pdf_fish/rac.png";
import casImg from "../../../assets/technologies/pdf_fish/cas.png";
import pondFarmingImg from "../../../assets/technologies/pdf_fish/pond.png";
import fishHatcheryImg from "../../../assets/technologies/pdf_fish/hatchery.png";
import cageCultureImg from "../../../assets/technologies/pdf_fish/cage.png";

import modalFish from "../../../assets/cultures/pdf_fish/pdf.jpg";

interface PdfContent {
  image: string;
  title: string;
  description: string;
}

interface PdfDownloadSectionProps {
  currentLabel: string;
  price?: number;
  culture?: string;
  onContinuePayment?: (args?: { price?: number; culture?: string }) => void;
}

const getPdfContent = (label: string): PdfContent => {
  const contentMap: { [key: string]: PdfContent } = {
    // Technologies
    "Recirculating Aquaculture System (RAS)": {
      image: rasImg,
      title: "Master Recirculating Aquaculture Systems (RAS)",
      description:
        "Download our in-depth RAS Technology Guide (PDF) covering biofiltration, system design, water reuse, and automation best practices.",
    },
    "Circulating Aquaculture System (CAS)": {
      image: casImg,
      title: "Optimize Production with CAS Technology",
      description:
        "Get the CAS Operations Manual (PDF) including circulation dynamics, oxygenation, stocking densities, and energy-efficient workflows.",
    },
    "Pond Farming": {
      image: pondFarmingImg,
      title: "Pond Farming Best Practices",
      description:
        "Download our Pond Aquaculture Handbook (PDF) with guidance on pond design, water quality, aeration, feeding, and seasonal management.",
    },
    "Fish Hatchery": {
      image: fishHatcheryImg,
      title: "Advanced Fish Hatchery Systems",
      description:
        "Access the Hatchery Systems Guide (PDF) detailing broodstock care, spawning, larval rearing protocols, and nursery management.",
    },
    "Cage Culture": {
      image: cageCultureImg,
      title: "Scale Efficiently with Cage Culture",
      description:
        "Download the Cage Culture Field Guide (PDF) covering site selection, mooring systems, cage design, and biomass optimization.",
    },

    // Cultures
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

const PdfDownloadSection = ({ currentLabel, price = 89 }: PdfDownloadSectionProps) => {
  const { classes } = useCulturesStyles();
  const content = getPdfContent(currentLabel);
  const [open, setOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const listItems = [
    `Complete ${currentLabel} Methodology`,
    "Ideal Conditions & Habitat Setup",
    "Harvesting, Processing & Eco-Sustainability Tips",
    "Profit Estimation & Market Selling Insights",
    "Best Practices From Real-World Farms",
  ];

  const handlePaymentClick = () => {
    setOpen(false);
    setPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  return (
    <Box className={classes.pdfDownloadSection}>
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
          <Button
            variant="contained"
            className={classes.pdfDownloadButton}
            onClick={() => setOpen(true)}
          >
            <Box component="span" className={classes.pdfDownloadButtonIcon}>
              <Box component="img" src={PdfIcon} alt="PDF" />
            </Box>
            View PDF
          </Button>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          className: classes.pdfDialogPaper,
        }}
      >
        <DialogTitle className={classes.pdfDialogTitle}>
          <Box className={classes.pdfDialogTitlePill}>
            {`${currentLabel || "Sea Bass"} Farming Guide`}
          </Box>
        </DialogTitle>
        <DialogContent className={classes.pdfDialogContentContainer}>
          <Box className={classes.pdfDialogStack}>
            <Box
              component="img"
              src={modalFish}
              alt={currentLabel}
              className={classes.pdfDialogImage}
            />
            <Typography variant="h5" className={classes.pdfDialogSectionTitle}>
              What's Inside The PDF?
            </Typography>
            <List dense className={classes.pdfDialogList}>
              {listItems.map((item, index) => (
                <ListItem key={index} className={classes.pdfDialogListItem}>
                  <Box className={classes.pdfDialogBulletDot} />
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Box className={classes.pdfDialogFlex}>
              <Button
                variant="contained"
                fullWidth
                className={classes.pdfDialogPrimaryButton}
                startIcon={
                  <Box
                    component="img"
                    src={PdfIcon}
                    className={classes.pdfDialogPrimaryButtonIconImg}
                  />
                }
                disabled
                disableElevation
              >
                Access This Premium Guide For Just ₹89
              </Button>
            </Box>
            <Box className={classes.pdfDialogFlex}>
              <Button
                variant="contained"
                fullWidth
                className={`${classes.pdfDialogTitlePill} ${classes.pdfDialogTitlePillFloat}`}
                onClick={handlePaymentClick}
              >
                Continue to Payment
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      
      <PaymentModal
        open={paymentModalOpen}
        onClose={handleClosePaymentModal}
        speciesName={currentLabel}
        price={price}
      />
    </Box>
  );
};

export default PdfDownloadSection;
