// src/components/userflow/Contact/ContactLayout.tsx
import { Box } from "@mui/material";
import useContactStyles from "./contactStyles";
import Hero from "../common/Hero/Hero";
import SwimmingFish from  "../../../components/animations/SwimmingFish";
import { Grid } from "@mui/material";

interface ContactLayoutProps {
  children: React.ReactNode;
}

const ContactLayout = ({ children }: ContactLayoutProps) => {
  const { classes } = useContactStyles();

  return (
    <div className={classes.contactLayoutRoot}>
      <SwimmingFish  Position="absolute" Count={30} Height={3000}/>
            <Grid  size={{ xs: 12 }}>
              <Hero
                page="contact" 
                overlayColor="rgba(10,79,164,0.41)" 
                fishHeight={500}
              />
            </Grid>
      <Box className={classes.contactMainRow}>
        <Box className={classes.contactContent}>{children}</Box>
      </Box>
    </div>
  );
};

export default ContactLayout;
