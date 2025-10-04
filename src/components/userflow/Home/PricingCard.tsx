// src/components/userflow/Home/PricingCard.tsx
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useHomeStyles from "./homeStyles";

export interface PricingCardProps {
  image: string;
  title: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ image, title, features }) => {
  const { classes } = useHomeStyles();
  const navigate = useNavigate();

  // Mapping species titles to their respective culture routes
  const getSpeciesRoute = (speciesTitle: string): string => {
    const routeMap: { [key: string]: string } = {
      'Sea Bass': '/cultures',
      'Pearl Spot': '/cultures/pearl-spot',
      'Mud Crab': '/cultures/mud-crab',
      'Murrel': '/cultures/murrel',
      'Tilapia': '/cultures/tilapia',
      'Sea Weed': '/cultures/sea-weed',
    };
    return routeMap[speciesTitle] || '/cultures';
  };

  const handleLearnMoreClick = () => {
    const route = getSpeciesRoute(title);
    navigate(route);
  };

  return (
    <Box className={classes.pricingCardRoot}>
      <Box className={classes.pricingCardImgWrap}>
        <Box component="img" src={image} alt={title} className={classes.pricingCardImg} />
      </Box>
      <Typography className={classes.pricingCardTitle}>{title}</Typography>
      <Box component="ul" className={classes.pricingCardFeatures}>
        {features.map((f, idx) => (
          <li key={idx} className={classes.pricingCardFeatureItem}>{f}</li>
        ))}
      </Box>
      <Button 
        variant="outlined" 
        className={classes.pricingCardButton}
        onClick={handleLearnMoreClick}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default PricingCard;