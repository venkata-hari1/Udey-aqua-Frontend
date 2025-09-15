import { Box, Button, Grid, Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { usePlansStyles } from "../sharedStyles";
import FormField from "../FormField";
import { IMAGES } from "./constants";
import { validateForm } from "./utils";
import type { StepComponentProps, FormData, FormErrors } from "./types";

interface Step3Props extends StepComponentProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formErrors: FormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

const Step3 = ({
  onStepChange,
  currentStep,
  formData,
  setFormData,
  formErrors,
  setFormErrors,
}: Step3Props) => {
  const { classes } = usePlansStyles();

  const handleBackClick = () => {
    if (onStepChange) {
      onStepChange((currentStep || 1) - 1);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleContinue = () => {
    const digitsOnly = (formData.phone || "").replace(/[^0-9]/g, "");
    const normalizedPhone = /^\+91\d{10}$/.test(formData.phone)
      ? formData.phone
      : /^\d{10}$/.test(digitsOnly)
      ? `+91${digitsOnly}`
      : formData.phone;

    const normalizedForm = { ...formData, phone: normalizedPhone };

    const { isValid, errors } = validateForm(normalizedForm);
    setFormErrors(errors);

    if (!isValid) {
      console.warn("Step3 form validation failed:", { errors, data: normalizedForm });
      return;
    }

    // Print submitted details to console
    console.log("Step3 form submitted:", {
      name: normalizedForm.name.trim(),
      phone: normalizedForm.phone,
      email: normalizedForm.email.trim(),
      address: normalizedForm.address.trim(),
      district: normalizedForm.district.trim(),
      pincode: normalizedForm.pincode,
      state: normalizedForm.state.trim(),
    });

    if (onStepChange) {
      onStepChange(4);
    }
  };

  return (
    <Box className={classes.step2Root}>
      <Typography variant="h4" className={classes.plansHeaderTitle}>
        Book Your slot Now!
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
            <Grid size={{ xs: 12, md: 6 }}>
              <FormField
                label="Name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={(value) => handleInputChange("name", value)}
                error={formErrors.name}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormField
                label="Phone"
                placeholder="+91 9876543210"
                required
                value={`+91 ${formData.phone || ""}`}
                onChange={(value) => {
                  // Keep +91 prefix visible; store only 10 local digits
                  const digitsOnly = value.replace(/\D/g, "");
                  const withoutCountry = digitsOnly.startsWith("91") ? digitsOnly.slice(2) : digitsOnly;
                  const tenDigits = withoutCountry.slice(0, 10);
                  handleInputChange("phone", tenDigits);
                }}
                error={formErrors.phone}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormField
                label="Email ID"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={(value) => handleInputChange("email", value)}
                error={formErrors.email}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormField
                label="Address"
                placeholder="Enter your address"
                multiline
                rows={3}
                value={formData.address}
                onChange={(value) => handleInputChange("address", value)}
                error={formErrors.address}
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              className={`${classes.step3FormField} ${classes.step3FieldTop}`}
            >
              <FormField
                label="District"
                placeholder="Select your district"
                required
                value={formData.district}
                onChange={(value) => handleInputChange("district", value)}
                error={formErrors.district}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormField
                label="Pincode"
                placeholder="Enter your pincode"
                required
                value={formData.pincode}
                onChange={(value) => handleInputChange("pincode", value)}
                error={formErrors.pincode}
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              className={`${classes.step3FormField} ${classes.step3FieldTop}`}
            >
              <FormField
                label="State"
                placeholder="Select your state"
                required
                value={formData.state}
                onChange={(value) => handleInputChange("state", value)}
                error={formErrors.state}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box className={classes.step3ButtonWrapper}>
                <Button
                  variant="contained"
                  className={classes.plansCardButton}
                  onClick={handleContinue}
                >
                  Continue
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

export default Step3;
