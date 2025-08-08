import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import useAboutStyles from "./culturesStyles";

interface AboutHeaderProps {
  title: string;
  subtitle: string;
  img: string;
  aboutImg: string;
}

const CulutreHeader = ({
  title,
  subtitle,
  img,
  aboutImg,
}: AboutHeaderProps) => {
  const { classes } = useAboutStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Grid container size={{ xs: 12 }}>
        <Grid size={isMobile ? 12 : 9}>
          <Typography className={classes.culturesHeaderTitle}>
            {title}
          </Typography>
          <Typography className={classes.culturesHeaderSubtitle}>
            {subtitle}
          </Typography>
        </Grid>
        {!isMobile && (
          <Grid size={{ xs: 3 }} style={{ placeItems: "center" }}>
            <Box component="img" src={aboutImg} className={classes.sideImg} />
          </Grid>
        )}
      </Grid>
      <Box component="img" src={img} className={classes.culturesHeaderImg} />
    </>
  );
};

export default CulutreHeader;
