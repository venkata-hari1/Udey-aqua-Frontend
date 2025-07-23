import { Grid, Typography, Button } from "@mui/material";
import mottoHead from "../../../assets/home/motto_head.svg";
import useHomeStyles from "./homeStyles";

interface MottoCardProps {
  img: string;
  fishText: string;
  title: string;
  button?: boolean;
  buttonText?: string;
}

const MottoCard = ({ img, fishText, title, button, buttonText }: MottoCardProps) => {
  const { classes } = useHomeStyles();

  return (
    <Grid container className={classes.mottoCardRoot} direction="column" alignItems="center" spacing={2} size={{ xs: 12 }}>
      <Grid className={classes.mottoCardHeadWrap} size={{ xs: 12 }}>
        <img src={mottoHead} alt="fish" className={classes.mottoCardHeadImg} />
        <Typography className={classes.mottoCardFishText}>{fishText}</Typography>
      </Grid>
      <Grid className={classes.mottoCardBox} size={{ xs: 12 }}>
        <img src={img} alt={title} className={classes.mottoCardImg} />
        {button && (
          <div className={classes.mottoCardButtonWrap}>
            <Button variant="contained" className={classes.mottoCardButton}>
              {buttonText}
            </Button>
          </div>
        )}
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Typography className={classes.mottoCardTitle}>{title}</Typography>
      </Grid>
    </Grid>
  );
};

export default MottoCard;