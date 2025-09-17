import { Box, Button, Grid, Typography } from "@mui/material";
import { usePlansStyles } from "../sharedStyles";
import { PLANS } from "./constants";
import type { StepComponentProps } from "./types";

const Step1 = ({ onStepChange }: StepComponentProps) => {
  const { classes } = usePlansStyles();

  const handleBookNow = () => {
    if (onStepChange) {
      onStepChange(2);
    }
  };

  return (
    <Box className={classes.plansRoot}>
      <Typography variant="h4" className={classes.plansHeaderTitle}>
        Choose Your Plan
      </Typography>

      <Grid container spacing={4} className={classes.plansContainer}>
        {PLANS.map((plan) => (
          <Grid
            key={plan.title}
            size={{ xs: 12, md: 6, lg: 3 }}
            className={classes.gridFlexItem}
          >
            <Box
              className={`${classes.plansCard} ${classes.fullWidthBox}`}
              position="relative"
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
};

export default Step1;
