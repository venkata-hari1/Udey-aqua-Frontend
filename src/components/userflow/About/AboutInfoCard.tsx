import { Box, Typography, IconButton, Collapse, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useAboutStyles from "./aboutStyles";

interface AboutInfoCardProps {
  title: string;
  smallDesc: string;
  largeDesc: string;
  img?: string;
  expanded: boolean;
  onExpand: () => void;
}

const AboutInfoCard = ({ title, smallDesc, largeDesc, img, expanded, onExpand }: AboutInfoCardProps) => {
  const {classes} = useAboutStyles();
  
  return (
    <Grid container className={classes.aboutCard}>
      <Typography className={classes.aboutCardTitle}>{title}</Typography>
      {!expanded && (
        <Typography className={classes.aboutCardDesc}>{smallDesc}</Typography>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {img && (
          <Box component="img" src={img} className={classes.aboutCardImg} />
        )}
        <Typography className={classes.aboutCardLargeDesc}>{largeDesc}</Typography>
      </Collapse>
      {!expanded && (
        <IconButton onClick={onExpand} className={classes.aboutCardExpandBtn}>
          <ExpandMoreIcon sx={{ fontSize: 52 }} />
        </IconButton>
      )}
    </Grid>
  );
};

export default AboutInfoCard; 