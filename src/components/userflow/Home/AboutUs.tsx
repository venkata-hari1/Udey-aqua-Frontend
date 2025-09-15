import { Box, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "../../../assets/home/about_image.png";
import aboutVideo from "../../../assets/home/video.mp4";
import useHomeStyles from "./homeStyles";

const AboutUs = () => {
  const { classes } = useHomeStyles();
  const [activeSection, setActiveSection] = useState("about");
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about');
  };

  return (
    <>
      <Grid container spacing={2} className={classes.aboutUsRoot}>
        <Grid size={{ xs: 12, md: 6 }} className={classes.aboutUsLeft}>
          <Box className={classes.aboutUsTitleWrap}>
            <Box
              className={
                activeSection === "about"
                  ? classes.aboutUsTitle1
                  : classes.aboutUsTitle2
              }
              onClick={() => setActiveSection("about")}
              style={{ cursor: "pointer" }}
            >
              About Us
            </Box>
            <Box
              className={
                activeSection === "why"
                  ? classes.aboutUsTitle1
                  : classes.aboutUsTitle2
              }
              onClick={() => setActiveSection("why")}
              style={{ cursor: "pointer" }}
            >
              Why Choose Us
            </Box>
          </Box>
          <Typography className={classes.aboutUsDesc}>
            {activeSection === "about"
              ? "Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting, and comprehensive training programs."
              : "Choose Uday Aqua for our proven expertise in sustainable aquaculture, cutting-edge technologies, training programs, and dedicated support. We offer customized solutions, industry-leading practices, and a commitment to environmental responsibility that sets us apart in the aquaculture sector."}
          </Typography>
          <Button 
            variant="outlined" 
            className={classes.aboutUsBtn}
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={classes.aboutUsRight}>
          <Box
            component="img"
            src={aboutImg}
            alt="About Uday Aqua"
            className={classes.aboutUsImg}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.aboutUsVideoWrap}>
        <Grid size={{ xs: 12 }}>
          <Box
            component="video"
            src={aboutVideo}
            autoPlay
            muted
            loop
            playsInline
            className={classes.aboutUsVideo}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
