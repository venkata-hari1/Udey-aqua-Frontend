import { Box, Typography } from "@mui/material"
import useSharedStyles from "./userflow/Shared/sharedStyles";

const Loading = () => {
  const { classes } = useSharedStyles();

  return (
    <Box className={classes.loadingLayout} >
      <Typography variant="h6">Loading...</Typography>
    </Box>
  )
}

export default Loading