import { Grid, Typography } from "@mui/material";
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
    <Grid
      container
      spacing={2}
      className={classes.projectCardRoot}
    >
      <img src={img} alt={title} className={classes.projectCardBgImg} />
      {highlight ? (
        <Grid size={{ xs: 12 }} className={classes.projectCardHighlight}>
          <Typography variant="h6" className={classes.projectCardHighlightTitle}>{title}</Typography>
          <Typography className={classes.projectCardHighlightDesc}>{longDescription}</Typography>
        </Grid>
      ) : (
        <Grid size={{ xs: 12 }} className={classes.projectCardNormal}>
          <Typography variant="subtitle1" className={classes.projectCardNormalTitle}>{title}</Typography>
          <Typography className={classes.projectCardNormalDesc}>{shortDescription}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ProjectCard;