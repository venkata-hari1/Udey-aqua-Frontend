// src/components/userflow/Home/MottoCard.tsx
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import mottoHead from "../../../assets/home/motto_head.svg";
import useHomeStyles from "./homeStyles";

interface MottoCardProps {
  img: string;
  fishText: string;
  title: string;
  button?: boolean;
  buttonText?: string;
  aboutCard?: string;
}
const MottoCard = ({ img, fishText, title, button, buttonText, aboutCard }: MottoCardProps) => {
  const { classes } = useHomeStyles();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (aboutCard) {
      navigate(`/about?card=${encodeURIComponent(aboutCard)}`);
    } else {
      navigate('/about');
    }
  };

  return (
    <Grid container className={classes.mottoCardRoot} direction="column" alignItems="center" spacing={2} size={{ xs: 12 }}>
      <Grid className={classes.mottoCardHeadWrap} size={{ xs: 12 }}>
        <img src={mottoHead} alt="fish" className={classes.mottoCardHeadImg} />
        <Typography className={classes.mottoCardFishText}>{fishText}</Typography>
      </Grid>
      <Grid className={classes.mottoCardBox} size={{ xs: 12 }}>
        <img src={img} alt={title} className={classes.mottoCardImg} />
        {button && (
          <div className={`${classes.mottoCardButtonWrap} mottoCardButtonWrap`}>
            <Button 
              variant="contained" 
              className={classes.mottoCardButton}
              onClick={handleButtonClick}
            >
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