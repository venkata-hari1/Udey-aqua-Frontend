import { Box, Typography, Button, Grid } from "@mui/material";
import useHomeStyles from "./homeStyles";

export interface PricingCardProps {
  image: string;
  title: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ image, title, features }) => {
  const { classes } = useHomeStyles();

  return (
    <Grid container className={classes.pricingCardRoot}>
      <Grid size={{ xs: 12 }} className={classes.pricingCardImgWrap}>
        <Box component="img" src={image} alt={title} className={classes.pricingCardImg} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Typography className={classes.pricingCardTitle}>{title}</Typography>
      </Grid>
      <Grid size={{ xs: 12 }} component="ul" className={classes.pricingCardFeatures}>
        {features.map((f, idx) => (
          <li key={idx} className={classes.pricingCardFeatureItem}>{f}</li>
        ))}
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Button variant="outlined" className={classes.pricingCardButton}>
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
};

export default PricingCard;