import { Box, Typography, Button } from "@mui/material";
import useHomeStyles from "./homeStyles";

export interface PricingCardProps {
  image: string;
  title: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ image, title, features }) => {
  const { classes } = useHomeStyles();

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
      <Button variant="outlined" className={classes.pricingCardButton}>
        Learn More
      </Button>
    </Box>
  );
};

export default PricingCard; 