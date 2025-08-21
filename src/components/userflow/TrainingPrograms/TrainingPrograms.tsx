import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useTrainingProgramsStyles from "./trainingProgramsStyles";

// Import images for cultures from training_fish folder
import seaBassImg from "../../../assets/cultures/training_fish/seabass.png";
import pearlSpotImg from "../../../assets/cultures/training_fish/pearlspot.png";
import mudCrabImg from "../../../assets/cultures/training_fish/mudcrab.png";
import murrelImg from "../../../assets/cultures/training_fish/murrel.png";
import tilapiaImg from "../../../assets/cultures/training_fish/tilapia.png";
import seaWeedImg from "../../../assets/cultures/training_fish/seaweed.png";

// Import images for technologies
import rasImg from "../../../assets/technologies/rac.png";
import casImg from "../../../assets/technologies/cas.png";
import pondFarmingImg from "../../../assets/technologies/pondfarming.png";
import fishHatcheryImg from "../../../assets/technologies/fishhatchery.png";
import cageCultureImg from "../../../assets/technologies/cagecultures.png";

interface TrainingCardProps {
  title: string;
  image: string;
  onClick: () => void;
  className?: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  title,
  image,
  onClick,
  className,
}) => {
  const { classes } = useTrainingProgramsStyles();

  return (
    <Box
      className={`${classes.trainingCard} ${className || ""}`}
      onClick={onClick}
    >
      <img src={image} alt={title} className={classes.trainingCardImage} />
      <Box className={classes.trainingCardContent}>
        <Typography className={classes.trainingCardTitle}>{title}</Typography>
      </Box>
    </Box>
  );
};

const TrainingPrograms: React.FC = () => {
  const { classes } = useTrainingProgramsStyles();
  const navigate = useNavigate();

  const cultures = [
    {
      title: "Sea Bass",
      image: seaBassImg,
      path: "/cultures/sea-bass",
      className: classes.seaBassCard,
    },
    {
      title: "Pearl Spot",
      image: pearlSpotImg,
      path: "/cultures/pearl-spot",
      className: classes.pearlSpotCard,
    },
    {
      title: "Mud Crab",
      image: mudCrabImg,
      path: "/cultures/mud-crab",
      className: classes.mudCrabCard,
    },
    {
      title: "Murrel",
      image: murrelImg,
      path: "/cultures/murrel",
      className: classes.murrelCard,
    },
    {
      title: "Tilapia",
      image: tilapiaImg,
      path: "/cultures/tilapia",
      className: classes.tilapiaCard,
    },
    {
      title: "Sea Weed",
      image: seaWeedImg,
      path: "/cultures/sea-weed",
      className: classes.seaWeedCard,
    },
  ];

  const technologies = [
    {
      title: "RAS",
      image: rasImg,
      path: "/technologies/ras",
      className: classes.rasCard,
    },
    {
      title: "CAS",
      image: casImg,
      path: "/technologies/cas",
      className: classes.casCard,
    },
    {
      title: "Pond Farming",
      image: pondFarmingImg,
      path: "/technologies/pond-farming",
      className: classes.pondFarmingCard,
    },
    {
      title: "Cage Culture",
      image: cageCultureImg,
      path: "/technologies/cage-culture",
      className: classes.cageCultureCard,
    },
    {
      title: "Fish Hatchery",
      image: fishHatcheryImg,
      path: "/technologies/fish-hatchery",
      className: classes.fishHatcheryCard,
    },
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box className={`${classes.trainingContent} ${classes.px3}`}>
      <Box className={classes.trainingContent}>
        <Box className={classes.trainingSection}>
          <Box className={classes.flex}>
            <Typography
              className={`${classes.trainingSectionTitle} ${classes.extension}`}
            >
              Cultures
            </Typography>
          </Box>
          <Box className={classes.trainingGridCultures}>
            {cultures.map((culture) => (
              <TrainingCard
                key={culture.title}
                title={culture.title}
                image={culture.image}
                onClick={() => handleCardClick(culture.path)}
                className={culture.className}
              />
            ))}
          </Box>
        </Box>

        {/* Technologies Section */}
        <Box className={classes.trainingSection}>
          <Box className={classes.flex}>
            <Typography
              className={`${classes.trainingSectionTitle} ${classes.marginTopMore}`}
            >
              Technologies
            </Typography>
          </Box>
          <Box className={classes.trainingGridTechnologies}>
            {technologies.map((technology) => (
              <TrainingCard
                key={technology.title}
                title={technology.title}
                image={technology.image}
                onClick={() => handleCardClick(technology.path)}
                className={technology.className}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrainingPrograms;
