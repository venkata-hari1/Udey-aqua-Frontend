// src/components/userflow/TrainingPrograms/TrainingProgramsLayout.tsx
import React from "react";
import { Grid } from "@mui/material";
import useTrainingProgramsStyles from "./trainingProgramsStyles";
import Hero from "../../userflow/common/Hero/Hero";
import TrainingPrograms from "./TrainingPrograms";

const TrainingProgramsLayout: React.FC = () => {
  const { classes } = useTrainingProgramsStyles();

 

  return (
    <Grid container className={classes.trainingLayoutRoot} direction="column">
      <Grid size={{ xs: 12 }}>
      <Hero
      page="training"
      overlayColor="rgba(0,0,0,0.4)"
      fishCount={4}
      fishHeight={500}
    />
    </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container className={classes.trainingMainRow} wrap="nowrap">
          <Grid size={{ xs: 12 }} className={classes.trainingContent}>
            <TrainingPrograms />
          </Grid>
        </Grid>
      </Grid>

      {/* PlansSection moved into TrainingPrograms */}
    </Grid>
  );
};

export default TrainingProgramsLayout;
