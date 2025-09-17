import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useSharedStyles from "./sharedStyles";
import phoneSvg from "../../../assets/icons/phone.svg";

const HelpSection = () => {
  const { classes } = useSharedStyles();

  return (
    <Box className={classes.contactBoxWrapper}>
      <Typography className={classes.contactBoxTitle}>
        Do You Need Any Help?
      </Typography>
      <Typography className={classes.contactBoxLabel}>Call Us Now:</Typography>
      <Box
        className={classes.contactBoxRow}
        component="a"
        href="tel:+919791199909"
        style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
      >
        <img src={phoneSvg} alt="Phone" className={classes.contactBoxIcon} />
        <Typography className={classes.contactBoxValue}>+91 97911-99909</Typography>
      </Box>
      <Typography className={classes.contactBoxLabel}>
        Talk To Us Now:
      </Typography>
      <Box
        className={classes.contactBoxRow}
        component="a"
        href="mailto:info@Uday.com"
        style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
      >
        <EmailIcon className={classes.contactBoxIcon} />
        <Typography className={classes.contactBoxValue}>info@Uday.com</Typography>
      </Box>
    </Box>
  );
};

export default HelpSection;
