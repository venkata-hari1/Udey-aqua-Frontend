import { Box } from "@mui/material";
import useContactStyles from "./contactStyles";

interface ContactLayoutProps {
  children: React.ReactNode;
}

const ContactLayout = ({ children }: ContactLayoutProps) => {
  const { classes } = useContactStyles();

  return (
    <div className={classes.contactLayoutRoot}>
      <Box className={classes.contactMainRow}>
        <Box className={classes.contactContent}>{children}</Box>
      </Box>
    </div>
  );
};

export default ContactLayout;
