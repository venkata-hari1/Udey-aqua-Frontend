// src/components/userflow/Shared/Plans/Step8.tsx
import { Box, Button, Grid, Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { usePlansStyles } from "../sharedStyles";
import { IMAGES } from "./constants";
import type { StepComponentProps } from "./types";

const Step8 = ({ onStepChange }: StepComponentProps) => {
  const { classes } = usePlansStyles();

  const handleBackClick = () => {
    if (onStepChange) {
      onStepChange(6);
    }
  };

  const handleRetryPayment = () => {
    if (onStepChange) {
      onStepChange(6);
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
            src={IMAGES.acc5}
            alt="Payment failed"
            className={classes.step3Illustration}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={classes.step3FormCol}>
          <Box className={classes.step8FailedContainer}>
            <Box className={classes.step8FailedIcon}>
              <Box
                component="img"
                src={IMAGES.errorIcon}
                alt="Error"
                className={classes.step8ErrorIcon}
              />
            </Box>
            <Typography className={classes.step8FailedTitle}>
              Payment Failed!
            </Typography>
            <Typography className={classes.step8FailedMessage}>
              Please check your payment details and try again.
            </Typography>
            <Box
              component="button"
              className={classes.step8RetryButton}
              onClick={handleRetryPayment}
            >
              Retry Payment
            </Box>
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

export default Step8;
