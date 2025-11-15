// src/components/userflow/Shared/Plans/Step4.tsx
import { Box, Button, Grid, Typography, Select, MenuItem } from "@mui/material";
import { ChevronLeft, KeyboardArrowDown } from "@mui/icons-material";
import { usePlansStyles } from "../sharedStyles";
import { IMAGES } from "./constants";
import { generateMonthOptions } from "./utils";
import { validateStep4 } from "./utils";
import type { StepComponentProps, Step4Data, Step4Errors } from "./types";

interface Step4Props extends StepComponentProps {
  step4Data: Step4Data;
  setStep4Data: React.Dispatch<React.SetStateAction<Step4Data>>;
  step4Errors: Step4Errors;
  setStep4Errors: React.Dispatch<React.SetStateAction<Step4Errors>>;
}

const Step4 = ({
  onStepChange,
  currentStep,
  step4Data,
  setStep4Data,
  step4Errors,
  setStep4Errors,
}: Step4Props) => {
  const { classes } = usePlansStyles();
  const monthOptions = generateMonthOptions();

  const handleBackClick = () => {
    if (onStepChange) {
      onStepChange((currentStep || 1) - 1);
    }
  };

  const handleStep4InputChange = (field: keyof Step4Data, value: string) => {
    setStep4Data((prev) => ({ ...prev, [field]: value }));
    if (step4Errors[field]) {
      setStep4Errors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCheckout = () => {
    const { isValid, errors } = validateStep4(step4Data);
    setStep4Errors(errors);

    if (isValid && onStepChange) {
      onStepChange(5);
    }
  };

  return (
    <Box className={classes.step2Root}>
      <Typography variant="h4" className={classes.plansHeaderTitle}>
        Plan Your Aquaculture Program
      </Typography>

      <Grid container className={classes.step2Container}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={IMAGES.acc1}
            alt="Aquaculture booking"
            className={classes.step3Illustration}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={classes.step3FormCol}>
          <Grid container spacing={2} className={classes.step3FieldsGrid}>
            {/* Row 1: R&D Faculty and Training Course */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={classes.step4FormField}>
                <Typography className={classes.step3Label}>
                  <Typography component="span" className={classes.step3Asterisk}>*</Typography>R&D Faculty
                </Typography>
                <Select
                  value={step4Data.rdFaculty}
                  onChange={(e) =>
                    handleStep4InputChange("rdFaculty", e.target.value)
                  }
                  className={classes.step3Field}
                  error={!!step4Errors.rdFaculty}
                  IconComponent={KeyboardArrowDown}
                  MenuProps={{
                    PaperProps: {
                      className: classes.step4MenuPaper,
                    },
                  }}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Place
                  </MenuItem>
                  <MenuItem value="Place1">Place 1</MenuItem>
                  <MenuItem value="Place2">Place 2</MenuItem>
                  <MenuItem value="Place3">Place 3</MenuItem>
                </Select>
                {step4Errors.rdFaculty && (
                  <Typography className={classes.step3Error}>
                    {step4Errors.rdFaculty}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={classes.step4FormField}>
                <Typography className={classes.step3Label}>
                  <Typography component="span" className={classes.step3Asterisk}>*</Typography>Training
                  Course
                </Typography>
                <Select
                  value={step4Data.trainingCourse}
                  onChange={(e) =>
                    handleStep4InputChange("trainingCourse", e.target.value)
                  }
                  className={classes.step3Field}
                  error={!!step4Errors.trainingCourse}
                  IconComponent={KeyboardArrowDown}
                  MenuProps={{
                    PaperProps: {
                      className: classes.step4MenuPaper,
                    },
                  }}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Days
                  </MenuItem>
                  <MenuItem value="1day">1 Day</MenuItem>
                  <MenuItem value="3days">3 Days</MenuItem>
                  <MenuItem value="7days">7 Days</MenuItem>
                </Select>
                {step4Errors.trainingCourse && (
                  <Typography className={classes.step3Error}>
                    {step4Errors.trainingCourse}
                  </Typography>
                )}
              </Box>
            </Grid>

            {/* Row 2: Available Slot and Technologies */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={classes.step4FormField}>
                <Typography className={classes.step3Label}>
                  <Typography component="span" className={classes.step3Asterisk}>*</Typography>Available Slot
                </Typography>
                <Box className={classes.step4AvailableGroup}>
                  <Box className={classes.step4DateField}>
                    <Box
                      component="img"
                      src={IMAGES.calendarIcon}
                      alt="Calendar"
                      className={classes.step4CalendarIcon}
                    />
                    <Select
                      value={step4Data.availableSlotFrom}
                      onChange={(e) =>
                        handleStep4InputChange(
                          "availableSlotFrom",
                          e.target.value
                        )
                      }
                      className={classes.step4Select}
                      IconComponent={KeyboardArrowDown}
                      MenuProps={{
                        PaperProps: {
                          className: classes.step4MenuPaper,
                        },
                      }}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>
                        From Date
                      </MenuItem>
                      {monthOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box className={classes.step4DateField}>
                    <Box
                      component="img"
                      src={IMAGES.calendarIcon}
                      alt="Calendar"
                      className={classes.step4CalendarIcon}
                    />
                    <Select
                      value={step4Data.availableSlotTo}
                      onChange={(e) =>
                        handleStep4InputChange(
                          "availableSlotTo",
                          e.target.value
                        )
                      }
                      className={classes.step4Select}
                      IconComponent={KeyboardArrowDown}
                      MenuProps={{
                        PaperProps: {
                          className: classes.step4MenuPaper,
                        },
                      }}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>
                        To Date
                      </MenuItem>
                      {monthOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </Box>
                {(step4Errors.availableSlotFrom ||
                  step4Errors.availableSlotTo) && (
                  <Typography className={classes.step3Error}>
                    {step4Errors.availableSlotFrom ||
                      step4Errors.availableSlotTo}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={classes.step4FormField}>
                <Typography className={classes.step3Label}>
                  <Typography component="span" className={classes.step3Asterisk}>*</Typography>Technologies
                </Typography>
                <Select
                  value={step4Data.technologies}
                  onChange={(e) =>
                    handleStep4InputChange("technologies", e.target.value)
                  }
                  className={classes.step3Field}
                  error={!!step4Errors.technologies}
                  IconComponent={KeyboardArrowDown}
                  MenuProps={{
                    PaperProps: {
                      className: classes.step4MenuPaper,
                    },
                  }}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Technologies
                  </MenuItem>
                  <MenuItem value="ras">RAS</MenuItem>
                  <MenuItem value="cas">CAS</MenuItem>
                  <MenuItem value="cage">Cage Culture</MenuItem>
                  <MenuItem value="pond">Pond Farming</MenuItem>
                  <MenuItem value="hatchery">Fish Hatchery</MenuItem>
                </Select>
                {step4Errors.technologies && (
                  <Typography className={classes.step3Error}>
                    {step4Errors.technologies}
                  </Typography>
                )}
              </Box>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Box className={classes.step4BottomSection}>
                <Box className={classes.step4Checkbox}>
                  <input
                    type="checkbox"
                    id="terms"
                    checked={!!step4Data.termsAccepted}
                    onChange={(e) =>
                      handleStep4InputChange(
                        "termsAccepted",
                        e.target.checked as unknown as string
                      )
                    }
                  />
                  <label htmlFor="terms" style={{textDecoration:'underline',textDecorationThickness:'1px'}}>Terms & Conditions Apply</label>
                </Box>
                {step4Errors.termsAccepted && (
                  <Typography className={classes.step3Error}>
                    {step4Errors.termsAccepted}
                  </Typography>
                )}
              </Box>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Box className={classes.step3ButtonWrapper}>
                <Button
                  variant="contained"
                  className={classes.plansCardButton}
                  onClick={handleCheckout}
                >
                  Check Out
                </Button>
              </Box>
            </Grid>
          </Grid>
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

export default Step4;
