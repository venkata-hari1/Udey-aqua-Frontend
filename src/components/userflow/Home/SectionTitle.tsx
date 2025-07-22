import { Box, Typography } from "@mui/material";
import sectionHeader from "../../../assets/home/section_header.svg";
import useHomeStyles from "./homeStyles";

const SectionTitle = ({ title }: { title: string }) => { 
  const { classes } = useHomeStyles();

  return (
    <Box className={classes.sectionTitleRoot}>
      <Box className={classes.sectionTitleInner}>
        <Box
          component="img"
          src={sectionHeader}
          alt=""
          className={classes.sectionTitleImg}
        />
        <Typography className={classes.sectionTitleText}>
          {title}
        </Typography>
        <Box
          component="img"
          src={sectionHeader}
          alt=""
          className={classes.sectionTitleImg}
        />
      </Box>
    </Box>
  );
};

export default SectionTitle;