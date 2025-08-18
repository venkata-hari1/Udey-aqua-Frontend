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

  return (
    <Box className={classes.technologiesCard}>
      <Typography className={classes.technologiesCardTitle}>{title}</Typography>
      {!expanded && (
        <Typography className={classes.technologiesCardDesc}>{smallDesc}</Typography>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {img && (
          <Box component="img" src={img} className={classes.technologiesCardImg} />
        )}
        <Box>
          {largeDesc.map((desc, index) => (
            <Typography
              key={index}
              className={classes.technologiesCardLargeDesc}
              sx={{ marginBottom: index < largeDesc.length - 1 ? 2 : 0 }}
            >
              {desc}
            </Typography>
          ))}
        </Box>
      </Collapse>
      {!expanded ? (
        <IconButton onClick={onExpand} className={classes.technologiesCardExpandBtn}>
          <ExpandMoreIcon className={classes.technologiesUpIcon} />
        </IconButton>
      ) : (
        <IconButton onClick={onExpand} className={classes.technologiesCardExpandBtn}>
          <ExpandMoreIcon
            className={`${classes.technologiesUpIcon} ${classes.technologiesDownIcon}`}
            style={{ transform: "rotate(180deg)" }}
          />
        </IconButton>
      )}
    </Box>
  );
};

export default TechnologiesCard;
