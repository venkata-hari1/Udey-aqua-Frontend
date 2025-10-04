// src/components/userflow/Technologies/TechnologiesHeader.tsx
import { Box, Grid, Typography } from "@mui/material";
import useTechnologiesStyles from "./technologiesStyles";
import type { TechnologyHeaderProps } from "./types";

const TechnologiesHeader = ({
  title,
  subtitle,
  img,
}: TechnologyHeaderProps) => {
  const { classes } = useTechnologiesStyles();

  return (
    <>
      <Grid container size={{ xs: 12 }}>
        <Grid size={12}>
          <Typography className={classes.technologiesHeaderTitle}>
            {title}
          </Typography>
          <Typography className={classes.technologiesHeaderSubtitle}>
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
      <Box
        component="img"
        src={img}
        alt={title}
        className={classes.technologiesHeaderImg}
      />
    </>
  );
};

export default TechnologiesHeader;
