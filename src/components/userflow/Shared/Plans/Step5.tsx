import { Box, Button, Grid, Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { usePlansStyles } from "../sharedStyles";
import { IMAGES, TECHNOLOGY_MAP, TRAINING_PRICE_MAP } from "./constants";
import { formatTrainingCourse } from "./utils";
import lineIcon from "../../../../assets/icons/line.svg";
import type {
  StepComponentProps,
  FormData,
  Step2Data,
  Step4Data,
} from "./types";

interface Step5Props extends StepComponentProps {
  formData: FormData;
  step2Data: Step2Data;
  step4Data: Step4Data;
}

const Step5 = ({
  onStepChange,
  currentStep,
  formData,
  step2Data,
  step4Data,
}: Step5Props) => {
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
            src={IMAGES.acc2}
            alt="Training summary"
            className={classes.step3Illustration}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={classes.step3FormCol}>
          <Box className={classes.step5Card}>
            <Box className={classes.step5SectionHeader}>
              <Box
                component="img"
                src={IMAGES.userIcon}
                alt="User icon"
                className={classes.step5SectionIcon}
              />
              <Typography className={classes.step5SectionTitleWithIcon}>
                Your Details
              </Typography>
            </Box>
            <Typography className={classes.step5DetailValue}>
              {formData.name || "-"}
            </Typography>
            <Typography className={classes.step5DetailValue}>
              {formData.phone ? `+91${formData.phone}` : "-"}
              <span className={classes.step5DetailValueSpace}> </span>
              {formData.email && `${formData.email}`}
            </Typography>
            <Typography className={classes.step5DetailValue}>
              {formData.address || "-"}
              {formData.district ? `, ${formData.district}` : ""}
              {formData.state ? `, ${formData.state}` : ""}
              {formData.pincode ? `, ${formData.pincode}` : ""}
            </Typography>
          </Box>
          <Box className={classes.step5Divider}>
            <Box
              component="img"
              src={lineIcon}
              alt="Divider line"
              className={classes.step5DividerIcon}
            />
          </Box>
          <Box className={classes.step5Card}>
            <Box className={classes.step5SectionHeader}>
              <Box
                component="img"
                src={IMAGES.cartIcon}
                alt="Cart icon"
                className={classes.step5SectionIcon}
              />
              <Typography className={classes.step5SectionTitleWithIcon}>
                Selected Training Program
              </Typography>
            </Box>
            <Box className={`${classes.step5Grid} ${classes.step5GridSpace}`}>
              <Typography className={classes.step5DetailLabel}>
                Culture
              </Typography>
              <Typography className={classes.step5DetailValue}>
                {step2Data.selectedCultureType || "-"}
              </Typography>
              <Typography className={classes.step5DetailLabel}>
                Technology
              </Typography>
              <Typography className={classes.step5DetailValue}>
                {step4Data.technologies
                  ? TECHNOLOGY_MAP[step4Data.technologies] ||
                    step4Data.technologies
                  : "-"}
              </Typography>
              <Typography className={classes.step5DetailLabel}>
                R&D Faculty
              </Typography>
              <Typography className={classes.step5DetailValue}>
                {step4Data.rdFaculty || "-"}
              </Typography>
              <Typography className={classes.step5DetailLabel}>
                Training Course
              </Typography>
              <Typography className={classes.step5DetailValue}>
                {formatTrainingCourse(step4Data.trainingCourse)}
              </Typography>
              <Typography className={classes.step5DetailLabel}>
                Price
              </Typography>
              <Typography className={classes.step5DetailValue}>
                {TRAINING_PRICE_MAP[step4Data.trainingCourse] || "-"} (No Taxes)
              </Typography>
            </Box>
          </Box>
          <Box className={classes.step3ButtonWrapper}>
            <Button
              variant="contained"
              className={classes.plansCardButton}
              onClick={() => {
                // Log all details from Step1 to current (Step5) before payment
                console.log("Plans flow submission (Steps 1-5):", {
                  step1: {
                    name: formData.name?.trim(),
                    phone: formData.phone ? `+91${formData.phone}` : "",
                    email: formData.email?.trim(),
                    address: formData.address?.trim(),
                    district: formData.district?.trim(),
                    pincode: formData.pincode,
                    state: formData.state?.trim(),
                  },
                  step2: {
                    culture: step2Data.selectedCultureType,
                  },
                  step4: {
                    rdFaculty: step4Data.rdFaculty,
                    availableSlotFrom: step4Data.availableSlotFrom,
                    availableSlotTo: step4Data.availableSlotTo,
                    trainingCourse: step4Data.trainingCourse,
                    technologies: step4Data.technologies,
                    termsAccepted: step4Data.termsAccepted,
                  },
                  step5SummaryShown: true,
                });
                onStepChange && onStepChange(6);
              }}
            >
              Continue to Payment
            </Button>
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

export default Step5;
