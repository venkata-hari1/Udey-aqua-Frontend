// src/components/userflow/Shared/ContactBox.tsx
import HelpSection from "./HelpSection";
import { Box, Modal, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useSharedStyles from "./sharedStyles";
import WhatsappButton from "./WhatsappButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
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
          <WhatsappButton />
          <Box
            className={classes.contactBoxButton}
            onClick={() => {
              try { window.open("/company-profile.pdf", "_blank"); } catch {}
            }}
            aria-label="Download PDF"
            title="Download PDF"
          >
            <PictureAsPdfIcon style={{ color: "#FF0600" }} />
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

  return (
    <>
      <HelpSection />
      <Box className={classes.contactBoxFloating}>
        <WhatsappButton />
        <Box
          className={classes.contactBoxButton}
          onClick={() => {
            try { window.open("/company-profile.pdf", "_blank"); } catch {}
          }}
          aria-label="Download PDF"
          title="Download PDF"
        >
          <PictureAsPdfIcon style={{ color: "#FF0600" }} />
        </Box>
      </Box>
    </>
  );
};

export default ContactBox;
