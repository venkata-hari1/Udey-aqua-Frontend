// src/components/userflow/About/AboutLayout.tsx
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import aboutSideFish from "../../../assets/about_us/about_sidefish.png";
import useAboutStyles from "./aboutStyles";
import ContactBox from "../Shared/ContactBox";
import SwimmingFish from "../../animations/SwimmingFish";
import Hero from "../../userflow/common/Hero/Hero";


// import {
//   ABOUT_FISH_INITIAL,
//   ABOUT_FISH_ANIMATE,
//   ABOUT_FISH_TRANSITION,
// } from "../Shared/animations";

const sidebarItems = [
  { label: "Who We Are", path: "/about" },
  { label: "Our History", path: "/about/our-history" },
  { label: "Our Directors & Advisors", path: "/about/our-team" },
  { label: "Sustainable Development", path: "/about/sustainable-development" },
  { label: "Careers", path: "/about/careers" },
  { label: "Milestones", path: "/about/milestones" },
  { label: "Testimonials", path: "/about/testimonials" },
];

const AboutLayout = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { classes, cx } = useAboutStyles();

  

  return (
    <Grid container className={classes.aboutLayoutRoot} direction="column">
         <SwimmingFish  Position="absolute" Count={30}  Height={isMobile?2000:3000} />
  
      <Grid size={{ xs: 12}}>
  
<Hero
  page="about"
  align="center"
  overlayColor="#00000050"
  fishCount={20}
  fishHeight={isMobile ? 2000 : 3000}
/>
</Grid>

     
      <Grid size={{ xs: 12 }}>
    
        <Grid container className={classes.aboutMainRow} wrap="nowrap">
       
          {!isMobile && (
            <Grid size={{ xs: 3 }} className={classes.aboutSidebarWrapper} >
              <Box className={classes.aboutSidebar}>
                <Box className={classes.aboutSidebarNavTitle}>About Us</Box>
                {sidebarItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={() =>
                      cx(classes.aboutSidebarNavItem, {
                        active: location.pathname === item.path,
                      })
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </Box>
              <ContactBox />
           
              
              {/* Removed side fish to allow main content to take full width */}
   
            </Grid>
            
          )}
          {isMobile && <ContactBox />}
          <Grid size={{ xs: 12 }} className={classes.aboutMainContent}>
            <Outlet />
          </Grid>
         
        </Grid>
       
      </Grid>
     
    </Grid>
  );
};

export default AboutLayout;
