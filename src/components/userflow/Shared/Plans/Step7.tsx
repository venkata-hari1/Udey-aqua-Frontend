import { Box, Grid, Typography } from "@mui/material";
import { usePlansStyles } from "../sharedStyles";
import { IMAGES } from "./constants";

const Step7 = () => {
  const { classes } = usePlansStyles();

  const handleDownloadInvoice = () => {
    // Handle invoice download
    console.log("Download invoice");
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
            <Box
              component="button"
              className={classes.step7DownloadButton}
              onClick={handleDownloadInvoice}
            >
              <Box
                component="img"
                src={IMAGES.pdfIcon}
                alt="PDF"
                className={classes.step7PdfIcon}
              />
              Download Invoice
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step7;
