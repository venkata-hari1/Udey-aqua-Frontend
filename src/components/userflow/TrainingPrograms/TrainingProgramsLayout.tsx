import React from "react";
import { Grid } from "@mui/material";
import useTrainingProgramsStyles from "./trainingProgramsStyles";
import TrainingProgramsHero from "./TrainingProgramsHero";
import TrainingPrograms from "./TrainingPrograms";
import PlansSection from "../Shared/PlansSection";

const TrainingProgramsLayout: React.FC = () => {
  const { classes } = useTrainingProgramsStyles();

  const currentLabel = "Training Programs";

  return (
    <Grid container className={classes.trainingLayoutRoot} direction="column">
      <Grid size={{ xs: 12 }}>
        <TrainingProgramsHero currentLabel={currentLabel} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container className={classes.trainingMainRow} wrap="nowrap">
          <Grid size={{ xs: 12 }} className={classes.trainingContent}>
            <TrainingPrograms />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <PlansSection />
      </Grid>
    </Grid>
  );
};

export default TrainingProgramsLayout;
