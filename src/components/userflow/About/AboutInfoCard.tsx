import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useAboutStyles from "./aboutStyles";

interface AboutInfoCardProps {
  title: string;
  smallDesc: string;
  largeDesc: string;
  img?: string;
  expanded: boolean;
  onExpand: () => void;
  onCloseComplete?: () => void;
}

const AboutInfoCard = ({
  title,
  smallDesc,
  largeDesc,
  img,
  expanded,
  onExpand,
  onCloseComplete,
}: AboutInfoCardProps) => {
  const { classes } = useAboutStyles();
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <Box className={classes.aboutCard} id={`card-${slug}`}>
      <Typography className={classes.aboutCardTitle}>{title}</Typography>
      {!expanded && (
        <Typography className={classes.aboutCardDesc}>{smallDesc}</Typography>
      )}
      <Collapse in={expanded} timeout={450} unmountOnExit onExited={onCloseComplete}>
        {img && (
          <Box component="img" src={img} className={classes.aboutCardImg} />
        )}
        <Typography className={classes.aboutCardLargeDesc}>
          {largeDesc}
        </Typography>
      </Collapse>
      {!expanded ? (
        <IconButton onClick={onExpand} className={classes.aboutCardExpandBtn}>
          <ExpandMoreIcon className={classes.Upicon} />
        </IconButton>
      ) : (
        <IconButton onClick={onExpand} className={classes.aboutCardExpandBtn}>
          <ExpandMoreIcon
            className={`${classes.Upicon} ${classes.downIcon}`}
          />
        </IconButton>
      )}
    </Box>
  );
};

export default AboutInfoCard;
