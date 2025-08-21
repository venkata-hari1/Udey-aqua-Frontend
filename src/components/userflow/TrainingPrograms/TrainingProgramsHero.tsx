import { Box } from "@mui/material";
import heroImage from "../../../assets/training/hero.png";
import useTrainingProgramsStyles from "./trainingProgramsStyles";

interface TrainingProgramsHeroProps {
  currentLabel?: string;
}

const TrainingProgramsHero = ({}: TrainingProgramsHeroProps) => {
  const { classes } = useTrainingProgramsStyles();

  return (
    <div className={classes.trainingHero}>
      <Box
        component="img"
        src={heroImage}
        alt="Training Programs Hero"
        className={classes.trainingHeroImg}
      />
      <Box className={classes.trainingHeroOverlay} />
      <Box className={classes.trainingHeroContent}></Box>
    </div>
  );
};

export default TrainingProgramsHero;
