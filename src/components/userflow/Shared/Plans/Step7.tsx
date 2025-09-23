// src/components/userflow/Shared/Plans/Step7.tsx
import { Box, Grid, Typography } from "@mui/material";
import { usePlansStyles } from "../sharedStyles";
import { IMAGES } from "./constants";
import InvoiceGenerator from "../InvoiceGenerator";
import type { FormData, Step2Data, Step4Data } from "./types";

interface Step7Props {
  formData: FormData;
  step2Data: Step2Data;
  step4Data: Step4Data;
  price: number;
}

const Step7 = ({ formData, step2Data, step4Data, price }: Step7Props) => {
  const { classes } = usePlansStyles();

  // Sample invoice data - in a real app, this would come from props or state
  const invoiceData = {
    customerName: (formData.name || "").trim(),
    customerAddress: `${(formData.address || "").trim()}, ${(formData.district || "").trim()}, ${(formData.state || "").trim()}, ${formData.pincode || ""}`.replace(/,\s*,/g, ", ").replace(/,\s*$/, ""),
    customerPhone: formData.phone ? `+91 ${formData.phone}` : "",
    invoiceNumber: `UDAY-${Date.now()}`,
    invoiceDate: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    subject: `Training Program – ${step4Data.trainingCourse || step2Data.selectedCultureType || "Aquaculture"}`,
    itemDetail: `Training Program – ${step4Data.trainingCourse || step2Data.selectedCultureType || "Aquaculture"}\n(Culture: ${step2Data.selectedCultureType || "-"}, Duration: 3 Days)`,
    quantity: 1,
    rate: price,
    subtotal: price,
    gstRate: 18,
    gstAmount: Math.round(price * 0.18),
    total: price + Math.round(price * 0.18),
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
            src={IMAGES.acc4}
            alt="Payment successful"
            className={classes.step3Illustration}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={classes.step3FormCol}>
          <Box className={classes.step7SuccessContainer}>
            <Box className={classes.step7SuccessIcon}>
              <Box
                component="img"
                src={IMAGES.tickIcon}
                alt="Success"
                className={classes.step7TickIcon}
              />
            </Box>
            <Typography className={classes.step7SuccessTitle}>
              Payment Successful!
            </Typography>
            <Typography className={classes.step7SuccessMessage}>
              Thank you for booking your training slot with Uday Aqua
            </Typography>
            <InvoiceGenerator invoiceData={invoiceData} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step7;
