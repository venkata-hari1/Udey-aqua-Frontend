// src/components/Loading.tsx
import { Box } from "@mui/material";
import useSharedStyles from "./userflow/Shared/sharedStyles";
import logoColor from "../assets/logo_color.png";

const Loading = () => {
  const { classes } = useSharedStyles();

  return (
    <Box className={classes.loadingLayout}>
      <img src={logoColor} alt="Logo" className={classes.loadingLogo} />
    </Box>
  );
};

export default Loading;
