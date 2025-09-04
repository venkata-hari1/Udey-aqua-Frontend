import HelpSection from "./HelpSection";
import { Box, Modal, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useSharedStyles from "./sharedStyles";
import whatsappPng from "../../../assets/icons/whatsapp.png";
import infoPng from "../../../assets/icons/info.png";

const ContactBox = () => {
  const { classes } = useSharedStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  if (isMobile) {
    return (
      <>
        <Box className={classes.contactBoxFloating}>
          <Box
            className={classes.contactBoxButton}
            onClick={() => window.open(`https://wa.me/919791199909`, `_blank`)}
          >
            <img src={whatsappPng} alt="WhatsApp" />
          </Box>
          <Box
            className={classes.contactBoxButton}
            onClick={() => setOpen(true)}
          >
            <img src={infoPng} alt="Info" />
          </Box>
        </Box>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box className={classes.contactBoxModalContainer}>
            <HelpSection />
          </Box>
        </Modal>
      </>
    );
  }

  return <HelpSection />;
};

export default ContactBox;
