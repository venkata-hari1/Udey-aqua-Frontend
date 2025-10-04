// src/components/userflow/Shared/Plans/Step6.tsx
import { Box, Button, Grid, Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { usePlansStyles } from "../sharedStyles";
import { IMAGES } from "./constants";
import type { StepComponentProps } from "./types";

const Step6 = ({ onStepChange, currentStep }: StepComponentProps) => {
  const { classes } = usePlansStyles();

  const handleBackClick = () => {
    if (onStepChange) {
      onStepChange((currentStep || 1) - 1);
    }
  };

  return (
    <Box className={classes.step2Root}>
      <Typography variant="h4" className={classes.plansHeaderTitle}>
        Confirm Your Training Summary
      </Typography>

      <Grid container className={classes.step2Container}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={IMAGES.acc3}
            alt="Payment confirmation"
            className={classes.step3Illustration}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={classes.step3FormCol}>
          <Box className={classes.step6PaymentCard}>
            <Box
              component="img"
              src={IMAGES.razorpayLogo}
              alt="Razorpay"
              className={classes.step6RazorpayLogo}
            />
          </Box>
        </Grid>
      </Grid>

      <Box className={classes.step2BackButtonContainer}>
        <Button onClick={handleBackClick} className={classes.step2BackButton}>
          <ChevronLeft /> Back
        </Button>
      </Box>
    </Box>
  );
};

export default Step6;
