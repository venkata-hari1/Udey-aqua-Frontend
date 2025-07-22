import { Box, Typography, Button } from "@mui/material";
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
    <Box className={classes.mottoCardRoot}>
      <Box className={classes.mottoCardHeadWrap}>
        <Box component="img" src={mottoHead} alt="fish" className={classes.mottoCardHeadImg} />
        <Typography className={classes.mottoCardFishText}>{fishText}</Typography>
      </Box>
      <Box className={classes.mottoCardBox}>
        <Box className={classes.mottoCardImgWrap}>
          <Box component="img" src={img} alt={title} className={classes.mottoCardImg} />
        </Box>
        {button && (
          <Box className={classes.mottoCardButtonWrap}>
            <Button variant="contained" className={classes.mottoCardButton}>
              {buttonText}
            </Button>
          </Box>
        )}
      </Box>
      <Typography className={classes.mottoCardTitle}>
        {title}
      </Typography>
    </Box>
  );
};

export default MottoCard; 