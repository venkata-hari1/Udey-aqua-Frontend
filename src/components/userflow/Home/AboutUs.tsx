// src/components/userflow/Home/AboutUs.tsx
import { Box, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "../../../assets/home/about_image.png";
import ReactPlayer from "react-player";
import useHomeStyles from "./homeStyles";
import { Slide } from "react-awesome-reveal";

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
            >
              Why Choose Us
            </Box>
          </Box>
          <Slide direction="left"  >
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
          </Slide>
        </Grid>

       
        <Grid size={{ xs: 12, md: 6 }} className={classes.aboutUsRight}>
        <Slide direction="right"> 
          <Box
            component="img"
            src={aboutImg}
            alt="About Uday Aqua"
            className={classes.aboutUsImg}
          />
          </Slide>
        </Grid>
      
      </Grid>
     
      <Grid container spacing={2} className={classes.aboutUsVideoWrap} sx={{pointerEvents:'none',}}>
       <Grid size={{xs:12}}>
        <iframe
        width="100%"
        height="600px"
        //src="https://www.youtube.com/embed/xoCA3o4zyJM?autoplay=1&mute=1"
        src="https://www.youtube.com/embed/BAc1tQpchPY?autoplay=1&loop=1&mute=1&playlist=BAc1tQpchPY&controls=0&rel=0&modestbranding=1&showinfo=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
