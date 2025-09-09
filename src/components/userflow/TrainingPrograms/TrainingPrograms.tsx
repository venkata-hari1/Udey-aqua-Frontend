import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import useTrainingProgramsStyles from "./trainingProgramsStyles";
import { useScrollWithOffset } from "../NewsEvents/hooks";
import PlansSection from "../Shared/PlansSection";

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

type ViewMode = "both" | "cultures" | "technologies";

const TrainingPrograms: React.FC = () => {
  const { classes } = useTrainingProgramsStyles();
  const navigate = useNavigate();
  const { ref: topRef, scrollTo: scrollToTop } = useScrollWithOffset(200);
  const [viewMode, setViewMode] = useState<ViewMode>("both");
  const [currentStep, setCurrentStep] = useState<number>(1);

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

  const handleViewAllCultures = (): void => {
    setViewMode("cultures");
    scrollToTop();
  };

  const handleViewAllTechnologies = (): void => {
    setViewMode("technologies");
    scrollToTop();
  };

  return (
    <Box className={`${classes.trainingContent} ${classes.px3}`}>
      <Box ref={topRef} />
      <Box className={classes.trainingContent}>
        {(viewMode === "both" || viewMode === "cultures") && (
          <Box className={classes.trainingSection}>
            <Box className={classes.flex}>
              <Typography
                className={`${classes.trainingSectionTitle} ${classes.extension}`}
              >
                Cultures
              </Typography>
            </Box>
            {viewMode === "both" ? (
              <Typography
                onClick={handleViewAllCultures}
                className={classes.viewAllLink}
              >
                View all
              </Typography>
            ) : (
              <Typography
                onClick={() => setViewMode("both")}
                className={classes.backLink}
              >
                <ChevronLeftIcon
                  fontSize="small"
                  style={{ verticalAlign: "middle", marginRight: 4 }}
                />
                Back
              </Typography>
            )}
            <Box
              className={
                viewMode === "both"
                  ? classes.trainingGridCultures
                  : classes.trainingGridSimple
              }
            >
              {cultures.map((culture) => (
                <TrainingCard
                  key={culture.title}
                  title={culture.title}
                  image={culture.image}
                  onClick={() => handleCardClick(culture.path)}
                  className={
                    viewMode === "both" ? culture.className : undefined
                  }
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Technologies Section */}
        {(viewMode === "both" || viewMode === "technologies") && (
          <Box className={classes.trainingSection}>
            <Box className={classes.flex}>
              <Typography
                className={`${classes.trainingSectionTitle} ${classes.marginTopMore}`}
              >
                Technologies
              </Typography>
            </Box>
            {viewMode === "both" ? (
              <Typography
                onClick={handleViewAllTechnologies}
                className={classes.viewAllLink}
              >
                View all
              </Typography>
            ) : (
              <Typography
                onClick={() => setViewMode("both")}
                className={classes.backLink}
              >
                <ChevronLeftIcon
                  fontSize="small"
                  style={{ verticalAlign: "middle", marginRight: 4 }}
                />
                Back
              </Typography>
            )}
            <Box
              className={
                viewMode === "both"
                  ? classes.trainingGridTechnologies
                  : classes.trainingGridSimple
              }
            >
              {technologies.map((technology) => (
                <TrainingCard
                  key={technology.title}
                  title={technology.title}
                  image={technology.image}
                  onClick={() => handleCardClick(technology.path)}
                  className={
                    viewMode === "both" ? technology.className : undefined
                  }
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
      {viewMode === "both" && (
        <PlansSection
          currentStep={currentStep}
          onStepChange={(step: number) => setCurrentStep(step)}
        />
      )}
    </Box>
  );
};

export default TrainingPrograms;
