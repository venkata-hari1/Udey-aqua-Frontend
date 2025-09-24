import { Box } from "@mui/material";
import contactImage from "../../../assets/contact/contact.png";
import useContactStyles from "./contactStyles";

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
        <Box component="h1" className={classes.contactHeroTitle}>
          Contact Us
        </Box>
        <Box component="p" className={classes.contactHeroSubtitle}>
          Empowering the Future of Aquaculture Through Knowledge
        </Box>
      </Box>
    </div>
  );
};

export default ContactHero;
