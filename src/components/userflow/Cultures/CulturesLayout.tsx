// src/components/userflow/Cultures/CulturesLayout.tsx
import React, { useEffect, useState } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import useCulturesStyles from "./culturesStyles";
import ContactBox from "../Shared/ContactBox";
import PdfDownloadSection from "./PdfDownloadSection";
import PlansSection from "../Shared/PlansSection";
import SwimmingFish from "../../animations/SwimmingFish";
import Hero from "../../userflow/common/Hero/Hero";


const sidebarItems = [
  { label: "Sea Bass", path: "/cultures" },
  { label: "Pearl Spot", path: "/cultures/pearl-spot" },
  { label: "Mud Crab", path: "/cultures/mud-crab" },
  { label: "Murrel", path: "/cultures/murrel" },
  { label: "Tilapia", path: "/cultures/tilapia" },
  { label: "Sea Weed", path: "/cultures/sea-weed" },
];

const CulturesLayout: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useCulturesStyles();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [fromPdf, setFromPdf] = useState<boolean>(false);

  const currentLabel =
    sidebarItems.find((item) =>
      item.path === "/cultures"
        ? location.pathname === "/cultures"
        : location.pathname.startsWith(item.path)
    )?.label || "Sea Bass";


  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };


  useEffect(() => {
    setCurrentStep(1);
    setFromPdf(false);
  }, [location.pathname]);

  const scrollToPlans = () => {
    try {
      const el = document.getElementById("plans-section");
      if (el) {
        const currentScrollY = window.scrollY;
        const elementRect = el.getBoundingClientRect();
        const headerOffset = 180; 
                const targetScrollY = currentScrollY + elementRect.top - headerOffset;
        
        window.scrollTo({
          top: Math.max(0, targetScrollY),
          behavior: "smooth"
        });
      }
    } catch {}
  };

  return (
    <Grid container className={classes.culturesLayoutRoot} direction="column">
      <SwimmingFish  Position="absolute" Count={30} Height={3000}/>
      <Grid  size={{ xs: 12 }}>
        <Hero
          page="cultures" 
          overlayColor="rgba(10,79,164,0.41)" 
          fishCount={4}
          fishHeight={500}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grid container className={classes.culturesMainRow} wrap="nowrap">
          {!isMobile && (
            <Grid size={{ xs: 3 }} className={classes.culturesSidebarWrapper}>
              <Box className={classes.culturesSidebar} >
                <Box className={classes.culturesSidebarNavTitle}>Cultures</Box>
                {sidebarItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={() =>
                      cx(classes.culturesSidebarNavItem, {
                        active: location.pathname === item.path,
                      })
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </Box>
              <ContactBox />
              
        
            </Grid>
          )}
          {isMobile && <ContactBox />}
          <Grid
            size={{ xs: 12, md: 10 }}
            className={classes.culturesMainContent}
          >
            
            <Outlet />
          </Grid>
        </Grid>
      </Grid>

      <PdfDownloadSection
        currentLabel={currentLabel}
        price={99}
        culture={"Freshwater"}
        onContinuePayment={() => {
          setCurrentStep(3);
          setFromPdf(true);
          setTimeout(scrollToPlans, 0);
        }}
      />
      <Box id="plans-section">
        <PlansSection
          key={location.pathname}
          currentStep={currentStep}
          onStepChange={handleStepChange}
          initialCulture={"Freshwater"}
          initialPrice={99}
          skipStep4FromPdf={fromPdf}
        />
      </Box>
    </Grid>
  );
};

export default CulturesLayout;
