import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@mui/material/styles';
import heroImg from '../../../assets/home/hero_img.png';
import useHomeStyles from './homeStyles';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useHomeStyles();

  return (
    <Box className={classes.heroRoot}>
      <Box className={classes.heroLeftArrowBox}>
        <IconButton className={classes.heroArrowBtn}>
          <ArrowBackIosNewIcon className={classes.heroArrowBackIcon} />
        </IconButton>
      </Box>
      <Box className={classes.heroMain}>
        <Box className={classes.heroImgBox}>
          <Box
            component="img"
            src={heroImg}
            alt="Hero"
            className={classes.heroImg}
          />
        </Box>
        <Box className={classes.heroTextBoxWrap}>
          <Box className={classes.heroTextBox}>
            {isMobile ? (
              <>
                <Typography variant="h6" className={classes.heroTitle} fontWeight={700}>
                  <span className={classes.heroTitleBlue}>Uday Aqua</span>
                  <RemoveIcon className={classes.heroRemoveIcon} />
                  Your Platform to Sustainable Aquaculture
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="h2" fontWeight={700} my={2} className={classes.heroTitleBlue}>
                  Uday Aqua <RemoveIcon className={classes.heroRemoveIcon} />
                </Typography>
                <Typography variant="h2" className={classes.heroSubtitle} fontWeight={700}>
                  Your Platform to Sustainable Aquaculture
                </Typography>
              </>) }
          </Box>
        </Box>
      </Box>
      <Box className={classes.heroRightArrowBox}>
        <IconButton className={classes.heroArrowBtnRight}>
          <ArrowForwardIosIcon className={classes.heroArrowForwardIcon} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;