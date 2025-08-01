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
}

const AboutInfoCard = ({
  title,
  smallDesc,
  largeDesc,
  img,
  expanded,
  onExpand,
}: AboutInfoCardProps) => {
  const { classes } = useAboutStyles();

  return (
    <Box className={classes.aboutCard}>
      <Typography className={classes.aboutCardTitle}>{title}</Typography>
      {!expanded && (
        <Typography className={classes.aboutCardDesc}>{smallDesc}</Typography>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
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
            style={{ transform: "rotate(180deg)" }}
          />
        </IconButton>
      )}
    </Box>
  );
};

export default AboutInfoCard;
