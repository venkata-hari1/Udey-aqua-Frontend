import { Box, Typography } from "@mui/material";
import useHomeStyles from "./homeStyles";

interface ProjectCardProps {
  img: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  highlight?: boolean;
}

const ProjectCard = ({ img, title, shortDescription, longDescription, highlight }: ProjectCardProps) => {
  const { classes } = useHomeStyles();
  return (
    <Box
      className={classes.projectCardRoot}
      style={{ backgroundImage: `url(${img})` }}
    >
      {highlight ? (
        <Box className={classes.projectCardHighlight}>
          <Typography variant="h6" className={classes.projectCardHighlightTitle}>{title}</Typography>
          <Typography className={classes.projectCardHighlightDesc}>{longDescription}</Typography>
        </Box>
      ) : (
        <Box className={classes.projectCardNormal}>
          <Typography variant="subtitle1" className={classes.projectCardNormalTitle}>{title}</Typography>
          <Typography className={classes.projectCardNormalDesc}>{shortDescription}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard; 