import React, { useState } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import aboutSideFish from "../../../assets/about_us/about_sidefish.png";
import useTechnologiesStyles from "./technologiesStyles";
import ContactBox from "../Shared/ContactBox";
import TechnologiesHero from "./TechnologiesHero";
import {
  ABOUT_FISH_INITIAL,
  ABOUT_FISH_ANIMATE,
  ABOUT_FISH_TRANSITION,
  NEWS_FISH_CIRCLE_INITIAL,
  NEWS_FISH_CIRCLE_ANIMATE,
  NEWS_FISH_CIRCLE_TRANSITION,
} from "../Shared/animations";
import sideFish from "../../../assets/technologies/main.png";
import PdfDownloadSection from "../Cultures/PdfDownloadSection";
import PlansSection from "../Shared/PlansSection";

const sidebarItems = [
  { label: "Recirculating Aquaculture System (RAS)", path: "/technologies" },
  { label: "Circulating Aquaculture System (CAS)", path: "/technologies/cas" },
  { label: "Pond Farming", path: "/technologies/pond-farming" },
  { label: "Fish Hatchery", path: "/technologies/fish-hatchery" },
  { label: "Cage Culture", path: "/technologies/cage-culture" },
];

const TechnologiesLayout: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useTechnologiesStyles();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [fromPdf, setFromPdf] = useState<boolean>(false);

  const currentLabel =
    sidebarItems.find((item) =>
      item.path === "/technologies"
        ? location.pathname === "/technologies"
        : location.pathname.startsWith(item.path)
    )?.label || "";

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  const scrollToPlans = () => {
    try {
      const el = document.getElementById("plans-section");
      if (el) {
        const currentScrollY = window.scrollY;
        const elementRect = el.getBoundingClientRect();
        const headerOffset = 180;
        const targetScrollY = currentScrollY + elementRect.top - headerOffset;
        window.scrollTo({ top: Math.max(0, targetScrollY), behavior: "smooth" });
      }
    } catch {}
  };

  return (
    <Grid
      container
      className={classes.technologiesLayoutRoot}
      direction="column"
    >
      <Grid size={{ xs: 12 }}>
        <TechnologiesHero currentLabel={currentLabel} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container className={classes.technologiesMainRow} wrap="nowrap">
          {!isMobile && (
            <Grid
              size={{ xs: 3 }}
              className={classes.technologiesSidebarWrapper}
            >
              <Box className={classes.technologiesSidebar}>
                <Box className={classes.technologiesSidebarNavTitle}>
                  Technologies
                </Box>
                {sidebarItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={() =>
                      cx(
                        classes.technologiesSidebarLink,
                        classes.technologiesSidebarNavItem,
                        {
                          active: location.pathname === item.path,
                        }
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </Box>
              <ContactBox />
              <Box className={classes.technologiesSidebarFish}>
                <motion.img
                  src={aboutSideFish}
                  alt="Fish"
                  initial={ABOUT_FISH_INITIAL}
                  animate={ABOUT_FISH_ANIMATE}
                  transition={ABOUT_FISH_TRANSITION}
                />
              </Box>
            </Grid>
          )}
          {isMobile && <ContactBox />}
          <Grid
            size={{ xs: 12, md: 10 }}
            className={classes.technologiesMainContent}
          >
            {!isMobile && (
              <motion.img
                src={sideFish}
                alt="Fish"
                className={classes.sideFish}
                initial={NEWS_FISH_CIRCLE_INITIAL}
                animate={NEWS_FISH_CIRCLE_ANIMATE}
                transition={NEWS_FISH_CIRCLE_TRANSITION}
              />
            )}
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

export default TechnologiesLayout;
