import { Box } from "@mui/material";
import useSharedStyles from "./sharedStyles";
import whatsappPng from "../../../assets/icons/whatsapp.png";

type WhatsappButtonProps = {
  onClick?: () => void;
};

const WhatsappButton = ({ onClick }: WhatsappButtonProps) => {
  const { classes } = useSharedStyles();
  return (
    <Box
      className={classes.contactBoxButton}
      onClick={
        onClick ?? (() => window.open(`https://wa.me/919791199909`, `_blank`))
      }
    >
      <img src={whatsappPng} alt="WhatsApp" />
    </Box>
  );
};

export default WhatsappButton;
