import { Box, Typography } from "@mui/material";
import sectionHeader from "../../../assets/home/section_header.svg";
import useHomeStyles from "./homeStyles";

const SectionTitle = ({
  title,
  whiteBg = true,
}: {
  title: string;
  whiteBg?: boolean;
}) => {
  const { classes } = useHomeStyles();

  return (
    <Box className={classes.sectionTitleRoot}>
      <Box
        className={`${classes.sectionTitleInner} ${
          whiteBg ? "" : classes.sectionTitleNoBg
        }`}
      >
        <Box
          component="img"
          src={sectionHeader}
          alt=""
          className={classes.sectionTitleImg}
        />
        <Typography className={classes.sectionTitleText}>{title}</Typography>
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
