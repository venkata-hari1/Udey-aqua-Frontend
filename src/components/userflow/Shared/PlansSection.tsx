import { Box, Button, Grid, Typography } from "@mui/material";
import { usePlansStyles } from "./sharedStyles";
import { COLORS } from "./styles";

const plans = [
  {
    title: "Visit",
    price: "Rs/2500 + 18% GST",
    points: [
      "Total site visit (3 Hrs).",
      "Our Employee Guidance.",
      "Explanation about existing technologies.",
    ],
  },
  {
    title: "1 Day",
    price: "Rs/5000 + 18% GST",
    points: [
      "Basic Introduction about Aquaculture Type (Fresh/ Brackish Water)",
      "Species Selection & Introduction",
    ],
  },
  {
    title: "3 Days",
    price: "Rs/10,000 + 18% GST",
    points: [
      "Basic Introduction about Aquaculture Type (Fresh/ Brackish Water)",
      "Species Selection & Introduction",
      "Technologies & Users ( RAS, CAS, Cage Culture, Pond Farming etc..)",
      "Culture Practices",
    ],
  },
  {
    title: "7 Days",
    price: "Rs/15,000 + 18% GST",
    points: [
      "Basic Introduction about Aquaculture Type (Fresh/ Brackish Water)",
      "Species Selection & Introduction",
      "Technologies & Users ( RAS, CAS, Cage Culture, Pond Farming etc..)",
      "Culture Practices",
      "Project Implementation Planning.",
      "Budget, Finance",
      "Investments",
      "Profits & Returns",
    ],
    badge: "Most Popular",
  },
];

const PlansSection = () => {
  const { classes } = usePlansStyles();

  return (
    <Box className={classes.plansRoot}>
      <Box className={classes.plansHeader}>
        <Box className={classes.plansHeaderBlue}></Box>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ fontSize: "1.2em", fontWeight: 600 }}>
            Choose Your Plan
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4} className={classes.plansContainer}>
        {plans.map((plan) => (
          <Grid key={plan.title} size={{ xs: 12, md: 6, lg: 3 }}>
            <Box className={classes.plansCard} position="relative">
              {plan.badge && (
                <Box className={classes.plansBadge}>{plan.badge}</Box>
              )}
              <Box
                className={classes.plansCardHeader}
                sx={{
                  background: COLORS.SECONDARY_BLUE,
                  color: "white",
                  borderRadius: "16px 16px 0 0",
                  padding: 2,
                  margin: "-16px -16px 16px -16px",
                  width: "calc(100% + 32px)",
                  minHeight: "80px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: "1.4em",
                    fontWeight: 600,
                    marginBottom: 1,
                  }}
                >
                  {plan.title}
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.9em",
                    opacity: 0.9,
                  }}
                >
                  {plan.price}
                </Typography>
              </Box>
              <Box component="ul" className={classes.plansList}>
                {plan.points.map((pt) => (
                  <Box
                    component="li"
                    key={pt}
                    className={classes.plansListItem}
                  >
                    {pt}
                  </Box>
                ))}
              </Box>
              <Button className={classes.plansCta}>Book Now</Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlansSection;
