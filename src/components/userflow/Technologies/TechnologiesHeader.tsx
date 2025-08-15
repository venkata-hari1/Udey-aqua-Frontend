import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import useTechnologiesStyles from "./technologiesStyles";

interface TechnologiesHeaderProps {
  title: string;
  subtitle: string;
  img: string;
}

const TechnologiesHeader = ({
  title,
  subtitle,
  img,
}: TechnologiesHeaderProps) => {
  const { classes } = useTechnologiesStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

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
        className={classes.technologiesHeaderImg}
      />
    </>
  );
};

export default TechnologiesHeader;
