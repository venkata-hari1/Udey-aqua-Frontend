import { Box, Button, Grid, Typography } from "@mui/material";
import { usePlansStyles } from "./sharedStyles";

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

import type1 from "../../../assets/training/type1.png";
import type2 from "../../../assets/training/type2.png";
import type3 from "../../../assets/training/type3.png";

const aquacultureTypes = [
  {
    id: 1,
    title: "FRESH WATER AQUACULTURE",
    image: type1,
    description: "Freshwater aquaculture systems for inland water bodies",
  },
  {
    id: 2,
    title: "BRACKISH WATER AQUACULTURE",
    image: type2,
    description: "Brackish water systems for coastal and estuarine areas",
  },
  {
    id: 3,
    title: "MARINE AQUACULTURE",
    image: type3,
    description: "Marine aquaculture for open ocean environments",
  },
];

interface PlansSectionProps {
  onStepChange?: (step: number) => void;
  currentStep?: number;
}

const PlansSection = ({ onStepChange, currentStep = 1 }: PlansSectionProps) => {
  const { classes } = usePlansStyles();

  const handleBookNow = () => {
    if (onStepChange) {
      onStepChange(2);
    }
  };

  const handleBackClick = () => {
    if (onStepChange) {
      onStepChange(currentStep - 1);
    }
  };

  if (currentStep === 1) {
    return (
      <Box className={classes.plansRoot}>
        <Typography variant="h4" className={classes.plansHeaderTitle}>
          Choose Your Plan
        </Typography>

        <Grid container spacing={4} className={classes.plansContainer}>
          {plans.map((plan) => (
            <Grid
              key={plan.title}
              size={{ xs: 12, md: 6, lg: 3 }}
              sx={{ display: "flex" }}
            >
              <Box
                className={classes.plansCard}
                position="relative"
                sx={{ width: "100%" }}
              >
                {plan.badge && (
                  <Box className={classes.plansBadgeNew}>{plan.badge}</Box>
                )}
                <Box className={classes.plansCardHeaderNew}>
                  <Typography className={classes.plansCardTitle}>
                    {plan.title}
                  </Typography>
                  <Typography className={classes.plansCardPrice}>
                    {plan.price}
                  </Typography>
                </Box>
                <Box component="ul" className={classes.plansCardList}>
                  {plan.points.map((pt) => (
                    <Box
                      component="li"
                      key={pt}
                      className={classes.plansCardListItem}
                    >
                      {pt}
                    </Box>
                  ))}
                </Box>
                <Button
                  className={classes.plansCardButton}
                  onClick={handleBookNow}
                >
                  Book Now
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (currentStep === 2) {
    return (
      <Box className={classes.step2Root}>
        <Typography variant="h4" className={classes.plansHeaderTitle}>
          Choose Your Aquaculture Type
        </Typography>

        <Grid container spacing={4} className={classes.step2Container}>
          {aquacultureTypes.map((type) => (
            <Grid
              key={type.id}
              size={{ xs: 12, md: 6, lg: 4 }}
              sx={{ display: "flex" }}
            >
              <Box
                className={classes.step2Card}
                position="relative"
                sx={{ width: "100%" }}
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
            ← Back
          </Button>
        </Box>
      </Box>
    );
  }

  return null;
};

export default PlansSection;
