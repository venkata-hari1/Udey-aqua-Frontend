// src/components/userflow/Contact/ContactHero.tsx
import { Box } from "@mui/material";
import contactImage from "../../../assets/contact/contact.png";
import useContactStyles from "./contactStyles";
import SwimmingFish from "../../animations/SwimmingFish";
import BubbleCanvas from "../../animations/BubbleCanvas";

interface ContactHeroProps {
  currentLabel?: string;
}

const ContactHero = ({}: ContactHeroProps) => {
  const { classes } = useContactStyles();

  return (
    <div className={classes.contactHero}>
      <Box
        component="img"
        src={contactImage}
        alt="Contact Us Hero"
        className={classes.contactHeroImg}
      />
      <Box className={classes.contactHeroOverlay} />
      <Box className={classes.contactHeroContent}>
      <SwimmingFish  Position="relative" Count={4}  Height={500} />
        <Box className={classes.contact}>
        <Box component="h1" className={classes.contactHeroTitle}>
          Contact Us
        </Box>
        <Box component="p" className={classes.contactHeroSubtitle}>
          Empowering the Future of Aquaculture Through Knowledge
        </Box>
        </Box>
        <BubbleCanvas/>
      </Box>
    </div>
  );
};

export default ContactHero;
