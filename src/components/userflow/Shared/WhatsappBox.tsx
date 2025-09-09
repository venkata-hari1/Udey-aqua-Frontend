import { Box } from "@mui/material";
import useSharedStyles from "./sharedStyles";
import WhatsappButton from "./WhatsappButton";

const WhatsappBox = () => {
  const { classes } = useSharedStyles();

  return (
    <Box className={classes.contactBoxFloating}>
      <WhatsappButton />
    </Box>
  );
};

export default WhatsappBox;
