import { Box, Typography, Button, Avatar } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useHomeStyles from "./homeStyles";

export interface TeamCardProps {
  image: string;
  name: string;
  location: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, location, role }) => {
  const { classes } = useHomeStyles();
  return (
    <Box className={classes.teamCardRoot}>
      <Avatar src={image} className={classes.teamCardAvatar} />
      <Typography className={classes.teamCardRole}>{role}</Typography>
      <Box className={classes.teamCardInfoRow}>
        <Box className={classes.teamCardInfoCol}>
          <Typography className={classes.teamCardName}>{name}</Typography>
          <Typography className={classes.teamCardLocation}>
            {location}
          </Typography>
        </Box>
        <Button variant="contained" className={classes.teamCardButton}>
          <ArrowForwardIcon className={classes.teamCardArrow} />
        </Button>
      </Box>
    </Box>
  );
};

export default TeamCard;
