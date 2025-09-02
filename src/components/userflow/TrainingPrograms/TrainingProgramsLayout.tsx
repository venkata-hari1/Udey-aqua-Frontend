import React, { useState } from "react";
import { Grid } from "@mui/material";
import useTrainingProgramsStyles from "./trainingProgramsStyles";
import TrainingProgramsHero from "./TrainingProgramsHero";
import TrainingPrograms from "./TrainingPrograms";
import PlansSection from "../Shared/PlansSection";

const TrainingProgramsLayout: React.FC = () => {
  const { classes } = useTrainingProgramsStyles();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const currentLabel = "Training Programs";

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

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
        <PlansSection
          currentStep={currentStep}
          onStepChange={handleStepChange}
        />
      </Grid>
    </Grid>
  );
};

export default TrainingProgramsLayout;
