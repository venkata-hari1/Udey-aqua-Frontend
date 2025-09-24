import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { ChevronLeft } from "@mui/icons-material";
import { usePlansStyles } from "../sharedStyles";
import { AQUACULTURE_TYPES } from "./constants";
import type { StepComponentProps, Step2Data } from "./types";

interface Step2Props extends StepComponentProps {
  step2Data: Step2Data;
  setStep2Data: React.Dispatch<React.SetStateAction<Step2Data>>;
}

const Step2 = ({ onStepChange, currentStep, step2Data, setStep2Data }: Step2Props) => {
  const { classes } = usePlansStyles();

  // Prefill now handled via props from PlansSection (initialCulture)
  useEffect(() => {
    // No-op: retained to preserve effect signature if needed later
  }, [setStep2Data, step2Data.selectedCultureType]);

  const handleBackClick = () => {
    if (onStepChange) {
      onStepChange((currentStep || 1) - 1);
    }
  };

  const handleTypeClick = (cultureType: string) => {
    setStep2Data({ selectedCultureType: cultureType });
    if (onStepChange) {
      onStepChange(3);
    }
  };

  return (
    <Box className={classes.step2Root}>
      <Typography variant="h4" className={classes.plansHeaderTitle}>
        Choose Your Aquaculture Type
      </Typography>

      <Grid container className={classes.step2Container}>
        {AQUACULTURE_TYPES.map((type) => (
          <Grid
            key={type.id}
            size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}
            className={classes.gridFlexItem}
          >
            <Box
              className={`${classes.step2Card} ${classes.step2CardClickable} ${classes.fullWidthBox}`}
              position="relative"
              onClick={() => handleTypeClick(type.title)}
            >
              <Box className={classes.step2CardImageContainer}>
                <Box
                  component="img"
                  src={type.image}
                  alt={type.title}
                  className={classes.step2CardImage}
                />
              </Box>
              <Box className={classes.step2CardTitleBanner}>
                <Typography className={classes.step2CardTitleText}>
                  {type.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Back Button */}
      <Box className={classes.step2BackButtonContainer}>
        <Button onClick={handleBackClick} className={classes.step2BackButton}>
          <ChevronLeft /> Back
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
