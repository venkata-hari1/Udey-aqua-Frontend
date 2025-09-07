import React, { useState } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import culturesSideFish from "../../../assets/about_us/about_sidefish.png";
import useCulturesStyles from "./culturesStyles";
import ContactBox from "../Shared/ContactBox";
import CulturesHero from "./CulturesHero";
import {
  CULTURES_FISH_INITIAL,
  CULTURES_FISH_ANIMATE,
  CULTURES_FISH_TRANSITION,
  CULTURES_SIDE_INITIAL,
  CULTURES_SIDE_ANIMATE,
  CULTURES_SIDE_TRANSITION,
} from "../Shared/animations";
import CulturesSideImg from "../../../assets/cultures/side_img.png";
import PdfDownloadSection from "./PdfDownloadSection";
import PlansSection from "../Shared/PlansSection";
import seaBassImg from "../../../assets/cultures/seebass.png";
import pearlSpotImg from "../../../assets/cultures/pearlspot.png";
import mudCrabImg from "../../../assets/cultures/mudcrab.png";
import murrelImg from "../../../assets/cultures/murrel.png";
import tilapiaImg from "../../../assets/cultures/tilapia.png";
import seaWeedImg from "../../../assets/cultures/seaweed.png";

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

  const currentLabel =
    sidebarItems.find((item) =>
      item.path === "/cultures"
        ? location.pathname === "/cultures"
        : location.pathname.startsWith(item.path)
    )?.label || "Sea Bass";

  const getSidebarFishImage = () => {
    const path = location.pathname;
    if (path === "/cultures") return seaBassImg;
    if (path === "/cultures/pearl-spot") return pearlSpotImg;
    if (path === "/cultures/mud-crab") return mudCrabImg;
    if (path === "/cultures/murrel") return murrelImg;
    if (path === "/cultures/tilapia") return tilapiaImg;
    if (path === "/cultures/sea-weed") return seaWeedImg;
    return culturesSideFish;
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <Grid container className={classes.culturesLayoutRoot} direction="column">
      <Grid size={{ xs: 12 }}>
        <CulturesHero currentLabel={currentLabel} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container className={classes.culturesMainRow} wrap="nowrap">
          {!isMobile && (
            <Grid size={{ xs: 3 }} className={classes.culturesSidebarWrapper}>
              <Box className={classes.culturesSidebar}>
                <Box className={classes.culturesSidebarNavTitle}>Cultures</Box>
                {sidebarItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    style={{ textDecoration: "none" }}
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
              <Box className={classes.culturesSidebarFish}>
                <motion.img
                  src={getSidebarFishImage()}
                  alt="Fish"
                  initial={CULTURES_FISH_INITIAL}
                  animate={CULTURES_FISH_ANIMATE}
                  transition={CULTURES_FISH_TRANSITION}
                />
              </Box>
            </Grid>
          )}
          {isMobile && <ContactBox />}
          <Grid
            size={{ xs: 12, md: 10 }}
            className={classes.culturesMainContent}
          >
            <motion.img
              src={CulturesSideImg}
              alt="Cultures Side Img"
              className={classes.culturesSideImg}
              initial={CULTURES_SIDE_INITIAL}
              animate={CULTURES_SIDE_ANIMATE}
              transition={CULTURES_SIDE_TRANSITION}
            />
            <Outlet />
          </Grid>
        </Grid>
      </Grid>

      <PdfDownloadSection currentLabel={currentLabel} />
      <PlansSection currentStep={currentStep} onStepChange={handleStepChange} />
    </Grid>
  );
};

export default CulturesLayout;
