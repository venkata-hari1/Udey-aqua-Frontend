import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useTechnologiesStyles from "./technologiesStyles";
import type { TechnologyCard } from "./types";

interface TechnologiesCardProps extends TechnologyCard {
  expanded: boolean;
  onExpand: () => void;
}

const TechnologiesCard = ({
  title,
  smallDesc,
  largeDesc,
  img,
  expanded,
  onExpand,
}: TechnologiesCardProps) => {
  const { classes } = useTechnologiesStyles();
  const slug = (title || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <Box className={classes.technologiesCard} id={`card-${slug}`}>
      <Typography className={classes.technologiesCardTitle}>{title}</Typography>
      {!expanded && (
        <Typography className={classes.technologiesCardDesc}>
          {smallDesc}
        </Typography>
      )}
      <Collapse in={expanded} timeout={450} unmountOnExit>
        {img && (
          <Box
            component="img"
            src={img}
            className={classes.technologiesCardImg}
          />
        )}
        <Box>
          {largeDesc.map((desc, index) => (
            <Typography
              key={index}
              className={`${classes.technologiesCardLargeDesc} ${
                index < largeDesc.length - 1
                  ? classes.technologiesCardDescMargin
                  : classes.technologiesCardDescNoMargin
              }`}
            >
              {desc}
            </Typography>
          ))}
        </Box>
      </Collapse>
      {!expanded ? (
        <IconButton
          onClick={onExpand}
          className={classes.technologiesCardExpandBtn}
        >
          <ExpandMoreIcon className={classes.technologiesUpIcon} />
        </IconButton>
      ) : (
        <IconButton
          onClick={onExpand}
          className={classes.technologiesCardExpandBtn}
        >
          <ExpandMoreIcon
            className={`${classes.technologiesUpIcon} ${classes.technologiesDownIcon}`}
          />
        </IconButton>
      )}
    </Box>
  );
};

export default TechnologiesCard;
