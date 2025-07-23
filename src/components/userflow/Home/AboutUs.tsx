import { Box, Typography, Button, Grid } from "@mui/material";
import aboutImg from "../../../assets/home/about_image.png";
import aboutVideo from "../../../assets/home/video.mp4";
import useHomeStyles from "./homeStyles";

const AboutUs = () => {
  const { classes } = useHomeStyles();

  return (
    <>
      <Grid container spacing={2} className={classes.aboutUsRoot}>
        <Grid size={{ xs: 12, md: 6 }} className={classes.aboutUsLeft}>
          <Box className={classes.aboutUsTitleWrap}>
            <Box className={classes.aboutUsTitle1}>
              About Us
            </Box>
            <Box className={classes.aboutUsTitle2}>
              Why Choose Us
            </Box>
          </Box>
          <Typography className={classes.aboutUsDesc}>
              Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting, and comprehensive training programs.
          </Typography>
          <Button variant="outlined" className={classes.aboutUsBtn}>
            Learn More
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={classes.aboutUsRight}>
          <Box component="img" src={aboutImg} alt="About Uday Aqua" className={classes.aboutUsImg} />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.aboutUsVideoWrap}>
        <Grid size={{ xs: 12 }}>
          <Box component="video" src={aboutVideo} autoPlay muted loop playsInline className={classes.aboutUsVideo} />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;